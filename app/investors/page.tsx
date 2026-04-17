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
      {/* ─── 1. HERO ─── */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Investors
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
            {/* [COUNSEL] — CTA language and accreditation flow must be reviewed by securities counsel */}
            <Link
              href="/investors/verify"
              className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Verify accredited status
            </Link>
            <a
              href="mailto:investors@buildcivilization.com?subject=20-minute%20call"
              className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Book a 20-min call
            </a>
          </div>
          <p className="mt-4 text-sm italic text-stone-500">
            {/* [COUNSEL] — verify this disclaimer language */}
            Verified accredited investors only. All materials gated behind qualification.
          </p>
        </div>
      </section>

      {/* Hero visual */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="aspect-[21/9] min-h-[200px] overflow-hidden rounded-sm">
          <img src="/images/generated/investors-hero.jpeg" alt="Aerial view of the 15,491-acre Cumberland Plateau substrate with property boundary overlay" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* ─── 2. THE OPPORTUNITY ─── */}
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
            <p className="font-medium text-white">
              This is the investor bet: the first living city built not as a vanity
              development, but as a city-scale operating company with a real-asset floor
              and a civilization-scale upside.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── 3. THE OFFERING ─── */}
      {/* [COUNSEL] — entire offering section requires securities counsel review before publication */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The offering.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Current public terms for the equity round.
          </p>
          <div className="mt-8 overflow-hidden rounded-sm border border-stone-200 bg-white">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-stone-200 text-stone-600">
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Issuer</td>
                  <td className="px-4 py-3">Build Civilization Trading Company, Inc.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Security</td>
                  {/* [COUNSEL] — confirm security type and class designation */}
                  <td className="px-4 py-3">Class B common shares</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Reference price</td>
                  {/* [COUNSEL] — confirm price per share */}
                  <td className="px-4 py-3">$0.50 / share</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Minimum investment</td>
                  {/* [COUNSEL] — confirm minimum */}
                  <td className="px-4 py-3">$250,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* [COUNSEL] — confirm reference math and scenario language */}
          <div className="mt-8 rounded-sm border border-stone-200 bg-stone-50 p-6">
            <p className="text-sm font-semibold text-stone-900">Reference math</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              $250K at $0.50/share = 500,000 shares.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              Target scenario: $5B+ mature valuation &asymp; ~$25M position.
            </p>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-stone-500">
            {/* [COUNSEL] — risk disclaimer language */}
            This is a speculative, illiquid investment in an early-stage company. There is
            no guarantee of any return. You may lose your entire investment. Forward-looking
            statements and target scenarios are not projections or promises. Offered only to
            verified accredited investors under applicable federal securities exemptions.
          </p>
        </div>
      </Section>

      {/* ─── 4. THE ASSET FLOOR ─── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The asset floor.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            If nothing else works, you still own this.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Mountain land", "15,491 acres on the Cumberland Plateau, acquired at ~$1,360/acre"],
              ["Producing wells", "27 active wells with capacity for 450+"],
              ["Railroad", "Active CSX rail running through the property"],
              ["Silica", "75–150M tons high-purity SiO\u2082 (98.52%, verified by three labs)"],
              ["Hardwood", "15,000+ acres of standing Appalachian hardwood"],
              ["Mines", "Pre-existing mine infrastructure with year-round 55\u00B0F cooling"],
              ["Water", "50+ inches annual rainfall, mountain spring and aquifer access"],
              ["Grants & bonds", "Distressed-county eligibility for federal grants and tax-exempt bonds"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-sm border border-stone-200 bg-white p-5">
                <p className="text-sm font-bold text-stone-900">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 aspect-[16/9] min-h-[160px] overflow-hidden rounded-sm">
            <img src="/images/generated/investors-assetfloor.jpeg" alt="Property map with asset labels — silica, mines, wells, timber, water, railroad" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* ─── 5. THE CAPITAL MACHINE ─── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The capital machine.
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
          <div className="mt-8">
            <div className="aspect-[3/1] min-h-[100px] overflow-hidden rounded-sm">
              <img src="/images/generated/investors-cascade.jpeg" alt="Bond cascade diagram: Acquire, Municipalize, Infrastructure, Revalue, Repeat" className="h-full w-full object-cover" />
            </div>
          </div>
          <p className="mt-10 text-base font-medium text-stone-900">
            Each phase changes what the land is worth because each phase changes what the
            city can do.
          </p>
        </div>
      </Section>

      {/* ─── 6. WHY HERE ─── */}
      <Section className="bg-stone-50">
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
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Fast utility-district formation (30–90 days)</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Tax-exempt municipal bond issuance</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>No state income tax</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Federal grant stacks (distressed county + coal-country priority)</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Mountain water security (50+ inches rainfall/year)</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>Active CSX rail through the property</li>
              <li className="flex gap-2"><span className="text-stone-400">&bull;</span>3+ miles of I-75 frontage</li>
            </ul>
            <p className="font-medium text-stone-900">
              This is not just &ldquo;nice land.&rdquo; It is a jurisdictional edge.
            </p>
          </div>
          <div className="mt-8">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="/images/generated/investors-tennessee.jpeg" alt="Tennessee map highlighting Campbell and Scott Counties with I-75, CSX rail, and distance rings" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 7. THE ASYMMETRY ─── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The downside is dirt. The upside is a civilization.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Real-asset floor + civilization-scale upside. That is the asymmetry.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
              <p className="font-bold text-stone-900">Downside</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                If the city never scales past Phase 1, the asset layer still controls
                mountain land bought at a 28% discount to appraised value, with active
                wells, silica deposits, hardwood, mine infrastructure, rail access, and
                water. The property is cash-flow positive from day one. You own the
                dirt.
              </p>
            </div>
            <div className="rounded-sm border border-stone-200 bg-stone-50 p-6">
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
          <div className="mt-10">
            <div className="aspect-[2/1] min-h-[180px] overflow-hidden rounded-sm">
              <img src="/images/generated/investors-asymmetry.jpeg" alt="Before and after transformation: raw land on the left, full-scale infrastructure on the right" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 8. PHASES ─── */}
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
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">1 — Proof</td>
                  <td className="px-4 py-3 text-right">50</td>
                  <td className="px-4 py-3 text-right">5</td>
                  <td className="px-4 py-3">Seed + grants + first operators</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">2 — Validate</td>
                  <td className="px-4 py-3 text-right">500</td>
                  <td className="px-4 py-3 text-right">50</td>
                  <td className="px-4 py-3">Bonds + grants + operators</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">3 — Scale</td>
                  <td className="px-4 py-3 text-right">5,000</td>
                  <td className="px-4 py-3 text-right">500</td>
                  <td className="px-4 py-3">Bonds + operators + cash flow</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">4 — Full</td>
                  <td className="px-4 py-3 text-right">50,000</td>
                  <td className="px-4 py-3 text-right">5,040</td>
                  <td className="px-4 py-3">Operating cash flow</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-stone-600">
            This is not a &ldquo;raise forever&rdquo; model. The capital stack changes
            with the city.
          </p>
          <div className="mt-8">
            <div className="aspect-[4/1] min-h-[80px] overflow-hidden rounded-sm">
              <img src="/images/generated/investors-phases.jpeg" alt="Phase structure timeline from Proof (50 people) through Validate, Scale, to Full (50,000 people)" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 9. WHY NOW ─── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why now.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Three things converged.
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                1. The land became available
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                15,491 acres of resource-rich Appalachian substrate, priced at a 28%
                discount to appraised value, with active rail, wells, silica, and mine
                infrastructure. This specific parcel does not come around twice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                2. The federal funding window is open
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                Distressed-county grants, coal-community transition funds, Opportunity
                Zone incentives, and infrastructure programs are all stacked and active
                right now. These windows close.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                3. The technology is ready
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600">
                AI coordination, autonomous infrastructure, modular construction, and
                civic software have all crossed the threshold where a city-scale
                operating system is buildable &mdash; not in ten years, but now.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 10. NEXT STEP ─── */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Next step.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-300">
            Verify your accredited status. Receive the investor memo. Schedule a call.
            Access deeper materials in the data room.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            {/* [COUNSEL] — CTA language review */}
            <Link
              href="/investors/verify"
              className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-100"
            >
              Verify accredited status
            </Link>
            <a
              href="mailto:investors@buildcivilization.com?subject=20-minute%20call"
              className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Book a 20-min call
            </a>
          </div>
          <p className="mt-4 text-sm text-stone-400">
            Or email{" "}
            <a
              href="mailto:investors@buildcivilization.com"
              className="underline hover:text-white"
            >
              investors@buildcivilization.com
            </a>
          </p>
          <p className="mt-8 text-xs text-stone-500">
            {/* [COUNSEL] — issuing entity and legal disclaimer */}
            The issuing entity is Build Civilization Trading Company, Inc. (Delaware
            C-Corporation). Investment opportunities are offered only to verified
            accredited investors under applicable federal securities law.
          </p>
        </div>
      </Section>
    </>
  );
}
