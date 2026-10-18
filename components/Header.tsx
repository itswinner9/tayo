"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { PhoneCta } from "@/components/PhoneCta";
import { SERVICES } from "@/lib/services";

const NAV = [
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-black/8 bg-white/95 text-tayo-black shadow-sm backdrop-blur"
          : "bg-transparent text-tayo-black"
      }`}
    >
      <div className="mx-auto flex w-[min(1200px,92%)] items-center justify-between gap-4 py-4 md:py-5">
        <Link
          href="/"
          className="inline-flex items-center"
          onClick={() => setOpen(false)}
          aria-label="Tayo home"
        >
          <BrandLogo height={32} priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="font-display text-[11px] tracking-[0.14em] text-tayo-black/85 hover:text-tayo-blue"
            >
              Services
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 pt-4">
                <div className="min-w-[230px] border border-black/10 bg-white p-1 shadow-lg">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.href}
                      className="block px-3 py-2.5 text-sm font-semibold text-tayo-black/85 hover:bg-tayo-blue-soft hover:text-tayo-blue"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                  <Link
                    href="/property-managers"
                    className="block px-3 py-2.5 text-sm font-bold text-tayo-blue hover:bg-tayo-blue-soft"
                  >
                    Property Managers
                  </Link>
                </div>
              </div>
            )}
          </div>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[11px] tracking-[0.14em] text-tayo-black/85 hover:text-tayo-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <PhoneCta mode="display" variant="text" />
          <Link
            href="/contact"
            className="btn-primary !px-5 !py-3 !text-[12px] !font-bold"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="border border-black/15 px-3 py-2 font-display text-[11px] font-bold tracking-[0.12em] lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/8 bg-white lg:hidden">
          <div className="mx-auto flex w-[min(1200px,92%)] flex-col gap-1 py-4">
            <PhoneCta
              mode="display"
              variant="text"
              className="px-1 py-2 font-display text-sm tracking-[0.08em]"
            />
            <Link
              href="/services"
              className="px-1 py-2.5 font-display text-sm font-bold tracking-[0.1em]"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="px-1 py-2 text-sm font-semibold text-tayo-grey"
                onClick={() => setOpen(false)}
              >
                {s.navLabel}
              </Link>
            ))}
            <Link
              href="/property-managers"
              className="px-1 py-2 text-sm font-bold text-tayo-blue"
              onClick={() => setOpen(false)}
            >
              Property Managers
            </Link>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-1 py-2.5 font-display text-sm font-bold tracking-[0.1em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-3 self-start !font-bold"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
