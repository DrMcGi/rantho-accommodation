'use client';

import { siteConfig } from '../_config/site';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'LodgingBusiness'],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneHref,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Polokwane, Limpopo, South Africa',
    },
    address: [
      {
        '@type': 'PostalAddress',
        name: 'Student accommodation (Zone 2)',
        streetAddress: siteConfig.locations.student.street,
        addressLocality: siteConfig.locations.student.locality,
        addressRegion: siteConfig.locations.student.region,
        postalCode: siteConfig.locations.student.postalCode,
        addressCountry: 'ZA',
      },
      {
        '@type': 'PostalAddress',
        name: 'General accommodation (Zone 1)',
        streetAddress: siteConfig.locations.general.street,
        addressLocality: siteConfig.locations.general.locality,
        addressRegion: siteConfig.locations.general.region,
        postalCode: siteConfig.locations.general.postalCode,
        addressCountry: 'ZA',
      },
    ],
    sameAs: [
      siteConfig.nsfas.loginUrl,
      siteConfig.nsfas.propertiesUrl,
      `https://wa.me/${siteConfig.contact.whatsappNumber}`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
