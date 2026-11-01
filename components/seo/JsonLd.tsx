import {
  ADDRESS,
  EMAIL,
  HAS_PHONE,
  HOURS,
  PHONE_E164,
  PRICE_RANGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from "@/lib/siteConfig";
import { FAQ_ITEMS } from "@/lib/faq";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

export const BUSINESS_ID = `${SITE_URL}/#business`;

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function cityServed(name: string) {
  return {
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: "British Columbia" },
  };
}

export function LocalBusinessJsonLd() {
  const sameAs = [
    SOCIAL.facebook,
    SOCIAL.instagram,
    SOCIAL.googleBusiness,
  ].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    alternateName: "Tayo",
    description:
      "Local handyman, repairs, move-out cleaning, junk removal and small moves for homes, apartments, rentals and strata across the Lower Mainland, BC.",
    image: [`${SITE_URL}/images/logo-v3.png`, `${SITE_URL}/og.jpg`],
    logo: `${SITE_URL}/images/logo-v3.png`,
    url: SITE_URL,
    ...(HAS_PHONE
      ? {
          telephone: PHONE_E164,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: PHONE_E164,
            contactType: "customer service",
            areaServed: "CA-BC",
            availableLanguage: ["English"],
          },
        }
      : {}),
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
    },
    areaServed: LOCATIONS.map((l) => cityServed(l.name)),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home services",
      itemListElement: SERVICES.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          url: `${SITE_URL}${svc.href}`,
        },
      })),
    },
    priceRange: PRICE_RANGE,
    openingHours: HOURS,
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ items = FAQ_ITEMS }: { items?: typeof FAQ_ITEMS }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  path,
  areas = LOCATIONS.map((l) => l.name),
}: {
  name: string;
  description: string;
  path: string;
  areas?: string[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${SITE_URL}${path}`,
        serviceType: name,
        provider: { "@id": BUSINESS_ID },
        areaServed: areas.map(cityServed),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Home", path: "" }, ...items].map(
          (item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
          }),
        ),
      }}
    />
  );
}
