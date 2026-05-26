import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cortaxis — STEM Mastery Roadmap',
  description: 'In-depth STEM mastery roadmaps covering AI/ML, Networking, Offensive Security, Software Engineering, Blockchain, Cloud & DevOps, Mobile, DevSecOps, and Self Development. Real-world guides, mastery checklists, and curated resources — plus a professional library of technical PDFs.',
  openGraph: {
    title: 'Cortaxis — STEM Mastery Roadmap',
    description: 'From foundations to frontier. Real-world STEM guides built by practitioners.',
    url: 'https://cortaxis.dev',
    siteName: 'Cortaxis',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
