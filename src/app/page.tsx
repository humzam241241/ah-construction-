import type { Metadata } from "next";
import Script from "next/script";
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
      <main>
        <section aria-labelledby="hero-heading">
          <h1 id="hero-heading">
            Construction Company in Lahore — A.H Construction
          </h1>
          <p>
            Building dreams across Lahore since 2005. From custom homes to
            large-scale commercial projects, A.H Construction delivers quality
            craftsmanship on every build.
          </p>
          <a href="/contact">Get a Free Quote</a>
        </section>

        <section aria-labelledby="services-intro-heading">
          <h2 id="services-intro-heading">Our Construction Services</h2>
          <ul>
            <li>Home Building in Lahore</li>
            <li>Concrete Contractor Services in Lahore</li>
            <li>Commercial Construction</li>
            <li>Renovation &amp; Remodeling</li>
          </ul>
          <a href="/services">View All Services</a>
        </section>

        <section aria-labelledby="why-us-heading">
          <h2 id="why-us-heading">Why Choose A.H Construction?</h2>
          <ul>
            <li>20+ years of construction experience in Lahore</li>
            <li>Licensed and insured contractors</li>
            <li>On-time project delivery</li>
            <li>Transparent pricing with no hidden costs</li>
          </ul>
        </section>

        <section aria-labelledby="cta-heading">
          <h2 id="cta-heading">Start Your Construction Project Today</h2>
          <p>
            Ready to build? Contact our team in Lahore for a free consultation
            and estimate.
          </p>
          <a href="tel:+923145500113">+92 314 5500113</a>
          <a href="/contact">Contact Us</a>
        </section>
      </main>
    </>
  );
}
