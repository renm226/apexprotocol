import { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'
import LibraryClient from './LibraryClient'

export const metadata = {
  title: 'Library — Cortaxis',
  description: 'Curated technical books and PDFs across AI/ML, Networking, Security, Software Engineering, and more. One payment, lifetime access.',
}

export default async function LibraryPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  let hasAccess = false
  if (user) {
    const { data } = await supabase.rpc('user_has_library_access', { uid: user.id })
    hasAccess = !!data
  }

  const { data: books } = await supabase
    .from('books')
    .select('id, title, author, description, cover_url, category, size_mb, page_count')
    .order('created_at', { ascending: false })

  return (
    <Suspense>
      <LibraryClient
        user={user ? { id: user.id, email: user.email ?? undefined } : null}
        hasAccess={hasAccess}
        books={books || []}
        paypalClientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!}
        priceUSD={process.env.LIBRARY_PRICE_USD || '29.00'}
      />
    </Suspense>
  )
}
