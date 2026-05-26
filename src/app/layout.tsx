import type { Metadata } from 'next'
import './globals.css'
import { APP } from '@/config/app'

export const metadata: Metadata = {
  title: `${APP.name} — ${APP.tagline}`,
  description: APP.description,
  openGraph: {
    title: `${APP.name} — ${APP.tagline}`,
    description: 'From foundations to frontier. Real-world STEM guides built by practitioners.',
    url: APP.url,
    siteName: APP.name,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
