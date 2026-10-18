"use client";

import Link from "next/link";
import { HAS_PHONE, PHONE_DIGITS } from "@/lib/siteConfig";
import { telHref } from "@/lib/utils";

export function StickyMobileCTAs() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-3 md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        {HAS_PHONE ? (
          <a
            href={telHref(PHONE_DIGITS)}
            className="btn-secondary border-tayo-black text-center !py-3 text-tayo-black"
          >
            Call Now
          </a>
        ) : (
          <Link
            href="/contact"
            className="btn-secondary border-tayo-black text-center !py-3 text-tayo-black"
          >
            Contact
          </Link>
        )}
        <Link href="/contact" className="btn-primary text-center !py-3">
          Free Quote
        </Link>
      </div>
    </div>
  );
}
