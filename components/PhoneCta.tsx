import Link from "next/link";
import { HAS_PHONE, PHONE_DIGITS, PHONE_NUMBER } from "@/lib/siteConfig";
import { smsHref, telHref } from "@/lib/utils";

type Variant = "primary" | "secondary" | "text" | "inline";

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn-primary !font-bold",
  secondary: "btn-secondary border-tayo-black !font-bold text-tayo-black",
  text: "font-display text-[12px] font-bold tracking-[0.06em] text-tayo-black hover:text-tayo-blue",
  inline: "font-semibold text-tayo-blue hover:underline",
};

interface PhoneCtaProps {
  mode?: "call" | "sms" | "display";
  variant?: Variant;
  className?: string;
  label?: string;
  smsBody?: string;
  /** When phone is unset, link to contact instead of a broken tel: */
  fallbackHref?: string;
  fallbackLabel?: string;
}

export function PhoneCta({
  mode = "call",
  variant = "secondary",
  className = "",
  label,
  smsBody = "Hi Tayo, I need a quote.",
  fallbackHref = "/contact",
  fallbackLabel = "Get a Free Quote",
}: PhoneCtaProps) {
  if (!HAS_PHONE) {
    if (mode === "display") return null;
    const cls = `${VARIANT_CLASS[variant]} ${className}`.trim();
    if (fallbackHref.startsWith("mailto:") || fallbackHref.startsWith("http")) {
      return (
        <a href={fallbackHref} className={cls}>
          {fallbackLabel}
        </a>
      );
    }
    return (
      <Link href={fallbackHref} className={cls}>
        {fallbackLabel}
      </Link>
    );
  }

  if (mode === "display") {
    return (
      <a
        href={telHref(PHONE_DIGITS)}
        className={`${VARIANT_CLASS[variant]} ${className}`.trim()}
      >
        {label || PHONE_NUMBER}
      </a>
    );
  }

  if (mode === "sms") {
    return (
      <a
        href={smsHref(PHONE_DIGITS, smsBody)}
        className={`${VARIANT_CLASS[variant]} ${className}`.trim()}
      >
        {label || "Text us"}
      </a>
    );
  }

  return (
    <a
      href={telHref(PHONE_DIGITS)}
      className={`${VARIANT_CLASS[variant]} ${className}`.trim()}
    >
      {label || `Call ${PHONE_NUMBER}`}
    </a>
  );
}
