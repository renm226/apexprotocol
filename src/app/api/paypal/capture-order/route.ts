import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { capturePayPalOrder } from '@/lib/paypal'
import { NextResponse } from 'next/server'

function adminClient() {
  return createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(request: Request) {
  // 1. Verify the user is authenticated
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: unknown
  try { body = await request.json() } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const { orderId } = body as Record<string, unknown>
  if (!orderId || typeof orderId !== 'string' || orderId.length > 64) {
    return NextResponse.json({ error: 'Invalid order ID' }, { status: 400 })
  }

  // 2. Capture the payment server-side — NEVER trust the client's claim that payment succeeded
  let capture
  try {
    capture = await capturePayPalOrder(orderId)
  } catch (err) {
    console.error('PayPal capture failed:', err)
    return NextResponse.json({ error: 'Payment capture failed' }, { status: 502 })
  }

  // 3. Verify the capture actually completed — check PayPal's response, not the client's
  const captureResult = capture?.purchase_units?.[0]?.payments?.captures?.[0]
  if (
    capture.status !== 'COMPLETED' ||
    captureResult?.status !== 'COMPLETED'
  ) {
    console.error('PayPal capture not completed:', capture.status, captureResult?.status)
    return NextResponse.json({ error: 'Payment not completed' }, { status: 402 })
  }

  const amountPaid = parseFloat(captureResult.amount.value)
  const currency = captureResult.amount.currency_code
  const expectedPrice = parseFloat(process.env.LIBRARY_PRICE_USD || '29.00')

  // Verify the captured amount matches the expected price — reject underpayments
  if (amountPaid < expectedPrice) {
    console.error(`PayPal amount mismatch: expected ${expectedPrice}, got ${amountPaid}`)
    return NextResponse.json({ error: 'Payment amount incorrect. Contact support.' }, { status: 402 })
  }

  // 4. Insert access record using service role.
  //    The UNIQUE constraint on paypal_order_id prevents replay attacks —
  //    if someone tries to capture the same order ID twice, the insert fails.
  const admin = adminClient()
  const { error: insertError } = await admin.from('library_access').insert({
    user_id: user.id,
    paypal_order_id: orderId,
    amount_paid: amountPaid,
    currency,
    status: 'active',
  })

  if (insertError) {
    // Unique constraint violation = already processed (replay attempt or double-click)
    if (insertError.code === '23505') {
      return NextResponse.json({ success: true, alreadyGranted: true })
    }
    console.error('DB insert failed after confirmed payment:', insertError)
    return NextResponse.json({ error: 'Failed to grant access. Contact support.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
