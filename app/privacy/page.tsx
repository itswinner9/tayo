import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EMAIL, SITE_NAME, SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tayo Services & Maintenance handles quote requests, contact details and optional photos.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we handle quote requests and contact details."
        showCtas={false}
      />
      <section className="section-pad">
        <div className="mx-auto w-[min(720px,92%)] space-y-4 text-tayo-grey leading-relaxed">
          <p>
            {SITE_NAME} collects the information you submit on our quote form
            (name, phone, email, address or city, service details, message and
            optional photos) so we can respond to your request.
          </p>
          <p>
            We do not sell your information. We may use a form or email provider
            to deliver messages to our team. Contact us at{" "}
            <a href={`mailto:${EMAIL}`} className="text-tayo-blue">
              {EMAIL}
            </a>{" "}
            with privacy questions.
          </p>
        </div>
      </section>
    </>
  );
}
