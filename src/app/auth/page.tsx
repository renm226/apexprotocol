'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AuthPage() {
  return (
    <Suspense>
      <AuthContent />
    </Suspense>
  )
}

function AuthContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get('next') || '/'
  const errorParam = searchParams.get('error')

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(errorParam || '')

  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) router.replace(next)
    })
  }, [])

  async function handleGoogleLogin() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback?next=${next}` },
    })
    if (error) { setError(error.message); setLoading(false) }
  }

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=${next}` },
    })
    if (error) { setError(error.message); setLoading(false) }
    else { setSent(true); setLoading(false) }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">COR<span>Taxis</span></div>

        {sent ? (
          <>
            <div className="auth-title">Check your email</div>
            <p className="auth-sub">
              We sent a sign-in link to <strong>{email}</strong>. Click it to continue — no password needed.
            </p>
          </>
        ) : (
          <>
            <div className="auth-title">Sign in to Cortaxis</div>
            <p className="auth-sub">
              Access your Pro library, track your progress, and request books.
            </p>

            {error && <div className="auth-error">{error}</div>}

            <button className="btn-google" onClick={handleGoogleLogin} disabled={loading}>
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="auth-divider"><span>or</span></div>

            <form onSubmit={handleMagicLink}>
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Sending...' : 'Send sign-in link'}
              </button>
            </form>
          </>
        )}

        <div className="auth-footer">
          By signing in you agree to our{' '}
          <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>.
        </div>
      </div>
    </div>
  )
}

