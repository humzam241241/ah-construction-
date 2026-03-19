import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { buildMetadata, SITE_URL } from "@/lib/seo/metadata";
import { buildLocalBusinessSchema } from "@/lib/schema/localBusiness";
import ScrollReveal, { StaggerContainer } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact A.H Construction — Construction Company in Lahore",
  description:
    "Get in touch with A.H Construction. Call 042-35299722 or 0314-5500113, or send a message to request a quote for construction, renovation, infrastructure, and maintenance work.",
  path: "/contact",
  keywords: [
    "contact construction company Lahore",
    "AH Construction contact",
    "construction quote Lahore",
    "hire construction company Lahore",
    "concrete contractor Lahore contact",
    "home building quote Lahore",
  ],
});

const serviceAreas = [
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Karachi",
  "Peshawar",
  "Punjab (All Major Cities)",
];

import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  const schema = buildLocalBusinessSchema({ pageUrl: `${SITE_URL}/contact` });

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact A.H Construction",
    description:
      "Contact page for A.H Construction — construction company in Lahore, Pakistan.",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "A.H Construction",
      telephone: ["+92-42-35299722", "+92-314-5500113"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
    },
  };

  return (
    <>
      <Script
        id="schema-contact-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="schema-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        strategy="beforeInteractive"
      />

      {/* Page Header */}
      <section className="bg-[#1a3c5e] py-16" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#e8a020] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">Contact</span>
          </div>
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact A.H Construction
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Ready to build? Get in touch for a free consultation and detailed estimate. Our team responds within 24 hours.
          </p>
        </div>
      </section>

      <main className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Form */}
            <ScrollReveal animation="slide-left" duration={800}>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-[#1a3c5e] mb-2">Send Us a Message</h2>
                <p className="text-gray-600 text-sm mb-7">
                  Fill in the form below and our team will get back to you within 24 hours with a tailored response.
                </p>
                <ContactForm />
              </div>
            </div>
            </ScrollReveal>

            {/* Sidebar: contact info + service areas */}
            <StaggerContainer className="space-y-6" staggerDelay={150} animation="slide-right" duration={700}>
              {/* Contact details */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-[#1a3c5e] mb-5">Contact Information</h2>
                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#1a3c5e]/10 rounded-lg flex items-center justify-center text-[#1a3c5e] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                      <div className="space-y-1">
                        <a href="tel:+924235299722" className="block font-semibold text-[#1a3c5e] hover:text-[#e8a020] transition-colors">
                          042-35299722
                        </a>
                        <a href="tel:+923145500113" className="block font-semibold text-[#1a3c5e] hover:text-[#e8a020] transition-colors">
                          0314-5500113
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#1a3c5e]/10 rounded-lg flex items-center justify-center text-[#1a3c5e] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <a href="mailto:ahc_786@yahoo.com" className="font-semibold text-[#1a3c5e] hover:text-[#e8a020] transition-colors text-sm">
                        ahc_786@yahoo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#1a3c5e]/10 rounded-lg flex items-center justify-center text-[#1a3c5e] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Location</p>
                      <p className="font-semibold text-[#1a3c5e] text-sm">Lahore, Punjab, Pakistan</p>
                    </div>
                  </div>
                </address>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-[#1a3c5e] mb-4">Business Hours</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday – Friday</span>
                    <span className="font-semibold text-[#1a3c5e]">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-[#1a3c5e]">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-[#1a3c5e]">10:00 AM – 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Emergency site visits available 7 days a week
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-[#1a3c5e] mb-4">Service Areas</h2>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span key={area} className="text-xs bg-[#1a3c5e]/10 text-[#1a3c5e] px-2.5 py-1 rounded-full font-medium">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  We mainly serve Punjab and also execute projects across Pakistan.
                </p>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </main>
    </>
  );
}
