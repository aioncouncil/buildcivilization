import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";

export const metadata: Metadata = {
  title: "Operators | The Living City",
  description:
    "Build the industry that unlocks the city's next age. Operators are founding investors and founding stewards of the zones that make the city real.",
};

export default function OperatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Operators</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Build the industry that unlocks the city&rsquo;s next age.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Operators are founding investors in the company and founding stewards
            of the zones that make the city real. You are not renting a storefront.
            You are buying a position in a city-scale machine &mdash; and building
            the domain it cannot run without.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
            {/* [COUNSEL] CTA language — "verify accredited status" must link to actual verification flow or third-party provider (e.g. Parallel Markets, VerifyInvestor). Confirm with securities counsel before launch. */}
            <Link href="/operators/qualify" className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800">Verify accredited status</Link>
            <a href="mailto:operators@buildcivilization.com?subject=Operator%20Term%20Sheet%20Request" className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50">Request term sheet</a>
            <a href="mailto:mars@buildcivilization.com?subject=Operator%20Conversation" className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50">Speak with founder</a>
          </div>
          <p className="mt-4 text-sm italic text-stone-500">
            {/* [COUNSEL] Accredited-only gate — confirm Reg D / Reg A+ exemption strategy and required disclaimer language. */}
            Open to accredited investors only. Verification required before term sheet access.
          </p>
          <div className="mt-10">
            <ImageSlot language="pioneering" description="Operator at work — serious person in a forge, lab, or workshop with real materials, frontier energy" shot="Shot #50 — Operator hero" aspect="16/9" />
          </div>
        </div>
      </section>

      {/* Not a Small Business */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            This is not a small business opportunity.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>
              A zone is not a franchise. It is not a lease. It is a domain node the
              city needs in order to unlock its next age of development. The bakery
              is not just a bakery &mdash; it is the anchor of the hospitality
              domain, the training ground for apprentices, the supplier to festivals,
              and the proof that the food layer works.
            </p>
            <p className="text-white font-medium">
              Every zone you build changes what the city can do next.
            </p>
          </div>
        </div>
      </Section>

      {/* What an Operator Buys */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What an operator buys.</h2>
          {/* [COUNSEL] This section describes a securities offering. Every claim must be reviewed for compliance with Reg D 506(c) or applicable exemption. "Shareholder" language must match the PPM. */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="text-lg font-bold text-stone-900">1. Equity in Build Civilization Trading Company</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                You become a shareholder in the entity that operates the city&rsquo;s
                commercial layer. Your shares represent ownership in the operating
                company &mdash; not just a zone, but the entire machine.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="text-lg font-bold text-stone-900">2. A founding operating role</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                You are not a passive investor. You are the person who builds and runs
                one of the city&rsquo;s core industries. Your zone is your enterprise.
                The city is your first customer, your first network, and your
                compounding environment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Founding Windows */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Founding windows.</h2>
          <p className="mt-4 text-sm text-stone-500">
            {/* [COUNSEL] Share counts, pricing, and tier structure must match the PPM exactly. Confirm all numbers with counsel before publishing. */}
            Earlier operators take more risk and receive more ownership. Each window closes as capacity fills.
          </p>
          <div className="mt-8 overflow-hidden rounded-sm border border-stone-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Window</th>
                  <th className="px-4 py-3 font-semibold text-right">Investment</th>
                  <th className="px-4 py-3 font-semibold text-right">Shares</th>
                  <th className="px-4 py-3 font-semibold text-right">Price/share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Pathfinder</td>
                  <td className="px-4 py-3 text-right">$250K</td>
                  <td className="px-4 py-3 text-right">500,000</td>
                  <td className="px-4 py-3 text-right">$0.50</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Warden</td>
                  <td className="px-4 py-3 text-right">$500K</td>
                  <td className="px-4 py-3 text-right">300,000</td>
                  <td className="px-4 py-3 text-right">$1.67</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Architect</td>
                  <td className="px-4 py-3 text-right">$1M</td>
                  <td className="px-4 py-3 text-right">200,000</td>
                  <td className="px-4 py-3 text-right">$5.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-sm border border-stone-200 bg-white p-6">
            <p className="text-sm font-bold text-stone-900">Target scenario</p>
            {/* [COUNSEL] Forward-looking valuation scenario. Must include prominent risk disclaimers. Confirm safe-harbor language with counsel. */}
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              At a $5B enterprise value, a Pathfinder&rsquo;s 500,000 shares would be
              worth approximately <strong>$25M</strong>. A Warden&rsquo;s 300,000 shares
              would be worth approximately <strong>$15M</strong>. An Architect&rsquo;s
              200,000 shares would be worth approximately <strong>$10M</strong>.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-stone-500">
              These are illustrative scenarios, not projections or guarantees. Actual
              outcomes depend on execution, market conditions, regulatory factors, and
              many risks described in the offering documents. You may lose your entire
              investment. Past performance of comparable ventures is not indicative of
              future results.
            </p>
          </div>
        </div>
      </Section>

      {/* What Operators Unlock */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What operators unlock.</h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Every zone changes the dependency graph of the city. When you build one
            domain, you make other domains possible.
          </p>
          <div className="mt-10 space-y-6">
            {[
              ["A bakery", "unlocks the hospitality domain, trains apprentices in food production, supplies festivals, proves the food layer works."],
              ["A robotics lab", "unlocks autonomous inspection, drone logistics, sensor deployment, and every zone that depends on machine labor."],
              ["A forge", "unlocks construction materials, tooling for other zones, repair infrastructure, and the entire fabrication dependency chain."],
              ["A diagnostics clinic", "unlocks the health domain, attracts residents who need medical access, and enables longer residencies."],
              ["A media house", "unlocks documentation, civic memory, performance programming, and the city's ability to tell its own story."],
            ].map(([zone, desc]) => (
              <div key={zone} className="border-l-2 border-stone-900 pl-6">
                <h3 className="text-base font-bold text-stone-900">{zone}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base font-medium text-stone-900">
            The question is not &ldquo;will my business have customers?&rdquo; The
            question is &ldquo;what does the city become once my domain exists?&rdquo;
          </p>
        </div>
      </Section>

      {/* What a Zone Can Be */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What a zone can be.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-base text-stone-600">
            {[
              "Robotics and autonomous systems",
              "Glass and silica-derived manufacturing",
              "Food systems and fermentation",
              "Advanced fabrication and CNC",
              "Diagnostics and clinical infrastructure",
              "Construction systems and engineered materials",
              "Water, waste, and utility systems",
              "Logistics and movement",
              "Forge and metalwork",
              "Woodshop and timber processing",
              "Ceramics and kiln-based production",
              "Textile and fiber production",
              "Research and educational infrastructure",
              "Media, publishing, and performance",
              "Hospitality and lodging",
              "Agriculture and greenhouse systems",
              "Energy systems and storage",
              "Computing and data infrastructure",
            ].map(i => (
              <li key={i} className="flex gap-2"><span className="text-stone-400">&bull;</span>{i}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium text-stone-900">
            If you can name the industry the city is missing, and you can run it, that
            is a zone.
          </p>
        </div>
      </Section>

      {/* What You Control vs City Provides */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What you control vs. what the city provides.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="text-lg font-bold text-stone-900">You control</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Your enterprise &mdash; hiring, products, pricing, operations</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Interior buildout and specialized equipment</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Your team and apprentices</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Your production schedule and output</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>How your zone participates in festivals and contests</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Governance influence proportional to your tier</li>
              </ul>
            </div>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="text-lg font-bold text-stone-900">The city provides</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Land and structural shells</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Roads, water, sewer, power, broadband</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>The coordination layer (the Kernel)</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>The founding cohort as your first labor pool</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>A visible backlog of what the city needs next</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Festival and contest programming</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Shared logistics, supply chain, and purchasing power</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Day One in Phase 1 */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-400">Phase 1 reality</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Day one in Phase 1.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              You arrive to raw land with basic infrastructure coming online. The
              founding cohort is already working. The first shells are going up. You
              are not walking into a finished city &mdash; you are building the first
              layer of one.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-stone-600">
            {[
              "5 founding zones standing up simultaneously",
              "50 people in the founding cohort — your first labor, customers, and collaborators",
              "Shared meals, daily work blocks, weekly contests",
              "Infrastructure deploying in real time — roads, water, power, broadband",
              "The Kernel running the city's first coordination layer",
              "Your zone's first customers are the other zones and the cohort itself",
            ].map(i => (
              <li key={i} className="flex gap-2"><span className="text-stone-400">&bull;</span>{i}</li>
            ))}
          </ul>
          <p className="mt-8 text-base font-medium text-stone-900">
            Phase 1 is not a polished world. It is the group of people who make the
            world possible.
          </p>
          <div className="mt-8">
            <ImageSlot language="pioneering" description="Phase 1 site — construction, first shells, people working, frontier energy" shot="Shot #51 — Operator Phase 1" aspect="16/9" />
          </div>
        </div>
      </Section>

      {/* Full City at Scale */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">The full city at scale.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-300">
            <p>
              At full scale, operators are not just running profitable enterprises. They
              are stewarding whole domains of civilization. A single zone can become a
              supplier to hundreds of other zones, the anchor of a domain festival, the
              apprenticeship path for an entire craft, the place where new technologies
              get tested first, and the institution that changes what thousands of people
              can do.
            </p>
            <p>
              5,040 zones. 50,000 people. Twelve domains. Festivals every day. Industries
              that compound on each other. A city that runs like a living organism.
            </p>
          </div>
          <p className="mt-6 text-base font-medium text-white">
            The first operators to build a domain become part of the city&rsquo;s
            permanent memory.
          </p>
          <div className="mt-8">
            <ImageSlot language="festival" description="Full city at scale — Forerunner architecture, festivals, alive with activity" shot="Shot #52 — Full city operator view" aspect="16/9" />
          </div>
        </div>
      </Section>

      {/* Downside / Exit / Protection */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Downside, exit, and protection.</h2>
          {/* [COUNSEL] Risk disclosure section. Must be reviewed for completeness under Reg D. Confirm all exit/liquidity language with counsel — no implied guarantee of liquidity. */}
          <div className="mt-8 space-y-6">
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="font-bold text-stone-900">Downside</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                If the city never scales past Phase 1, the asset layer still controls
                15,000+ acres of mountain land bought at a significant discount to
                appraised value, with active wells, silica deposits, hardwood, mine
                infrastructure, rail access, and water. The property is cash-flow
                positive from day one. You own shares in the entity that owns the dirt.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="font-bold text-stone-900">Exit</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Shares may be transferred subject to company approval and applicable
                securities restrictions. The company intends to pursue liquidity events
                as the city scales, but there is no guaranteed timeline for liquidity.
                Your zone operating rights are tied to your shares and active
                participation.
              </p>
              <p className="mt-2 text-xs text-stone-500">
                {/* [COUNSEL] Confirm transfer restrictions, ROFR, and any lock-up periods match the PPM and operating agreement. */}
                Transfer restrictions, right of first refusal, and lock-up terms are detailed in the offering documents.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="font-bold text-stone-900">Protection</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                The Foundation (501c3) owns the land permanently. No single person or
                entity can sell the substrate out from under the operators. The Trading
                Company operates on a 99-year lease. Governance seats scale with tier.
                The structure is designed so that the people who build the city are the
                people who control it.
              </p>
            </div>
          </div>
          <p className="mt-8 text-xs leading-relaxed text-stone-500">
            {/* [COUNSEL] General risk disclaimer — confirm this satisfies Reg D safe harbor requirements. */}
            This is a speculative investment in an early-stage venture. You may lose
            your entire investment. These materials do not constitute an offer to sell
            or a solicitation of an offer to buy securities. Any offer will be made
            only by means of a private placement memorandum and only to accredited
            investors.
          </p>
        </div>
      </Section>

      {/* Who This Is For / Not For */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Who this is for.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-bold text-stone-900">This is for you if:</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You have run real operations &mdash; payroll, teams, production, risk</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You want to build an industry, not just a business</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You are accredited and can deploy $250K&ndash;$1M of patient capital</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You want to be early enough to shape how your domain is built</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You understand frontier risk and are not looking for a safe bet</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-stone-900">This is not for you if:</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You want a passive investment with predictable returns</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You are looking for a lifestyle retreat or hobby farm</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You cannot afford to lose this capital entirely</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You need liquidity in the next 3&ndash;5 years</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You want to invest without operating</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The next step is verification.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-300">
            We share the full term sheet, financial model, and data room only with
            verified accredited investors. The process takes 5 minutes.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            {/* [COUNSEL] Confirm accreditation verification provider and flow before launch. */}
            <Link href="/operators/qualify" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-100">Verify accredited status</Link>
            <a href="mailto:operators@buildcivilization.com?subject=Operator%20Term%20Sheet%20Request" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Request term sheet</a>
            <a href="mailto:mars@buildcivilization.com?subject=Operator%20Conversation" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Speak with founder</a>
          </div>
          <p className="mt-8 text-xs text-stone-500">
            {/* [COUNSEL] Confirm issuing entity name and securities disclaimer with counsel. */}
            The issuing entity is Build Civilization Trading Company. Investment
            opportunities are offered only to verified accredited investors under
            applicable federal securities law. These materials do not constitute an
            offer to sell securities.
          </p>
        </div>
      </Section>
    </>
  );
}
