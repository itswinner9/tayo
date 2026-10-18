import {
  ADDRESS,
  EMAIL,
  HAS_PHONE,
  HOURS,
  PHONE_NUMBER,
  PRICE_RANGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from "@/lib/siteConfig";
import { FAQ_ITEMS } from "@/lib/faq";
import { LOCATIONS } from "@/lib/locations";

export function LocalBusinessJsonLd() {
  const sameAs = [
    SOCIAL.facebook,
    SOCIAL.instagram,
    SOCIAL.googleBusiness,
  ].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE_NAME,
    image: [`${SITE_URL}/images/logo-v3.png`, `${SITE_URL}/og.jpg`],
    logo: `${SITE_URL}/images/logo-v3.png`,
    url: SITE_URL,
    ...(HAS_PHONE ? { telephone: PHONE_NUMBER } : {}),
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
    },
    areaServed: LOCATIONS.map((l) => l.name),
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
