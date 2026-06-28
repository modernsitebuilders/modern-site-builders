import Link from 'next/link';
import { posts } from './posts';

export const metadata = {
  title: 'Blog',
  description:
    'Build logs from a portfolio of niche websites and interactive tools — case studies, growth data, and honest lessons from building useful internet businesses in public.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Build Logs | Modern Site Builders',
    description:
      'Case studies, growth data, and honest lessons from building and operating a portfolio of niche websites and tools.',
    url: 'https://modernsitebuilders.com/blog',
    type: 'website',
    images: [{ url: '/logo1.png', width: 512, height: 512, alt: 'Modern Site Builders' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Logs | Modern Site Builders',
    description:
      'Case studies, growth data, and honest lessons from building and operating a portfolio of niche websites and tools.',
    images: ['/logo1.png'],
  },
};

function formatDate(iso) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/logo1.png" alt="Modern Site Builders" className="w-10 h-10 object-contain" />
            <span className="ml-3 text-xl font-bold text-gray-900">Modern Site Builders</span>
          </Link>
          <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition-colors">
            Projects
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Notes from the workshop — case studies, growth data, and honest lessons from building and operating a portfolio of niche sites and tools.
          </p>
        </div>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-100 pb-12 last:border-0">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readMinutes} min read</span>
                {post.tags?.length > 0 && (
                  <>
                    <span>·</span>
                    <span>{post.tags.join(' · ')}</span>
                  </>
                )}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">{post.description}</p>
              <Link
                href={`/blog/${post.slug}/`}
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center justify-center mb-6">
            <img src="/logo1.png" alt="Modern Site Builders" className="w-10 h-10 object-contain" />
            <span className="ml-3 text-xl font-bold">Modern Site Builders</span>
          </Link>
          <p className="text-gray-400 mb-4">Building and operating useful internet businesses in public.</p>
          <p className="text-gray-500 text-sm mb-2">© 2026 Modern Site Builders. Built by David Miles.</p>
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors inline-block">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
