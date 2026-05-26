import Link from 'next/link'
import { APP } from '@/config/app'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Terms of Service — ${APP.name}`,
}

export default function TermsPage() {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo">{APP.name}</Link>
      </header>

      <div style={{ overflowY: 'auto', height: 'calc(100vh - 46px)' }}>
        <div className="legal-page">
          <h1>Terms of Service</h1>
          <p className="legal-meta">Last updated: June 2025 &nbsp;·&nbsp; <a href={`mailto:${APP.supportEmail}`}>Contact us</a></p>

          <p>
            These Terms of Service govern your use of {APP.name} and its associated services. By accessing or using the platform, you agree to be bound by these terms. If you do not agree, do not use the service.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 16 years of age to use {APP.name}. By using the service, you represent that you meet this requirement and that you have the legal capacity to enter into these terms.
          </p>

          <h2>2. Accounts and Authentication</h2>
          <p>
            Access to certain features requires a user account. You are responsible for maintaining the confidentiality of your account and for all activity that occurs under it. You must notify us immediately at <a href={`mailto:${APP.supportEmail}`}>{APP.supportEmail}</a> if you suspect unauthorized use of your account.
          </p>
          <p>
            We use third-party authentication providers (Google, email magic link via Supabase). We do not store passwords.
          </p>

          <h2>3. Library Access and Payments</h2>
          <p>
            Library access is granted upon a one-time payment of the listed price at the time of purchase. This grants you a personal, non-transferable, non-exclusive licence to access and download the materials in the library for your own personal, non-commercial use.
          </p>
          <ul>
            <li>Payments are processed securely through PayPal. We do not store your payment card details.</li>
            <li>Library access is lifetime — you will not be charged again for content available at the time of purchase.</li>
            <li>New content added in the future is included at no additional cost.</li>
            <li>Refunds are available within 7 days of purchase if you have not downloaded any content. Contact us at <a href={`mailto:${APP.supportEmail}`}>{APP.supportEmail}</a>.</li>
          </ul>

          <h2>4. Intellectual Property and Permitted Use</h2>
          <p>
            All materials in the library are provided for personal learning only. You may not redistribute, resell, publicly share, upload to other platforms, or use the content for commercial purposes. Doing so constitutes a breach of these terms and may result in account termination and legal action.
          </p>
          <p>
            The {APP.name} platform, including its guides, interface, and branding, is the intellectual property of {APP.name}. You may not copy, scrape, or reproduce it without written permission.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the platform for any unlawful purpose or in violation of any applicable laws</li>
            <li>Attempt to gain unauthorized access to any part of the service or its underlying infrastructure</li>
            <li>Circumvent, disable, or interfere with security-related features of the service</li>
            <li>Submit false, misleading, or abusive content through any forms on the platform</li>
            <li>Use automated tools to scrape, crawl, or excessively access the service</li>
          </ul>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The service is provided "as is" without warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components. The educational content is provided for informational purposes. We make no guarantees about employment outcomes, skill acquisition, or any other results from using the materials.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, {APP.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the service, even if we have been advised of the possibility of such damages. Our total liability to you shall not exceed the amount you paid us in the twelve months preceding the claim.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at our discretion if you breach these terms. Upon termination, your right to access library content ceases. We will not provide refunds for terminations due to violations of these terms.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. We will notify users of material changes by updating the "Last updated" date above and, where appropriate, by email. Continued use of the service after changes constitutes acceptance of the new terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with applicable law. Any disputes shall be resolved through good-faith negotiation before any legal proceedings are commenced.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these terms, contact us at <a href={`mailto:${APP.supportEmail}`}>{APP.supportEmail}</a>.
          </p>
        </div>
      </div>
    </>
  )
}
