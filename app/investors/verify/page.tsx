import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";

export const metadata: Metadata = {
  title: "Verify Investor Status | The Living City",
  description:
    "Verify your accredited investor status and request the investor memo for Build Civilization.",
};

export default function VerifyPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Investor Verification
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Verify your status and request the memo.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            All investor materials &mdash; the memo, financial models, data room, and
            direct access to the founder &mdash; are gated behind accredited investor
            verification.
          </p>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Who this is for.
          </h2>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-stone-600">
            <p>
              You are an accredited investor under SEC Rule 501 of Regulation D. You
              understand that early-stage private investments are speculative, illiquid,
              and carry the risk of total loss. You are looking for asymmetric
              opportunities with a real-asset floor.
            </p>
            {/* [COUNSEL] — confirm accreditation criteria language */}
            <p className="text-sm text-stone-500">
              Accredited investor criteria include: annual income exceeding $200K
              ($300K joint) for the last two years, net worth exceeding $1M excluding
              primary residence, or qualifying professional certifications. See SEC
              guidance for full definitions.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── WHAT YOU RECEIVE ─── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What you receive after qualification.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Investor memo", "Full thesis, financials, risk factors, and capital deployment plan"],
              ["Data room access", "Geological surveys, appraisals, legal structure, and financial models"],
              ["Founder call", "20-minute direct call with the founder to answer your questions"],
              ["Term sheet", "Current offering terms, share class details, and subscription documents"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-sm border border-stone-200 bg-stone-50 p-5">
                <p className="text-sm font-bold text-stone-900">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── THE PROCESS ─── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The process.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Four steps. Most investors complete verification in under 48 hours.
          </p>
          <div className="mt-10 space-y-8">
            <div className="border-l-2 border-stone-900 pl-6">
              <h3 className="text-lg font-bold text-stone-900">
                1. Submit your information
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                Complete the form below with your name, contact information, and
                self-certification of accredited status.
              </p>
            </div>
            <div className="border-l-2 border-stone-900 pl-6">
              <h3 className="text-lg font-bold text-stone-900">
                2. Verification
              </h3>
              {/* [COUNSEL] — confirm verification method and third-party provider */}
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                We verify your accredited investor status through a third-party
                verification provider or a letter from your attorney, CPA, or
                broker-dealer.
              </p>
            </div>
            <div className="border-l-2 border-stone-900 pl-6">
              <h3 className="text-lg font-bold text-stone-900">
                3. Receive the memo
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                Once verified, you receive the investor memo and data room credentials
                via encrypted email within 24 hours.
              </p>
            </div>
            <div className="border-l-2 border-stone-900 pl-6">
              <h3 className="text-lg font-bold text-stone-900">
                4. Schedule a call
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                Book a 20-minute call with the founder to discuss the opportunity,
                ask questions, and determine fit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── VERIFICATION FORM PLACEHOLDER ─── */}
      {/* [COUNSEL] — form fields and data collection must comply with securities regulations */}
      <Section className="bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Start verification.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Complete the fields below. All information is kept confidential and used
            solely for investor qualification purposes.
          </p>

          {/* ── Form placeholder ── */}
          <div className="mt-8 rounded-sm border-2 border-dashed border-stone-300 bg-stone-50 px-6 py-16 text-center">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
              Verification form placeholder
            </p>
            <p className="mt-3 text-sm text-stone-500">
              Fields: Full name, Email, Phone, Entity name (optional),
              Accreditation basis (dropdown), Estimated investment amount,
              How did you hear about us, Message (optional)
            </p>
            <p className="mt-4 text-xs text-stone-400">
              Integration: connect to CRM + third-party accreditation verification service
            </p>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-stone-500">
            {/* [COUNSEL] — privacy and data handling disclaimer */}
            By submitting this form you consent to our processing of your information
            for investor qualification purposes. We do not share your data with third
            parties except as required for accreditation verification. See our privacy
            policy for details.
          </p>
        </div>
      </Section>

      {/* ─── ALTERNATIVE CONTACT ─── */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Prefer to reach out directly?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-300">
            Email us at{" "}
            <a
              href="mailto:investors@buildcivilization.com"
              className="underline hover:text-white"
            >
              investors@buildcivilization.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:investors@buildcivilization.com?subject=20-minute%20call"
              className="underline hover:text-white"
            >
              book a 20-min call
            </a>
            .
          </p>
          <div className="mt-8">
            <Link
              href="/investors"
              className="text-sm font-medium text-stone-400 underline hover:text-white"
            >
              &larr; Back to Investors
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
