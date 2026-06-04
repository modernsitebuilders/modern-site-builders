export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Modern Site Builders handles data: we collect basic anonymous usage analytics, do not sell data, and do not track you across the web.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Modern Site Builders',
    description:
      'How Modern Site Builders handles data: anonymous usage analytics only, no data selling, no cross-site tracking.',
    url: 'https://modernsitebuilders.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Modern Site Builders',
    description:
      'How Modern Site Builders handles data: anonymous usage analytics only, no data selling, no cross-site tracking.',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 italic mb-8">
          Last Updated: November 16, 2025
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <strong className="block mb-2">This policy applies to:</strong>
          <ul className="space-y-1">
            <li>→ dumpster-size-calculator.com</li>
            <li>→ jobcalculators.com</li>
            <li>→ streambackdrops.com</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            We Keep It Simple
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our tools are free. We don't sell your data. We don't spam you. Here's exactly what we collect and why.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Collect
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Usage data:</strong> Which calculators you use, which pages you visit, how long you spend on the site
            </li>
            <li>
              <strong>Technical data:</strong> Browser type, device type, screen resolution, referring website
            </li>
            <li>
              <strong>Server logs:</strong> Your IP address may be recorded in standard web server logs (this is how websites work)
            </li>
            <li>
              <strong>Voluntary information:</strong> If you choose to submit a review or contact us, any name or email you provide
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We DON'T Collect
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>No signup or account required - use our tools anonymously</li>
            <li>No payment information (everything is free)</li>
            <li>No tracking across other websites you visit</li>
            <li>No selling or sharing your data with third parties</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why We Collect This Data
          </h2>
          <p className="text-gray-700 mb-3">Usage data helps us understand:</p>
          <ul className="space-y-2 text-gray-700">
            <li>Which calculators people actually use</li>
            <li>What features to add next</li>
            <li>If something is broken or confusing</li>
            <li>Which cities need better coverage</li>
          </ul>
          <p className="text-gray-700 mt-3">
            That's it. We're not building user profiles or tracking you around the internet.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cookies & Analytics
          </h2>
          <p className="text-gray-700 mb-3">
            We use Google Analytics to understand how people use our tools. This is standard website analytics that:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>Shows us aggregate data (not individual users)</li>
            <li>May use cookies to track visits</li>
            <li>Can be blocked by browser settings or extensions</li>
          </ul>
          <p className="text-gray-700 mt-3">
            No advertising cookies. No tracking pixels. Just basic usage stats.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Rights
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>Use our tools without creating an account</li>
            <li>Block cookies in your browser settings</li>
            <li>Use ad blockers or privacy extensions</li>
            <li>Contact us with questions or concerns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Security
          </h2>
          <p className="text-gray-700 mb-3">
            Since we don't collect personal information (unless you choose to give it), there's not much to protect. Our sites use:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>HTTPS encryption for all connections</li>
            <li>Standard security practices for web hosting</li>
            <li>No storage of sensitive personal data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700">
            If we change how we handle data, we'll update this page and change the "Last Updated" date. No email notifications because we don't have your email (unless you gave it to us voluntarily).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-700 mb-3">
            Our sites are hosted on Vercel and use Google Analytics. These services have their own privacy policies:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a 
                href="https://vercel.com/legal/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Vercel Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Questions?
          </h2>
          <p className="text-gray-700">
            Contact us at:{' '}
            <a 
              href="mailto:dave@modernsitebuilders.com"
              className="text-blue-600 hover:underline font-medium"
            >
              dave@modernsitebuilders.com
            </a>
          </p>
          <p className="text-gray-700 mt-2">
            We'll actually respond. No automated replies or ticket systems.
          </p>
        </div>

        <p className="text-sm text-gray-600 border-t pt-6">
          <strong>Bottom line:</strong> We build free tools. We track basic usage to make them better. We don't sell your data. That's it. No lawyer speak. No hidden agenda.
        </p>
      </div>
    </div>
  );
}