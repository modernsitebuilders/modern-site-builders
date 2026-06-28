import { posts } from './blog/posts';

const BASE = 'https://modernsitebuilders.com';

export default function sitemap() {
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: `${BASE}/`, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/blog/`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/author/david-miles/`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy/`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogRoutes = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: post.updated || post.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
