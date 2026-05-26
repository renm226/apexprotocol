import { createClient } from '@/lib/supabase/server'
import RoadmapView from '@/components/RoadmapView'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return <RoadmapView user={user ? { email: user.email } : null} />
}
