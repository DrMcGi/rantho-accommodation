import { siteConfig } from '../_config/site';

export default function GeneralOfferSchema() {
  const pageUrl = new URL('/general', siteConfig.url).toString();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Full four-room house to rent in Seshego',
    description:
      'Full four-room house with two bedrooms, kitchen and dining room. Communal toilet and bath outside. Available from 1 October 2026. Price negotiable.',
    url: pageUrl,
    price: '3500',
    priceCurrency: 'ZAR',
    availability: 'https://schema.org/PreOrder',
    validFrom: '2026-10-01',
    itemOffered: {
      '@type': 'House',
      name: 'Full four-room house in Seshego Zone 1',
      numberOfRooms: 4,
      numberOfBedrooms: 2,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.locations.general.street,
        addressLocality: siteConfig.locations.general.locality,
        addressRegion: siteConfig.locations.general.region,
        postalCode: siteConfig.locations.general.postalCode,
        addressCountry: 'ZA',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}