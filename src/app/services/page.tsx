import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
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

const serviceCategories = [
  {
    category: "Core Construction",
    description: "Complete building solutions from ground up — residential and commercial.",
    services: [
      {
        slug: "new-home-construction",
        name: "New Home Construction",
        description:
          "Turnkey residential construction across all Lahore housing schemes. From architectural planning and LDA approvals to grey structure, plumbing, electrical, and full finishing — all under one fixed-price contract.",
        features: [
          "Architectural design & LDA/WASA approvals",
          "Foundation, columns, beams & slab",
          "Brickwork, plaster & waterproofing",
          "Plumbing & electrical rough-in",
          "Full interior & exterior finishing",
          "10-year structural warranty",
        ],
      },
      {
        slug: "commercial-construction",
        name: "Commercial Construction",
        description:
          "End-to-end commercial construction for offices, plazas, retail units, and mixed-use buildings. We manage every phase from structural engineering to interior fit-out and final handover.",
        features: [
          "Office buildings & commercial plazas",
          "Retail and showroom construction",
          "Multi-storey RCC construction",
          "Basement construction & waterproofing",
          "MEP (mechanical, electrical & plumbing)",
          "Project management & site supervision",
        ],
      },
      {
        slug: "industrial-construction",
        name: "Industrial Construction",
        description:
          "Warehouses, factories, cold storage, and industrial units constructed to exact specifications with heavy-duty structural systems, high-bay racking provisions, and industrial-grade M&E.",
        features: [
          "Steel-frame & RCC warehouses",
          "Industrial floor slabs (heavy-duty)",
          "Loading docks & overhead doors",
          "Cold storage construction",
          "Admin block & welfare facilities",
          "Fire safety & drainage systems",
        ],
      },
    ],
  },
  {
    category: "Concrete & Structural",
    description: "Expert concrete and structural engineering for any scale of project.",
    services: [
      {
        slug: "foundation-work",
        name: "Foundation Work",
        description:
          "Solid foundation construction using soil-tested designs. We handle raft foundations, strip footings, pile caps, and pad foundations — with structural engineer certification on every pour.",
        features: [
          "Soil investigation & bore logs",
          "Raft, strip & pile cap foundations",
          "Anti-termite treatment",
          "Waterproofing membranes",
          "Compaction testing & concrete cube testing",
          "Structural engineer certification",
        ],
      },
      {
        slug: "rcc-structure",
        name: "RCC Structure",
        description:
          "Reinforced concrete columns, beams, slabs, and shear walls constructed to approved structural drawings using tested concrete mix ratios and certified rebar.",
        features: [
          "Column & beam construction",
          "One-way & two-way slabs",
          "Shear walls & lift cores",
          "Concrete mix design & cube testing",
          "Approved rebar bending schedules",
          "Shuttering, deshuttering & curing",
        ],
      },
      {
        slug: "retaining-walls",
        name: "Retaining Walls",
        description:
          "Structural retaining walls for basement construction, site levelling, and soil retention. Designed by engineers to withstand lateral earth pressure with proper drainage behind.",
        features: [
          "Gravity, cantilever & counterfort walls",
          "Basement retaining systems",
          "Drainage aggregate & weep holes",
          "Waterproofing & tanking",
          "Site levelling & cut-fill earthworks",
          "Structural engineering design included",
        ],
      },
    ],
  },
  {
    category: "Renovation & Interior",
    description: "Refresh, remodel, and transform existing spaces to modern standards.",
    services: [
      {
        slug: "home-renovation",
        name: "Home Renovation",
        description:
          "Complete home renovation services in Lahore — from full-house remodelling to targeted upgrades. We handle structural modifications, new layouts, replastering, new tiling, and all finishing trades.",
        features: [
          "Full-house & partial renovation",
          "Structural wall removal & opening",
          "Replastering & waterproofing",
          "New flooring, tiling & skirting",
          "Bathroom & kitchen upgrades",
          "External facade renovation",
        ],
      },
      {
        slug: "kitchen-renovation",
        name: "Kitchen Renovation",
        description:
          "Transform your kitchen with new cabinets, countertops, tiling, plumbing, and electrical layouts. We design and build modular kitchens tailored to your space and budget.",
        features: [
          "Modular kitchen design & installation",
          "Granite, quartz & laminate countertops",
          "Wall & floor tiling",
          "Plumbing relocation",
          "Appliance connections",
          "Under-cabinet lighting & exhaust",
        ],
      },
      {
        slug: "interior-finishing",
        name: "Interior Finishing",
        description:
          "Professional interior finishing — paint, tiling, woodwork, false ceilings, lighting, and all fit-out trades completed to a high standard by experienced craftsmen.",
        features: [
          "Emulsion & enamel paint",
          "Gypsum board false ceilings",
          "Timber, MDF & veneer woodwork",
          "Marble, granite & porcelain tiling",
          "Doors, windows & hardware installation",
          "Electrical & lighting fit-out",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  const localBusinessSchema = buildLocalBusinessSchema({
    pageUrl: `${SITE_URL}/services`,
  });

  const allServices = serviceCategories.flatMap((c) => c.services);
  const serviceSchemas = allServices.map((s) =>
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
          key={allServices[i].slug}
          id={`schema-service-${allServices[i].slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="beforeInteractive"
        />
      ))}

      {/* Page Header */}
      <section className="bg-[#1a3c5e] py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#e8a020] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">Services</span>
          </div>
          <h1 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Construction Services in Lahore
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Comprehensive construction, concrete, renovation, and fit-out services across Lahore. One company, every trade, zero compromise.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCategories.map((cat) => (
            <div key={cat.category}>
              <div className="mb-8">
                <p className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-1">Services</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c5e] mb-2">{cat.category}</h2>
                <p className="text-gray-600">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((service) => (
                  <article
                    key={service.slug}
                    id={service.slug}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="h-2 bg-[#1a3c5e]" />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#1a3c5e] mb-3">{service.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-[#e8a020] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#e8a020] hover:text-amber-600 transition-colors"
                      >
                        Get a Quote for this Service
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="py-16 bg-[#1a3c5e]" aria-labelledby="services-cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-heading" className="text-3xl font-bold text-white mb-4">
            Request a Construction Quote in Lahore
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Tell us about your project and our team will prepare a detailed estimate — free and with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+923145500113"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +92 314 5500113
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
