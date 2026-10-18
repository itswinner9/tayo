import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhoneCta } from "@/components/PhoneCta";
import { QuoteForm } from "@/components/QuoteForm";
import {
  EMAIL,
  HAS_PHONE,
  HOURS_DISPLAY,
  MAP_EMBED_URL,
  SITE_URL,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Get Your Free Quote",
  description:
    "Tell Tayo what you need for cleaning, junk removal, repairs or a small move in Surrey and the Lower Mainland.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get Your Free Quote"
        subtitle="Tell us what you need and we will reply fast."
        showCtas={false}
        imageSrc="/images/hero/handyman-hero.jpg"
        imageAlt="Handyman ready for a quote visit"
      />
      <section className="section-pad">
        <div className="mx-auto grid w-[min(1100px,92%)] gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <QuoteForm />
          </div>
          <aside className="space-y-8 border border-black/10 p-8">
            {HAS_PHONE ? (
              <div>
                <h2 className="font-display text-lg tracking-tight">
                  Call or text
                </h2>
                <p className="mt-3">
                  <PhoneCta mode="display" variant="inline" className="text-lg" />
                </p>
                <p className="mt-2">
                  <PhoneCta mode="sms" variant="inline" className="text-tayo-black" />
                </p>
              </div>
            ) : null}
            <div>
              <h2 className="font-display text-lg tracking-tight">Email</h2>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 block text-tayo-blue hover:underline"
              >
                {EMAIL}
              </a>
            </div>
            <div>
              <h2 className="font-display text-lg tracking-tight">Hours</h2>
              <p className="mt-3 text-tayo-grey">{HOURS_DISPLAY}</p>
            </div>
            <div>
              <h2 className="font-display text-lg tracking-tight">
                Service area
              </h2>
              <p className="mt-3 text-tayo-grey">
                Mobile crew based in Surrey covering Langley, Burnaby,
                Vancouver, Richmond, Delta, White Rock, Coquitlam, New
                Westminster, Abbotsford and nearby.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg tracking-tight">
                Service area map
              </h2>
              <p className="mt-2 text-sm text-tayo-grey">
                We come to you across the Lower Mainland — not a walk-in shop.
              </p>
              <div className="mt-3 overflow-hidden border border-black/10">
                <iframe
                  title="Tayo service area map, Surrey BC and Lower Mainland"
                  src={MAP_EMBED_URL}
                  className="aspect-[4/3] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
