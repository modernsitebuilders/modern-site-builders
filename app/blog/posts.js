// Blog posts. Add a new entry at the top to publish.
// `content` is JSX rendered as the article body — keep it semantic HTML.

export const posts = [
  {
    slug: 'custom-business-website-cost-2026',
    title: 'How Much Does a Custom Business Website Cost in 2026?',
    description:
      'A straight-talk breakdown of what a custom-built business website actually costs in 2026 — from $500 starter sites to $15,000+ tool-driven builds — and what you get at each tier.',
    date: '2026-06-03',
    updated: '2026-06-03',
    readMinutes: 6,
    author: 'David Miles',
    tags: ['Pricing', 'Business Websites'],
    ogImage: '/logo1.png',
  },
  {
    slug: 'behind-the-build-rightdumpster',
    title: 'Behind the Build: How RightDumpster Helps Contractors Avoid Overage Fees',
    description:
      'A walkthrough of how RightDumpster was designed — why dumpster sizing is harder than it looks, the weight-aware calculator engine, and how the site converts cold search traffic into rentals.',
    date: '2026-05-28',
    updated: '2026-05-28',
    readMinutes: 7,
    author: 'David Miles',
    tags: ['Case Study', 'Interactive Tools'],
    ogImage: '/Screenshot-rightdumpster.jpg',
  },
  {
    slug: 'behind-the-build-remodelcalculators',
    title: 'Behind the Build: RemodelCalculators — A 40+ Calculator Suite on Next.js',
    description:
      'How RemodelCalculators went from a single drywall calculator to a 40+ tool suite covering interior, exterior, and code-compliance estimation — and the architecture that made it scale.',
    date: '2026-05-20',
    updated: '2026-05-20',
    readMinutes: 8,
    author: 'David Miles',
    tags: ['Case Study', 'Interactive Tools'],
    ogImage: '/Screenshot-remodelcalculators.jpg',
  },
  {
    slug: 'wix-squarespace-vs-custom-2026',
    title: 'Why More Local Businesses Are Leaving Wix and Squarespace in 2026',
    description:
      'The hidden costs of template builders for serious local businesses — performance ceilings, SEO limits, lock-in fees — and when a custom build actually saves money.',
    date: '2026-05-12',
    updated: '2026-05-12',
    readMinutes: 6,
    author: 'David Miles',
    tags: ['Pricing', 'Business Websites'],
    ogImage: '/logo1.png',
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}
