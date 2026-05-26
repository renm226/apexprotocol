import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardClient from './DashboardClient'
import { APP } from '@/config/app'

export const metadata = { title: `Dashboard — ${APP.name}` }

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth?next=/dashboard')

  const [{ data: subscription }, { data: requests }] = await Promise.all([
    supabase.from('subscriptions').select('*').eq('user_id', user.id).maybeSingle(),
    supabase.from('book_requests').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
  ])

  return (
    <DashboardClient
      user={{ email: user.email }}
      subscription={subscription}
      requests={requests || []}
    />
  )
}
