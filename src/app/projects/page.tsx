import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import ScrollReveal, { StaggerContainer } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Construction Projects — Portfolio",
  description:
    "Browse A.H Construction's completed projects across Punjab and Pakistan — universities, government, banks, and institutional builds.",
  path: "/projects",
  keywords: [
    "construction projects Lahore",
    "construction portfolio Punjab",
    "government construction projects Pakistan",
    "AH Construction portfolio",
  ],
});

/** Completed projects — employer, project name, and completion date only (no financial data). */
const completedProjects = [
  { employer: "University of the Punjab", project: "Construction of TWO Examination Halls at First Floor of IAS at QAC", completed: "Nov 19, 2015" },
  { employer: "University of the Punjab", project: "Construction of Employee Apartments (J-Type) Block H & J at QAC", completed: "Aug 25, 2016" },
  { employer: "University of Engineering & Technology, Lahore", project: "Balance Work of E & F Type 04 Nos. Units (16 No. Residences) Phase-1 at KSK Campus of UET, Lahore", completed: "14 Dec 2019" },
  { employer: "PRFTC (Pvt.) Ltd.", project: "Construction of Yousafwala New Railway Station Building", completed: "21 Dec 2018" },
  { employer: "Punjab Daanish Schools and Centers of Excellence", project: "Establishment of Center of Excellence at Govt. Guru Nanak Boys High School Nankana Sahib", completed: "22 Jul 2019" },
  { employer: "Infrastructure Development Authority of the Punjab", project: "Construction of Hepatitis Prevention & Treatment Clinic (HPTC) at Existing Building of 04 Tertiary Care Hospitals in Lahore", completed: "23 Jun 2020" },
  { employer: "University of Gujrat", project: "Construction of Academic Block-2 & Girls Hostel at University of Gujrat Sub Campus Narowal", completed: "29 May 2020" },
  { employer: "Pakistan Agricultural Storage & Services Corporation Ltd. (PASSCO)", project: "Construction of 3x Godowns at Musa Virk, PASSCO Khanewal Zone", completed: "10 Apr 2021" },
  { employer: "University of Engineering & Technology, Lahore", project: "Remaining Work for the Addition of First Block in Mechanical, Mechatronics & Manufacturing Engineering Department at New Campus (KSK) of UET, Lahore", completed: "24 Oct 2024" },
  { employer: "Punjab Daanish Schools and Centers of Excellence", project: "Establishment of Daanish School at Mankera Dist. Bhakkar Package-3 (Girls Campus)", completed: "12 Nov 2024" },
  { employer: "Punjab Daanish Schools and Centers of Excellence", project: "Establishment of Daanish School at Mankera Dist. Bhakkar Package-2 (Boys Campus)", completed: "30 Dec 2025" },
  { employer: "Allied Bank Ltd.", project: "ABL Satellite Town, Rahim Yar Khan (0932)", completed: "—" },
  { employer: "Allied Bank Ltd.", project: "ABL Commercial Market, Farid Town Branch (1202), Region Sahiwal", completed: "—" },
];

export default function ProjectsPage() {
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
            Completed projects for universities, government, and institutional clients across Punjab and Pakistan.
          </p>
          <div className="mt-6 text-[#e8a020] font-semibold">
            {completedProjects.length} projects completed
          </div>
        </div>
      </section>

      {/* Project cards */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100} animation="fade-up" duration={700}>
            {completedProjects.map((item, i) => (
              <article
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-2 bg-[#1a3c5e]" />
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs font-semibold text-[#e8a020] uppercase tracking-wider mb-2">
                    {item.employer}
                  </span>
                  <h3 className="font-bold text-[#1a3c5e] text-base mb-3 leading-snug">
                    {item.project}
                  </h3>
                  <div className="mt-auto flex items-center gap-1.5 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
                    </svg>
                    Completed: {item.completed}
                  </div>
                </div>
              </article>
            ))}
          </StaggerContainer>
        </div>
      </main>

      {/* CTA */}
      <section className="py-16 bg-[#1a3c5e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="brick-drop" duration={900}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Add Your Project to This List?
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Get a free consultation and estimate from our experienced construction team.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={300}>
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
