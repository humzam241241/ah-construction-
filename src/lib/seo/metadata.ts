import type { Metadata } from "next";

export const SITE_URL = "https://ahconstruction.pk";
export const SITE_NAME = "A.H Construction";
export const SITE_DESCRIPTION =
  "A.H Construction — trusted construction company in Lahore, Pakistan. Specializing in home building, concrete work, and commercial construction since 2005.";

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-default.jpg`,
  width: 1200,
  height: 630,
  alt: "A.H Construction — Construction Company in Lahore",
};

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  noIndex?: boolean;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  keywords = [],
}: BuildMetadataOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length ? keywords : undefined,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url: canonical,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width ?? 1200,
          height: ogImage.height ?? 630,
          alt: ogImage.alt ?? fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
      site: "@ahconstruction",
      creator: "@ahconstruction",
    },
  };
}
