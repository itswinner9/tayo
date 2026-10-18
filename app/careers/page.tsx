import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { PageHero } from "@/components/PageHero";
import { PhoneCta } from "@/components/PhoneCta";
import { EMAIL, HAS_PHONE, SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Tayo is hiring a plumber in Surrey and the Lower Mainland. Join a growing local handyman and maintenance team.",
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: "Careers | Hiring Plumber | Tayo Services",
    description:
      "Tayo is hiring a plumber in Surrey and the Lower Mainland. Apply by email.",
  },
};

const ROLE = {
  title: "Plumber",
  type: "Full-time / Contract",
  location: "Surrey, BC and nearby",
  summary:
    "We are hiring a reliable plumber to join Tayo. You will handle residential plumbing calls, small repairs and unit turnovers alongside our handyman crew.",
  duties: [
    "Diagnose and fix common residential plumbing issues",
    "Faucets, toilets, drains, shutoffs and fixture swaps",
    "Support unit turnovers and property manager work",
    "Show up on time, communicate clearly, leave the space clean",
    "Work safely and know when a job needs a higher ticket trade",
  ],
  need: [
    "Proven plumbing experience (residential preferred)",
    "Valid driver’s licence and reliable transportation",
    "Own basic tools (specialty tools provided for shared jobs)",
    "Friendly with homeowners, tenants and property managers",
    "Able to work in Surrey and nearby cities",
  ],
  nice: [
    "Red Seal or apprenticeship progress",
    "Experience with rentals, stratas or property managers",
    "Comfortable taking job photos and short updates",
  ],
};

export default function CareersPage() {
  const applyMailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Plumber application – Tayo Careers",
  )}&body=${encodeURIComponent(
    "Hi Tayo,\n\nI am applying for the Plumber role.\n\nName:\nPhone:\nYears of plumbing experience:\nTicket / certification (if any):\n\nA short note about why you want to join:\n\n",
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="We are hiring a plumber"
        subtitle="Join Tayo in Surrey. Real jobs, clear communication, and a crew that shows up."
        imageSrc="/images/careers/plumber.jpg"
        imageAlt="Tradesperson working with tools on a job"
        showCtas={false}
      />

      <section className="border-b border-black/10 bg-soft-white">
        <div className="mx-auto flex w-[min(1100px,92%)] flex-col items-start gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <BrandLogo height={48} />
          <div className="flex flex-wrap gap-3">
            <a href={applyMailto} className="btn-primary !font-bold">
              Apply by email
            </a>
            <PhoneCta variant="secondary" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft-white">
        <div className="mx-auto grid w-[min(1100px,92%)] gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-mono-label text-tayo-blue">Open role</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              {ROLE.title}
            </h2>
            <p className="mt-2 text-tayo-grey">
              {ROLE.type} · {ROLE.location}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-tayo-grey">
              {ROLE.summary}
            </p>

            <h3 className="mt-10 font-display text-xl tracking-tight">
              What you will do
            </h3>
            <ul className="mt-4 space-y-3">
              {ROLE.duties.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/10 pb-3 text-tayo-black"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl tracking-tight">
              What you need
            </h3>
            <ul className="mt-4 space-y-3">
              {ROLE.need.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/10 pb-3 text-tayo-black"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl tracking-tight">
              Nice to have
            </h3>
            <ul className="mt-4 space-y-3">
              {ROLE.nice.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/10 pb-3 text-tayo-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/careers/plumber.jpg"
                alt="Hands-on trade work with tools"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/careers/tools.jpg"
                alt="Tools ready for a service call"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </div>
            <div className="border border-black/10 bg-white p-7">
              <BrandLogo height={36} />
              <h3 className="mt-5 font-display text-lg tracking-tight">
                How to apply
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-tayo-grey">
                Email a short note, your phone number, and experience. Resume
                optional but helpful. We reply as fast as we can.
              </p>
              <a
                href={applyMailto}
                className="mt-5 inline-flex font-display text-[11px] font-bold tracking-[0.12em] text-tayo-blue"
              >
                {EMAIL} →
              </a>
              {HAS_PHONE ? (
                <p className="mt-4 text-sm text-tayo-grey">
                  Or call <PhoneCta mode="display" variant="inline" />
                </p>
              ) : null}
              <Link
                href="/about"
                className="mt-6 inline-block text-sm text-tayo-grey hover:text-tayo-blue"
              >
                Learn about Tayo →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-tayo-blue px-4 py-20 text-white md:py-24">
        <div className="mx-auto flex w-[min(1100px,92%)] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <BrandLogo height={40} variant="white" />
            <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl">
              Ready to join the crew?
            </h2>
            <p className="mt-4 max-w-lg text-white/80">
              Apply for the plumber role today. Tell us about your experience
              and when you can start.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={applyMailto}
              className="inline-flex items-center justify-center bg-white px-6 py-3.5 font-display text-[11px] font-bold tracking-[0.08em] text-tayo-blue transition hover:bg-tayo-grey-light"
            >
              Apply by email
            </a>
            <PhoneCta
              variant="secondary"
              className="border-white text-white hover:bg-white/10"
              fallbackLabel="Email to apply"
              fallbackHref={applyMailto}
            />
          </div>
        </div>
      </section>
    </>
  );
}
