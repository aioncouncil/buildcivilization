import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Investors | The Living City",
  description:
    "A $5M seed round to close 15,491 acres in Tennessee and prove Phase 1 of The Living City. Offered only to verified accredited investors.",
};

export default function InvestorsPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Investors &middot; Private Memo &middot; 2026
          </p>
          <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            The downside is dirt. The upside is a civilization.
          </h1>
          <p className="mt-6 text-lg italic text-stone-600">
            A $5M seed round to close 15,491 acres in Tennessee and prove Phase 1 of The
            Living City.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
            <a
              href="mailto:investors@buildcivilization.com?subject=Data%20Room%20Access%20Request"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Access the seed round data room
            </a>
            <a
              href="mailto:investors@buildcivilization.com?subject=20-minute%20call"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Book a 20-minute call
            </a>
          </div>
          <p className="mt-4 text-sm italic text-stone-500">
            Both actions require accredited investor verification before access.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Executive Summary
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
            <p>
              We are acquiring 15,491 cash-flowing acres on Tennessee&rsquo;s Cumberland
              Plateau. The property holds an estimated $11 billion in geological
              resources &mdash; silica sand, coal, oil, gas, timber, water. The land
              sits in a federally designated Appalachian distressed zone, which makes
              it eligible for ARC, POWER, EDA, USDA Rural Development, and Tennessee
              FastTrack programs covering a majority of Phase 1 infrastructure costs.
            </p>
            <p>
              The $5M seed round closes the land and proves Phase 1: approximately fifty
              residents, five production zones, positive unit economics within eighteen
              months.
            </p>
          </div>
        </div>
      </Section>

      {/* Asymmetric Bet */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The asymmetric bet.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Most new-city projects lack a margin of safety. They pitch a rendering
            before they own the dirt.
          </p>
          <p className="mt-4 text-xl font-semibold text-stone-900">We have the dirt.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-semibold text-stone-900">Downside</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                If the city does not scale past Phase 1, the equity layer owns
                approximately 15,000 acres of partially infrastructured,
                resource-producing land acquired at a small fraction of its estimated
                geological value. Active oil and gas wells generate revenue from day
                one. Timber harvest is ongoing.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-semibold text-stone-900">Upside</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                If the city succeeds, the equity layer owns a sovereign economic engine
                with four revenue streams, a licensing model, and a blueprint that can
                be exported.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-lg italic text-stone-900">
            The downside is dirt. The upside is a civilization.
          </p>
        </div>
      </Section>

      {/* Four-layer revenue */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The four-layer revenue model.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            At full scale (~50,000 people, ~5,040 zones), The Living City projects
            revenue across four layers.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Layer 1 &mdash; AI Compute
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Data center capacity housed inside pre-existing coal mines, which
                maintain a natural 55&deg;F year-round and require minimal active
                cooling. Target unit economics modeled on CoreWeave and Equinix
                comparables.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Layer 2 &mdash; Cooperative Manufacturing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Worker-owned production of high-margin goods in niches where quality
                matters more than scale. Modeled on Mondragón Cooperative Corporation,
                which has generated $12.9B in annual revenue with 80,000 worker-owners
                since 1956.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Layer 3 &mdash; Free Zone / Special Economic Zone
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Stacked federal and state tax incentives &mdash; Foreign Trade Zone,
                Opportunity Zone, municipal tax abatement &mdash; attract external
                enterprises. Revenue through lease, fees, and percent-of-profit
                arrangements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">
                Layer 4 &mdash; Civic Infrastructure Software
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                The logistical, governance, and resource-routing software running the
                city, licensed to other municipalities, developers, and sovereign
                wealth funds.
              </p>
            </div>
          </div>
          <p className="mt-10 text-sm italic text-stone-500">
            Detailed revenue modeling, phase pro formas, and comparable unit economics
            are in the data room.
          </p>
        </div>
      </Section>

      {/* Phase Structure */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Phase structure.
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Phase</th>
                  <th className="px-4 py-3 font-semibold">People</th>
                  <th className="px-4 py-3 font-semibold">Zones</th>
                  <th className="px-4 py-3 font-semibold">Capital Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white text-stone-600">
                <tr>
                  <td className="px-4 py-3 font-semibold text-stone-900">1 &mdash; Proof</td>
                  <td className="px-4 py-3">~50</td>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">$5M seed round</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-stone-900">2 &mdash; Validate</td>
                  <td className="px-4 py-3">~500</td>
                  <td className="px-4 py-3">50</td>
                  <td className="px-4 py-3">TN utility district bonds</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-stone-900">3 &mdash; Scale</td>
                  <td className="px-4 py-3">~5,000</td>
                  <td className="px-4 py-3">500</td>
                  <td className="px-4 py-3">Bonds + operator capital</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-stone-900">4 &mdash; Full</td>
                  <td className="px-4 py-3">~50,000</td>
                  <td className="px-4 py-3">5,040</td>
                  <td className="px-4 py-3">Operational cash flow</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm italic text-stone-500">
            Phase 1 pro forma, Phase 2 bond issuance projection, and full four-phase
            model in the data room.
          </p>
        </div>
      </Section>

      {/* Why Now */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why now.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Three conditions converged in the last 24 months that made this project
            possible now:
          </p>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-stone-600">
            <p>
              <strong className="text-stone-900">
                Federal grant programs for Appalachian distressed zones expanded under
                the Bipartisan Infrastructure Law.
              </strong>{" "}
              Land in our region is now eligible for grant coverage that did not exist
              in 2020.
            </p>
            <p>
              <strong className="text-stone-900">
                AI compute demand made naturally cooled data center sites suddenly
                valuable.
              </strong>{" "}
              Our coal mines, which were liabilities in 2022, are an asset today.
            </p>
            <p>
              <strong className="text-stone-900">
                Remote work broke the geographic lock-in of knowledge workers.
              </strong>{" "}
              High-agency engineers, builders, designers, and operators are, for the
              first time in modern American history, actually available for rural-based
              projects.
            </p>
          </div>
        </div>
      </Section>

      {/* Legal Structure */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Legal structure.
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <dl className="divide-y divide-stone-200">
              {[
                ["Parent entity", "General Temple Inc. (Delaware C-Corp)"],
                ["Land LOI", "On file with Ketchen Holdings LLC"],
                ["Legal counsel", "Engagement in progress — to be named"],
                ["Round structure", "$5M seed, offered only to verified accredited investors"],
                ["Eligibility", "Verified accredited investors only"],
                ["Instrument", "SAFE or priced round, investor preference"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col sm:flex-row">
                  <dt className="bg-stone-50 px-4 py-3 text-sm font-semibold text-stone-900 sm:w-1/3">
                    {k}
                  </dt>
                  <dd className="px-4 py-3 text-sm text-stone-600 sm:w-2/3">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Close */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What we want from you.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            We want investors who understand asymmetric real-asset bets, have patience
            for Phase 1 proof (roughly 18 months), and can either write a meaningful
            check or introduce us to institutional capital for the Phase 2 bond
            issuance.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            The next step is the data room. Accreditation verification takes
            approximately three business days. After you have reviewed the materials,
            we schedule a call.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
            <a
              href="mailto:investors@buildcivilization.com?subject=Data%20Room%20Access%20Request"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Access the seed round data room
            </a>
            <a
              href="mailto:investors@buildcivilization.com?subject=20-minute%20call"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Book a 20-minute call
            </a>
          </div>
          <p className="mt-8 text-xs leading-relaxed text-stone-400">
            Investment opportunities are offered only to verified accredited investors
            under applicable federal securities law. See the{" "}
            <Link href="/land" className="underline hover:text-stone-600">
              Land page
            </Link>{" "}
            for how our numbers are categorized.
          </p>
        </div>
      </Section>
    </>
  );
}
