// Blog posts. Add a new entry at the top to publish.
// `metaTitle` is optional — when present it's used as the <title> tag (≤60 chars);
// otherwise `title` is used. Keeps long descriptive H1s without breaking SEO.

export const posts = [
  {
    slug: 'custom-business-website-cost-2026',
    title: 'How Much Does a Custom Business Website Cost in 2026?',
    description:
      'Straight-talk pricing for custom business websites in 2026 — from $500 starter sites to $15K+ tool-driven builds, with what you get at each tier.',
    date: '2026-06-03',
    updated: '2026-06-03',
    readMinutes: 6,
    author: 'David Miles',
    tags: ['Pricing', 'Business Websites'],
    ogImage: '/logo1.png',
  },
  {
    slug: 'how-to-choose-a-web-developer',
    title: 'How to Choose a Web Developer: 10 Questions to Ask Before You Hire',
    metaTitle: 'How to Choose a Web Developer: 10 Questions to Ask',
    description:
      'Ten questions that separate developers who build sites that perform from ones who just decorate — a practical hiring checklist for $3K–$20K custom builds.',
    date: '2026-05-05',
    updated: '2026-05-05',
    readMinutes: 7,
    author: 'David Miles',
    tags: ['Hiring', 'Business Websites'],
    ogImage: '/logo1.png',
  },
  {
    slug: 'behind-the-build-meetbackdrops',
    title: 'Behind the Build: MeetBackdrops and the Productized-Service Playbook',
    metaTitle: "Behind the Build: MeetBackdrops' Productized-Service Playbook",
    description:
      'How MeetBackdrops turned a saturated stock-photo category into a productized service — and what its catalog-to-custom funnel teaches about productizing yours.',
    date: '2026-04-28',
    updated: '2026-04-28',
    readMinutes: 7,
    author: 'David Miles',
    tags: ['Case Study', 'Productized Services'],
    ogImage: '/Screenshot-meetbackdrops.jpg',
  },
  {
    slug: 'behind-the-build-wolfresume',
    title: 'Behind the Build: WolfResume and Why Most Resume Tools Fail at ATS',
    metaTitle: 'Behind the Build: Why Resume Tools Fail ATS (WolfResume)',
    description:
      'How Applicant Tracking Systems actually read resumes, why most builders ignore them, and how WolfResume was architected schema-first for ATS-compliant output.',
    date: '2026-04-20',
    updated: '2026-04-20',
    readMinutes: 8,
    author: 'David Miles',
    tags: ['Case Study', 'AI Tools'],
    ogImage: '/Screenshot-wolfresume.jpg',
  },
  {
    slug: 'local-seo-checklist-2026',
    title: 'The Local SEO Checklist for Small Businesses in 2026',
    description:
      'Ten unglamorous fundamentals that move local businesses from page 3 to page 1 of Google — the checklist I run on every new client, in priority order.',
    date: '2026-04-12',
    updated: '2026-04-12',
    readMinutes: 8,
    author: 'David Miles',
    tags: ['SEO', 'Local Business'],
    ogImage: '/logo1.png',
  },
  {
    slug: 'behind-the-build-rightdumpster',
    title: 'Behind the Build: How RightDumpster Helps Contractors Avoid Overage Fees',
    metaTitle: 'Behind the Build: How RightDumpster Avoids Overage Fees',
    description:
      'How RightDumpster was built — why dumpster sizing is harder than it looks, the weight-aware calculator, and how it converts cold search into rentals.',
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
    metaTitle: "Behind the Build: RemodelCalculators' 40+ Calculator Suite",
    description:
      'How RemodelCalculators grew from a single drywall tool to a 40+ calculator suite covering interior, exterior, and code-compliance estimation.',
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
    metaTitle: 'Why Local Businesses Are Leaving Wix and Squarespace in 2026',
    description:
      'The hidden costs of template builders for serious local businesses — performance ceilings, SEO limits, lock-in fees — and when custom actually saves money.',
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
