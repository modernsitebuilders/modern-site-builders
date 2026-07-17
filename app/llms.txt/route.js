import { posts } from '../blog/posts';
import { portfolio } from '../portfolio';

const BASE = 'https://modernsitebuilders.com';

// Posts tagged Case Study or Build Log are the per-property build logs; the rest are guides.
const BUILD_LOG_TAGS = ['Case Study', 'Build Log'];
const isBuildLog = (post) => post.tags.some((tag) => BUILD_LOG_TAGS.includes(tag));

const linkList = (items) => items.map(({ label, url, note }) =>
  `- [${label}](${url})${note ? `: ${note}` : ''}`
).join('\n');

const postLinks = (list) => linkList(list.map((post) => ({
  label: post.title,
  url: `${BASE}/blog/${post.slug}/`,
})));

export function GET() {
  const body = `# Modern Site Builders

> The portfolio and build-log site of David Miles, who designs, builds, and operates a network of niche websites and interactive tools. Every property listed below is owned and run by the same operator — this is a portfolio of independent internet businesses, not an agency or client work.

Modern Site Builders publishes the build logs behind each property: what was tried, what ranked, what failed, and the numbers behind it. Author and operator of all properties: David Miles (${BASE}/author/david-miles/).

## Owned properties

${linkList(portfolio.map((p) => ({ label: p.title, url: p.url, note: p.description })))}

## Build logs

${postLinks(posts.filter(isBuildLog))}

## Guides

${postLinks(posts.filter((post) => !isBuildLog(post)))}

## Optional

${linkList([
  { label: 'Blog index', url: `${BASE}/blog/` },
  { label: 'Author: David Miles', url: `${BASE}/author/david-miles/` },
  { label: 'Privacy policy', url: `${BASE}/privacy/` },
  { label: 'Sitemap', url: `${BASE}/sitemap.xml` },
])}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
