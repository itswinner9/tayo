"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { PhoneCta } from "@/components/PhoneCta";
import { SERVICES } from "@/lib/services";
import { HAS_PHONE, PHONE_NUMBER } from "@/lib/siteConfig";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-black/10 p-8">
        <h3 className="font-display text-2xl tracking-tight">Thanks!</h3>
        <p className="mt-3 text-tayo-grey">
          We got your request and will reply shortly.
          {HAS_PHONE ? (
            <>
              {" "}
              If it is urgent, call or text{" "}
              <PhoneCta mode="display" variant="inline" label={PHONE_NUMBER} />.
            </>
          ) : null}
        </p>
        <button
          type="button"
          className="btn-primary mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" encType="multipart/form-data">
      {/* Honeypot — hidden from humans */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-tayo-black">
            Service needed
          </span>
          <select
            name="service"
            required
            className="w-full border border-black/10 bg-white px-4 py-3 outline-none focus:border-tayo-blue"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Property Manager Plan">Property Manager Plan</option>
            <option value="Not sure">Not sure</option>
          </select>
        </label>
        <Field label="Address or city" name="address" required />
        <Field label="Date needed" name="dateNeeded" type="date" />
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-tayo-black">
          Photos (optional, up to 4)
        </span>
        <input
          type="file"
          name="photos"
          accept="image/*"
          multiple
          className="w-full border border-black/10 bg-white px-4 py-3 file:mr-3 file:border-0 file:bg-tayo-cream file:px-3 file:py-1.5 file:text-sm"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-tayo-black">Message</span>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-black/10 bg-white px-4 py-3 outline-none focus:border-tayo-blue"
          placeholder="Tell us what you need"
        />
      </label>

      <p className="text-xs text-tayo-grey">
        By submitting, you agree we may contact you about this quote. See our{" "}
        <Link href="/privacy" className="text-tayo-blue hover:underline">
          Privacy Policy
        </Link>
        .
      </p>

      {status === "error" && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full md:w-auto"
      >
        {status === "loading" ? "Sending…" : "Get a Free Quote"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-tayo-black">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border border-black/10 bg-white px-4 py-3 outline-none focus:border-tayo-blue"
      />
    </label>
  );
}
