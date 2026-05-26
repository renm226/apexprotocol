import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

const TITLE_MAX  = 300
const AUTHOR_MAX = 200
const REASON_MAX = 2000

export async function POST(request: Request) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Sign in to request books' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { title, author, reason } = body as Record<string, unknown>

  if (typeof title !== 'string' || !title.trim()) {
    return NextResponse.json({ error: 'Book title is required' }, { status: 400 })
  }
  if (title.trim().length > TITLE_MAX) {
    return NextResponse.json({ error: `Title must be under ${TITLE_MAX} characters` }, { status: 400 })
  }
  if (author && typeof author === 'string' && author.trim().length > AUTHOR_MAX) {
    return NextResponse.json({ error: `Author must be under ${AUTHOR_MAX} characters` }, { status: 400 })
  }
  if (reason && typeof reason === 'string' && reason.trim().length > REASON_MAX) {
    return NextResponse.json({ error: `Reason must be under ${REASON_MAX} characters` }, { status: 400 })
  }

  const { error } = await supabase.from('book_requests').insert({
    user_id: user.id,
    title:  title.trim().slice(0, TITLE_MAX),
    author: typeof author === 'string' ? author.trim().slice(0, AUTHOR_MAX) || null : null,
    reason: typeof reason === 'string' ? reason.trim().slice(0, REASON_MAX) || null : null,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
