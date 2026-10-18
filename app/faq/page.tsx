import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Quotes, service areas, junk rules, payments and more from Tayo Services & Maintenance.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <PageHero
        eyebrow="Help"
        title="Frequently Asked Questions"
        subtitle="Short answers. Call or text if you need something else."
      />
      <section className="section-pad">
        <div className="mx-auto w-[min(800px,92%)]">
          <FaqAccordion />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
