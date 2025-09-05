import './globals.css'
import Script from 'next/script'

// Your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-KMQNHVJ385'

export const metadata = {
  title: 'Modern Site Builders | Professional WordPress Developer',
  description: 'Professional websites for local businesses and working professionals. Get found online with mobile-friendly websites that drive results.',
  keywords: 'wordpress developer, website design, local business websites, professional portfolios, SEO optimization',
  author: 'David Miles',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        
        <link rel="icon" href="/logo2.png" />
        <link rel="apple-touch-icon" href="/logo2.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta property="og:title" content="Modern Site Builders | Professional WordPress Developer" />
        <meta property="og:description" content="Professional websites for local businesses and working professionals. Get found online with mobile-friendly websites that drive results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://modernsitebuilders.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}