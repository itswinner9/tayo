import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { BLOG_POSTS, getPost, getPostsSorted } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/siteConfig";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: [post.keyword, "Surrey BC", "Tayo Services"],
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

function BlogPostFallback() {
  return (
    <>
      <section className="border-b border-black/10 pt-32 md:pt-36">
        <div className="mx-auto w-[min(1180px,92%)] pb-14 md:pb-20">
          <div className="h-3 w-24 bg-black/5" />
          <div className="mt-6 h-10 max-w-xl bg-black/5" />
          <div className="mt-4 h-5 max-w-md bg-black/5" />
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto w-[min(720px,92%)] space-y-4">
          <div className="h-4 w-full bg-black/5" />
          <div className="h-4 w-[92%] bg-black/5" />
          <div className="h-4 w-[88%] bg-black/5" />
        </div>
      </section>
    </>
  );
}

async function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getPostsSorted()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-v3.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keyword,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={post.date}
        title={post.title}
        subtitle={post.description}
        showCtas={false}
      />
      <article className="section-pad">
        <div className="mx-auto w-[min(720px,92%)] space-y-5 text-lg leading-relaxed text-tayo-grey">
          {post.body.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          {post.relatedService && (
            <p className="pt-4">
              <Link
                href={post.relatedService}
                className="font-semibold text-tayo-blue hover:underline"
              >
                Related service →
              </Link>
            </p>
          )}
        </div>

        {related.length > 0 && (
          <div className="mx-auto mt-16 w-[min(720px,92%)] border-t border-black/10 pt-12">
            <h2 className="font-display text-xl tracking-tight">
              More guides
            </h2>
            <ul className="mt-6 space-y-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="font-semibold text-tayo-black transition hover:text-tayo-blue"
                  >
                    {p.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
      <CtaBand />
    </>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<BlogPostFallback />}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}
