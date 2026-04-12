import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Investors | The Living City",
  description:
    "Back the first city-scale technology platform. A land-backed capital machine for compute, manufacturing, autonomous infrastructure, and civic software.",
};

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Investors &middot; Private Memo
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Back the first city-scale technology platform.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            A land-backed capital machine for compute, manufacturing, autonomous
            infrastructure, and civic software &mdash; financed through grants, bonds,
            operator capital, and real assets.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
            <a href="mailto:investors@buildcivilization.com?subject=Investor%20Memo%20Request" className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800">
              Request the investor memo
            </a>
            <a href="mailto:investors@buildcivilization.com?subject=20-minute%20call" className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50">
              Book a 20-minute call
            </a>
          </div>
          <p className="mt-4 text-sm italic text-stone-500">
            Accredited investors only. Verification required before data room access.
          </p>
        </div>
      </section>

      {/* The Spell */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Buy the substrate. Issue the bonds. Unlock the next age. Repeat.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>
              We are not buying land and hoping meaning appears. We are assembling the
              industrial substrate, the municipal financing stack, the operator network,
              and the software layer for a new kind of city.
            </p>
            <p>
              The land makes it real.<br />
              The bond and grant structure makes it financeable.<br />
              The zone model makes it productive.<br />
              The kernel makes it alive.
            </p>
            <p className="text-white font-medium">
              This is the investor bet: the first living city built not as a vanity
              development, but as a city-scale operating company with a real-asset floor
              and a civilization-scale upside.
            </p>
          </div>
        </div>
      </Section>

      {/* The Translation */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What that means in plain English.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Acquire resource-rich land in a federally subsidized Appalachian county at a
            significant discount to appraised value. Form a Tennessee utility district in
            30&ndash;90 days. Issue tax-exempt bonds. Use federal grants to cover a
            majority of infrastructure. Revalue the land as municipal status and
            infrastructure come online. Issue the next layer of bonds against the new
            value. Onboard operators who bring capital and specialized industries. Repeat
            until the city becomes a fully operating machine.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            The model is simple to say and hard to execute. That is exactly why it is
            interesting.
          </p>
        </div>
      </Section>

      {/* The Proof */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The numbers that matter.
          </h2>
          <div className="mt-8 space-y-4">
            {[
              ["15,491 acres", "on the Cumberland Plateau, Campbell & Scott Counties"],
              ["$25M acquisition", "at $1,360/acre — 72% of the 2014 bank-appraised value"],
              ["$250M+", "in estimated geological resources (coal, silica, gas, timber)"],
              ["161M tons", "proven coal reserves (IRTEC geological survey)"],
              ["75–150M tons", "high-purity silica at 98.52% SiO₂ (verified by three independent labs)"],
              ["27 producing wells", "with capacity for 450+ wells on the property"],
              ["Cash-flow positive", "existing operations cover all carrying costs from day one"],
              ["50–80%", "projected federal grant coverage for Phase 1 infrastructure"],
              ["30–90 days", "to form a bond-issuing Tennessee utility district ($10–25K)"],
            ].map(([stat, desc]) => (
              <div key={stat} className="flex gap-4 items-baseline">
                <span className="shrink-0 text-xl font-bold text-stone-900 sm:text-2xl w-40 text-right">
                  {stat}
                </span>
                <span className="text-base text-stone-600">{desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-stone-500">
            Resource values represent estimated gross in-ground value at current market
            prices, not net recoverable revenue. Appraisal references the 2014 Woodford
            Bank MAI-certified market valuation ($34.76M). All reserve estimates sourced
            from independent geological surveys. See the{" "}
            <Link href="/land" className="underline hover:text-stone-700">
              Land page
            </Link>{" "}
            for full methodology and category disclosures.
          </p>
        </div>
      </Section>

      {/* The Bond Cascade */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The bond cascade.
          </h2>
          <p className="mt-4 text-sm font-medium text-stone-500">
            Raw land &rarr; municipal entity &rarr; infrastructure &rarr; operating city
          </p>
          <div className="mt-10 space-y-8">
            <div className="border-l-2 border-stone-900 pl-6">
              <h3 className="text-lg font-bold text-stone-900">
                1. Acquire + municipalize
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                Acquire the land. Form the utility district. Use municipal status and
                raw land value to support the first bond issuance. Apply for federal
                grants.
              </p>
            </div>
            <div className="border-l-2 border-stone-900 pl-6">
              <h3 className="text-lg font-bold text-stone-900">
                2. Infrastructure + revalue
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                Build roads, water, sewer, power, and broadband. Grants cover a majority
                of the spend. The land revalues because it now has municipal structure
                and real infrastructure.
              </p>
            </div>
            <div className="border-l-2 border-stone-900 pl-6">
              <h3 className="text-lg font-bold text-stone-900">3. Build + scale</h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                Construct the next layer: buildings, zones, manufacturing, and shared
                facilities. Onboard operators. Revalue again. Issue the next layer of
                bonds against a much stronger asset.
              </p>
            </div>
          </div>
          <p className="mt-10 text-base font-medium text-stone-900">
            Each phase changes what the land is worth because each phase changes what the
            city can do.
          </p>
        </div>
      </Section>

      {/* Land Value Cascade */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The per-acre trajectory.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The business plan models a per-acre value progression as the land transitions
            from raw acreage to an operating city. These are design targets based on
            comparable municipal developments, not guarantees.
          </p>
          <div className="mt-8 overflow-hidden rounded-sm border border-stone-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Stage</th>
                  <th className="px-4 py-3 font-semibold text-right">Target $/acre</th>
                  <th className="px-4 py-3 font-semibold">Comparable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Raw acquisition</td>
                  <td className="px-4 py-3 text-right">~$1,360</td>
                  <td className="px-4 py-3">Current LOI price</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Platted + utility district</td>
                  <td className="px-4 py-3 text-right">$10,000–25,000</td>
                  <td className="px-4 py-3">Comparable TN utility districts</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Infrastructured</td>
                  <td className="px-4 py-3 text-right">$20,000–60,000</td>
                  <td className="px-4 py-3">Developed rural communities</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Operating community</td>
                  <td className="px-4 py-3 text-right">$60,000–100,000+</td>
                  <td className="px-4 py-3">The Villages per-unit economics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-stone-500">
            These are design targets modeled on comparable developments, not projections
            of guaranteed returns. Actual land values will depend on execution, market
            conditions, and regulatory approvals. The first five zones in Phase 1 will
            prove or disprove the unit economics.
          </p>
        </div>
      </Section>

      {/* Revenue Stack */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Six ways the operating city generates revenue.
          </h2>
          <div className="mt-10 space-y-6">
            {[
              ["AI compute", "Data infrastructure housed inside pre-existing mines with natural cooling at 55°F year-round."],
              ["Manufacturing", "Zone-based cooperative production using on-site material advantages (silica, timber, clay, metals) and specialized labor."],
              ["Free-zone / tenant revenue", "External companies locating inside the city's economic stack, attracted by stacked tax incentives."],
              ["Agriculture and food systems", "Internal provisioning plus higher-margin external outputs from 15,000+ acres."],
              ["Civic software / platform licensing", "The coordination layer, planning tools, and municipal operating stack — licensed to other municipalities and developers."],
              ["Tourism / education / cultural revenue", "People will come to study, visit, and experience the city once it is alive."],
            ].map(([title, desc]) => (
              <div key={title}>
                <h3 className="text-lg font-bold text-stone-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-stone-500">
            Our design target is 5,040 zones each operating at a minimum annual threshold
            of $500,000 in economic activity. Detailed assumptions and projections live in
            the investor memo and data room.
          </p>
        </div>
      </Section>

      {/* Phase Structure */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Phase structure.
          </h2>
          <div className="mt-8 overflow-hidden rounded-sm border border-stone-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Phase</th>
                  <th className="px-4 py-3 font-semibold text-right">People</th>
                  <th className="px-4 py-3 font-semibold text-right">Zones</th>
                  <th className="px-4 py-3 font-semibold">Capital source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                <tr><td className="px-4 py-3 font-medium text-stone-900">1 — Proof</td><td className="px-4 py-3 text-right">50</td><td className="px-4 py-3 text-right">5</td><td className="px-4 py-3">Seed + grants + first operators</td></tr>
                <tr><td className="px-4 py-3 font-medium text-stone-900">2 — Validate</td><td className="px-4 py-3 text-right">500</td><td className="px-4 py-3 text-right">50</td><td className="px-4 py-3">Bonds + grants + operators</td></tr>
                <tr><td className="px-4 py-3 font-medium text-stone-900">3 — Scale</td><td className="px-4 py-3 text-right">5,000</td><td className="px-4 py-3 text-right">500</td><td className="px-4 py-3">Bonds + operators + cash flow</td></tr>
                <tr><td className="px-4 py-3 font-medium text-stone-900">4 — Full</td><td className="px-4 py-3 text-right">50,000</td><td className="px-4 py-3 text-right">5,040</td><td className="px-4 py-3">Operating cash flow</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-stone-600">
            This is not a &ldquo;raise forever&rdquo; model. The capital stack changes
            with the city.
          </p>
        </div>
      </Section>

      {/* Why Tennessee */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why Tennessee.
          </h2>
          <p className="mt-4 text-base font-medium text-stone-900">
            Fastest path to a bond-issuing entity in America.
          </p>
          <div className="mt-6 space-y-3 text-base leading-relaxed text-stone-600">
            <p>
              Tennessee utility districts can be formed in roughly 30&ndash;90 days at
              $10&ndash;25K and issue tax-exempt bonds. Comparable pathways in Texas take
              18&ndash;24 months and cost $2.5&ndash;5.5M.
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>No state income tax</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Mountain water security (50+ inches rainfall/year)</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Active CSX rail through the property</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Distressed-county federal grant eligibility</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Coal-country federal investment priority</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>3+ miles of I-75 frontage</li>
            </ul>
            <p className="font-medium text-stone-900">
              This is not just &ldquo;nice land.&rdquo; It is a jurisdictional edge.
            </p>
          </div>
        </div>
      </Section>

      {/* Downside / Upside */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The downside is dirt. The upside is a civilization.
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-white p-6">
              <p className="font-bold text-stone-900">Downside</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                If the city never scales past Phase 1, the asset layer still controls
                mountain land bought at a 28% discount to appraised value, with active
                wells, silica deposits, hardwood, mine infrastructure, rail access, and
                water. The property is cash-flow positive from day one. You own the
                dirt.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-white p-6">
              <p className="font-bold text-stone-900">Upside</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                If the city succeeds, the equity layer owns one of the first real
                city-scale systems for compute, manufacturing, infrastructure, and
                living coordination &mdash; on substrate that software-first projects
                cannot replicate, with a licensing model that exports to every city on
                Earth.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Ask */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The next move is the memo.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-300">
            We want investors who understand hard-asset downside, long-horizon execution,
            municipal finance, operator-driven buildout, and frontier technical ambition.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a href="mailto:investors@buildcivilization.com?subject=Investor%20Memo%20Request" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-100">
              Request the investor memo
            </a>
            <a href="mailto:investors@buildcivilization.com?subject=20-minute%20call" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              Book a 20-minute call
            </a>
          </div>
          <p className="mt-8 text-xs text-stone-500">
            Investment opportunities are offered only to verified accredited investors
            under applicable federal securities law.
          </p>
        </div>
      </Section>
    </>
  );
}
