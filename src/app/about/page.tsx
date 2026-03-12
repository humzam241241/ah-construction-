import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About A.H Construction — Lahore's Trusted Builder Since 2005",
  description:
    "Learn about A.H Construction — an experienced construction company delivering residential, commercial, infrastructure, and renovation projects across Punjab and Pakistan.",
  path: "/about",
  keywords: [
    "about AH Construction Lahore",
    "construction company history Lahore",
    "experienced builder Lahore",
    "licensed construction contractor Pakistan",
  ],
});

const milestones = [
  { year: "2005", event: "Founded in Lahore with a focus on residential construction in DHA and Gulberg." },
  { year: "2009", event: "Expanded into commercial construction, completing first multi-storey plaza in Johar Town." },
  { year: "2013", event: "Launched dedicated concrete & structural division to serve industrial clients." },
  { year: "2017", event: "Reached 200 completed projects milestone. Opened in-house architecture & design team." },
  { year: "2020", event: "Began major renovation and interior fit-out division; introduced fixed-price contracts." },
  { year: "2025", event: "Surpassed 500 completed projects across Lahore with zero structural defect claims." },
];

const team = [
  {
    name: "Ahmad Hassan",
    role: "Founder & Managing Director",
    bio: "20+ years of hands-on construction experience across residential, commercial, and industrial sectors in Lahore.",
  },
  {
    name: "Engr. Usman Malik",
    role: "Chief Structural Engineer",
    bio: "BSc Civil Engineering (UET Lahore). 15 years specialising in RCC design, foundation engineering, and structural inspections.",
  },
  {
    name: "Sana Tariq",
    role: "Head of Architecture & Design",
    bio: "Architect (NCA Lahore). Leads all residential and commercial design work — floor plans, elevations, and interior concepts.",
  },
  {
    name: "Bilal Raza",
    role: "Project Manager",
    bio: "PMP certified. Manages simultaneous projects across Lahore and Punjab, ensuring on-time delivery and quality control.",
  },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Integrity",
    description: "Honest pricing, transparent communication, and no hidden costs — ever.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Quality",
    description: "We never cut corners. Every pour, every joint, every finish is inspected before sign-off.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "People First",
    description: "We build lasting relationships with clients, treating every project like our own home.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Innovation",
    description: "Modern construction techniques, digital project tracking, and continuous improvement.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1a3c5e] py-16" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#e8a020] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">About</span>
          </div>
          <h1 id="about-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            About A.H Construction
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Twenty years of building Lahore — one quality project at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mb-6">
                Built on Trust, Delivered with Craft
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A.H Construction was founded in 2005 by Ahmad Hassan with a simple mission: deliver construction projects in Lahore that clients are proud to own for generations. Starting with residential work in DHA and Gulberg, we quickly earned a reputation for transparent pricing, reliable timelines, and uncompromising build quality.
                </p>
                <p>
                  Over two decades, we expanded our capabilities to cover commercial buildings, industrial warehouses, concrete structural work, and complete renovation services. Today, our team of 80+ professionals — engineers, architects, site supervisors, and skilled craftsmen — operates across Punjab and other regions of Pakistan.
                </p>
                <p>
                  With over 500 completed projects and zero structural defect claims, we are Lahore&apos;s construction company of choice for clients who value quality over shortcuts.
                </p>
                <p>
                  We serve government and semi-government departments, NGOs, banks, private companies, and both residential and commercial clients.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Years in Business" },
                { value: "500+", label: "Projects Completed" },
                { value: "80+", label: "Team Members" },
                { value: "350+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                  <div className="text-4xl font-bold text-[#1a3c5e] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-2">What We Stand For</p>
            <h2 className="text-3xl font-bold text-[#1a3c5e]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-[#e8a020]/10 rounded-xl flex items-center justify-center text-[#e8a020] mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-[#1a3c5e] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-2">Our Journey</p>
            <h2 className="text-3xl font-bold text-[#1a3c5e]">Two Decades of Building Lahore</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative flex gap-6 pl-16">
                  <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#e8a020] rounded-full border-4 border-white shadow" />
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 flex-1 border border-gray-100">
                    <span className="inline-block bg-[#1a3c5e] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#e8a020] font-semibold text-sm uppercase tracking-wider mb-2">The People</p>
            <h2 className="text-3xl font-bold text-[#1a3c5e]">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-[#1a3c5e] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-[#1a3c5e] mb-0.5">{member.name}</h3>
                <p className="text-[#e8a020] text-xs font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a3c5e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Work With Lahore&apos;s Most Trusted Builder</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            20+ years of experience, 500+ completed projects, and a team that treats your build like their own. Let&apos;s get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e8a020] text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
            >
              Get a Free Quote
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
