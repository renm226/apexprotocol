import { createClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

function adminClient() {
  return createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(request: Request) {
  // 1. Require authentication
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Sign in to download' }, { status: 401 })
  }

  const { bookId } = await request.json()
  if (!bookId || typeof bookId !== 'string') {
    return NextResponse.json({ error: 'Invalid book ID' }, { status: 400 })
  }

  // 2. Verify paid access server-side — never trust client state
  const { data: hasAccess, error: accessError } = await supabase
    .rpc('user_has_library_access', { uid: user.id })

  if (accessError || !hasAccess) {
    return NextResponse.json({ error: 'Library access required' }, { status: 403 })
  }

  // 3. Fetch the book's file path using the admin client
  //    (books table is readable by authenticated users, but using admin for consistency)
  const admin = adminClient()
  const { data: book, error: bookError } = await admin
    .from('books')
    .select('file_path, title')
    .eq('id', bookId)
    .single()

  if (bookError || !book) {
    return NextResponse.json({ error: 'Book not found' }, { status: 404 })
  }

  // 4. Generate a short-lived signed URL (60 seconds) — file is never publicly accessible
  const { data: signed, error: signError } = await admin
    .storage
    .from('books')
    .createSignedUrl(book.file_path, 60)

  if (signError || !signed?.signedUrl) {
    return NextResponse.json({ error: 'Could not generate download link' }, { status: 500 })
  }

  // 5. Log the download for analytics (fire-and-forget)
  admin.from('download_logs').insert({ user_id: user.id, book_id: bookId }).then(() => {})

  return NextResponse.json({ url: signed.signedUrl })
}
