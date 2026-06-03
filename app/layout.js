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
  const ownedSites = [
    {
      "@type": "WebSite",
      "@id": "https://remodelcalculators.com/#website",
      "name": "RemodelCalculators",
      "url": "https://remodelcalculators.com",
      "description": "Professional construction calculators for contractors and DIY remodels."
    },
    {
      "@type": "WebSite",
      "@id": "https://rightdumpster.com/#website",
      "name": "RightDumpster",
      "url": "https://rightdumpster.com",
      "description": "Weight-aware dumpster sizing calculator and rental guide."
    },
    {
      "@type": "WebSite",
      "@id": "https://meetbackdrops.com/#website",
      "name": "MeetBackdrops",
      "url": "https://meetbackdrops.com",
      "description": "Studio-quality 4K virtual backgrounds for Zoom, Teams, and Google Meet."
    },
    {
      "@type": "WebSite",
      "@id": "https://wolfresume.com/#website",
      "name": "WolfResume",
      "url": "https://wolfresume.com",
      "description": "AI resume generator engineered for ATS parsing and recruiter-ready output."
    },
    {
      "@type": "WebSite",
      "@id": "https://promptdynamo.com/#website",
      "name": "PromptDynamo",
      "url": "https://promptdynamo.com",
      "description": "Done-for-you AI prompt packs for working professionals."
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://modernsitebuilders.com/#organization",
        "name": "Modern Site Builders",
        "url": "https://modernsitebuilders.com",
        "logo": "https://modernsitebuilders.com/logo1.png",
        "image": "https://modernsitebuilders.com/logo1.png",
        "description": "Modern Site Builders designs and operates a network of production websites and interactive tools — covering construction calculators, dumpster sizing, virtual meeting backgrounds, ATS-ready resumes, and AI prompt packs.",
        "founder": {
          "@type": "Person",
          "name": "David Miles"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-267-983-7101",
          "email": "dave@modernsitebuilders.com",
          "contactType": "Customer Service",
          "areaServed": "US",
          "availableLanguage": "English"
        },
        "areaServed": "United States",
        "sameAs": ownedSites.map(s => s.url),
        "owns": ownedSites,
        "subOrganization": ownedSites
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://modernsitebuilders.com/#service",
        "name": "Modern Site Builders",
        "url": "https://modernsitebuilders.com",
        "description": "Professional website development for local businesses and working professionals.",
        "provider": { "@id": "https://modernsitebuilders.com/#organization" },
        "areaServed": "United States",
        "serviceType": ["Web Development", "WordPress Development", "React Development", "SEO Services"]
      },
      {
        "@type": "WebSite",
        "@id": "https://modernsitebuilders.com/#website",
        "url": "https://modernsitebuilders.com",
        "name": "Modern Site Builders",
        "publisher": { "@id": "https://modernsitebuilders.com/#organization" }
      },
      ...ownedSites.map(site => ({
        ...site,
        "publisher": { "@id": "https://modernsitebuilders.com/#organization" }
      }))
    ]
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