import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import {
  HAS_PHONE,
  HOURS_DISPLAY,
  PHONE_DIGITS,
  PHONE_NUMBER,
  SITE_NAME,
} from "@/lib/siteConfig";
import { smsHref, telHref } from "@/lib/utils";

const COMPANY_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-tayo-blue-deep text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-[min(1200px,92%)] flex-col gap-6 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" aria-label="Tayo home" className="inline-block">
              <BrandLogo height={44} variant="white" />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Local handyman, cleaning, junk removal and small moves for homes
              and rentals in Surrey and the Lower Mainland.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex bg-white px-5 py-3 font-display text-[11px] tracking-[0.1em] text-tayo-blue-deep transition hover:bg-tayo-blue-soft"
            >
              Get a Free Quote
            </Link>
            {HAS_PHONE && (
              <a
                href={telHref(PHONE_DIGITS)}
                className="inline-flex border border-white/40 px-5 py-3 font-display text-[11px] tracking-[0.1em] text-white transition hover:bg-white/10"
              >
                Call {PHONE_NUMBER}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-[min(1200px,92%)] gap-10 py-14 md:grid-cols-4 md:gap-10">
        <div>
          <p className="font-mono-label text-white/45">Services</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-white/80 transition hover:text-white"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/property-managers"
                className="text-white/80 transition hover:text-white"
              >
                Property Managers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-white/45">Company</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-white/45">Areas</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/areas/${l.slug}`}
                  className="text-white/80 transition hover:text-white"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-white/45">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {HAS_PHONE && (
              <>
                <li>
                  <a
                    href={telHref(PHONE_DIGITS)}
                    className="transition hover:text-white"
                  >
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li>
                  <a
                    href={smsHref(PHONE_DIGITS, "Hi Tayo, I need a quote.")}
                    className="transition hover:text-white"
                  >
                    Text us
                  </a>
                </li>
              </>
            )}
            <li className="text-white/60">{HOURS_DISPLAY}</li>
            <li className="text-white/60">Surrey, BC · Lower Mainland</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[min(1200px,92%)] flex-col gap-3 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/80">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white/80">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
