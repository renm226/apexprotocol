'use client'

import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

interface Subscription {
  status: string
  current_period_end: string | null
  stripe_subscription_id: string | null
}

interface BookRequest {
  id: string
  title: string
  author: string | null
  status: string
  created_at: string
}

interface Props {
  user: { email?: string }
  subscription: Subscription | null
  requests: BookRequest[]
}

export default function DashboardClient({ user, subscription, requests }: Props) {
  const router = useRouter()
  const supabase = createClient()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
  }

  const isPro = subscription?.status === 'active'
  const periodEnd = subscription?.current_period_end
    ? new Date(subscription.current_period_end).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  const userInitial = user?.email?.[0]?.toUpperCase() ?? '?'

  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo">COR<span>Taxis</span></Link>
        <div className="nav-scroll" style={{ flex: 0 }} />
        <div className="header-actions">
          <Link href="/" className="btn-support">Roadmaps</Link>
          <Link href="/library" className="btn-pro">Library</Link>
          <span className="user-avatar" title={user.email}>{userInitial}</span>
        </div>
      </header>

      <div style={{ overflowY: 'auto', height: 'calc(100vh - 52px)' }}>
        <div className="dashboard-page">

          <div style={{ marginBottom: 32 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 6 }}>Account</div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>{user.email}</div>
          </div>

          <div className="dash-section">
            <div className="dash-section-label">Subscription</div>
            <div className="dash-plan-card">
              <div>
                <div className="dash-plan-name">{isPro ? 'Cortaxis Pro' : 'Free'}</div>
                {isPro && periodEnd && (
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--muted)', marginTop: 4 }}>
                    Renews {periodEnd}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className={`dash-plan-status${!isPro ? ' inactive' : ''}`}>
                  {isPro ? 'Active' : 'Free'}
                </span>
                {!isPro && (
                  <Link href="/library" className="btn-upgrade" style={{ marginTop: 0 }}>Upgrade</Link>
                )}
              </div>
            </div>
          </div>

          <div className="dash-section">
            <div className="dash-section-label">Book Requests</div>
            {requests.length === 0 ? (
              <div className="empty-state">
                No requests yet.{' '}
                <Link href="/library" style={{ color: 'var(--ai)' }}>Request a book</Link>
              </div>
            ) : (
              <div className="dash-requests-list">
                {requests.map(req => (
                  <div key={req.id} className="dash-request-item">
                    <div>
                      <div className="dash-request-title">{req.title}</div>
                      {req.author && (
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: 'var(--muted)', marginTop: 2 }}>
                          {req.author}
                        </div>
                      )}
                    </div>
                    <span className={`dash-request-status${req.status === 'approved' ? ' approved' : ''}`}>
                      {req.status.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="dash-section">
            <div className="dash-section-label">Account</div>
            <button
              className="btn-secondary"
              onClick={handleSignOut}
              style={{ padding: '8px 20px' }}
            >
              Sign out
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
