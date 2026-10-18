"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq";

export function FaqAccordion({ items = FAQ_ITEMS }: { items?: typeof FAQ_ITEMS }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-base font-semibold uppercase tracking-tight md:text-lg">
                {item.question}
              </span>
              <span className="text-tayo-blue text-xl font-light">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 pr-8 text-tayo-grey leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
