// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

import { siteConfig } from './_config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/student`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/general`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/gallery`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
