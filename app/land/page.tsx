import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";

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
              This is the substrate.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              15,491 contiguous acres on Tennessee&rsquo;s Cumberland Plateau.
              Two counties. One ridge. Active rail. Active wells. Active mines.
              Silica sand verified at 98.52% SiO&#8322;. Estimated geological
              value: approximately $11 billion.
            </p>
            <p className="mt-4 text-sm text-stone-500">
              Every number on this page is categorized. Every document is
              available. Every constraint is disclosed.
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
              src="/images/property/photo-050.jpg"
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
            The numbers on this page fall into four categories. We are explicit
            about which is which before you read further.
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Cash-flowing revenue",
                body: "Revenue from active oil and gas wells and ongoing timber harvest. Independently verifiable through production records. This money comes in today.",
              },
              {
                title: "Acquisition basis",
                body: "The price we are paying for the land under the LOI with Ketchen Holdings LLC. Contractually documented. This is the cost floor.",
              },
              {
                title: "Estimated in-ground geological value",
                body: "Third-party estimates of the gross geological resources on the property — silica sand, coal reserves, oil and gas, timber, clay, stone. These are professional estimates at current commodity prices. They are not a guarantee of recoverable value. The current estimate is approximately $11 billion in gross in-ground value across all resource classes. We are explicit that this is an estimate, not a commitment of extractable revenue.",
              },
              {
                title: "Projected infrastructure coverage",
                body: "The percentage of Phase 1 infrastructure costs expected to be covered by federal and state grant programs. Based on current program rules, preliminary eligibility review, and comparable project awards in the region.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-stone-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm italic text-stone-500">
            Whenever we cite a number on this site, we tell you which category it
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
          <div className="mb-10">
            <ImageSlot
              language="substrate"
              description="Property boundary / parcel map overlay on satellite imagery"
              shot="Shot #22 — Parcel map"
              aspect="16/9"
            />
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-600">
            Pioneer, Tennessee. Cumberland Plateau. Spanning Campbell and Scott
            Counties. Active CSX rail runs through the property.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { place: "Knoxville", time: "90 minutes" },
              { place: "Nashville", time: "3 hours" },
              { place: "Chattanooga", time: "3 hours" },
              { place: "Atlanta", time: "4 hours" },
            ].map((d) => (
              <div
                key={d.place}
                className="rounded-sm border border-stone-200 bg-white px-4 py-3 text-center"
              >
                <p className="text-sm font-semibold text-stone-900">
                  {d.place}
                </p>
                <p className="text-xs text-stone-500">{d.time}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/property/photo-070.jpg",
                alt: "Deep forested valley with road",
              },
              {
                src: "/images/property/photo-170.jpg",
                alt: "Mountain ridge aerial",
              },
              {
                src: "/images/property/photo-110.jpg",
                alt: "Ridge vista, blue mountain layers",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="aspect-[4/3] overflow-hidden rounded-sm shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
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
                  <th className="px-4 py-3 font-semibold">Detail</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white text-stone-600">
                {[
                  [
                    "Silica sand",
                    "75\u2013150M tons estimated, 98.52% SiO\u2082",
                    "In-ground, verified by 3 labs",
                  ],
                  [
                    "Coal reserves",
                    "161M tons proven (IRTEC survey)",
                    "In-ground, verified",
                  ],
                  [
                    "Coal mines",
                    "Pre-existing underground infrastructure at 55\u00B0F",
                    "Physical, verified",
                  ],
                  [
                    "Oil & gas wells",
                    "27 active, cash-flowing",
                    "Cash-flowing, verified",
                  ],
                  [
                    "Hardwood forest",
                    "15,000+ acres of standing timber",
                    "Cash-flowing (ongoing harvest)",
                  ],
                  [
                    "Railroad",
                    "CSX main line through property",
                    "Physical, verified",
                  ],
                  [
                    "Water",
                    "Springs + 50+ in/yr rainfall",
                    "Physical, verified",
                  ],
                  [
                    "Clay",
                    "Multiple deposits across site",
                    "Surveyed",
                  ],
                  [
                    "Stone",
                    "Native sandstone throughout",
                    "Physical, verified",
                  ],
                ].map(([asset, detail, cat]) => (
                  <tr key={asset}>
                    <td className="px-4 py-3 font-semibold text-stone-900">
                      {asset}
                    </td>
                    <td className="px-4 py-3">{detail}</td>
                    <td className="px-4 py-3 text-xs">{cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <ImageSlot
              language="substrate"
              description="Mine entrance — the pre-existing underground infrastructure at 55\u00B0F year-round, future compute housing"
              shot="Shot #46 — Mine entrance"
              aspect="4/3"
            />
            <ImageSlot
              language="substrate"
              description="Active wellhead — one of 27 producing oil/gas wells on the property"
              shot="Shot #47 — Wellhead close-up"
              aspect="4/3"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ImageSlot
              language="substrate"
              description="Silica sand close-up — 98.52% SiO\u2082, the raw material for glass and solar manufacturing"
              shot="Shot #48 — Silica sample"
              aspect="4/3"
            />
            <ImageSlot
              language="substrate"
              description="CSX railroad crossing the property — active rail for logistics and material transport"
              shot="Shot #49 — Railroad access"
              aspect="4/3"
            />
          </div>
        </div>
      </Section>

      {/* What it unlocks */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What it unlocks.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Every resource on the property maps to a capability the city needs.
            Nothing is decorative.
          </p>
          <div className="mt-8 space-y-5">
            {[
              {
                from: "Silica sand",
                to: "Materials",
                detail:
                  "98.52% SiO\u2082 is the feedstock for glass, solar panels, semiconductors, and advanced ceramics. The city manufactures its own building materials.",
              },
              {
                from: "Mines",
                to: "Compute",
                detail:
                  "Pre-existing underground chambers at a constant 55\u00B0F. Natural cooling for data center infrastructure without the energy cost of surface cooling.",
              },
              {
                from: "Rail",
                to: "Movement",
                detail:
                  "Active CSX main line through the property. Raw materials in, finished goods out, without trucking dependency.",
              },
              {
                from: "Wells",
                to: "Cash flow",
                detail:
                  "27 active oil and gas wells generating revenue today. The land pays for itself while the city is being built.",
              },
              {
                from: "Timber",
                to: "Structures",
                detail:
                  "15,000+ acres of standing hardwood. Sustainable harvest for construction lumber, CLT panels, furniture, and fuel.",
              },
              {
                from: "Water",
                to: "Agriculture",
                detail:
                  "Natural springs and 50+ inches of annual rainfall. Gravity-fed irrigation. No water scarcity on this site.",
              },
            ].map((item) => (
              <div
                key={item.from}
                className="rounded-sm border border-stone-200 bg-white px-5 py-4"
              >
                <p className="text-sm font-semibold text-stone-900">
                  {item.from} &rarr; {item.to}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The numbers */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The numbers, categorized.
          </h2>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-600">
            {[
              {
                label: "Total acreage",
                value: "15,491 contiguous acres",
                cat: "verified via survey",
              },
              {
                label: "Estimated in-ground gross geological value",
                value: "approximately $11 billion",
                cat: "third-party estimates across all resource classes at current commodity prices; see disclosure above",
              },
              {
                label: "Silica sand deposit",
                value: "75\u2013150M tons, 98.52% SiO\u2082",
                cat: "in-ground, verified by 3 independent labs",
              },
              {
                label: "Coal reserves",
                value: "161M tons proven",
                cat: "in-ground, IRTEC survey",
              },
              {
                label: "Current annual revenue from wells and timber",
                value: "approximately $215,000",
                cat: "cash-flowing, verifiable from production records",
              },
              {
                label: "Estimated Phase 1 infrastructure cost",
                value: "approximately $8 million",
                cat: "internal estimate",
              },
              {
                label:
                  "Projected federal and state grant coverage of Phase 1 infrastructure",
                value: "50\u201380 percent",
                cat: "projection based on current program rules",
              },
              {
                label: "Tennessee utility district formation cost",
                value: "approximately $15,000",
                cat: "based on counsel guidance",
              },
              {
                label: "Bond issuance capacity post-district formation",
                value: "up to approximately $200 million tax-exempt",
                cat: "projection based on comparable districts",
              },
            ].map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className="text-stone-400">&bull;</span>
                <span>
                  <strong className="text-stone-900">{item.label}:</strong>{" "}
                  {item.value}{" "}
                  <span className="text-sm italic text-stone-500">
                    ({item.cat})
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* The Government Stack */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The government stack.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The property sits in federally designated Appalachian distressed coal
            country. That designation unlocks a stack of federal and state
            programs that exist because the government wants to rebuild these
            communities. The window is not permanent.
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                name: "ARC (Appalachian Regional Commission)",
                desc: "Infrastructure and economic development grants for distressed Appalachian communities. Covers roads, water, broadband, and public facilities.",
              },
              {
                name: "POWER (Partnerships for Opportunity and Workforce and Economic Revitalization)",
                desc: "Coal-community transition grants. Specifically designed for communities losing coal economy jobs. Covers workforce development, infrastructure, and economic diversification.",
              },
              {
                name: "AMLER (Abandoned Mine Land Economic Revitalization)",
                desc: "Federal program for reclaiming abandoned mine land for economic reuse. Converts legacy mining infrastructure into productive assets.",
              },
              {
                name: "USDA Rural Development",
                desc: "Low-interest loans (1.5\u20133%) and grants for rural infrastructure, cooperative enterprise development, and community facilities. Multiple programs stack.",
              },
            ].map((item) => (
              <div key={item.name}>
                <h3 className="font-bold text-stone-900">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-stone-600">
            Additionally: EDA (Economic Development Administration) public works
            grants, Tennessee FastTrack state-level infrastructure and job
            training grants, and USDA Rural Business Development grants for
            cooperatively owned enterprises. These programs combined are
            projected to cover 50&ndash;80% of Phase 1 infrastructure costs.
          </p>
        </div>
      </Section>

      {/* The Municipal Path */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The municipal path.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Tennessee utility district law is the fastest and cheapest municipal
            formation pathway in the country. A utility district can be formed by
            petition of property owners, approved by the county commission, and
            operational within months. Cost: approximately $15,000 in legal and
            filing fees.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Once formed, a Tennessee utility district can issue tax-exempt
            municipal bonds, operate water, sewer, electric, gas, and broadband
            utilities, levy assessments, and enter into intergovernmental
            agreements. This is the same legal structure used by The Villages in
            Florida &mdash; the most financially successful planned community in
            American history.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            The utility district is the path from private land to public
            infrastructure. It is how 15,491 acres becomes a real jurisdiction
            with real bonding authority.
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
            Qualified visitors &mdash; investors, operators, and serious cohort
            applicants &mdash; can request access to the following:
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-stone-600 sm:grid-cols-2">
            {[
              "Land survey and boundary maps",
              "Title report and chain of title",
              "Environmental site assessment",
              "Geological survey of silica deposit (3 labs)",
              "Coal reserve survey (IRTEC)",
              "Oil and gas well production reports",
              "Timber cruise report",
              "Railroad access documentation",
              "LOI with Ketchen Holdings LLC",
              "Federal grant eligibility letters",
              "Tennessee utility district formation opinion",
              "Phase 1 infrastructure cost estimate",
            ].map((doc) => (
              <li key={doc} className="flex gap-2">
                <span className="text-stone-400">&bull;</span> {doc}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-stone-500">
            Request access:{" "}
            <a
              href="mailto:mars@buildcivilization.com?subject=Data%20Room%20Access%20Request"
              className="font-semibold text-stone-900 underline hover:text-stone-600"
            >
              mars@buildcivilization.com
            </a>
          </p>
        </div>
      </Section>

      {/* Known constraints */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Known constraints.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            We do not pretend this project has no friction. These are the known
            work items:
          </p>
          <ul className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
            <li>
              <strong className="text-stone-900">Road upgrades.</strong> Existing
              access roads require grading and widening to support construction
              traffic and eventual residential use. Scope and cost estimates are
              in the data room. ARC infrastructure grants are the primary funding
              path.
            </li>
            <li>
              <strong className="text-stone-900">District formation.</strong> The
              utility district must be petitioned, approved by the county
              commission, and stood up before bonds can be issued or utilities
              operated. This is a legal and political process with its own
              timeline.
            </li>
            <li>
              <strong className="text-stone-900">Utility timing.</strong> Power
              and fiber connections are being coordinated with the utility
              district formation and TVA interconnection. Water comes from
              on-site springs. Sewer is designed for on-site treatment.
            </li>
            <li>
              <strong className="text-stone-900">Environmental work.</strong>{" "}
              Historical mining activity means some areas require assessment and
              potential reclamation before construction. We are pursuing a
              combination of AMLER funding, EPA Brownfields grants, state-level
              TDEC programs, and project capital to cover reclamation costs.
            </li>
          </ul>
          <p className="mt-6 text-sm italic text-stone-500">
            None of these are project-killers. All of them have a plan. The plan
            is in the data room.
          </p>
        </div>
      </Section>

      {/* Site Visits */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Come see it.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-300">
            We host a site visit once a month. Two days on the land with Mars and
            the team. You will walk the silica mountain. You will go inside the
            mine. You will see the wells, the rail, the ridge, the springs. You
            will meet the people already on the ground.
          </p>
          <p className="mt-4 text-sm text-stone-400">
            Site visits are open to investors, operators, and qualified cohort
            applicants.
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
