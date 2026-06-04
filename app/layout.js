import './globals.css'
import Script from 'next/script'

// Your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-KMQNHVJ385'

export const metadata = {
  metadataBase: new URL('https://modernsitebuilders.com'),
  title: {
    default: 'Modern Site Builders | WordPress & React Developer',
    template: '%s | Modern Site Builders',
  },
  description:
    'Custom websites and interactive tools for local businesses and working professionals. Fast, mobile-friendly builds that get found on Google and drive leads.',
  keywords: [
    'wordpress developer',
    'react developer',
    'website design',
    'local business websites',
    'professional portfolios',
    'SEO optimization',
    'web applications',
    'interactive tools',
  ],
  authors: [{ name: 'David Miles' }],
  creator: 'David Miles',
  publisher: 'Modern Site Builders',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Modern Site Builders',
    title: 'Modern Site Builders | WordPress & React Developer',
    description:
      'Custom websites and interactive tools for local businesses and working professionals. Fast, mobile-friendly builds that drive leads.',
    url: 'https://modernsitebuilders.com',
    locale: 'en_US',
    images: [
      {
        url: '/logo1.png',
        width: 512,
        height: 512,
        alt: 'Modern Site Builders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Site Builders | WordPress & React Developer',
    description:
      'Custom websites and interactive tools for local businesses and working professionals. Fast, mobile-friendly builds that drive leads.',
    images: ['/logo1.png'],
  },
  icons: {
    icon: '/logo2.png',
    apple: '/logo2.png',
  },
  formatDetection: { telephone: false },
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

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}