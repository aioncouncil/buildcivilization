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
          <img src="/images/property/photo-026.jpg" alt="Dawn aerial of the Cumberland Plateau substrate — switchback roads descending into layered mountain ridges" className="h-full w-full object-cover" />
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
              The coordination layer makes it alive.
            </p>
            <p className="font-medium text-white">
              This is the investor bet: the first living city built not as a vanity
              development, but as a city-scale operating company with a real-asset floor
              and a civilization-scale upside.
            </p>
          </div>
        </div>
      </Section>

      {/* ─── 2b. TWO LIVES, ONE CITY ─── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">The structure, in plain English.</h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            You are not investing in a real estate fund. You are not backing a charity. You are
            buying founding shares in the for-profit company that will operate the first living
            city &mdash; sitting under a nonprofit Foundation that owns the land permanently.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border-l-2 border-amber-600 bg-stone-50 p-6">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-amber-700">The Foundation</p>
              <p className="mt-3 text-lg font-bold text-stone-900">A congregation, permanent.</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                A religious and educational 501(c)(3). Owns the 15,491 acres permanently &mdash;
                no one can sell the substrate out from under the city. Residents live as members
                of a congregation, not wage employees. Housing, training, food, ritual, festivals
                &mdash; the entire architecture of daily life &mdash; runs through the Foundation.
              </p>
            </div>
            <div className="rounded-sm border-l-2 border-stone-900 bg-stone-50 p-6">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-stone-600">The Trading Company</p>
              <p className="mt-3 text-lg font-bold text-stone-900">A for-profit, compounding.</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                A Delaware C-Corp with 100,000,000 authorized shares, operating the city&rsquo;s
                commercial layer on a 99-year ground lease from the Foundation. This is what
                you are buying into. Priced at $100M today. Target $5B+ at maturity. Your shares
                ride that curve.
              </p>
            </div>
          </div>
          <p className="mt-8 text-base font-medium text-stone-900">
            The congregation makes the city livable. The company makes the city ownable. You
            back the company that powers it.
          </p>
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
                  <td className="px-4 py-3 font-medium text-stone-900">Pre-money valuation</td>
                  <td className="px-4 py-3">$100M</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Reference price</td>
                  {/* [COUNSEL] — confirm price per share */}
                  <td className="px-4 py-3">$1.00 / share</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Authorized shares</td>
                  <td className="px-4 py-3">100,000,000</td>
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
              $250K at $1.00/share = 250,000 shares = 0.25% of the company today.
            </p>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              Target scenario: $5B+ mature valuation &rarr; shares at $50 &rarr; position worth ~$12.5M. 50&times; on your capital if the city reaches full scale.
            </p>
          </div>

          {/* Value trajectory staircase */}
          <div className="mt-10">
            <h3 className="text-lg font-bold text-stone-900">The share value trajectory.</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Every phase of the city changes what a share is worth, because every phase changes what the
              company can do. The earlier you come in, the steeper your curve.
            </p>
            <div className="mt-6 overflow-hidden rounded-sm border border-stone-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-stone-50 text-xs uppercase tracking-wide text-stone-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Phase</th>
                    <th className="px-4 py-3 font-medium">People</th>
                    <th className="px-4 py-3 text-right font-medium">Price / share</th>
                    <th className="px-4 py-3 text-right font-medium">Implied valuation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr><td className="px-4 py-3">Formation</td><td className="px-4 py-3">0</td><td className="px-4 py-3 text-right">$0.10</td><td className="px-4 py-3 text-right">$10M</td></tr>
                  <tr className="bg-amber-50"><td className="px-4 py-3 font-semibold">Phase 1 — now</td><td className="px-4 py-3 font-semibold">50</td><td className="px-4 py-3 text-right font-semibold">$1.00</td><td className="px-4 py-3 text-right font-semibold">$100M</td></tr>
                  <tr><td className="px-4 py-3">Phase 2</td><td className="px-4 py-3">500</td><td className="px-4 py-3 text-right">$2.50</td><td className="px-4 py-3 text-right">$250M</td></tr>
                  <tr><td className="px-4 py-3">Phase 3</td><td className="px-4 py-3">5,000</td><td className="px-4 py-3 text-right">$15.00</td><td className="px-4 py-3 text-right">$1.5B</td></tr>
                  <tr><td className="px-4 py-3">Maturity</td><td className="px-4 py-3">50,000</td><td className="px-4 py-3 text-right">$50.00</td><td className="px-4 py-3 text-right">$5B+</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs italic leading-relaxed text-stone-500">
              Illustrative trajectory tied to operational milestones, not a projection. Actual pricing in
              each round depends on performance, market conditions, and board approval. You may lose your
              entire investment.
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
            If nothing else works, you still own this. Conservative market ranges on the
            substrate alone &mdash; before we build anything.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Mountain land", "15,491 acres on the Cumberland Plateau, acquired at ~$1,360/acre", "$32M basis &middot; $1.5&ndash;5.6B mature"],
              ["Silica", "75\u2013150M tons high-purity SiO\u2082 (98.52%, verified by three labs)", "~$8B resource floor"],
              ["Coal & mines", "Pre-existing mine infrastructure with year-round 55\u00B0F cooling", "~$2B resource floor"],
              ["Producing wells", "27 active wells producing today; capacity for 450+", "$500M+ estimated NAV"],
              ["Hardwood", "15,000+ acres of standing Appalachian hardwood", "~$200M standing timber"],
              ["Railroad", "Active CSX rail running through the property, 3+ miles of I-75 frontage", "Logistics advantage"],
              ["Water", "50+ inches annual rainfall, mountain spring and aquifer access", "Strategic, decades of yield"],
              ["Grants & bonds", "Distressed-county eligibility for federal grants and tax-exempt bonds", "50\u201380% infra match"],
            ].map(([title, desc, floor]) => (
              <div key={title} className="rounded-sm border border-stone-200 bg-white p-5">
                <p className="text-sm font-bold text-stone-900">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{desc}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-amber-700" dangerouslySetInnerHTML={{ __html: floor }} />
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-sm border border-stone-200 bg-white p-5">
            <p className="text-sm font-bold text-stone-900">Resource floor, summed.</p>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              ~$11B in verified geological resources sitting under 15,491 acres purchased at a
              28% discount to appraised value. You are buying shares in the entity that owns
              the dirt, before any infrastructure, before any operators, before any bonds.
            </p>
            <p className="mt-2 text-xs italic leading-relaxed text-stone-500">
              Resource ranges are industry estimates from lab assays and comparable regional
              valuations, not liquidation values. Extraction, permitting, and market realization
              determine realized value. See the data room for methodology.
            </p>
          </div>
          <div className="mt-8 aspect-[16/9] min-h-[160px] overflow-hidden rounded-sm">
            <img src="/images/property/photo-021.jpg" alt="Satellite map with all four parcels outlined in yellow — Mars Sand Mountain, Elk Valley, Buffalo, Westbourne Mountain" className="h-full w-full object-cover" />
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
              <img src="/images/property/photo-151.jpg" alt="Aerial of a cleared cut running up into the forest with Appalachian ridgeline behind — infrastructure staging unfolding in phases" className="h-full w-full object-cover" />
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
              <img src="/images/property/photo-042.jpg" alt="Topographic overlay with contour lines and parcel boundary on the Cumberland Plateau — Campbell and Scott Counties, Tennessee" className="h-full w-full object-cover" />
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
              <img src="/images/festivals/keepers/aerial-wondrous-city-pro.jpeg" alt="Full-scale vision — a Forerunner civilization woven through the real Cumberland Plateau ridges, bridges spanning forested valleys at golden hour" className="h-full w-full object-cover" />
            </div>
            <p className="mt-2 text-xs italic text-stone-500">The dirt is real today. The architecture is the Phase 4 vision. The asymmetry is the bet.</p>
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
              <img src="/images/festivals/keepers/parade-bridge-pro.jpeg" alt="Phase 4 at full temperature — festival parade crossing a Forerunner bridge across the Cumberland Plateau, musicians and dancers, score leaderboard hovering overhead" className="h-full w-full object-cover" />
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
          <Link href="/founder" className="mt-10 inline-flex items-center gap-4 rounded-sm border border-white/20 bg-white/5 px-5 py-4 text-left hover:bg-white/10">
            <img src="/images/people/mars-founder.png" alt="Mars Argeadai, founder" className="h-14 w-14 rounded-full object-cover" />
            <span className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-white/60">From the founder</span>
              <span className="mt-1 text-sm font-semibold text-white">Read the letter from Mars Argeadai &rarr;</span>
            </span>
          </Link>
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
