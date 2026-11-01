import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { CtaBand } from "@/components/CtaBand";
import { FlickeringGrid } from "@/components/FlickeringGrid";
import { PhoneCta } from "@/components/PhoneCta";
import { RotatingCityText } from "@/components/RotatingCityText";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { REVIEWS } from "@/lib/reviews";
import { SITE_URL, SOCIAL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Handyman Surrey BC | Repairs, Cleaning & Junk Removal | Tayo",
  description:
    "Local handyman for homes and rentals in Surrey and the Lower Mainland. Plus cleaning, junk removal and small moves. Free quotes.",
  alternates: { canonical: SITE_URL },
};

const WHY = [
  "One company for everything. No chasing 4 different people.",
  "Clear flat prices on common jobs.",
  "Quick replies. Most quotes sent the same day.",
  "Careful with your space and your stuff.",
  "Photos of the finished job when you want them.",
];

const STEPS = [
  { n: "01", title: "Tell us what you need", body: "Call, text or form." },
  { n: "02", title: "Get a clear quote", body: "Usually the same day." },
  { n: "03", title: "We show up on time", body: "And get it done." },
  { n: "04", title: "You get a ready space", body: "Fixed, cleaned, and clear." },
];

const WORK_SHOTS = [
  {
    src: "/images/hero/handyman-hero.jpg",
    alt: "Handyman focused on a residential repair",
    label: "Repairs",
  },
  {
    src: "/images/services/cleaning.jpg",
    alt: "Cleaning supplies ready for a unit turnover",
    label: "Cleaning",
  },
  {
    src: "/images/about/team-work.jpg",
    alt: "Power tools on a residential job",
    label: "On the tools",
  },
  {
    src: "/images/gallery/after-1.jpg",
    alt: "Finished residential space after work",
    label: "Finished spaces",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-photo relative min-h-[100svh] overflow-hidden bg-white">
        <Image
          src="/images/hero/handyman-hero.jpg"
          alt="Handyman at work on a residential repair"
          fill
          priority
          className="object-cover object-[72%_center] md:object-[78%_center]"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[3]"
        >
          <FlickeringGrid
            className="absolute inset-0 h-full w-full [mask-image:linear-gradient(105deg,transparent_0%,transparent_42%,rgba(0,0,0,0.5)_60%,black_80%)]"
            squareSize={3}
            gridGap={6}
            flickerChance={0.35}
            color="#FFFFFF"
            maxOpacity={0.32}
          />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-[min(1180px,92%)] flex-col justify-center pb-16 pt-32 md:pb-24 md:pt-28">
          <div className="hero-copy-panel animate-fade-up">
            <div className="max-w-[min(92vw,720px)]">
              <span className="block md:hidden">
                <BrandLogo height={64} priority />
              </span>
              <span className="hidden md:block lg:hidden">
                <BrandLogo height={100} priority />
              </span>
              <span className="hidden lg:block">
                <BrandLogo height={132} priority />
              </span>
            </div>

            <h1 className="animate-fade-up-delay mt-7 max-w-xl font-display text-[1.35rem] leading-[1.15] tracking-tight text-tayo-black md:mt-8 md:text-[1.85rem] lg:text-[2.35rem]">
              Handyman, repairs, cleaning and junk removal in{" "}
              <RotatingCityText />
            </h1>

            <p className="animate-fade-up-delay mt-4 max-w-md text-base leading-relaxed text-tayo-black/75 md:text-lg">
              Local handyman help for homes, apartments, rentals and strata.
              Plus cleaning, haul-away and small moves when you need them.
            </p>

            <p className="animate-fade-up-delay-2 mt-4 font-display text-sm tracking-[0.08em] text-tayo-blue md:text-base">
              One call. One price. Done right.
            </p>

            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary !font-bold">
                Get a Free Quote
              </Link>
              <PhoneCta variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-soft-white">
        <div className="mx-auto grid w-[min(1180px,92%)] grid-cols-1 gap-4 py-5 text-center sm:grid-cols-3 sm:divide-x sm:divide-black/10 sm:text-left">
          {["Free quotes", "Same-day replies", "Serving the Lower Mainland"].map(
            (item) => (
              <p
                key={item}
                className="flex items-center justify-center gap-2 font-display text-[11px] font-bold tracking-[0.14em] text-tayo-black sm:justify-start sm:px-6 sm:first:pl-0"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 shrink-0 text-tayo-blue"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M3 8.5l3.2 3L13 4.5" />
                </svg>
                {item}
              </p>
            ),
          )}
        </div>
      </section>

      <section className="section-pad bg-soft-white">
        <div className="mx-auto w-[min(1180px,92%)]">
          <div className="mb-12 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              Our services
            </h2>
            <p className="max-w-sm text-tayo-grey md:text-right">
              Handyman work first. Full turnover help when you need more.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={s.href}
                className={`group overflow-hidden border border-black/10 bg-white transition hover:border-tayo-blue ${
                  i === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? "min-h-[260px] md:min-h-[340px]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes={
                      i === 0
                        ? "(max-width:768px) 100vw, 50vw"
                        : "(max-width:768px) 100vw, 40vw"
                    }
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <p className="font-mono-label text-tayo-blue">
                    0{i + 1}
                    {s.badge ? `  ${s.badge}` : ""}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight group-hover:text-tayo-blue md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-tayo-grey">{s.tagline}</p>
                  <span className="mt-6 font-display text-[11px] font-bold tracking-[0.14em] text-tayo-blue">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-soft-mist">
        <div className="mx-auto w-[min(1180px,92%)] py-14 md:py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Work we take on
            </h2>
            <p className="max-w-md text-tayo-grey">
              Repairs, cleans, haul-aways and ready units — the everyday jobs
              around Surrey homes and rentals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {WORK_SHOTS.map((shot, i) => (
              <figure
                key={shot.src}
                className={`relative overflow-hidden ${
                  i % 2 === 1 ? "md:mt-8" : ""
                }`}
              >
                <div className="relative aspect-[3/4]">
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

      <section className="section-pad bg-soft-white">
        <div className="mx-auto grid w-[min(1180px,92%)] items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <Image
              src="/images/about/team-work.jpg"
              alt="Door hardware repair on a residential job"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              Why Tayo
            </h2>
            <ul className="mt-8">
              {WHY.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/10 py-4 text-lg text-tayo-black last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft-mist">
        <div className="mx-auto w-[min(1180px,92%)]">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.n} className="border-t-2 border-tayo-blue pt-6">
                <p className="font-mono-label text-tayo-blue">{step.n}</p>
                <h3 className="mt-4 font-display text-xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-tayo-grey">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-tayo-blue text-white">
        <div className="mx-auto grid w-[min(1100px,92%)] gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="font-mono-label text-white/70">
              Landlords, Managers, Stratas
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-5xl">
              For landlords, property managers and stratas
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-white/85">
              Need units turned around fast? Priority booking, simple invoicing
              and monthly service plans. Ask about our property manager rate.
            </p>
            <Link
              href="/property-managers"
              className="mt-8 inline-flex bg-white px-6 py-3.5 font-display text-[11px] font-bold tracking-[0.1em] text-tayo-blue transition hover:bg-tayo-grey-light"
            >
              See property manager plans
            </Link>
          </div>
        </div>
      </section>

      {REVIEWS.length > 0 ? (
        <section className="section-pad overflow-hidden bg-soft-white">
          <div className="mx-auto w-[min(1180px,92%)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-4xl tracking-tight md:text-5xl">
                Reviews
              </h2>
              {SOCIAL.googleBusiness ? (
                <a
                  href={SOCIAL.googleBusiness}
                  className="font-display text-[11px] font-bold tracking-[0.14em] text-tayo-blue"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read on Google →
                </a>
              ) : (
                <Link
                  href="/reviews"
                  className="font-display text-[11px] font-bold tracking-[0.14em] text-tayo-blue"
                >
                  See reviews →
                </Link>
              )}
            </div>
          </div>
          <div className="mt-12 flex overflow-hidden border-y border-black/10">
            <div className="marquee-track flex">
              {[...REVIEWS, ...REVIEWS].map((r, i) => (
                <blockquote
                  key={`${r.name}-${i}`}
                  className="w-[320px] shrink-0 border-r border-black/10 p-8 md:w-[380px]"
                >
                  <p className="leading-relaxed text-tayo-black">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <footer className="mt-6">
                    <p className="font-display text-sm text-tayo-blue">
                      {r.name}
                    </p>
                    <p className="mt-1 text-sm text-tayo-grey">{r.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-pad border-t border-black/10 bg-soft-mist">
        <div className="mx-auto w-[min(1180px,92%)]">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Areas we serve
          </h2>
          <p className="mt-4 max-w-2xl text-tayo-grey">
            Surrey, Langley, Burnaby, Vancouver, Richmond, Delta, White Rock,
            Coquitlam, New Westminster, Abbotsford and nearby.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {LOCATIONS.map((l) => (
              <Link
                key={l.slug}
                href={`/areas/${l.slug}`}
                className="border border-black/10 bg-white px-4 py-2.5 font-display text-[11px] font-bold tracking-[0.1em] text-tayo-black transition hover:border-tayo-blue hover:text-tayo-blue"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
