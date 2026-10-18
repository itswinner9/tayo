export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function telHref(digits: string) {
  return `tel:${digits}`;
}

export function smsHref(digits: string, body?: string) {
  const q = body ? `?&body=${encodeURIComponent(body)}` : "";
  return `sms:${digits}${q}`;
}
