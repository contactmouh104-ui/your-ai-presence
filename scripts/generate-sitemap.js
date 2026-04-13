// Run with: node scripts/generate-sitemap.js
// Generates public/sitemap.xml from routes and blog posts

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://shonow.online';
const today = new Date().toISOString().split('T')[0];

// Static routes
const staticRoutes = [
  { loc: '/', changefreq: 'daily', priority: '1.0' },
  { loc: '/blog', changefreq: 'daily', priority: '0.9' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.5' },
  { loc: '/disclaimer', changefreq: 'yearly', priority: '0.3' },
];

// Extract blog slugs from blogPosts.ts
const blogFile = readFileSync(resolve(__dirname, '../src/data/blogPosts.ts'), 'utf-8');
const slugMatches = [...blogFile.matchAll(/slug:\s*"([^"]+)"/g)];
const dateMatches = [...blogFile.matchAll(/date:\s*"([^"]+)"/g)];

const blogRoutes = slugMatches.map((match, i) => ({
  loc: `/blog/${match[1]}`,
  changefreq: 'weekly',
  priority: '0.8',
  lastmod: dateMatches[i]?.[1] || today,
}));

const allRoutes = [...staticRoutes.map(r => ({ ...r, lastmod: today })), ...blogRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${SITE_URL}${r.loc}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml);
console.log(`✅ Sitemap generated with ${allRoutes.length} URLs`);
