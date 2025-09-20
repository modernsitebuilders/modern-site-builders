import './globals.css'
import Script from 'next/script'

// Your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-KMQNHVJ385'

export const metadata = {
  title: 'Modern Site Builders | Professional WordPress & React Developer',
  description: 'Professional websites for local businesses and working professionals. Creator of interactive tools like dumpster size calculators. Get found online with mobile-friendly websites that drive results.',
  keywords: 'wordpress developer, react developer, website design, local business websites, professional portfolios, SEO optimization, web applications, interactive tools',
  author: 'David Miles',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://modernsitebuilders.com'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb'
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Modern Site Builders",
    "description": "Professional website development for local businesses and working professionals",
    "url": "https://modernsitebuilders.com",
    "founder": {
      "@type": "Person",
      "name": "David Miles"
    },
    "areaServed": "United States",
    "serviceType": ["Web Development", "WordPress Development", "React Development", "SEO Services"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-267-983-7101",
      "email": "dave@modernsitebuilders.com",
      "contactType": "Customer Service"
    }
  }

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
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: 'Modern Site Builders',
              page_location: 'https://modernsitebuilders.com'
            });
          `}
        </Script>
        
        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
        
        {/* Favicons */}
        <link rel="icon" href="/logo2.png" sizes="any" />
        <link rel="icon" href="/logo2.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo2.png" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Modern Site Builders | Professional WordPress & React Developer" />
        <meta property="og:description" content="Professional websites for local businesses and working professionals. Creator of interactive tools like dumpster size calculators." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://modernsitebuilders.com" />
        <meta property="og:image" content="https://modernsitebuilders.com/logo1.png" />
        <meta property="og:image:alt" content="Modern Site Builders Logo" />
        <meta property="og:site_name" content="Modern Site Builders" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Modern Site Builders | Professional Web Developer" />
        <meta name="twitter:description" content="Professional websites for local businesses and working professionals. Get found online with mobile-friendly websites." />
        <meta name="twitter:image" content="https://modernsitebuilders.com/logo1.png" />
        
        {/* Additional SEO */}
        <meta name="generator" content="Next.js" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}