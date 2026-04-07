import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function TwoWaysIn() {
  return (
    <Section className="bg-stone-50">
      <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        Two ways in.
      </h2>
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Operator Card */}
        <div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Bring Capital &amp; Expertise
          </p>
          <h3 className="mt-3 text-2xl font-bold text-stone-900">Zone Operators</h3>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            You invest $125K&ndash;$1M. You get land&mdash;a paired town-center plot and an
            outer production zone. You get infrastructure funded mostly by federal grants. You
            keep the majority of your profits, earn a preferred return, and build real equity.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-stone-600">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-stone-400">&bull;</span>
              1&ndash;10 acres (paired locations)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-stone-400">&bull;</span>
              6&ndash;9% preferred return on capital
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-stone-400">&bull;</span>
              65&ndash;80% profit split (you keep the majority)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-stone-400">&bull;</span>
              Federal grants covering most infrastructure
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-stone-400">&bull;</span>
              4,999 other enterprises as your customer base
            </li>
          </ul>
          <p className="mt-6 text-sm font-medium text-stone-800">
            This is not a franchise. You own your zone.
          </p>
          <div className="mt-8">
            <Button href="/operator">Apply as Zone Operator</Button>
          </div>
        </div>

        {/* Builder Card */}
        <div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Bring Genius &amp; Intensity
          </p>
          <h3 className="mt-3 text-2xl font-bold text-stone-900">Civilization Builders</h3>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Manhattan Project meets Burning Man meets Y Combinator. But permanent. On real
            land. Building a real civilization. Come for 3&ndash;12 months. Bring your skill
            and your intensity. Room and board. Equity in the founding.
          </p>
          <div className="mt-6 space-y-3">
            {[
              { tier: "Founding Builder", cost: "Stipend", desc: "Exceptional talent. Maximum equity." },
              { tier: "Apprentice", cost: "$0", desc: "Full-time. Room and board provided." },
              { tier: "Builder", cost: "$500\u2013$1K/mo", desc: "40+ hours/week. Your skill applied." },
              { tier: "Craftsman", cost: "$2K/mo", desc: "15 hrs/week. Private housing." },
              { tier: "Explorer", cost: "$4K/mo", desc: "10 hrs/week. Evaluating the vision." },
            ].map((t) => (
              <div key={t.tier} className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-stone-800">{t.tier}</span>
                <span className="text-stone-500">{t.cost}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium text-stone-800">
            &ldquo;I was one of the first 50.&rdquo;
          </p>
          <div className="mt-8">
            <Button href="/builder">Apply as Civilization Builder</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
