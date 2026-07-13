import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { getPost, getAllSlugs, posts } from '../posts';

import CustomBusinessWebsiteCost2026 from '../content/custom-business-website-cost-2026';
import BehindTheBuildRightDumpster from '../content/behind-the-build-rightdumpster';
import BehindTheBuildRemodelCalculators from '../content/behind-the-build-remodelcalculators';
import WixSquarespaceVsCustom2026 from '../content/wix-squarespace-vs-custom-2026';
import HowToChooseAWebDeveloper from '../content/how-to-choose-a-web-developer';
import BehindTheBuildMeetBackdrops from '../content/behind-the-build-meetbackdrops';
import BehindTheBuildWolfResume from '../content/behind-the-build-wolfresume';
import LocalSEOChecklist2026 from '../content/local-seo-checklist-2026';
import BuildLog225Diagrams from '../content/build-log-225-diagrams-remodelcalculators';
import BehindTheBuildFigureMoney from '../content/behind-the-build-figuremoney';

const contentBySlug = {
  'behind-the-build-figuremoney': BehindTheBuildFigureMoney,
  'build-log-225-diagrams-remodelcalculators': BuildLog225Diagrams,
  'custom-business-website-cost-2026': CustomBusinessWebsiteCost2026,
  'behind-the-build-rightdumpster': BehindTheBuildRightDumpster,
  'behind-the-build-remodelcalculators': BehindTheBuildRemodelCalculators,
  'wix-squarespace-vs-custom-2026': WixSquarespaceVsCustom2026,
  'how-to-choose-a-web-developer': HowToChooseAWebDeveloper,
  'behind-the-build-meetbackdrops': BehindTheBuildMeetBackdrops,
  'behind-the-build-wolfresume': BehindTheBuildWolfResume,
  'local-seo-checklist-2026': LocalSEOChecklist2026,
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  const url = `https://modernsitebuilders.com${path}`;
  const metaTitle = post.metaTitle || post.title;
  return {
    title: { absolute: metaTitle },
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      images: post.ogImage
        ? [{ url: post.ogImage, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.ogImage ? [post.ogImage] : undefined,
    },
  };
}

function formatDate(iso) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const PostContent = contentBySlug[post.slug];

  const url = `https://modernsitebuilders.com/blog/${post.slug}/`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@id': 'https://modernsitebuilders.com/#organization' },
    image: post.ogImage ? `https://modernsitebuilders.com${post.ogImage}` : undefined,
    mainEntityOfPage: url,
    keywords: post.tags?.join(', '),
  };

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Script id={`article-schema-${post.slug}`} type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>

      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/logo1.png" alt="Modern Site Builders" className="w-10 h-10 object-contain" />
            <span className="ml-3 text-xl font-bold text-gray-900">Modern Site Builders</span>
          </Link>
          <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition-colors">
            Projects
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog/" className="hover:text-blue-600">Blog</Link>
        </nav>

        {/* Article */}
        <article>
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-sm text-gray-500">
              By <Link href="/author/david-miles" className="text-blue-600 hover:text-blue-800 font-medium">{post.author}</Link>
            </p>
          </header>

          <div className="prose-content text-gray-800 leading-relaxed">
            <PostContent />
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">More from the workshop</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              I build and operate a portfolio of niche websites and interactive tools — and write the build log behind each one. Browse the rest of the projects and notes.
            </p>
            <Link
              href="/#portfolio"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              See the projects →
            </Link>
          </div>
        </article>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More from the blog</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}/`} className="group">
                  <div className="text-xs text-gray-500 mb-2">{formatDate(p.date)}</div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
