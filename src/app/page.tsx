import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildLocalBusinessSchema } from "@/lib/schema/localBusiness";

export const metadata: Metadata = buildMetadata({
  title: "Construction Company in Lahore",
  description:
    "A.H Construction is Lahore's trusted construction company. We build homes, handle concrete work, and deliver commercial projects on time. Call +92 314 5500113.",
  path: "/",
  keywords: [
    "construction company in Lahore",
    "home building in Lahore",
    "concrete contractor Lahore",
    "building contractor Lahore",
    "AH Construction Lahore",
    "construction services Lahore Pakistan",
  ],
});

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "350+", label: "Happy Clients" },
  { value: "100%", label: "Licensed & Insured" },
];

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "New Construction & Development",
    description: "Custom residential construction from foundation to finishing. Fixed-price contracts with dedicated site engineers across all Lahore housing schemes.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Renovation & Remodeling",
    description: "Upgrade residential and commercial spaces with structural improvements, remodeling, and modern interior and exterior finishes.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Infrastructure & Civil Works",
    description: "Roads, drainage, site development, retaining structures, and reinforced civil works delivered to engineering standards.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: "Maintenance & Repair",
    description: "Planned and emergency maintenance support for structural, waterproofing, finishing, and facility repair requirements.",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14-6H5m14 12H5m2 4h10" />
      </svg>
    ),
    title: "General Contracting & Management",
    description: "End-to-end project coordination, contractor management, planning, quality checks, and on-site execution control.",
    href: "/services",
  },
];

const clientTypes = [
  "Government Projects",
  "Semi-Government",
  "NGOs",
  "Banks",
  "Private Companies",
  "Residential Clients",
  "Commercial Clients",
];

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Licensed & Insured",
    description: "Fully licensed contractors with comprehensive insurance coverage. Every project complies with LDA and WASA requirements.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-Time Delivery",
    description: "We maintain strict project timelines with dedicated site engineers monitoring every milestone to avoid delays.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Transparent Pricing",
    description: "Detailed BOQ before contract signing. Fixed-price agreements with no hidden costs or surprise bills mid-construction.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Premium Materials",
    description: "We source only quality-certified materials — Bestway cement, AF/Amreli steel, first-class brick — backed by supplier warranties.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Real-Time Updates",
    description: "Regular progress reports, WhatsApp updates, and site visit access so you are always informed about your build.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "10-Year Warranty",
    description: "We stand behind our structural work with a 10-year warranty on grey structure and a 12-month defect liability period.",
  },
];

const featuredProjects = [
  {
    title: "University of the Punjab — QAC",
    category: "Institutional",
    detail: "Construction of TWO Examination Halls at First Floor of IAS; Employee Apartments (J-Type) Block H & J at QAC.",
    duration: "Completed 2015–2016",
  },
  {
    title: "Punjab Daanish Schools — Bhakkar",
    category: "Government",
    detail: "Establishment of Daanish School at Mankera Dist. Bhakkar (Boys & Girls Campus packages).",
    duration: "Completed 2024–2025",
  },
  {
    title: "IDAP — Tertiary Care Hospitals, Lahore",
    category: "Government",
    detail: "Construction of Hepatitis Prevention & Treatment Clinic (HPTC) at existing building of 04 tertiary care hospitals.",
    duration: "Completed Jun 2020",
  },
];

export default function HomePage() {
  const schema = buildLocalBusinessSchema({ pageUrl: "https://ahconstruction.pk/" });

  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        strategy="beforeInteractive"
      />

      {/* Hero */}
      <section className="relative bg-[#1a3c5e] overflow-hidden" aria-labelledby="hero-heading">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#e8a020]/20 border border-[#e8a020]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#e8a020] rounded-full animate-pulse" />
              <span className="text-[#e8a020] text-sm font-medium">Trusted Construction Partner Since 2005</span>
            </div>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Pakistan&apos;s{" "}
              <span className="text-[#e8a020]">Skyline</span>{" "}
              One Project at a Time
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              From Punjab to projects across Pakistan, A.H Construction delivers reliable construction, renovation, infrastructure, maintenance, and project management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors text-base"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+923145500113"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0314-5500113
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-bold text-[#1a3c5e]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-14 bg-white border-y border-gray-100" aria-labelledby="client-types-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="client-types-heading" className="text-2xl md:text-3xl font-bold text-[#1a3c5e] mb-2">
              Who We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with government, semi-government, NGOs, banks, private companies, and residential and commercial clients.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {clientTypes.map((client) => (
              <span key={client} className="text-sm bg-[#1a3c5e]/10 text-[#1a3c5e] px-3 py-1.5 rounded-full font-medium">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50" aria-labelledby="services-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-2">What We Build</p>
            <h2 id="services-preview-heading" className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mb-4">
              Construction Services in Lahore
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our services are prioritized around new development, renovation, civil infrastructure, maintenance, and full contracting management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#e8a020]/30 transition-all"
              >
                <div className="w-14 h-14 bg-[#1a3c5e]/10 rounded-xl flex items-center justify-center text-[#1a3c5e] mb-5 group-hover:bg-[#1a3c5e] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[#1a3c5e] text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-[#e8a020] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a3c5e] text-[#1a3c5e] font-semibold rounded-lg hover:bg-[#1a3c5e] hover:text-white transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-2">Our Promise</p>
            <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mb-4">
              Why Lahore Chooses A.H Construction
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over two decades of delivering exceptional construction across Lahore&apos;s most prestigious developments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#1a3c5e]/20 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-[#e8a020]/10 rounded-xl flex items-center justify-center text-[#e8a020] shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a3c5e] mb-1">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-2">Our Work</p>
            <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of completed projects across Punjab and Pakistan — from residential builds to large-scale commercial developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#1a3c5e] to-[#0f2540] flex items-end p-5">
                  <span className="inline-block bg-[#e8a020] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a3c5e] text-base mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{project.detail}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duration: {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a3c5e] text-[#1a3c5e] font-semibold rounded-lg hover:bg-[#1a3c5e] hover:text-white transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-20 bg-[#1a3c5e]" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today for a free consultation and detailed estimate. No obligation, no pressure — just honest advice from experienced builders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors text-base"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+923145500113"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0314-5500113
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
