import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/services";
import { getLocation, LOCATIONS } from "@/lib/locations";
import { SITE_URL } from "@/lib/siteConfig";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};
  return {
    title: `Cleaning, Junk Removal & Handyman ${location.name}`,
    description: `Move-out cleaning, junk removal, repairs and small moves in ${location.name}, BC. Free quotes from Tayo Services.`,
    alternates: { canonical: `${SITE_URL}/areas/${location.slug}` },
  };
}

async function CityContent({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  return (
    <>
      <PageHero
        title={`Cleaning, Junk Removal and Handyman Services in ${location.name}`}
        subtitle={`Tayo Services & Maintenance helps people in ${location.name} with move-out cleaning, junk removal, small repairs and small moves.`}
      />

      <section className="section-pad">
        <div className="mx-auto w-[min(800px,92%)] space-y-5 text-lg leading-relaxed text-tayo-grey">
          <p>
            We know {location.name} condos and apartments and get to you fast.
            From {location.neighbourhoods.slice(0, 3).join(", ")}
            {location.neighbourhoods.length > 3 ? " and nearby" : ""}, we help
            tenants, landlords and property managers keep units ready.
          </p>
          <p>{location.blurb}</p>
          <p>
            Need a quote in {location.name}? Send photos and we usually reply
            the same day.
          </p>
        </div>
      </section>

      <section className="bg-tayo-grey-light section-pad">
        <div className="mx-auto w-[min(1100px,92%)]">
          <h2 className="font-display text-2xl tracking-tight md:text-3xl">
            Services in {location.name}
          </h2>
          <ul className="mt-8 divide-y divide-black/10">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="flex items-center justify-between gap-4 py-5 font-display text-lg font-semibold uppercase hover:text-tayo-blue"
                >
                  <span>
                    {s.title} in {location.name}
                  </span>
                  <span className="text-tayo-blue">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-primary mt-10 inline-flex">
            Get a Free Quote in {location.name}
          </Link>
        </div>
      </section>

      <CtaBand
        title={`Need help in ${location.name}?`}
        subtitle="Free quotes. Fast response. Local team."
      />
    </>
  );
}

export default function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  return (
    <Suspense
      fallback={
        <section className="section-pad pt-36">
          <div className="mx-auto w-[min(800px,92%)] space-y-4">
            <div className="h-10 max-w-lg bg-black/5" />
            <div className="h-4 max-w-md bg-black/5" />
          </div>
        </section>
      }
    >
      <CityContent params={params} />
    </Suspense>
  );
}
