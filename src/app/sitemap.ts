// src/app/sitemap.ts
export default function sitemap() {
  const base = 'https://example.com'; // replace on deploy
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/student`, lastModified: new Date() },
    { url: `${base}/general`, lastModified: new Date() },
    { url: `${base}/gallery`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
