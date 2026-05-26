import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Sign in to request books' }, { status: 401 })
  }

  const { title, author, reason } = await request.json()
  if (!title?.trim()) {
    return NextResponse.json({ error: 'Book title is required' }, { status: 400 })
  }

  const { error } = await supabase.from('book_requests').insert({
    user_id: user.id,
    title: title.trim(),
    author: author?.trim() || null,
    reason: reason?.trim() || null,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
