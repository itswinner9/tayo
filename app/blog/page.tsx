import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { getPostsSorted } from "@/lib/blog";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog | Handyman, Cleaning & Turnover Tips Surrey",
  description:
    "Local guides for Surrey and nearby: handyman tips, move-out cleaning, junk removal, small moves and unit turnovers.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const posts = getPostsSorted();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Blog"
        subtitle="Practical local guides for homeowners, tenants, landlords and property managers."
        showCtas={false}
      />
      <section className="section-pad">
        <div className="mx-auto w-[min(900px,92%)] divide-y divide-black/10 border-y border-black/10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block py-8 transition hover:opacity-80"
            >
              <p className="font-mono-label text-tayo-grey">
                {post.date}
                {post.keyword ? `  ·  ${post.keyword}` : ""}
              </p>
              <h2 className="mt-3 font-display text-2xl tracking-tight">
                {post.title}
              </h2>
              <p className="mt-3 text-tayo-grey">{post.description}</p>
              <span className="mt-4 inline-block font-display text-[11px] tracking-[0.12em] text-tayo-blue">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
