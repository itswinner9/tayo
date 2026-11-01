import type { Metadata } from "next";
import { Azeret_Mono, Syncopate } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCTAs } from "@/components/StickyMobileCTAs";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { TrackingScripts } from "@/components/seo/TrackingScripts";
import {
  GSC_VERIFICATION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/siteConfig";
import "./globals.css";

/**
 * Syncopate: wide geometric display face (Microgramma-like) with true bold (700).
 */
const microgramma = Syncopate({
  variable: "--font-microgramma",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const azeret = Azeret_Mono({
  variable: "--font-azeret",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Handyman Surrey BC | Repairs, Cleaning & Junk Removal | Tayo",
    template: "%s | Tayo Services",
  },
  description:
    "Local handyman for homes and rentals in Surrey and the Lower Mainland. Plus cleaning, junk removal and small moves. Free quotes.",
  keywords: [
    "handyman Surrey",
    "handyman Lower Mainland",
    "handyman Abbotsford",
    "move-out cleaning Surrey",
    "junk removal Surrey",
    "small moves Surrey",
    "rental unit turnover",
    "strata maintenance BC",
  ],
  applicationName: SITE_NAME,
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    title: "Handyman, Cleaning & Junk Removal in the Lower Mainland | Tayo",
    description:
      "One call. One price. Done right. Local handyman, cleaning, junk removal and small moves. Free quotes.",
    locale: "en_CA",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: SITE_NAME },
      { url: "/images/logo-v3.png", alt: "Tayo logo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  alternates: { canonical: SITE_URL },
  verification: GSC_VERIFICATION
    ? { google: GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${microgramma.variable} ${azeret.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="flex min-h-full flex-col bg-white text-tayo-black pb-20 md:pb-0">
        <TrackingScripts />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTAs />
      </body>
    </html>
  );
}
