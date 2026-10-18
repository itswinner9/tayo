export type ServiceSlug =
  | "fix-refresh"
  | "move-out-cleaning"
  | "junk-haul"
  | "small-moves"
  | "turnover-combo";

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  navLabel: string;
  href: string;
  tagline: string;
  description: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  includes: string[];
  notes?: string[];
  pricing: string;
  cta: string;
  imageAlt: string;
  image: string;
  badge?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "fix-refresh",
    title: "Fix & Refresh",
    shortTitle: "Handyman",
    navLabel: "Fix & Refresh",
    href: "/services/fix-refresh",
    badge: "Handyman",
    tagline: "Patching, painting, mounting and the small repairs that pile up.",
    description:
      "Your local handyman for homes, apartments, rentals and strata. We handle the small jobs so you do not have to.",
    h1: "Handyman Services in Surrey and the Lower Mainland",
    metaTitle: "Handyman Surrey BC | Tayo Services",
    metaDescription:
      "Reliable handyman for homes, apartments and rentals. Small repairs, painting, mounting and more. Free quote.",
    includes: [
      "Patching and painting walls",
      "Mounting TVs, shelves and curtain rods",
      "Door and cabinet fixes",
      "Caulking and small bathroom fixes",
      "Light fixture swaps and basic replacements",
      "Furniture assembly",
      "Unit touch ups between tenants",
    ],
    notes: [
      "We do not do electrical, plumbing or gas work that needs a licensed trade.",
    ],
    pricing: "Hourly with a minimum, or flat price on common jobs.",
    cta: "Get a handyman quote",
    imageAlt: "Door hardware repair with power tools",
    image: "/images/services/handyman.jpg",
  },
  {
    slug: "move-out-cleaning",
    title: "Move-Out Cleaning",
    shortTitle: "Move-Out Cleaning",
    navLabel: "Move-Out Cleaning",
    href: "/services/move-out-cleaning",
    tagline: "Deep clean so the place passes inspection and gets your deposit back.",
    description:
      "Moving out and want your deposit back? Or a landlord getting a unit ready for the next tenant? We clean top to bottom so it looks fresh and passes inspection.",
    h1: "Move-Out Cleaning in Surrey and the Lower Mainland",
    metaTitle: "Move-Out Cleaning Surrey BC | Tayo Services",
    metaDescription:
      "Deep move-out cleaning for homes, apartments and rentals. Get your deposit back or get your unit rent ready. Free quote.",
    includes: [
      "Kitchen: cabinets, counters, sink, stove, oven, fridge",
      "Bathrooms: tub, shower, toilet, sink, mirrors",
      "Floors: vacuumed and mopped",
      "Windows, sills and tracks",
      "Baseboards, doors and light switches",
      "Closets and shelves",
    ],
    notes: [
      "Add-ons available: carpet cleaning, balcony, inside fridge, wall washing.",
      "Flat price by unit size. Ask for studio, 1 bed, 2 bed, or 3 bed rates.",
    ],
    pricing: "Flat price by unit size. Get a free quote for your unit.",
    cta: "Get your move-out clean quote",
    imageAlt: "Clean bright kitchen after move-out cleaning",
    image: "/images/services/cleaning.jpg",
  },
  {
    slug: "junk-haul",
    title: "Junk & Haul",
    shortTitle: "Junk Removal",
    navLabel: "Junk & Haul",
    href: "/services/junk-haul",
    tagline: "We pick it up, load it, and take it away.",
    description:
      "Old furniture, mattresses, boxes, leftover stuff from a move out? We load it and haul it away so you do not have to.",
    h1: "Junk Removal in Surrey and the Lower Mainland",
    metaTitle: "Junk Removal Surrey BC | Tayo Services",
    metaDescription:
      "Fast junk removal for homes, apartments and rentals. Furniture, mattresses and more. Clear prices. Free quote.",
    includes: [
      "Furniture and mattresses",
      "Appliances and boxes",
      "Yard and household junk",
      "Renovation leftovers",
    ],
    notes: [
      "We do not take hazardous waste, paint, chemicals, or anything unsafe.",
      "Upload photos on the quote form for the fastest price.",
    ],
    pricing:
      "Based on how much space it fills in the truck, plus dump fees. Clear price before we start.",
    cta: "Get a junk removal quote",
    imageAlt: "Household junk and recycling ready for haul-away",
    image: "/images/services/junk.jpg",
  },
  {
    slug: "small-moves",
    title: "Small Moves",
    shortTitle: "Small Moves",
    navLabel: "Small Moves",
    href: "/services/small-moves",
    tagline: "Studio and 1 bedroom moves with careful, friendly help.",
    description:
      "Careful, friendly help for local moves. We bring the truck, the blankets and the muscle.",
    h1: "Small Moves for Studio and 1 Bedroom Units",
    metaTitle: "Small Moves Surrey BC | Tayo Services",
    metaDescription:
      "Studio and 1 bedroom moves with friendly help. Truck and movers included. Get a free quote.",
    includes: [
      "Loading and unloading",
      "Furniture wrapping",
      "Floor and wall protection",
      "Strapping and securing",
    ],
    pricing: "Hourly for 2 movers with a 2 hour minimum. Ask for today’s rate.",
    cta: "Get a small move quote",
    imageAlt: "Packed boxes ready for a small local move",
    image: "/images/services/moving.jpg",
  },
  {
    slug: "turnover-combo",
    title: "Turnover Combo",
    shortTitle: "Turnover Combo",
    navLabel: "Turnover Combo",
    href: "/services/turnover-combo",
    tagline: "Clean, fix and haul in one visit. One call, one invoice.",
    description:
      "Tenant moved out? We clean, fix and haul in one visit. One call. One invoice. Back on the market faster.",
    h1: "Unit Turnover Service for Landlords and Property Managers",
    metaTitle: "Unit Turnover Service Surrey | Tayo Services",
    metaDescription:
      "Clean, fix and haul in one visit. Get units rent ready fast. Ask about property manager rates.",
    includes: [
      "Junk removal",
      "Small repairs and paint touch ups",
      "Full move-out clean",
      "Photo report when we finish",
    ],
    notes: [
      "Fewer vacant days, fewer phone calls, and one reliable team.",
    ],
    pricing: "Custom quote per unit. Ask about property manager rates.",
    cta: "Get a turnover quote",
    imageAlt: "Fresh apartment interior ready for new tenants",
    image: "/images/services/turnover.jpg",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
