import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Construction Projects in Lahore — Portfolio",
  description:
    "Browse A.H Construction's portfolio of completed projects in Lahore — residential homes, commercial plazas, industrial warehouses, and renovation work across Punjab.",
  path: "/projects",
  keywords: [
    "construction projects Lahore",
    "home construction portfolio Lahore",
    "commercial building projects Lahore",
    "AH Construction portfolio",
  ],
});

type ProjectCategory = "All" | "Residential" | "Commercial" | "Industrial" | "Renovation";

const projects = [
  {
    id: 1,
    title: "5-Kanal Villa — DHA Phase 6",
    category: "Residential" as ProjectCategory,
    location: "DHA Phase 6, Lahore",
    duration: "14 months",
    area: "5 Kanal",
    description:
      "Turnkey construction of a double-storey 5-kanal villa including grey structure, complete finishing, modular kitchen, home theatre room, and landscaped boundary.",
    highlights: ["Double basement parking", "Imported marble flooring", "Smart home wiring", "Swimming pool provision"],
  },
  {
    id: 2,
    title: "Commercial Plaza — Gulberg III",
    category: "Commercial" as ProjectCategory,
    location: "Gulberg III, Lahore",
    duration: "22 months",
    area: "6 Floors + Basement",
    description:
      "6-storey mixed-use commercial plaza with basement parking, ground-floor retail, and upper-floor offices. RCC frame with curtain wall glazing facade.",
    highlights: ["Basement + 6 floors", "80 retail & office units", "Central HVAC system", "Fire suppression system"],
  },
  {
    id: 3,
    title: "Industrial Warehouse — Sundar Estate",
    category: "Industrial" as ProjectCategory,
    location: "Sundar Industrial Estate, Lahore",
    duration: "9 months",
    area: "25,000 sq ft",
    description:
      "Steel portal frame warehouse with RCC boundary wall, loading bays, overhead cranes provision, admin block, and full site drainage.",
    highlights: ["Steel portal frame", "5 loading docks", "Overhead crane rails", "25,000 sq ft clear span"],
  },
  {
    id: 4,
    title: "10-Marla Home — Bahria Town",
    category: "Residential" as ProjectCategory,
    location: "Bahria Town, Lahore",
    duration: "10 months",
    area: "10 Marla",
    description:
      "Custom-designed double-storey home in Bahria Town. Full construction from grey structure to interior finishing with imported sanitary fittings and designer tiles.",
    highlights: ["Custom architectural design", "Italian tile flooring", "Herringbone woodwork", "Solar-ready roof"],
  },
  {
    id: 5,
    title: "Full Home Renovation — Model Town",
    category: "Renovation" as ProjectCategory,
    location: "Model Town, Lahore",
    duration: "4 months",
    area: "1 Kanal",
    description:
      "Complete renovation of a 1960s colonial-era home in Model Town — structural repairs, full replaster, new electrical & plumbing, marble floors, and a modern kitchen.",
    highlights: ["Heritage facade preserved", "Full MEP replacement", "New kitchen & bathrooms", "Structural repair & waterproofing"],
  },
  {
    id: 6,
    title: "Office Building — Johar Town",
    category: "Commercial" as ProjectCategory,
    location: "Johar Town, Lahore",
    duration: "16 months",
    area: "4 Floors",
    description:
      "4-storey purpose-built office building with open-plan floor plates, raised access flooring, and facade-integrated branding zones for a corporate client.",
    highlights: ["Open-plan office floors", "Raised access flooring", "Rooftop cafeteria", "EV charging bays"],
  },
  {
    id: 7,
    title: "Cold Storage Facility — Raiwind Road",
    category: "Industrial" as ProjectCategory,
    location: "Raiwind Road, Lahore",
    duration: "7 months",
    area: "12,000 sq ft",
    description:
      "Insulated cold storage facility with PEB steel structure, PUF panel walls and roof, refrigeration machine rooms, and temperature monitoring systems.",
    highlights: ["PEB steel structure", "PUF insulated panels", "Multi-temp zones", "HACCP-compliant design"],
  },
  {
    id: 8,
    title: "Kitchen & Bath Renovation — DHA",
    category: "Renovation" as ProjectCategory,
    location: "DHA Phase 5, Lahore",
    duration: "6 weeks",
    area: "Kitchen + 3 Baths",
    description:
      "High-end kitchen and bathroom renovation with quartz countertops, custom cabinetry, heated floors, and rain showers. Completed on a tight timeline with zero disruption.",
    highlights: ["Quartz countertops", "Custom modular kitchen", "Rainfall showers", "Heated bathroom floors"],
  },
  {
    id: 9,
    title: "20-Marla Home — Wapda Town",
    category: "Residential" as ProjectCategory,
    location: "Wapda Town, Lahore",
    duration: "12 months",
    area: "20 Marla",
    description:
      "Contemporary double-storey home with a rooftop terrace, home office suite, and a fully equipped gym room. Delivered at a fixed price with a 3-month early handover.",
    highlights: ["Rooftop terrace", "Home gym room", "Home office suite", "3 months ahead of schedule"],
  },
];

const categories: ProjectCategory[] = ["All", "Residential", "Commercial", "Industrial", "Renovation"];

const categoryColors: Record<ProjectCategory, string> = {
  All: "bg-gray-100 text-gray-700",
  Residential: "bg-blue-100 text-blue-800",
  Commercial: "bg-emerald-100 text-emerald-800",
  Industrial: "bg-orange-100 text-orange-800",
  Renovation: "bg-purple-100 text-purple-800",
};

const categoryBannerColors: Record<ProjectCategory, string> = {
  All: "from-[#1a3c5e] to-[#0f2540]",
  Residential: "from-[#1a3c5e] to-blue-900",
  Commercial: "from-emerald-900 to-emerald-800",
  Industrial: "from-orange-900 to-orange-800",
  Renovation: "from-purple-900 to-purple-800",
};

export default function ProjectsPage() {
  const grouped = categories.slice(1).map((cat) => ({
    category: cat,
    projects: projects.filter((p) => p.category === cat),
  }));

  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1a3c5e] py-16" aria-labelledby="projects-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#e8a020] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">Projects</span>
          </div>
          <h1 id="projects-page-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Project Portfolio
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Over 500 completed projects across Lahore — homes, commercial buildings, industrial facilities, and renovations built to last.
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { value: "200+", label: "Homes Built" },
              { value: "150+", label: "Commercial Projects" },
              { value: "80+", label: "Industrial Builds" },
              { value: "100+", label: "Renovations" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#e8a020]">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {grouped.map(({ category, projects: catProjects }) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl font-bold text-[#1a3c5e]">{category} Projects</h2>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category]}`}>
                  {catProjects.length} projects
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProjects.map((project) => (
                  <article key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className={`h-44 bg-gradient-to-br ${categoryBannerColors[project.category]} flex items-end p-4`}>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category]}`}>
                          {project.category}
                        </span>
                        <span className="text-xs text-white/70">{project.area}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#1a3c5e] text-base mb-1">{project.title}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                        <span className="mx-1">·</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {project.duration}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.highlights.map((h) => (
                          <span key={h} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="py-16 bg-[#1a3c5e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Add Your Project to This List?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Get a free consultation and estimate from Lahore&apos;s most experienced construction team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
