import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Careers at A.H Construction",
  description:
    "Explore careers at A.H Construction. We hire engineers, site supervisors, and support staff for projects across Punjab and Pakistan.",
  path: "/careers",
  keywords: [
    "construction jobs Pakistan",
    "civil engineer jobs Lahore",
    "site supervisor jobs",
    "AH Construction careers",
  ],
});

const openings = [
  {
    title: "Civil Site Engineer",
    type: "Full-time",
    location: "Punjab / Project-based",
    summary:
      "Manage site execution, quality checks, and progress reporting for residential and commercial projects.",
  },
  {
    title: "Project Coordinator",
    type: "Full-time",
    location: "Lahore",
    summary:
      "Support planning, documentation, contractor coordination, and client communication across ongoing sites.",
  },
  {
    title: "Quantity Surveyor",
    type: "Full-time",
    location: "Lahore",
    summary:
      "Prepare BOQs, support procurement, and track quantities and execution milestones.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-[#1a3c5e] py-16" aria-labelledby="careers-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#e8a020] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">Careers</span>
          </div>
          <h1 id="careers-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Careers at A.H Construction
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Join our team of engineers, supervisors, and skilled professionals working on projects across Punjab and Pakistan.
          </p>
        </div>
      </section>

      <main className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#1a3c5e] mb-3">How to Apply</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Send your CV and a short introduction to <a className="text-[#1a3c5e] font-semibold hover:text-[#e8a020]" href="mailto:ahc_786@yahoo.com">ahc_786@yahoo.com</a>.
              Please include your role of interest and preferred location in the subject line.
            </p>
            <p className="text-sm text-gray-500">
              You can also call <a className="font-semibold text-[#1a3c5e] hover:text-[#e8a020]" href="tel:+924235299722">042-35299722</a> or{" "}
              <a className="font-semibold text-[#1a3c5e] hover:text-[#e8a020]" href="tel:+923145500113">0314-5500113</a> for hiring queries.
            </p>
          </div>

          <div className="space-y-5">
            {openings.map((opening) => (
              <article key={opening.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[#1a3c5e]">{opening.title}</h3>
                  <span className="text-xs bg-[#1a3c5e]/10 text-[#1a3c5e] px-2.5 py-1 rounded-full font-semibold">
                    {opening.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{opening.location}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{opening.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
