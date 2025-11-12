'use client';

import { siteConfig } from '../_config/site';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneHref,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.locations.student.street,
      addressLocality: siteConfig.locations.student.locality,
      addressRegion: siteConfig.locations.student.region,
      postalCode: siteConfig.locations.student.postalCode,
      addressCountry: 'ZA',
    },
    sameAs: [siteConfig.nsfas.loginUrl, siteConfig.nsfas.propertiesUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
