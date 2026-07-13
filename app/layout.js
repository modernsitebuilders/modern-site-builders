import './globals.css'
import Script from 'next/script'

// Your Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-KMQNHVJ385'

export const metadata = {
  metadataBase: new URL('https://modernsitebuilders.com'),
  title: {
    default: 'Modern Site Builders | Building useful internet businesses in public',
    template: '%s | Modern Site Builders',
  },
  description:
    'David Miles designs, builds, and operates a portfolio of niche websites and interactive tools — and writes the build logs behind them. Experiments, growth data, and lessons from building useful internet businesses in public.',
  keywords: [
    'building in public',
    'indie web builder',
    'niche websites',
    'interactive tools',
    'SEO case studies',
    'web business portfolio',
    'David Miles',
    'Next.js builder',
  ],
  authors: [{ name: 'David Miles' }],
  creator: 'David Miles',
  publisher: 'Modern Site Builders',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Modern Site Builders',
    title: 'Modern Site Builders | Building useful internet businesses in public',
    description:
      'A portfolio of niche websites and interactive tools, built and operated in public — with the experiments, growth data, and lessons behind each one.',
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
    title: 'Modern Site Builders | Building useful internet businesses in public',
    description:
      'A portfolio of niche websites and interactive tools, built and operated in public — with the experiments, growth data, and lessons behind each one.',
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
      "description": "Professional construction calculators for contractors and DIY remodels.",
      "sameAs": ["https://www.facebook.com/profile.php?id=61588161942173"]
    },
    {
      "@type": "WebSite",
      "@id": "https://rightdumpster.com/#website",
      "name": "RightDumpster",
      "url": "https://rightdumpster.com",
      "description": "Weight-aware dumpster sizing calculator and rental guide.",
      "sameAs": ["https://www.facebook.com/profile.php?id=61588454787698"]
    },
    {
      "@type": "WebSite",
      "@id": "https://meetbackdrops.com/#website",
      "name": "MeetBackdrops",
      "url": "https://meetbackdrops.com",
      "description": "Studio-quality 4K virtual backgrounds for Zoom, Teams, and Google Meet.",
      "sameAs": ["https://www.facebook.com/profile.php?id=61588330383610"]
    },
    {
      "@type": "WebSite",
      "@id": "https://wolfresume.com/#website",
      "name": "WolfResume",
      "url": "https://wolfresume.com",
      "description": "AI resume generator engineered for ATS parsing and recruiter-ready output.",
      "sameAs": ["https://www.facebook.com/profile.php?id=61588600918064"]
    },
    {
      "@type": "WebSite",
      "@id": "https://promptdynamo.com/#website",
      "name": "PromptDynamo",
      "url": "https://promptdynamo.com",
      "description": "Done-for-you AI prompt packs for working professionals.",
      "sameAs": ["https://www.facebook.com/profile.php?id=61588539059595"]
    }
  ]

  const MSB_FACEBOOK = "https://www.facebook.com/profile.php?id=61579816034483"
  const DAVID_LINKEDIN = "https://www.linkedin.com/in/dave-miles-webdev/"

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
        "description": "Modern Site Builders is the umbrella for a portfolio of niche websites and interactive tools built and operated by David Miles — covering construction calculators, dumpster sizing, virtual meeting backgrounds, ATS-ready resumes, AI prompt packs, and personal-finance calculators.",
        "founder": { "@id": "https://modernsitebuilders.com/#david-miles" },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "dave@modernsitebuilders.com",
          "contactType": "General Inquiries",
          "availableLanguage": "English"
        },
        "sameAs": [MSB_FACEBOOK],
        "owns": ownedSites,
        "subOrganization": ownedSites
      },
      {
        "@type": "Person",
        "@id": "https://modernsitebuilders.com/#david-miles",
        "name": "David Miles",
        "url": "https://modernsitebuilders.com/author/david-miles",
        "mainEntityOfPage": "https://modernsitebuilders.com/author/david-miles",
        "image": "https://modernsitebuilders.com/profile_pic-1.png",
        "description": "Independent web builder and operator. David designs, builds, and runs a portfolio of niche websites and interactive tools, and documents the experiments, growth data, and lessons behind them.",
        "jobTitle": "Founder & Operator",
        "worksFor": { "@id": "https://modernsitebuilders.com/#organization" },
        "owns": ownedSites,
        "sameAs": [DAVID_LINKEDIN]
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