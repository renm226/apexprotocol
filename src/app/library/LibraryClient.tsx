'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { loadScript } from '@paypal/paypal-js'

interface Book {
  id: string
  title: string
  author: string | null
  description: string | null
  cover_url: string | null
  category: string | null
  size_mb: number | null
  page_count: number | null
}

interface Props {
  user: { id: string; email?: string } | null
  hasAccess: boolean
  books: Book[]
  paypalClientId: string
  priceUSD: string
}

const CATEGORIES = [
  'All', 'AI / ML', 'Networking', 'Hacking', 'Software',
  'Blockchain', 'Cloud & DevOps', 'Mobile', 'DevSecOps', 'Self Development'
]

function LibraryContent({ user, hasAccess, books, paypalClientId, priceUSD }: Props) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [downloading, setDownloading] = useState<string | null>(null)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle')
  const [paymentError, setPaymentError] = useState('')
  const [requestTitle, setRequestTitle] = useState('')
  const [requestAuthor, setRequestAuthor] = useState('')
  const [requestReason, setRequestReason] = useState('')
  const [requestSent, setRequestSent] = useState(false)
  const [requestError, setRequestError] = useState('')
  const [localAccess, setLocalAccess] = useState(hasAccess)
  const paypalRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()

  const filteredBooks = activeFilter === 'All'
    ? books
    : books.filter(b => b.category?.toLowerCase().includes(activeFilter.toLowerCase()))

  const userInitial = user?.email?.[0]?.toUpperCase() ?? null

  // Render PayPal button once SDK is ready
  useEffect(() => {
    if (localAccess || !user || !paypalRef.current) return

    let cancelled = false

    loadScript({ clientId: paypalClientId, currency: 'USD' }).then(paypal => {
      if (cancelled || !paypal || !paypalRef.current) return

      paypal.Buttons!({
        style: { layout: 'vertical', color: 'blue', shape: 'rect', label: 'pay' },

        createOrder: async () => {
          const res = await fetch('/api/paypal/create-order', { method: 'POST' })
          const data = await res.json()
          if (!data.orderId) throw new Error(data.error || 'Could not create order')
          return data.orderId
        },

        onApprove: async (data: { orderID: string }) => {
          setPaymentStatus('processing')
          const res = await fetch('/api/paypal/capture-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: data.orderID }),
          })
          const result = await res.json()

          if (result.success) {
            setPaymentStatus('done')
            setLocalAccess(true)
          } else {
            setPaymentStatus('error')
            setPaymentError(result.error || 'Payment failed. Contact support.')
          }
        },

        onError: () => {
          setPaymentStatus('error')
          setPaymentError('PayPal encountered an error. Try again or contact support.')
        },
      }).render(paypalRef.current!)
    })

    return () => { cancelled = true }
  }, [localAccess, user, paypalClientId])

  async function handleDownload(bookId: string) {
    if (!user) { window.location.href = '/auth?next=/library'; return }

    setDownloading(bookId)
    const res = await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookId }),
    })
    const data = await res.json()
    setDownloading(null)

    if (data.url) {
      const a = document.createElement('a')
      a.href = data.url
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      a.click()
    }
  }

  async function handleRequest(e: React.FormEvent) {
    e.preventDefault()
    if (!user) { window.location.href = '/auth?next=/library'; return }
    setRequestError('')

    const res = await fetch('/api/books/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: requestTitle, author: requestAuthor, reason: requestReason }),
    })
    const data = await res.json()

    if (data.success) {
      setRequestSent(true)
      setRequestTitle(''); setRequestAuthor(''); setRequestReason('')
    } else {
      setRequestError(data.error || 'Failed to submit')
    }
  }

  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo">COR<span>Taxis</span></Link>
        <div style={{ flex: 1 }} />
        <div className="header-actions">
          {localAccess && (
            <span style={{
              fontSize: 10, fontWeight: 600, letterSpacing: 0.5,
              padding: '3px 9px', borderRadius: 3,
              background: 'var(--accent-bg)', color: 'var(--accent)',
              border: '1px solid var(--accent-border)'
            }}>LIBRARY ACCESS</span>
          )}
          {userInitial
            ? <Link href="/dashboard" className="user-avatar" title="Dashboard">{userInitial}</Link>
            : <Link href="/auth?next=/library" className="btn-support">Sign in</Link>
          }
        </div>
      </header>

      <div style={{ overflowY: 'auto', height: 'calc(100vh - 46px)' }}>
        <div className="library-page">

          {/* Page header */}
          <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 24, marginBottom: 32 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
              Technical Library
            </p>
            <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.2, marginBottom: 10 }}>
              Books That Actually Matter
            </h1>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.72, maxWidth: 580 }}>
              Not a curated list of Amazon bestsellers. These are the books that senior engineers and security professionals actually read — referenced by name when they talk to each other. One payment, permanent access to everything here and everything added in the future.
            </p>
          </div>

          {/* Payment gate */}
          {!localAccess && (
            <div style={{
              background: 'var(--surf)', border: '1px solid var(--border2)',
              borderRadius: 5, padding: 28, maxWidth: 460, marginBottom: 44
            }}>
              {paymentStatus === 'done' ? (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#4ade80', marginBottom: 8 }}>
                    Access granted.
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>
                    Scroll down to browse and download.
                  </p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>
                    Get Library Access
                  </h2>
                  <div style={{ fontSize: 42, fontWeight: 700, color: 'var(--text)', lineHeight: 1, marginBottom: 2 }}>
                    ${priceUSD}
                  </div>
                  <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 18, marginTop: 4 }}>
                    One-time payment. Lifetime access. No subscription.
                  </p>

                  <ul style={{ listStyle: 'none', marginBottom: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {[
                      'Every book in the library, forever',
                      'All future books added at no extra cost',
                      'Direct PDF download, no DRM',
                      'Request books — added within 72 hours',
                    ].map((item, i) => (
                      <li key={i} style={{ fontSize: 12, color: 'var(--muted)', paddingLeft: 16, position: 'relative', lineHeight: 1.6 }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--dim)' }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {paymentStatus === 'error' && (
                    <div className="auth-error" style={{ marginBottom: 14 }}>{paymentError}</div>
                  )}

                  {paymentStatus === 'processing' ? (
                    <div style={{ textAlign: 'center', padding: '18px', color: 'var(--muted)', fontSize: 12 }}>
                      Verifying payment...
                    </div>
                  ) : !user ? (
                    <div>
                      <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>
                        Sign in first, then come back to complete the purchase.
                      </p>
                      <Link href="/auth?next=/library" className="btn-upgrade">
                        Sign in to continue
                      </Link>
                    </div>
                  ) : (
                    <div ref={paypalRef} />
                  )}
                </>
              )}
            </div>
          )}

          {/* Book grid */}
          {books.length > 0 && (
            <>
              <div style={{ marginBottom: 18 }}>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 10 }}>
                  Browse by discipline
                </p>
                <div className="library-filters">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      className={`filter-chip${activeFilter === cat ? ' active' : ''}`}
                      onClick={() => setActiveFilter(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="books-grid">
                {filteredBooks.map(book => (
                  <div key={book.id} className="book-card">
                    <div className="book-cover">
                      {book.cover_url
                        ? <img src={book.cover_url} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        : <div className="book-cover-placeholder">{book.title.slice(0, 24)}</div>
                      }
                    </div>
                    <div className="book-info">
                      <div className="book-title">{book.title}</div>
                      {book.author && <div className="book-author">{book.author}</div>}
                      <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 }}>
                        {book.category && <span className="book-category">{book.category}</span>}
                        {book.page_count && (
                          <span style={{ fontSize: 9, color: 'var(--dim)' }}>
                            {book.page_count}p
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="book-actions">
                      {localAccess ? (
                        <button
                          className="btn-download"
                          onClick={() => handleDownload(book.id)}
                          disabled={downloading === book.id}
                        >
                          {downloading === book.id ? 'Preparing...' : 'Download PDF'}
                        </button>
                      ) : (
                        <div style={{ fontSize: 10, color: 'var(--dim)', padding: '7px 0', textAlign: 'center' }}>
                          Pay once to unlock
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filteredBooks.length === 0 && (
                <p style={{ color: 'var(--muted)', fontSize: 13, padding: '40px 0', textAlign: 'center' }}>
                  Nothing in this category yet.
                </p>
              )}
            </>
          )}

          {books.length === 0 && (
            <p style={{ color: 'var(--muted)', fontSize: 13, padding: '40px 0' }}>
              Library is being stocked. Request a book below — first additions coming soon.
            </p>
          )}

          {/* Book request */}
          <div style={{ borderTop: '1px solid var(--border)', marginTop: 48, paddingTop: 32 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>
              Missing something?
            </p>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
              Request a Book
            </h2>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 480, marginBottom: 22 }}>
              If there&apos;s a specific book that belongs here, submit a request. If we can source it legitimately, it&apos;ll be in the library within 72 hours.
              {!user && <span> You need to sign in to submit a request.</span>}
            </p>

            {requestSent ? (
              <p style={{ fontSize: 13, color: '#4ade80', padding: '10px 14px', background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.18)', borderRadius: 4, maxWidth: 480 }}>
                Received. We&apos;ll review and add it within 72 hours.
              </p>
            ) : (
              <form style={{ maxWidth: 480 }} onSubmit={handleRequest}>
                {requestError && <div className="auth-error">{requestError}</div>}
                <label className="form-label">Book Title *</label>
                <input className="form-input" type="text" placeholder="e.g. The Art of Computer Programming" value={requestTitle} onChange={e => setRequestTitle(e.target.value)} required />
                <label className="form-label">Author</label>
                <input className="form-input" type="text" placeholder="e.g. Donald Knuth" value={requestAuthor} onChange={e => setRequestAuthor(e.target.value)} />
                <label className="form-label">Why does this belong here?</label>
                <textarea className="form-textarea" placeholder="What's in it that you can't find elsewhere?" value={requestReason} onChange={e => setRequestReason(e.target.value)} />
                <button type="submit" className="btn-primary">Submit Request</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default function LibraryClient(props: Props) {
  return (
    <Suspense>
      <LibraryContent {...props} />
    </Suspense>
  )
}
