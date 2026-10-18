# Tayo Services & Maintenance

Marketing site for **Tayo Services & Maintenance**. Local handyman, cleaning, junk removal and small moves in Surrey and nearby.

Stack: Next.js (App Router), TypeScript, Tailwind CSS v4.

Design: full-bleed photo hero, Syncopate display type, split sections, Tayo tokens (`#2D73FF`, `#0A0A0A`, `#6B7280`, `#F3F4F6`, `#0E3A9E`).

## Quick start

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_PHONE to your real number before any public deploy
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Hosting checklist

1. Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL` on the host
2. **Quote emails → Gmail (Resend):**
   - Sign up free at [resend.com](https://resend.com) with `zakariemahamed9@gmail.com`
   - Create an API key and set `RESEND_API_KEY` in `.env.local` and on your host (Vercel/etc.)
   - Keep `RESEND_FROM=Tayo Website <onboarding@resend.dev>` until you verify a domain
   - `LEADS_TO_EMAIL` is already `zakariemahamed9@gmail.com` — quote forms email that inbox
3. Optional: `NEXT_PUBLIC_GOOGLE_BUSINESS_URL`, `NEXT_PUBLIC_MAP_EMBED_URL`, GA / GSC
4. Deploy with `npm run build` (or connect the repo to your host)
5. Drop real van / crew / job photos into `public/images/` (same filenames)
6. Paste verified Google reviews into `lib/reviews.ts` — home marquee and `/reviews` cards stay empty until then
7. Point your domain and enable HTTPS

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (sitemap, schema, metadata) |
| `NEXT_PUBLIC_PHONE` | **Required for launch** — display + click-to-call / text (no fake fallback) |
| `NEXT_PUBLIC_EMAIL` | Contact email on the site (default: `zakariemahamed9@gmail.com`) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (gtag) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Search Console meta verification |
| `NEXT_PUBLIC_*_URL` | Social / Google Business links for schema + reviews CTA |
| `NEXT_PUBLIC_MAP_EMBED_URL` | Optional GBP / service-area map iframe |
| `RESEND_API_KEY` | **Required to deliver quotes** — free key from [resend.com](https://resend.com) |
| `RESEND_FROM` | Sender (`onboarding@resend.dev` until domain verified) |
| `LEADS_TO_EMAIL` | Where quotes arrive (default: `zakariemahamed9@gmail.com`) |

Without `RESEND_API_KEY`, local/dev submissions still succeed (logged server-side). Production returns an error so the form does not fake success.

## Photos

JPEGs under `public/images/`:

- `hero/handyman-hero.jpg` – homepage hero
- `about/` – work detail + finishes
- `services/` – service cards
- `careers/` – plumber role imagery
- `gallery/` – optional before / after pairs
- `logo-v3.png` / `logo-white-v3.png` – brand mark

Swap in real Tayo van, crew and job photos anytime. Paths stay the same.

## Routes

Home, Services (+ 5 service pages), Property Managers, Areas (+ 10 cities), About, Careers (plumber), FAQ, Blog (SEO guides), Contact, Privacy. `/reviews` exists as a Google-review CTA until real quotes are pasted into `lib/reviews.ts`.

Technical SEO: `sitemap.xml`, `robots.txt`, LocalBusiness JSON-LD, FAQ JSON-LD, per-page metadata.

## Launch checklist

- [ ] Domain + professional email
- [ ] Real phone / email in host env (`NEXT_PUBLIC_PHONE` must be set)
- [ ] Resend verified + quote form tested end-to-end (with a photo)
- [ ] Real photos (van, team, before/after) when available
- [ ] Google Business Profile verified + URL in env
- [ ] Search Console + Analytics connected
- [ ] First real reviews pasted into `lib/reviews.ts`
