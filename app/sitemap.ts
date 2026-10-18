import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { LOCATIONS } from "@/lib/locations";
import { REVIEWS } from "@/lib/reviews";
import { SERVICES } from "@/lib/services";
import { SITE_URL } from "@/lib/siteConfig";

const LAST_MOD = "2026-10-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/property-managers",
    "/areas",
    "/about",
    "/careers",
    "/faq",
    "/blog",
    "/contact",
    "/privacy",
    ...(REVIEWS.length > 0 ? ["/reviews"] : []),
  ];

  const staticRoutes = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_MOD,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE_URL}${s.href}`,
    lastModified: LAST_MOD,
  }));

  const areaRoutes = LOCATIONS.map((l) => ({
    url: `${SITE_URL}/areas/${l.slug}`,
    lastModified: LAST_MOD,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.date,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
