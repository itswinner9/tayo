import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Property Managers & Landlords",
  description:
    "Priority booking, simple invoicing and unit turnover for landlords, property managers and stratas in the Lower Mainland.",
  alternates: { canonical: `${SITE_URL}/property-managers` },
};

const PERKS = [
  "Priority booking for vacant units",
  "One invoice for clean, fix and haul",
  "Photo reports when the job is done",
  "Ask about monthly service plans and PM rates",
];

export default function PropertyManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="B2B"
        title="For Property Managers and Landlords"
        subtitle="Need units turned around fast? One call. One team. Back on the market sooner."
      />
      <section className="section-pad">
        <div className="mx-auto grid w-[min(1100px,92%)] gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              Built for repeat work
            </h2>
            <p className="mt-4 text-tayo-grey leading-relaxed">
              Tenant moved out? We handle junk removal, small repairs, paint
              touch ups and a full move-out clean in one visit. Fewer vacant
              days. Fewer phone calls.
            </p>
            <ul className="mt-8 space-y-4">
              {PERKS.map((p) => (
                <li
                  key={p}
                  className="border-b border-black/10 pb-4 font-medium text-tayo-black"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-tayo-blue-deep p-8 text-white md:p-10">
            <h3 className="font-display text-2xl tracking-tight">
              Start with Turnover Combo
            </h3>
            <p className="mt-4 text-white/75">
              Clean, fix and haul in one visit. Then ask us about a standing
              plan for your portfolio.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/services/turnover-combo" className="btn-primary">
                View Turnover Combo
              </Link>
              <Link
                href="/contact"
                className="btn-secondary border-white/40 text-center text-white hover:bg-white/10"
              >
                Request PM rates
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Ask about our property manager rate." />
    </>
  );
}
