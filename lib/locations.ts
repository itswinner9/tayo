export interface Location {
  slug: string;
  name: string;
  neighbourhoods: string[];
  blurb: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "surrey",
    name: "Surrey",
    neighbourhoods: ["Whalley", "Guildford", "Newton", "Fleetwood", "Cloverdale"],
    blurb:
      "Based in Surrey, we know local condos and rental towers and can usually get to you fast across the city.",
  },
  {
    slug: "langley",
    name: "Langley",
    neighbourhoods: ["Willoughby", "Walnut Grove", "Brookswood", "Downtown Langley"],
    blurb:
      "From Willoughby high-rises to quieter Langley rental units, we help with cleanouts, cleans and small repairs.",
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    neighbourhoods: ["Metrotown", "Brentwood", "Lougheed", "Edmonds"],
    blurb:
      "Burnaby condos and apartments turn over fast. We keep units inspection-ready for tenants and managers.",
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    neighbourhoods: ["Olympic Village", "Mount Pleasant", "Kitsilano", "Downtown", "East Van"],
    blurb:
      "We work in Vancouver condo buildings every week. Move-outs, junk hauls and small fixes done carefully.",
  },
  {
    slug: "richmond",
    name: "Richmond",
    neighbourhoods: ["City Centre", "Brighouse", "Steveston", "Terra Nova"],
    blurb:
      "Richmond rentals and strata units get the same clear pricing and same-day quote mindset.",
  },
  {
    slug: "delta",
    name: "Delta",
    neighbourhoods: ["North Delta", "Ladner", "Tsawwassen"],
    blurb:
      "Serving Delta apartments and townhomes with cleaning, hauling and handyman refresh work.",
  },
  {
    slug: "white-rock",
    name: "White Rock",
    neighbourhoods: ["Uptown", "East Beach", "West Beach"],
    blurb:
      "White Rock and nearby South Surrey units. We show up on time and leave the place ready.",
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    neighbourhoods: ["Coquitlam Centre", "Burquitlam", "Maillardville"],
    blurb:
      "Coquitlam condos and rentals: turnovers, junk removal and careful small moves.",
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    neighbourhoods: ["Downtown", "Uptown", "Queensborough"],
    blurb:
      "New West heritage walk-ups and newer towers alike. Clean, fix and haul with one team.",
  },
  {
    slug: "abbotsford",
    name: "Abbotsford",
    neighbourhoods: ["Downtown", "Clearbrook", "Sumas Mountain area"],
    blurb:
      "Abbotsford landlords and tenants call us for move-out cleans, junk and unit refresh work.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
