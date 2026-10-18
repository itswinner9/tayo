export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  keyword: string;
  relatedService?: string;
  body: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "handyman-services-surrey-what-we-fix",
    title: "Handyman Services in Surrey: What We Can Fix",
    description:
      "A clear list of handyman jobs Tayo handles in Surrey and nearby, from patching and painting to mounting and unit touch ups.",
    date: "2026-10-12",
    keyword: "handyman Surrey",
    relatedService: "/services/fix-refresh",
    body: [
      "Looking for a handyman in Surrey? Most people need the small jobs that pile up: holes in walls, a TV that still sits on the floor, sticky doors, or a rental that needs a quick refresh before the next tenant.",
      "Tayo handles patching and painting, mounting TVs and shelves, door and cabinet fixes, caulking, light fixture swaps that do not need a licensed electrician, furniture assembly, and unit touch ups between tenants.",
      "We do not take on electrical, plumbing or gas work that needs a licensed trade. If your job needs that level of ticket, we will tell you straight and point you the right way.",
      "Homes, apartments, rentals and strata all work for us. Clear flat prices on common jobs. Most quotes go out the same day.",
      "Need something fixed this week? Start with a free Fix & Refresh quote and tell us what is on your list.",
    ],
  },
  {
    slug: "apartment-turnover-checklist-landlords-surrey",
    title: "Apartment Turnover Checklist for Surrey Landlords",
    description:
      "A practical unit turnover checklist for landlords and property managers in Surrey: junk, repairs, clean and photos.",
    date: "2026-10-05",
    keyword: "apartment turnover Surrey",
    relatedService: "/services/turnover-combo",
    body: [
      "Empty unit days cost money. A simple turnover checklist keeps Surrey rentals moving from one tenant to the next without chaos.",
      "Day one: walk the unit with photos. Note junk left behind, damage, paint touch ups, missing blinds, and anything that fails a future inspection.",
      "Next, clear junk and leftover furniture. Then handle small repairs and paint. Finish with a full move-out level clean so the place shows well online and in person.",
      "Send yourself a photo report when the unit is ready. That record helps with deposits, ads and property manager notes.",
      "Want one team for junk, fixes and cleaning? Ask Tayo about Turnover Combo and property manager rates.",
    ],
  },
  {
    slug: "tv-mounting-surrey-condo-tips",
    title: "TV Mounting in a Surrey Condo: Tips Before You Drill",
    description:
      "How to plan TV mounting in Surrey condos and apartments, including walls, wires and when to call a handyman.",
    date: "2026-09-28",
    keyword: "TV mounting Surrey",
    relatedService: "/services/fix-refresh",
    body: [
      "Mounting a TV in a Surrey condo looks simple until you hit a concrete wall, a rental rule, or cables that will not reach.",
      "Before anyone drills, confirm wall type, stud location, and whether your strata or landlord allows mounting. Keep the mount rated for your TV size and weight.",
      "Plan cable paths early. A clean install often needs cord covers, a nearby outlet check, and space for a soundbar or console.",
      "If you are not sure what is behind the wall, hire a handyman who mounts TVs often. Rushing a concrete or rental wall is how holes and fees happen.",
      "Tayo mounts TVs, shelves and curtain rods as part of Fix & Refresh. Send your unit type and TV size for a clear quote.",
    ],
  },
  {
    slug: "small-moves-surrey-studio-one-bedroom",
    title: "Small Moves in Surrey for Studios and 1 Bedrooms",
    description:
      "Why a small local move is often better than a full moving company for Surrey studios and one bedroom apartments.",
    date: "2026-09-20",
    keyword: "small moves Surrey",
    relatedService: "/services/small-moves",
    body: [
      "Not every Surrey move needs a giant truck and a six person crew. Studios and one bedrooms often need careful help, not a full relocation package.",
      "A small move usually means loading, wrapping, floor protection, and unloading across town. You pay for the people and time you actually need.",
      "Book elevators and parking early if you are in a condo. Tight loading zones in Surrey and Vancouver add time if nobody plans them.",
      "Pack boxes yourself if you want to save money. Leave heavy furniture, mattresses and awkward items to the movers.",
      "Tayo does small local moves with a truck and friendly crew. Ask for today’s rate and a 2 hour minimum quote.",
    ],
  },
  {
    slug: "get-damage-deposit-back-bc-rental",
    title: "How to Get Your Damage Deposit Back in BC",
    description:
      "Practical steps BC tenants can take before move-out day to improve the odds of getting the full damage deposit back.",
    date: "2026-09-12",
    keyword: "damage deposit back BC",
    relatedService: "/services/move-out-cleaning",
    body: [
      "In BC, your damage deposit is money you want back. Landlords can claim for damage beyond normal wear, unpaid rent, or cleaning that leaves the unit below a reasonable standard.",
      "Start early. Compare move-in photos with the unit now. Fix small marks, replace burnt bulbs, and clear every cupboard and closet.",
      "Cleaning is where many deposits get dinged. Kitchen grease, bathroom film, and dirty tracks are common. A move-out clean checklist helps you stay thorough.",
      "Return keys on time and document the empty unit with dated photos or video. Keep messages polite and clear.",
      "Short on time before handover? Book Tayo move-out cleaning so the unit is ready for inspection.",
    ],
  },
  {
    slug: "condo-junk-removal-surrey-tips",
    title: "Condo Junk Removal Tips for Surrey and Nearby",
    description:
      "How to book junk removal from a Surrey condo the easy way: elevators, parking, photos and what we will not haul.",
    date: "2026-09-04",
    keyword: "condo junk removal Surrey",
    relatedService: "/services/junk-haul",
    body: [
      "Condo junk removal in Surrey has one extra layer: building rules. Elevator bookings, loading bays and visitor parking can slow a cleanout if you wait until the truck arrives.",
      "Make a pile in one spot when you can. Mattresses, sofas, desks and bags of misc junk are common. Keep paint, chemicals and anything hazardous out of the pile.",
      "Photos get you a faster price. Wide shots of the pile plus a doorway for scale help us quote before we show up.",
      "We load, haul and dispose. You do not need to rent a dump truck or find a friend with a trailer.",
      "Ready to clear the unit? Request a Junk & Haul quote from Tayo and mention your building’s elevator rules.",
    ],
  },
  {
    slug: "handyman-vs-plumber-when-to-call",
    title: "Handyman vs Plumber: Who Should You Call?",
    description:
      "A simple guide for Surrey homeowners on when a handyman is enough and when you need a licensed plumber.",
    date: "2026-08-26",
    keyword: "handyman vs plumber",
    relatedService: "/services/fix-refresh",
    body: [
      "Not every home problem needs a licensed plumber. Not every leak is a handyman job either. Knowing the difference saves money and avoids unsafe DIY.",
      "Call a handyman for drywall, paint, mounting, doors, caulking, basic fixture swaps that do not touch supply lines, and general unit refresh work.",
      "Call a plumber for active leaks, clogged main lines, toilet or sink supply issues, water heater problems, and anything that needs a plumbing ticket.",
      "If you are unsure, describe the problem and send a photo. A good local team will tell you if the job is outside their scope.",
      "Tayo is hiring plumbers and already handles handyman work across Surrey. Start with a quote and we will route the job the right way.",
    ],
  },
  {
    slug: "property-managers-faster-unit-ready",
    title: "How Property Managers Get Units Rent-Ready Faster",
    description:
      "Ways Surrey property managers cut vacant days with one vendor for cleaning, junk removal and small repairs.",
    date: "2026-08-18",
    keyword: "property manager unit turnover Surrey",
    relatedService: "/services/turnover-combo",
    body: [
      "Vacant days add up. Property managers in Surrey often lose time coordinating separate cleaners, junk haulers and handymen for the same unit.",
      "One vendor for turnover means one schedule, one invoice and one photo report. That is easier for your board, owner and leasing team.",
      "Prioritize the path to listing photos: clear junk first, then repairs and paint, then a deep clean. Skipping the order creates double work.",
      "Ask for priority booking and simple monthly terms if you manage multiple doors. Consistency beats scrambling every move-out.",
      "Tayo works with landlords, managers and stratas. See property manager plans or request a Turnover Combo quote for your next vacant unit.",
    ],
  },
  {
    slug: "move-out-cleaning-checklist-bc",
    title: "Move-Out Cleaning Checklist for BC Tenants",
    description:
      "A simple checklist so your Surrey or Lower Mainland rental passes inspection and helps you get your deposit back.",
    date: "2026-03-01",
    keyword: "move out cleaning Surrey",
    relatedService: "/services/move-out-cleaning",
    body: [
      "Moving out in BC? A clear cleaning checklist saves stress and helps your damage deposit.",
      "Start with the kitchen: wipe cabinets inside and out, clean the stove and oven, empty and wipe the fridge, and scrub the sink.",
      "Bathrooms need the tub or shower, toilet, sink, mirrors and floors. Do not skip grout lines and the fan cover if it is dusty.",
      "Vacuum and mop every floor. Wipe baseboards, light switches, doors and closet shelves. Clean window sills and tracks.",
      "Take photos when you finish. If you want it done right the first time, book a professional move-out clean with Tayo.",
    ],
  },
  {
    slug: "how-much-junk-removal-costs-surrey",
    title: "How Much Does Junk Removal Cost in Surrey?",
    description:
      "What drives junk removal prices for condos and apartments in Surrey and how to get a clear quote fast.",
    date: "2026-03-08",
    keyword: "junk removal Surrey",
    relatedService: "/services/junk-haul",
    body: [
      "Junk removal in Surrey is usually priced by how much space your stuff fills in the truck, plus dump fees.",
      "A few bags or a single mattress costs less than a full unit cleanout. Stairs, elevators and parking rules can affect time on site.",
      "Hazardous items like paint and chemicals are not accepted. Keep those out of the pile.",
      "The fastest way to a clear price is to send photos with your quote request. We reply the same day when we can.",
      "Need furniture and leftover move-out junk gone? Start with a free Junk & Haul quote from Tayo.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Newest first for listing pages */
export function getPostsSorted(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
