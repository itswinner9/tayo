import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { REVIEWS } from "@/lib/reviews";
import { SITE_URL, SOCIAL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Customer feedback for Tayo Services & Maintenance in Surrey and the Lower Mainland.",
  alternates: { canonical: `${SITE_URL}/reviews` },
  robots: { index: REVIEWS.length > 0, follow: true },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Customer feedback"
        subtitle={
          REVIEWS.length
            ? "What tenants, landlords and property managers say about Tayo."
            : "We are collecting verified Google reviews. Leave one after your job — it helps neighbours find reliable help."
        }
      />
      <section className="section-pad">
        {REVIEWS.length > 0 ? (
          <div className="mx-auto grid w-[min(1100px,92%)] gap-0 border-y border-black/10 md:grid-cols-2">
            {REVIEWS.map((r) => (
              <blockquote
                key={r.name}
                className="border-b border-black/10 p-8 md:odd:border-r"
              >
                <p className="text-lg leading-relaxed text-tayo-black">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="font-display text-sm">{r.name}</p>
                  <p className="mt-1 text-sm text-tayo-grey">{r.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="mx-auto w-[min(720px,92%)] space-y-6 text-tayo-grey">
            <p className="text-lg leading-relaxed">
              Honest reviews matter more than placeholder quotes. Once your job
              is done, a short Google review helps other homeowners and
              landlords in Surrey find us.
            </p>
            {SOCIAL.googleBusiness ? (
              <a
                href={SOCIAL.googleBusiness}
                className="btn-primary inline-flex !font-bold"
                target="_blank"
                rel="noreferrer"
              >
                Leave a Google review
              </a>
            ) : (
              <Link href="/contact" className="btn-primary inline-flex !font-bold">
                Book a job, then review us
              </Link>
            )}
          </div>
        )}
        {SOCIAL.googleBusiness && REVIEWS.length > 0 && (
          <p className="mx-auto mt-10 w-[min(1100px,92%)]">
            <a
              href={SOCIAL.googleBusiness}
              className="font-semibold text-tayo-blue hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Read more on Google →
            </a>
          </p>
        )}
      </section>
      <CtaBand />
    </>
  );
}
