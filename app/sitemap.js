import fs from 'node:fs';
import path from 'node:path';
import { posts } from './blog/posts';

const BASE = 'https://modernsitebuilders.com';

// Per-route sitemap hints. Any static page not listed here still gets included
// with the fallback values below — so the sitemap stays complete automatically
// even if you forget to add an entry.
const ROUTE_HINTS = {
  '/': { changeFrequency: 'weekly', priority: 1.0 },
  '/blog/': { changeFrequency: 'weekly', priority: 0.9 },
  '/author/david-miles/': { changeFrequency: 'monthly', priority: 0.7 },
  '/privacy/': { changeFrequency: 'yearly', priority: 0.3 },
};
const FALLBACK_HINT = { changeFrequency: 'monthly', priority: 0.5 };

const APP_DIR = path.join(process.cwd(), 'app');

// Walk app/ and collect every static page route (a `page.js`/`page.jsx`/`page.tsx`
// file), skipping dynamic segments like [slug] and private/route-group folders.
function discoverStaticRoutes(dir = APP_DIR, segments = []) {
  const routes = [];
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return routes;
  }

  const hasPage = entries.some(
    (e) => e.isFile() && /^page\.(js|jsx|ts|tsx)$/.test(e.name)
  );
  if (hasPage) {
    const route = segments.length ? `/${segments.join('/')}/` : '/';
    routes.push({ route, dir });
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Skip dynamic routes ([slug]), route groups ((group)), and private (_dir) folders.
    if (name.startsWith('[') || name.startsWith('(') || name.startsWith('_')) {
      continue;
    }
    routes.push(...discoverStaticRoutes(path.join(dir, name), [...segments, name]));
  }

  return routes;
}

function lastModifiedFor(dir) {
  for (const name of ['page.js', 'page.jsx', 'page.ts', 'page.tsx']) {
    try {
      const stat = fs.statSync(path.join(dir, name));
      return stat.mtime.toISOString().split('T')[0];
    } catch {
      // try next
    }
  }
  return new Date().toISOString().split('T')[0];
}

export default function sitemap() {
  const staticRoutes = discoverStaticRoutes().map(({ route, dir }) => {
    const hint = ROUTE_HINTS[route] || FALLBACK_HINT;
    return {
      url: `${BASE}${route}`,
      lastModified: lastModifiedFor(dir),
      changeFrequency: hint.changeFrequency,
      priority: hint.priority,
    };
  });

  const blogRoutes = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: post.updated || post.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
