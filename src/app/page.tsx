import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildLocalBusinessSchema } from "@/lib/schema/localBusiness";
import ScrollVideoHero from "@/components/hero/ScrollVideoHero";
import HomePageContent from "@/components/home/HomePageContent";

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

      {/* Hero: scroll-driven video frames when available, else static hero */}
      <ScrollVideoHero />

      {/* Animated page content */}
      <HomePageContent />
    </>
  );
}
