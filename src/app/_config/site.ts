export const siteConfig = {
  name: 'Rantho Accommodations',
  shortName: 'Rantho',
  description:
    'Student (NSFAS) and general accommodation with clear amenities, transparent pricing, and frictionless booking.',
  tagline: 'Seshego-based luxury living for students and professionals.',
  url: 'https://ranthoaccommodations.co.za',
  contact: {
    phoneDisplay: '082 318 3790',
    phoneHref: '+27823183790',
    whatsappNumber: '27823183790',
  },
  nsfas: {
    loginUrl: 'https://tymprod.nsfas.org.za/login',
    propertiesUrl: 'https://tymprod.nsfas.org.za/properties',
  },
  locations: {
    student: {
      label: 'Student',
      street: 'House no 2121, 8 Ramahlale Ave, Seshego Zone 2',
      locality: 'Polokwane',
      region: 'Limpopo',
      postalCode: '0742',
      description:
        'NSFAS-accredited residence 1.39 km from Capricorn TVET College, close to Seshego Crossing, hospital, and police station.',
    },
    general: {
      label: 'General',
      street: 'House 1243, Seshego Zone 1',
      locality: 'Polokwane',
      region: 'Limpopo',
      postalCode: '0742',
      description: 'Bachelor and shared rooms with easy access to central Seshego.',
    },
  },
  seo: {
    defaultTitle: 'Rantho Accommodations — Seshego, Polokwane',
    defaultDescription:
      'Luxury-inspired student (NSFAS) and general accommodation in Seshego, Polokwane. Explore premium amenities, gallery, and book instantly via WhatsApp.',
    ogImage: '/og-image.jpg',
  },
  highlights: {
    studentDistanceKm: 1.39,
    studentAccreditation: 'NSFAS accredited',
  },
} as const;

export type SiteConfig = typeof siteConfig;
