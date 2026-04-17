import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { OperatorForm } from "@/components/forms/OperatorForm";

export const metadata: Metadata = {
  title: "Operator Qualification | The Living City",
  description:
    "Verify your accredited investor status and begin the operator qualification process for The Living City.",
};

// [COUNSEL] This entire page gates a securities offering. Confirm (1) accreditation verification method satisfies Reg D 506(c) "reasonable steps" requirement, (2) form data handling complies with privacy regulations, (3) no offer is deemed to have been made before verification is complete.

export default function OperatorQualifyPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Operator Qualification</p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Begin the qualification process.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            We share the full term sheet, financial model, site data, and offering
            documents only with verified accredited investors. This form starts the
            process. It takes about 10 minutes.
          </p>
        </div>
      </section>

      {/* Process */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">How it works.</h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">1</span>
              <div>
                <p className="font-bold text-stone-900">Submit this form</p>
                <p className="mt-1 text-sm text-stone-600">Tell us about yourself, your operating background, and the domain you want to build.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">2</span>
              <div>
                <p className="font-bold text-stone-900">Verify accredited status</p>
                {/* [COUNSEL] Confirm third-party verification provider (e.g. Parallel Markets, VerifyInvestor, Carta) and integration. Reg D 506(c) requires "reasonable steps to verify." Self-certification alone is insufficient. */}
                <p className="mt-1 text-sm text-stone-600">We use a third-party verification provider. You will receive a link to complete verification after submitting this form.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">3</span>
              <div>
                <p className="font-bold text-stone-900">Receive the term sheet and data room access</p>
                <p className="mt-1 text-sm text-stone-600">Once verified, you get the full offering documents, financial model, site data, and the ability to schedule a founder call.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section className="bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">Your information.</h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            All information is confidential and used solely for qualification purposes.
          </p>
          <div className="mt-10">
            {/* [COUNSEL] Confirm form fields collect all information required for Reg D 506(c) compliance. Confirm data retention and privacy policy covers this intake. */}
            <OperatorForm />
          </div>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs leading-relaxed text-stone-500">
            {/* [COUNSEL] Review full disclaimer for Reg D compliance. Confirm no language constitutes an offer prior to PPM delivery. */}
            Submitting this form does not constitute an investment commitment or an
            offer to purchase securities. No offer to sell or solicitation of an offer
            to buy securities will be made except by means of a private placement
            memorandum delivered to verified accredited investors. All investment
            involves risk, including the possible loss of your entire investment.
          </p>
          <div className="mt-6">
            <Link href="/operators" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
              <span aria-hidden="true">&larr;</span> Back to Operators
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
