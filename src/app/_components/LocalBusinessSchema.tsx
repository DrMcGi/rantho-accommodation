"use client";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rantho Accommodations",
    description:
      "Student (NSFAS) and General accommodation in Seshego, Polokwane.",
    url: "https://example.com", // replace with your live domain
    telephone: "+27 82 318 3790",
    address: {
      "@type": "PostalAddress",
      streetAddress: "House no 2121, 8 Ramahlale Ave, Seshego Zone 2",
      addressLocality: "Polokwane",
      addressRegion: "Limpopo",
      postalCode: "0742",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://tymprod.nsfas.org.za/login",
      "https://tymprod.nsfas.org.za/properties",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
