import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "The Land | The Living City",
  description:
    "15,491 contiguous acres on Tennessee's Cumberland Plateau. Every document, every number, every caveat.",
};

export default function LandPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              The Land
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              This is the dirt.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              15,491 contiguous acres on Tennessee&rsquo;s Cumberland Plateau. Every
              document, every number, every caveat.
            </p>
            <div className="mt-8">
              <a
                href="mailto:mars@buildcivilization.com?subject=Site%20Visit%20Request"
                className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
              >
                Book a site visit
              </a>
            </div>
          </div>
          <div className="mt-14 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/land/elk-valley-2.jpg"
              alt="Elk Valley tract, Cumberland Plateau"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-xs text-stone-500">
            Elk Valley tract &middot; Campbell County, Tennessee
          </p>
        </div>
      </section>

      {/* About these numbers */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            About these numbers.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The numbers on this page fall into four categories, and we want to be
            explicit about which is which before you read further.
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Current cash-flowing revenue",
                body: "Revenue from active oil and gas wells and ongoing timber harvest. Independently verifiable through production records.",
              },
              {
                title: "Acquisition cost",
                body: "The price we are paying for the land under the LOI with Ketchen Holdings LLC. Contractually documented.",
              },
              {
                title: "Estimated in-ground gross value",
                body: "Third-party estimates of the geological resources on the property (silica sand, coal reserves, oil and gas, timber). These are professional estimates at current market prices — not a guarantee of recoverable value. The current estimate is approximately $250M+ in gross in-ground value. We are explicit that this is an estimate, not a commitment of extractable revenue.",
              },
              {
                title: "Projected infrastructure coverage",
                body: "The percentage of Phase 1 infrastructure costs expected to be covered by federal and state grant programs. Based on current program rules and preliminary eligibility review.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-stone-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-stone-500">
            Whenever we cite a number on this site, we will tell you which category it
            belongs to.
          </p>
        </div>
      </Section>

      {/* Where it is */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Where it is.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-600">
            Pioneer, Tennessee, on the Cumberland Plateau, spanning Campbell and Scott
            Counties. 90 minutes from Knoxville. 3 hours from Nashville. 3 hours from
            Chattanooga. 4 hours from Atlanta. Active CSX rail through the property.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[3, 4, 5].map((n) => (
              <div
                key={n}
                className="aspect-[4/3] overflow-hidden rounded-xl shadow-sm"
              >
                <img
                  src={`/images/land/elk-valley-${n}.jpg`}
                  alt={`Cumberland Plateau property, view ${n}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What is on it */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What is on it.
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Asset</th>
                  <th className="px-4 py-3 font-semibold">Amount</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white text-stone-600">
                {[
                  ["Silica sand", "75–150M tons estimated, 98.52% SiO₂", "In-ground, verified by 3 labs"],
                  ["Coal reserves", "161M tons proven (IRTEC survey)", "In-ground, verified"],
                  ["Coal mines", "Pre-existing infrastructure at 55°F", "Physical, verified"],
                  ["Oil and gas wells", "27 active", "Cash-flowing"],
                  ["Hardwood forest", "15,000 acres", "Cash-flowing (ongoing harvest)"],
                  ["Railroad", "CSX main line", "Physical, verified"],
                  ["Water", "Springs + 50+ in/yr rainfall", "Physical, verified"],
                  ["Clay", "Multiple deposits", "Surveyed"],
                  ["Stone", "Native sandstone", "Physical, verified"],
                ].map(([asset, amount, cat]) => (
                  <tr key={asset}>
                    <td className="px-4 py-3 font-semibold text-stone-900">{asset}</td>
                    <td className="px-4 py-3">{amount}</td>
                    <td className="px-4 py-3 text-xs">{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* The numbers, categorized */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The numbers, categorized.
          </h2>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-600">
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Total acreage:</strong> 15,491
                contiguous acres (verified via survey)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">
                  Estimated in-ground gross geological value:
                </strong>{" "}
                approximately $250 million (third-party estimates at current prices; see
                disclosure above)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">
                  Current annual revenue from wells and timber:
                </strong>{" "}
                approximately $215,000 (cash-flowing, verifiable from production records)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Estimated Phase 1 infrastructure cost:</strong>{" "}
                approximately $8 million (internal estimate)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">
                  Projected federal and state grant coverage of Phase 1 infrastructure:
                </strong>{" "}
                50–80 percent (projection based on current program rules)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">
                  Tennessee utility district formation cost:
                </strong>{" "}
                approximately $15,000 (based on counsel guidance)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">
                  Bond issuance capacity post-district formation:
                </strong>{" "}
                up to approximately $200 million tax-exempt (projection based on
                comparable districts)
              </span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Federal Grants */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The federal and state grant pathway.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Because the property sits in federally designated Appalachian distressed
            coal country, it qualifies for:
          </p>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-stone-600">
            <li>
              <strong className="text-stone-900">
                ARC (Appalachian Regional Commission)
              </strong>{" "}
              &mdash; infrastructure and economic development grants
            </li>
            <li>
              <strong className="text-stone-900">
                POWER (Partnerships for Opportunity and Workforce and Economic
                Revitalization)
              </strong>{" "}
              &mdash; coal-community transition grants
            </li>
            <li>
              <strong className="text-stone-900">
                EDA (Economic Development Administration)
              </strong>{" "}
              &mdash; infrastructure, planning, and public works grants for distressed
              communities
            </li>
            <li>
              <strong className="text-stone-900">USDA Rural Development loans</strong>{" "}
              &mdash; 1.5–3% interest
            </li>
            <li>
              <strong className="text-stone-900">
                USDA Rural Business Development grants
              </strong>{" "}
              &mdash; for cooperatively owned enterprises
            </li>
            <li>
              <strong className="text-stone-900">Tennessee FastTrack</strong> &mdash;
              state-level infrastructure and job training grants
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-stone-600">
            These programs combined are projected to cover 50–80% of Phase 1
            infrastructure costs. The programs exist because the federal government
            wants to rebuild coal country. The window is not permanent &mdash; the
            funds deploy on a schedule.
          </p>
        </div>
      </Section>

      {/* Documents */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The documents.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Qualified visitors (investors, operators, and serious builder applicants)
            can request access.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-stone-600 sm:grid-cols-2">
            {[
              "Land survey",
              "Title report",
              "Environmental impact assessment",
              "Geological survey of silica deposit",
              "Oil and gas well production reports",
              "Timber cruise report",
              "Railroad access documentation",
              "LOI with Ketchen Holdings LLC",
              "Federal grant eligibility letters",
              "Tennessee utility district formation opinion",
            ].map((doc) => (
              <li key={doc} className="flex gap-2">
                <span className="text-stone-400">&bull;</span> {doc}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Known constraints */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Known constraints.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            We do not want to pretend this project has no friction. These are the work
            items currently on our plate:
          </p>
          <ul className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
            <li>
              <strong className="text-stone-900">Road improvements.</strong> Existing
              access roads require upgrades to support construction traffic. Scope and
              timeline are in the data room.
            </li>
            <li>
              <strong className="text-stone-900">Utility timeline.</strong> Power and
              fiber connections are being coordinated with the utility district
              formation. Water comes from on-site springs.
            </li>
            <li>
              <strong className="text-stone-900">Permitting dependencies.</strong>{" "}
              Several structures require county-level review. Our environmental and
              permitting attorneys are engaged.
            </li>
            <li>
              <strong className="text-stone-900">Environmental work.</strong>{" "}
              Historical mining activity means some areas require reclamation before
              construction. We are pursuing a combination of EPA Brownfields funding,
              state-level TDEC programs, and project capital to cover the reclamation
              cost.{" "}
              <span className="text-sm italic text-stone-500">
                (Note: AMLER, the federal Abandoned Mine Land Economic Revitalization
                program, is not available in Tennessee — it is currently restricted to
                AL, KY, OH, PA, VA, and WV.)
              </span>
            </li>
          </ul>
          <p className="mt-6 text-sm italic text-stone-500">
            None of these constraints are project-killers. All of them have a plan. The
            plan is in the data room.
          </p>
        </div>
      </Section>

      {/* Come See It */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Come see it.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-300">
            We host a site visit once a month. Two days on the land with Mars and the
            team. You will walk the silica mountain. You will go inside the coal mine.
            You will meet the people already on the ground.
          </p>
          <div className="mt-10">
            <a
              href="mailto:mars@buildcivilization.com?subject=Site%20Visit%20Request"
              className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-100"
            >
              Book a site visit
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
