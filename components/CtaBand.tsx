import Link from "next/link";
import { PhoneCta } from "@/components/PhoneCta";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
}

export function CtaBand({
  title = "Ready for a clear quote?",
  subtitle = "Send the form or reach out — most quotes go out the same day.",
}: CtaBandProps) {
  return (
    <section className="bg-tayo-blue px-4 py-20 text-white md:py-24">
      <div className="mx-auto flex w-[min(1100px,92%)] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-white/80">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white px-6 py-3.5 font-display text-[11px] tracking-[0.08em] text-tayo-blue transition hover:bg-tayo-grey-light"
          >
            Get a Free Quote
          </Link>
          <PhoneCta
            mode="sms"
            variant="secondary"
            className="border-white text-white hover:bg-white/10"
            fallbackLabel="Contact us"
          />
        </div>
      </div>
    </section>
  );
}
