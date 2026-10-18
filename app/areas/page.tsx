import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { LOCATIONS } from "@/lib/locations";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Tayo Services & Maintenance serves Surrey, Langley, Burnaby, Vancouver, Richmond, Delta, White Rock, Coquitlam, New Westminster and Abbotsford.",
  alternates: { canonical: `${SITE_URL}/areas` },
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title="Areas We Serve"
        subtitle="Condo and apartment services across Surrey and the Lower Mainland."
      />
      <section className="section-pad">
        <div className="mx-auto w-[min(1100px,92%)] divide-y divide-black/10 border-y border-black/10">
          {LOCATIONS.map((l) => (
            <Link
              key={l.slug}
              href={`/areas/${l.slug}`}
              className="group grid gap-3 py-8 md:grid-cols-[200px_1fr_auto] md:items-baseline"
            >
              <h2 className="font-display text-xl tracking-tight group-hover:text-tayo-blue">
                {l.name}
              </h2>
              <p className="text-sm text-tayo-grey md:max-w-xl">{l.blurb}</p>
              <span className="font-display text-[11px] tracking-[0.12em] text-tayo-blue">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
