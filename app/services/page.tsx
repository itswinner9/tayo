import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Handyman repairs first, plus move-out cleaning, junk removal, small moves and unit turnover in Surrey and the Lower Mainland.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Handyman, Cleaning, Junk Removal and Moving"
        subtitle="Handyman work first. Full turnover help when you need more."
        imageSrc="/images/hero/handyman-hero.jpg"
        imageAlt="Handyman focused on a residential repair"
      />
      <section className="section-pad">
        <div className="mx-auto grid w-[min(1100px,92%)] gap-8">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group grid overflow-hidden border border-black/10 transition hover:border-tayo-blue md:grid-cols-[280px_1fr]"
            >
              <div className="relative min-h-[180px] md:min-h-full">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 280px"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="font-mono-label text-tayo-blue">
                  0{i + 1}
                  {s.badge ? `  ${s.badge}` : ""}
                </p>
                <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl group-hover:text-tayo-blue">
                  {s.title}
                </h2>
                <p className="mt-3 text-tayo-grey">{s.tagline}</p>
                <span className="mt-5 font-display text-[11px] tracking-[0.12em] text-tayo-blue">
                  View →
                </span>
              </div>
            </Link>
          ))}
          <Link
            href="/property-managers"
            className="group border border-black/10 p-6 transition hover:border-tayo-blue md:p-8"
          >
            <p className="font-mono-label text-tayo-blue">06</p>
            <h2 className="mt-2 font-display text-2xl tracking-tight md:text-3xl group-hover:text-tayo-blue">
              For Property Managers
            </h2>
            <p className="mt-3 text-tayo-grey">
              Priority booking, simple invoicing and turnover plans.
            </p>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
