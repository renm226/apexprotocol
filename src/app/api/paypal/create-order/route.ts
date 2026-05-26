import { createClient } from '@/lib/supabase/server'
import { createPayPalOrder } from '@/lib/paypal'
import { NextResponse } from 'next/server'

export async function POST() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Sign in first' }, { status: 401 })
  }

  // If already paid, don't create a new order
  const { data: hasAccess } = await supabase.rpc('user_has_library_access', { uid: user.id })
  if (hasAccess) {
    return NextResponse.json({ error: 'Already have library access' }, { status: 400 })
  }

  const price = process.env.LIBRARY_PRICE_USD || '29.00'

  try {
    const order = await createPayPalOrder(price)
    return NextResponse.json({ orderId: order.id })
  } catch (err) {
    console.error('PayPal create order failed:', err)
    return NextResponse.json({ error: 'Payment system error' }, { status: 500 })
  }
}
