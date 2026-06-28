import Link from 'next/link';

const PROFILE_URL = 'https://modernsitebuilders.com/author/david-miles';
const PERSON_ID = 'https://modernsitebuilders.com/#david-miles';
const LINKEDIN = 'https://www.linkedin.com/in/dave-miles-webdev/';

const projects = [
  {
    name: 'RemodelCalculators',
    url: 'https://remodelcalculators.com',
    blurb: 'A 40+ construction calculator suite for contractors and DIY remodels.',
    log: '/blog/behind-the-build-remodelcalculators/',
  },
  {
    name: 'RightDumpster',
    url: 'https://rightdumpster.com',
    blurb: 'An honest dumpster-rental guide with a weight-aware sizing calculator.',
    log: '/blog/behind-the-build-rightdumpster/',
  },
  {
    name: 'MeetBackdrops',
    url: 'https://meetbackdrops.com',
    blurb: 'Studio-quality 4K virtual backgrounds for Zoom, Teams, and Google Meet.',
    log: '/blog/behind-the-build-meetbackdrops/',
  },
  {
    name: 'WolfResume',
    url: 'https://wolfresume.com',
    blurb: 'An AI resume generator engineered for ATS parsing and recruiter-ready output.',
    log: '/blog/behind-the-build-wolfresume/',
  },
  {
    name: 'PromptDynamo',
    url: 'https://promptdynamo.com',
    blurb: 'Done-for-you AI prompt packs for working professionals.',
    log: null,
  },
];

export const metadata = {
  title: 'David Miles — Independent Web Builder & Operator',
  description:
    'David Miles designs, builds, and operates a portfolio of niche websites and interactive tools — RemodelCalculators, RightDumpster, MeetBackdrops, WolfResume, and PromptDynamo — and writes the build logs behind them.',
  alternates: { canonical: '/author/david-miles' },
  openGraph: {
    title: 'David Miles — Independent Web Builder & Operator',
    description:
      'The builder behind RemodelCalculators, RightDumpster, MeetBackdrops, WolfResume, and PromptDynamo. Building useful internet businesses in public.',
    url: PROFILE_URL,
    type: 'profile',
    images: [{ url: '/profile_pic-1.png', width: 512, height: 512, alt: 'David Miles' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Miles — Independent Web Builder & Operator',
    description:
      'The builder behind RemodelCalculators, RightDumpster, MeetBackdrops, WolfResume, and PromptDynamo.',
    images: ['/profile_pic-1.png'],
  },
};

export default function AuthorPage() {
  const profileSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${PROFILE_URL}#profilepage`,
    url: PROFILE_URL,
    name: 'David Miles — Independent Web Builder & Operator',
    mainEntity: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'David Miles',
      url: PROFILE_URL,
      image: 'https://modernsitebuilders.com/profile_pic-1.png',
      jobTitle: 'Founder & Operator',
      description:
        'Independent web builder and operator. David designs, builds, and runs a portfolio of niche websites and interactive tools, and documents the experiments, growth data, and lessons behind them.',
      worksFor: { '@id': 'https://modernsitebuilders.com/#organization' },
      sameAs: [LINKEDIN],
      owns: projects.map((p) => ({ '@type': 'WebSite', name: p.name, url: p.url })),
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/logo1.png" alt="Modern Site Builders" className="w-10 h-10 object-contain" />
            <span className="ml-3 text-xl font-bold text-gray-900">Modern Site Builders</span>
          </Link>
          <Link
            href="/blog/"
            className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition-colors"
          >
            Build Logs
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Identity */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
          <img
            src="/profile_pic-1.png"
            alt="David Miles"
            className="w-28 h-28 rounded-full object-cover shadow-lg flex-shrink-0"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">David Miles</h1>
            <p className="text-lg text-gray-600 mb-3">
              Independent web builder & operator — building useful internet businesses in public.
            </p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer me"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors text-sm"
            >
              Connect on LinkedIn →
            </a>
          </div>
        </div>

        {/* Bio */}
        <div className="prose prose-lg max-w-none text-gray-600 mb-14 space-y-5">
          <p>
            I design, build, and operate a portfolio of niche websites and interactive tools — run
            as my own businesses, not client work. The goal is durable, genuinely useful sites that
            earn their traffic and compound over time.
          </p>
          <p>
            The first stretch of any project is mostly quiet. Then a few pages reach page one, the
            data starts pointing somewhere, and the work begins to compound. I document that whole
            arc on{' '}
            <Link href="/blog/" className="text-blue-600 hover:text-blue-800 font-medium">
              Modern Site Builders
            </Link>{' '}
            — the experiments, the numbers, and the lessons — so the wins and the dead ends are both
            on the record.
          </p>
        </div>

        {/* Projects */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What I'm building</h2>
        <div className="space-y-6 mb-4">
          {projects.map((p) => (
            <div key={p.name} className="border-b border-gray-100 pb-6 last:border-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {p.name}
                </a>
                {p.log && (
                  <Link
                    href={p.log}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read the build log →
                  </Link>
                )}
              </div>
              <p className="text-gray-600">{p.blurb}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-8">
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
