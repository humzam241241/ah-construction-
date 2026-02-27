import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/seo/metadata";
import { buildLocalBusinessSchema } from "@/lib/schema/localBusiness";

export const metadata: Metadata = buildMetadata({
  title: "Contact A.H Construction — Construction Company in Lahore",
  description:
    "Get in touch with A.H Construction in Lahore. Call +92 314 5500113 or send a message to get a free quote for home building, concrete work, or commercial construction.",
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
      telephone: "+92-314-5500113",
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
      <main>
        <section aria-labelledby="contact-heading">
          <h1 id="contact-heading">
            Contact A.H Construction — Lahore
          </h1>
          <p>
            Ready to start your construction project in Lahore? Get in touch
            with A.H Construction for a free consultation and quote.
          </p>
        </section>

        <section aria-labelledby="contact-details-heading">
          <h2 id="contact-details-heading">Our Contact Information</h2>
          <address>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+923145500113">+92 314 5500113</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@ahconstruction.pk">info@ahconstruction.pk</a>
            </p>
            <p>
              <strong>Location:</strong> Lahore, Punjab, Pakistan
            </p>
          </address>
        </section>

        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading">Send Us a Message</h2>
          <form
            action="/api/contact"
            method="POST"
            aria-label="Contact form for A.H Construction"
          >
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                autoComplete="tel"
                placeholder="+92 300 0000000"
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="service">Service Required</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                <option value="home-building">Home Building in Lahore</option>
                <option value="concrete">Concrete Contractor Lahore</option>
                <option value="commercial">Commercial Construction</option>
                <option value="renovation">Renovation &amp; Remodeling</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Describe your construction project..."
              />
            </div>
            <button type="submit">Submit Request</button>
          </form>
        </section>

        <section aria-labelledby="service-area-heading">
          <h2 id="service-area-heading">Service Areas in Lahore</h2>
          <ul>
            <li>DHA Lahore</li>
            <li>Gulberg</li>
            <li>Bahria Town Lahore</li>
            <li>Model Town</li>
            <li>Johar Town</li>
            <li>Cantt</li>
            <li>Wapda Town</li>
            <li>All areas across Lahore</li>
          </ul>
        </section>
      </main>
    </>
  );
}
