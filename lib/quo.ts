import { PHONE_E164 } from "@/lib/siteConfig";

const QUO_MESSAGES_URL = "https://api.quo.com/v1/messages";

/** Normalize a North American phone number to E.164, or null if invalid. */
export function toE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export function isQuoConfigured() {
  return Boolean(process.env.QUO_API_KEY);
}

/** Send one SMS through Quo. Never throws; returns whether it was accepted. */
export async function sendQuoSms(to: string, content: string) {
  const apiKey = process.env.QUO_API_KEY;
  const from = process.env.QUO_FROM_NUMBER || PHONE_E164;
  if (!apiKey || !from) return false;

  try {
    const res = await fetch(QUO_MESSAGES_URL, {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, from, to: [to] }),
    });
    if (!res.ok) {
      console.error("[tayo-quo] send failed", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[tayo-quo] send error", err);
    return false;
  }
}
