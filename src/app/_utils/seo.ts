import type { Metadata } from 'next';
import { siteConfig } from '../_config/site';

const baseKeywords = [
  'Rantho Accommodations',
  'Rantho',
  'accommodation Seshego',
  'accommodation Polokwane',
  'accommodation Limpopo',
  'student accommodation Seshego',
  'NSFAS accredited accommodation',
  'Capricorn TVET College accommodation',
  'rooms to rent Seshego',
] as const;

export function buildMetadata(options: {
  title: string;
  description: string;
  path: `/${string}` | '/';
  keywords?: string[];
}): Metadata {
  const url = new URL(options.path, siteConfig.url).toString();
  const keywords = [...baseKeywords, ...(options.keywords ?? [])];

  return {
    title: options.title,
    description: options.description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.seo.defaultTitle,
        },
      ],
      locale: 'en_ZA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: options.title,
      description: options.description,
      images: [siteConfig.seo.ogImage],
    },
  };
}
