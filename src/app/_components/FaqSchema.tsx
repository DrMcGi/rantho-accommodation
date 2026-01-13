import { siteConfig } from '../_config/site';

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqSchema({
  pageUrl,
  items,
}: {
  pageUrl: `/${string}` | '/';
  items: readonly FaqItem[];
}) {
  const url = new URL(pageUrl, siteConfig.url).toString();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
