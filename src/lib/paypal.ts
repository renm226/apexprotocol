const BASE = process.env.PAYPAL_MODE === 'live'
  ? 'https://api.paypal.com'
  : 'https://api.sandbox.paypal.com'

async function getAccessToken(): Promise<string> {
  const creds = Buffer.from(
    `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString('base64')

  const res = await fetch(`${BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${creds}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
    cache: 'no-store',
  })

  if (!res.ok) throw new Error(`PayPal token error: ${res.status}`)
  const data = await res.json()
  return data.access_token as string
}

export async function createPayPalOrder(amountUSD: string) {
  const token = await getAccessToken()

  const res = await fetch(`${BASE}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: { currency_code: 'USD', value: amountUSD },
        description: 'Cortaxis Library — Lifetime Access',
      }],
      application_context: {
        brand_name: 'Cortaxis',
        user_action: 'PAY_NOW',
      },
    }),
  })

  if (!res.ok) throw new Error(`PayPal create order error: ${res.status}`)
  return res.json() as Promise<{ id: string; status: string }>
}

export async function capturePayPalOrder(orderId: string) {
  const token = await getAccessToken()

  const res = await fetch(`${BASE}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) throw new Error(`PayPal capture error: ${res.status}`)
  return res.json() as Promise<{
    id: string
    status: string
    purchase_units: Array<{
      payments: {
        captures: Array<{
          id: string
          status: string
          amount: { value: string; currency_code: string }
        }>
      }
    }>
  }>
}
