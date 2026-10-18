import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tayo Services & Maintenance is a local Surrey BC handyman company for homes, apartments and rentals across the Lower Mainland.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const PROMISE = [
  "Show up on time",
  "Clear prices, no surprises",
  "Respect your space",
  "Do the job right",
];

const SHOTS = [
  {
    src: "/images/about/team-work.jpg",
    alt: "Door hardware work on a home job",
    label: "On the tools",
  },
  {
    src: "/images/about/job-1.jpg",
    alt: "Professional cleaning in a home",
    label: "Cleaning",
  },
  {
    src: "/images/about/job-2.jpg",
    alt: "Bathroom fixtures ready after a refresh",
    label: "Fixtures",
  },
  {
    src: "/images/about/job-3.jpg",
    alt: "Fresh unit ready after turnover",
    label: "Turnovers",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Tayo Services & Maintenance"
        subtitle="A local handyman company based in Surrey, BC."
        imageSrc="/images/about/team-work.jpg"
        imageAlt="Hands-on repair work in a home"
      />

      <section className="border-b border-black/10 bg-soft-white">
        <div className="mx-auto flex w-[min(1100px,92%)] flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <span className="block md:hidden">
            <BrandLogo height={52} />
          </span>
          <span className="hidden md:block">
            <BrandLogo height={68} />
          </span>
          <p className="max-w-xl text-lg leading-relaxed text-tayo-grey">
            One local team for handyman repairs, cleaning, junk removal and
            small moves. Built in Surrey for real homes and rentals.
          </p>
        </div>
      </section>

      <section className="section-pad bg-soft-white">
        <div className="mx-auto grid w-[min(1100px,92%)] gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-5 text-lg leading-relaxed text-tayo-grey">
            <p>
              Tayo helps homeowners, tenants, landlords and property managers
              with handyman repairs, cleaning, junk removal and small moves.
            </p>
            <p>
              We started Tayo because finding one reliable team for fixes,
              cleanouts and turnovers was harder than it should be. Now you call
              one number and get it done.
            </p>
            <p>
              Based in Surrey, we keep the work simple: clear quotes, careful
              hands, and a space that is ready when we leave.
            </p>
            <p>
              Growing the crew?{" "}
              <Link
                href="/careers"
                className="font-semibold text-tayo-blue hover:underline"
              >
                See open roles
              </Link>
              .
            </p>
          </div>
          <div>
            <div className="relative mb-8 aspect-[4/3] overflow-hidden">
              <Image
                src="/images/gallery/after-2.jpg"
                alt="Finished residential space after a Tayo-style refresh"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div className="border border-black/10 bg-white p-8">
              <h2 className="font-display text-2xl tracking-tight">
                Our promise
              </h2>
              <ul className="mt-6 space-y-4">
                {PROMISE.map((item) => (
                  <li
                    key={item}
                    className="border-b border-black/10 pb-4 font-medium text-tayo-black last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-black/10 bg-soft-mist">
        <div className="mx-auto w-[min(1100px,92%)]">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                The kind of work we do
              </h2>
              <p className="mt-4 max-w-xl text-tayo-grey">
                Tools, fixtures and finished spaces — the jobs that keep homes
                and rentals ready around Surrey.
              </p>
            </div>
            <BrandLogo height={40} />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {SHOTS.map((shot) => (
              <figure key={shot.src}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                </div>
                <figcaption className="mt-2 font-mono-label text-tayo-grey">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
