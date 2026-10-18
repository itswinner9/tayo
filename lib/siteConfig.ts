export const SITE_NAME = "Tayo Services & Maintenance";
export const SITE_SHORT = "Tayo";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://tayoservices.ca"
).replace(/\/$/, "");

/** Set NEXT_PUBLIC_PHONE in .env.local / host env before launch. No fake fallback. */
export const PHONE_NUMBER = (process.env.NEXT_PUBLIC_PHONE || "").trim();
export const PHONE_DIGITS = PHONE_NUMBER.replace(/\D/g, "");
export const HAS_PHONE = PHONE_DIGITS.length >= 10;

/** Public contact email shown on the site */
export const EMAIL =
  process.env.NEXT_PUBLIC_EMAIL || "zakariemahamed9@gmail.com";

/** Inbox that receives quote form submissions (via Resend) */
export const LEADS_TO_EMAIL =
  process.env.LEADS_TO_EMAIL ||
  process.env.NEXT_PUBLIC_EMAIL ||
  "zakariemahamed9@gmail.com";

export const HOURS = "Mo-Sa 08:00-18:00";
export const HOURS_DISPLAY = "Mon-Sat, 8am-6pm";
export const PRICE_RANGE = "$$";

export const ADDRESS = {
  locality: "Surrey",
  region: "BC",
  country: "CA",
};

export const SOCIAL = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  googleBusiness: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "",
};

/** Optional Google Maps embed URL (service-area or GBP). Defaults to Surrey metro. */
export const MAP_EMBED_URL =
  process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
  "https://www.google.com/maps?q=Surrey,+BC+Lower+Mainland&z=10&output=embed";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const GSC_VERIFICATION =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION || "";
