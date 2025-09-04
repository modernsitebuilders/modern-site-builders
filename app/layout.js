import './globals.css'

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
        <link rel="icon" href="/favicon.ico" />
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