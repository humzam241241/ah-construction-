import { SITE_URL } from "@/lib/seo/metadata";

export interface LocalBusinessSchemaOptions {
  pageUrl?: string;
}

export function buildLocalBusinessSchema(
  options: LocalBusinessSchemaOptions = {}
) {
  const { pageUrl = SITE_URL } = options;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "A.H Construction",
    alternateName: "AH Construction Lahore",
    description:
      "A.H Construction is a leading construction company in Lahore, Pakistan offering home building, concrete work, commercial construction, and renovation services.",
    url: SITE_URL,
    telephone: "+92-314-5500113",
    email: "info@ahconstruction.pk",
    foundingDate: "2005",
    priceRange: "$$",
    image: `${SITE_URL}/og-default.jpg`,
    logo: `${SITE_URL}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lahore",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.5204,
      longitude: 74.3587,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Lahore",
      },
      {
        "@type": "State",
        name: "Punjab",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Building in Lahore",
            description:
              "Custom residential home construction services in Lahore, Pakistan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Concrete Contractor Lahore",
            description:
              "Professional concrete construction and finishing services in Lahore.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Construction",
            description:
              "Commercial building and infrastructure construction services in Lahore.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Renovation & Remodeling",
            description:
              "Interior and exterior renovation services for homes and offices in Lahore.",
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-314-5500113",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [],
    mainEntityOfPage: pageUrl,
  };
}

export function buildServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "A.H Construction",
      telephone: "+92-314-5500113",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Lahore",
    },
    url: SITE_URL,
  };
}
