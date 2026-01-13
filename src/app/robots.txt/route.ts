// src/app/robots.txt/route.ts
import { siteConfig } from '../_config/site';

export async function GET() {
  const sitemapUrl = new URL('/sitemap.xml', siteConfig.url).toString();
  const host = siteConfig.url.replace(/^https?:\/\//, '');

  return new Response(
    [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${sitemapUrl}`, `Host: ${host}`, ``].join('\n'),
    {
      headers: { 'Content-Type': 'text/plain' },
    },
  );
}
