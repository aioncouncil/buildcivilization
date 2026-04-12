import Link from "next/link";
import { Section } from "@/components/ui/Section";

// Note: component name retained for import compatibility; content is now three doors.
export function TwoWaysIn() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Every city begins with a first fifty.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          The Living City will eventually house 50,000 people across 5,040 zones, built
          in four phases over roughly a decade. But it begins with fifty. We are
          selecting the first fifty founders right now, from a global pool, to break
          ground on Phase 1. Which door is yours?
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {/* Card 1 — Investors */}
        <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Capital
          </p>
          <h3 className="mt-3 text-xl font-bold text-stone-900">Back the founding.</h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
            A land-backed bet on a real city. Worst case, the land pays for itself. Best
            case, you helped found a city designed to last.
          </p>
          <div className="mt-6">
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600"
            >
              Read the investor memo <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Card 2 — Operators */}
        <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Capital + Operational Expertise
          </p>
          <h3 className="mt-3 text-xl font-bold text-stone-900">
            Own a zone. Anchor the economy.
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
            Invest $125K&ndash;$1M. Own 1&ndash;10 paired acres. Run a specialized
            enterprise plugged into the city&rsquo;s coordination engine. Structured exit
            available.
          </p>
          <div className="mt-6">
            <Link
              href="/operator"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600"
            >
              See the operator offer <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Card 3 — Founding Cohort */}
        <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Frontier Work
          </p>
          <h3 className="mt-3 text-xl font-bold text-stone-900">
            Be one of the first fifty.
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
            A three-to-twelve month residency for elite engineers, researchers, designers,
            and creators. Work on frontier problems &mdash; autonomous systems, AI,
            advanced manufacturing, media, governance &mdash; while the city gets built.
            Founding equity on completion.
          </p>
          <div className="mt-6">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600"
            >
              See the residency tracks <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
