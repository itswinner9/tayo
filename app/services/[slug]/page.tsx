import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { getService, SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { SITE_URL } from "@/lib/siteConfig";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}${service.href}` },
  };
}

async function ServiceContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.h1}
        subtitle={service.description}
        imageSrc={service.image}
        imageAlt={service.imageAlt}
      />

      <section className="section-pad">
        <div className="mx-auto grid w-[min(1100px,92%)] gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-tight">
              What&apos;s included
            </h2>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/10 pb-3 text-tayo-black"
                >
                  {item}
                </li>
              ))}
            </ul>
            {service.notes?.map((note) => (
              <p key={note} className="mt-4 text-sm text-tayo-grey">
                {note}
              </p>
            ))}
          </div>
          <div className="border border-black/10 p-8">
            <h2 className="font-display text-2xl tracking-tight">Pricing</h2>
            <p className="mt-4 text-tayo-grey leading-relaxed">
              {service.pricing}
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </div>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              {service.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 py-16">
        <div className="mx-auto w-[min(1100px,92%)]">
          <h2 className="font-display text-xl tracking-tight">Available in</h2>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/areas/${l.slug}`}
                className="font-display text-sm tracking-[0.08em] hover:text-tayo-blue"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={service.cta} />
    </>
  );
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <section className="section-pad pt-36">
          <div className="mx-auto w-[min(1100px,92%)] space-y-4">
            <div className="h-10 max-w-lg bg-black/5" />
            <div className="h-4 max-w-md bg-black/5" />
          </div>
        </section>
      }
    >
      <ServiceContent params={params} />
    </Suspense>
  );
}
