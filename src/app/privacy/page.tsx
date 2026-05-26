import Link from 'next/link'
import { APP } from '@/config/app'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP.name}`,
}

export default function PrivacyPage() {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="logo">{APP.name}</Link>
      </header>

      <div style={{ overflowY: 'auto', height: 'calc(100vh - 46px)' }}>
        <div className="legal-page">
          <h1>Privacy Policy</h1>
          <p className="legal-meta">Last updated: June 2025 &nbsp;·&nbsp; <a href={`mailto:${APP.supportEmail}`}>Contact us</a></p>

          <p>
            This Privacy Policy explains how {APP.name} collects, uses, and protects information about you when you use our platform. We keep it straightforward.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect the following categories of information:</p>
          <ul>
            <li><strong>Account information:</strong> Your email address, collected when you sign in via Google or email magic link.</li>
            <li><strong>Purchase records:</strong> A record that your account has been granted library access, including the PayPal order ID and the date of purchase. We do not store payment card details — payments are processed by PayPal.</li>
            <li><strong>Usage data:</strong> Pages visited, content downloaded, and general interaction with the platform. This is used to improve the service and detect abuse.</li>
            <li><strong>Book requests:</strong> If you submit a book request through the platform, we store the request content (title, author, reason) and your user ID.</li>
            <li><strong>Technical data:</strong> IP addresses, browser type, and device information collected automatically by our infrastructure. This data is used for security, diagnostics, and fraud prevention.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the platform and your account</li>
            <li>Verify library access and serve content you have purchased</li>
            <li>Respond to support requests and book requests</li>
            <li>Send transactional emails (sign-in links, purchase confirmations)</li>
            <li>Detect, investigate, and prevent fraud, abuse, and security incidents</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not use your data for advertising, and we do not sell your data to third parties.</p>

          <h2>3. Third-Party Services</h2>
          <p>We use the following third-party services to operate the platform:</p>
          <ul>
            <li><strong>Supabase:</strong> Authentication and database. Your email address and account data are stored in Supabase infrastructure. See <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a>.</li>
            <li><strong>Google OAuth:</strong> If you choose to sign in with Google, Google processes your authentication. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</li>
            <li><strong>PayPal:</strong> Payment processing. When you make a purchase, you interact directly with PayPal's checkout. We receive a transaction ID and confirmation of payment — not your card details. See <a href="https://www.paypal.com/us/legalhub/privacy-full" target="_blank" rel="noopener noreferrer">PayPal Privacy Policy</a>.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your account data for as long as your account is active. Purchase records are retained indefinitely to ensure continued access to content you have paid for. If you request account deletion, we will delete your personal data within 30 days, subject to legal retention requirements (e.g., financial records).
          </p>
          <p>
            Anonymised usage data may be retained longer for analytical purposes.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data. These include encrypted connections (HTTPS), access controls, and secure credential management. No system is perfectly secure, and we cannot guarantee absolute security — but we take it seriously.
          </p>
          <p>
            If you discover a security vulnerability, please report it responsibly to <a href={`mailto:${APP.supportEmail}`}>{APP.supportEmail}</a>.
          </p>

          <h2>6. Cookies and Local Storage</h2>
          <p>
            We use session cookies and local storage to maintain your authenticated state. We do not use tracking cookies or third-party advertising cookies. No cookie consent banner is displayed because we only use cookies that are strictly necessary for the service to function.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request that we correct inaccurate data.</li>
            <li><strong>Deletion:</strong> Request that we delete your account and associated personal data.</li>
            <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
            <li><strong>Objection:</strong> Object to certain types of processing.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href={`mailto:${APP.supportEmail}`}>{APP.supportEmail}</a>. We will respond within 30 days.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            {APP.name} is not directed at children under the age of 16. We do not knowingly collect personal data from anyone under 16. If you believe we have collected data from a minor, contact us and we will delete it promptly.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be notified by updating the "Last updated" date above and, where appropriate, by email. Continued use of the service after a change constitutes acceptance of the updated policy.
          </p>

          <h2>10. Contact</h2>
          <p>
            For privacy-related questions or requests, contact us at <a href={`mailto:${APP.supportEmail}`}>{APP.supportEmail}</a>.
          </p>
        </div>
      </div>
    </>
  )
}
