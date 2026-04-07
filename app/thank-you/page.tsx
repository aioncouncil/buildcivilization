import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Received | Build Civilization",
};

const OPERATOR_STEPS = [
  { step: "Application Review", desc: "We read every response and watch every video.", time: "1\u20132 weeks" },
  { step: "Qualification Call", desc: "We discuss your vision, experience, and fit.", time: "30 min" },
  { step: "Disclosure Packet", desc: "Full operator charter, unit economics, governance rules, exit terms.", time: "14-day review" },
  { step: "Validation", desc: "Talk to other accepted operators. Ask anything.", time: "" },
  { step: "Discovery Weekend", desc: "Come to the land. Live there. Attend a governance meeting.", time: "" },
  { step: "Final Offer", desc: "Tier selection, operating agreement, welcome to the civilization.", time: "" },
];

const BUILDER_STEPS = [
  { step: "Application Review", desc: "We read everything. We watch every video.", time: "1\u20132 weeks" },
  { step: "48-Hour Challenge", desc: "Draft a build plan, supply chain, or festival proposal.", time: "" },
  { step: "Interview", desc: "We test resilience, problem-solving, and how you handle conflict.", time: "30\u201360 min" },
  { step: "14-Day Trial", desc: "Join the online community. Collaborate on a real project.", time: "Optional" },
  { step: "The Invite", desc: "Welcome to the Founding 50.", time: "" },
];

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const type = params.type || "builder";
  const steps = type === "operator" ? OPERATOR_STEPS : BUILDER_STEPS;

  return (
    <div className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Thank you.
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          We review every application personally. If you&rsquo;re selected for the next step,
          you&rsquo;ll hear from us within 14 days.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-xl">
        <h2 className="text-lg font-bold text-stone-900">What happens next</h2>
        <div className="mt-6 space-y-6">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-600">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">
                  {s.step}
                  {s.time && (
                    <span className="ml-2 font-normal text-stone-400">({s.time})</span>
                  )}
                </p>
                <p className="mt-1 text-sm text-stone-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-xl text-center">
        <p className="text-sm font-medium text-stone-700">In the meantime:</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/vision"
            className="rounded-full border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-900 hover:bg-stone-50"
          >
            Read the full vision
          </Link>
        </div>
        <p className="mt-6 text-sm text-stone-500">
          Know someone who should apply?{" "}
          <Link href="/" className="font-medium text-stone-900 underline">
            Share this page
          </Link>
        </p>
      </div>
    </div>
  );
}
