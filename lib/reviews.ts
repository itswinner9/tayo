export interface Review {
  name: string;
  role: string;
  quote: string;
}

/**
 * Real Google / customer reviews only.
 * Leave empty until you paste verified quotes — home marquee and review cards stay hidden.
 */
export const REVIEWS: Review[] = [];
