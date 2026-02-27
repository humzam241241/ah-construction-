import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Construction Company in Lahore`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    site: "@ahconstruction",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <StickyCTA />
        <WhatsAppButton />
      </body>
    </html>
  );
}
