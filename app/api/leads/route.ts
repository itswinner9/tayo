import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { LEADS_TO_EMAIL, SITE_NAME } from "@/lib/siteConfig";

const MAX_PHOTOS = 4;
const MAX_PHOTO_BYTES = 4 * 1024 * 1024; // 4MB each
const MAX_TOTAL_BYTES = 10 * 1024 * 1024; // 10MB total

async function fileToAttachment(file: File) {
  if (file.size <= 0 || file.size > MAX_PHOTO_BYTES) return null;
  if (!file.type.startsWith("image/")) return null;
  const buf = Buffer.from(await file.arrayBuffer());
  const safeName = (file.name || "photo.jpg").replace(/[^\w.\-]+/g, "_");
  return {
    filename: safeName.slice(0, 80),
    content: buf,
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

    const attachments = [];
    for (const file of photoFiles) {
      const att = await fileToAttachment(file);
      if (att) attachments.push(att);
    }

    console.info("[tayo-lead]", {
      name,
      phone,
      email,
      service,
      address,
      dateNeeded,
      photoCount: attachments.length,
      to: LEADS_TO_EMAIL,
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
      console.warn(
        "[tayo-lead] RESEND_API_KEY missing — lead logged only (dev). Add key to .env.local to deliver to",
        LEADS_TO_EMAIL,
      );
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

    const html = `
      <h2 style="margin:0 0 12px;font-family:Arial,sans-serif;">New quote request</h2>
      <p style="font-family:Arial,sans-serif;line-height:1.5;">
        <strong>Name:</strong> ${escapeHtml(name)}<br/>
        <strong>Phone:</strong> ${escapeHtml(phone)}<br/>
        <strong>Email:</strong> ${escapeHtml(email)}<br/>
        <strong>Service:</strong> ${escapeHtml(service)}<br/>
        <strong>Address/City:</strong> ${escapeHtml(address)}<br/>
        <strong>Date needed:</strong> ${escapeHtml(dateNeeded || "n/a")}<br/>
        <strong>Photos:</strong> ${attachments.length}
      </p>
      <p style="font-family:Arial,sans-serif;line-height:1.5;white-space:pre-wrap;">${escapeHtml(message || "(no message)")}</p>
      <p style="font-family:Arial,sans-serif;color:#666;font-size:12px;">Sent from ${escapeHtml(SITE_NAME)} website quote form. Reply to this email to reach the customer.</p>
    `;

    const resend = new Resend(resendKey);
    // Prefer branded sender once tayoservices.ca is Verified (docs/RESEND_DNS.md).
    // Fallback: onboarding@resend.dev (only delivers to your Resend signup inbox).
    const from =
      process.env.RESEND_FROM ||
      "Tayo Website <leads@tayoservices.ca>";

    const { data, error } = await resend.emails.send({
      from,
      to: [LEADS_TO_EMAIL],
      replyTo: email,
      subject: `Quote: ${service} - ${name}`,
      text,
      html,
      ...(attachments.length ? { attachments } : {}),
    });

    if (error) {
      console.error("[tayo-lead] Resend failed", error);
      return NextResponse.json(
        { error: "Could not send your request. Please call or text us." },
        { status: 502 },
      );
    }

    console.info("[tayo-lead] emailed", { id: data?.id, to: LEADS_TO_EMAIL });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[tayo-lead] error", err);
    return NextResponse.json(
      { error: "Could not submit right now. Please call or text us." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
