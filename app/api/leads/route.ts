import { NextRequest, NextResponse } from "next/server";
import { EMAIL } from "@/lib/siteConfig";

const MAX_PHOTOS = 4;
const MAX_PHOTO_BYTES = 4 * 1024 * 1024; // 4MB each
const MAX_TOTAL_BYTES = 10 * 1024 * 1024; // 10MB total

type ResendAttachment = {
  filename: string;
  content: string;
};

async function fileToAttachment(file: File): Promise<ResendAttachment | null> {
  if (file.size <= 0 || file.size > MAX_PHOTO_BYTES) return null;
  if (!file.type.startsWith("image/")) return null;
  const buf = Buffer.from(await file.arrayBuffer());
  const safeName = (file.name || "photo.jpg").replace(/[^\w.\-]+/g, "_");
  return {
    filename: safeName.slice(0, 80),
    content: buf.toString("base64"),
  };
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // Honeypot — bots fill hidden fields; humans leave blank
    const honeypot = String(form.get("company") || "").trim();
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const service = String(form.get("service") || "").trim();
    const address = String(form.get("address") || "").trim();
    const dateNeeded = String(form.get("dateNeeded") || "").trim();
    const message = String(form.get("message") || "").trim();
    const photoFiles = form
      .getAll("photos")
      .filter((f): f is File => f instanceof File && f.size > 0)
      .slice(0, MAX_PHOTOS);

    if (!name || !phone || !email || !service || !address) {
      return NextResponse.json(
        { error: "Please fill in name, phone, email, service and address." },
        { status: 400 },
      );
    }

    const totalBytes = photoFiles.reduce((n, f) => n + f.size, 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      return NextResponse.json(
        { error: "Photos are too large. Please send fewer or smaller images." },
        { status: 400 },
      );
    }

    const attachments: ResendAttachment[] = [];
    for (const file of photoFiles) {
      const att = await fileToAttachment(file);
      if (att) attachments.push(att);
    }

    const payload = {
      name,
      phone,
      email,
      service,
      address,
      dateNeeded,
      message,
      photoCount: attachments.length,
      receivedAt: Date.now(),
    };

    console.info("[tayo-lead]", {
      ...payload,
      message: message ? `[${message.length} chars]` : "",
    });

    const resendKey = process.env.RESEND_API_KEY;
    const isProd = process.env.NODE_ENV === "production";

    if (!resendKey) {
      if (isProd) {
        return NextResponse.json(
          {
            error:
              "Quote email is not configured yet. Please call or text us instead.",
          },
          { status: 503 },
        );
      }
      // Local/dev without Resend: accept so UI can be tested
      return NextResponse.json({ ok: true, dev: true });
    }

    const text = [
      `New quote request from ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Address/City: ${address}`,
      `Date needed: ${dateNeeded || "n/a"}`,
      `Photos attached: ${attachments.length}`,
      "",
      message || "(no message)",
    ].join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.RESEND_FROM ||
          "Tayo Website <leads@tayoservices.ca>",
        to: [process.env.LEADS_TO_EMAIL || EMAIL],
        reply_to: email,
        subject: `Quote: ${service} - ${name}`,
        text,
        ...(attachments.length ? { attachments } : {}),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[tayo-lead] Resend failed", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your request. Please call or text us." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[tayo-lead] error", err);
    return NextResponse.json(
      { error: "Could not submit right now. Please call or text us." },
      { status: 500 },
    );
  }
}
