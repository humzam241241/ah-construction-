import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/seo/metadata";
import { buildLocalBusinessSchema, buildServiceSchema } from "@/lib/schema/localBusiness";

export const metadata: Metadata = buildMetadata({
  title: "Construction Services in Lahore — Home Building & Concrete Work",
  description:
    "Explore A.H Construction's full range of services: home building in Lahore, concrete contractor work, commercial construction, and renovation. Call +92 314 5500113.",
  path: "/services",
  keywords: [
    "construction services Lahore",
    "home building in Lahore",
    "concrete contractor Lahore",
    "residential construction Lahore",
    "commercial construction Lahore",
    "construction company in Lahore",
    "building renovation Lahore",
  ],
});

const services = [
  {
    id: "home-building",
    name: "Home Building in Lahore",
    description:
      "We design and construct custom residential homes across Lahore. From foundation to finishing, our team handles every phase of your home building project with precision and care.",
    features: [
      "Architectural design coordination",
      "Foundation and structural work",
      "Masonry and brickwork",
      "Plumbing and electrical rough-in",
      "Interior and exterior finishing",
    ],
  },
  {
    id: "concrete-contractor",
    name: "Concrete Contractor Lahore",
    description:
      "A.H Construction is a leading concrete contractor in Lahore. We handle concrete slabs, driveways, retaining walls, columns, and all structural concrete elements.",
    features: [
      "Reinforced concrete structures",
      "Concrete slabs and driveways",
      "Retaining walls and foundations",
      "Column and beam construction",
      "Concrete repair and restoration",
    ],
  },
  {
    id: "commercial-construction",
    name: "Commercial Construction",
    description:
      "We deliver commercial construction projects in Lahore on time and within budget. Offices, plazas, warehouses, and retail spaces — our team is equipped for large-scale builds.",
    features: [
      "Office buildings and plazas",
      "Retail and commercial spaces",
      "Warehouses and industrial units",
      "Multi-storey construction",
      "Project management and supervision",
    ],
  },
  {
    id: "renovation",
    name: "Renovation & Remodeling",
    description:
      "Transform your existing space with A.H Construction's renovation services in Lahore. We remodel kitchens, bathrooms, facades, and complete interiors.",
    features: [
      "Kitchen and bathroom remodeling",
      "Facade and exterior upgrades",
      "Interior redesign and finishing",
      "Structural modifications",
      "Heritage building restoration",
    ],
  },
];

export default function ServicesPage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    pageUrl: `${SITE_URL}/services`,
  });

  const serviceSchemas = services.map((s) =>
    buildServiceSchema(s.name, s.description)
  );

  return (
    <>
      <Script
        id="schema-services-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="beforeInteractive"
      />
      {serviceSchemas.map((schema, i) => (
        <Script
          key={services[i].id}
          id={`schema-service-${services[i].id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="beforeInteractive"
        />
      ))}
      <main>
        <section aria-labelledby="services-heading">
          <h1 id="services-heading">
            Construction Services in Lahore
          </h1>
          <p>
            A.H Construction offers comprehensive construction services across
            Lahore. Whether you need a concrete contractor, a home builder, or a
            full commercial construction team, we have the expertise to deliver.
          </p>
        </section>

        {services.map((service) => (
          <section key={service.id} id={service.id} aria-labelledby={`${service.id}-heading`}>
            <h2 id={`${service.id}-heading`}>{service.name}</h2>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        ))}

        <section aria-labelledby="services-cta-heading">
          <h2 id="services-cta-heading">Request a Construction Quote in Lahore</h2>
          <p>
            Contact A.H Construction today for a free consultation. Our team is
            ready to discuss your project requirements.
          </p>
          <a href="tel:+923145500113">+92 314 5500113</a>
          <a href="/contact">Get in Touch</a>
        </section>
      </main>
    </>
  );
}
