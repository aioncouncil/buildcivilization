import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { OperatorForm } from "@/components/forms/OperatorForm";

export const metadata: Metadata = {
  title: "Zone Operators | The Living City",
  description:
    "Run a specialized enterprise plugged into a citywide coordination engine. Invest $125K–$1M. Own 1–10 acres. Anchor an economy.",
};

export default function OperatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Zone Operators
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Run an art inside a larger engine.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            A zone is a specialized enterprise &mdash; ceramics, forge, bakery, clinic,
            workshop, brewery &mdash; plugged into a citywide coordination engine designed
            so that each art feeds and strengthens the others.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Apply to run a zone
            </a>
            <a
              href="mailto:operators@buildcivilization.com?subject=Operator%20Term%20Sheet%20Request"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Request the operator term sheet
            </a>
          </div>
        </div>
      </section>

      {/* Why this */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why this.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              You know how to operate. You have made payroll, run a P&amp;L, hired and
              fired, shipped and missed. You are good at it. You are also doing it
              inside a system that does not care about you &mdash; a city that scatters
              your energies, buries you in friction, and offers nothing in return beyond
              rent.
            </p>
            <p>
              What if your enterprise were a working organ inside a city organized around
              exactly the kinds of things you build? Where the city itself is your first
              customer, your co-recruiter, and your peer network &mdash; because it was
              designed to be? That is what a zone is.
            </p>
          </div>
        </div>
      </Section>

      {/* What a zone is */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What a zone is.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              A zone is a specialized art &mdash; ceramics, forge, bakery, timber mill,
              workshop, school, brewery, research lab &mdash; with its own land, tools,
              crew, and economics. You get a <strong>production plot</strong> (1 to 10
              acres, where the real work happens) paired with a{" "}
              <strong>town-center plot</strong> (where your presence lives in the daily
              rhythm of the city). Together they form your zone. You control the
              enterprise, and the land rights and improvement mechanics are spelled out
              in the term sheet.
            </p>
            <p>
              But the point is not to leave you alone with a plot and a prayer. Your
              zone is plugged into the city&rsquo;s coordination engine. Your needs are
              visible to the shared list the city maintains. The things you build feed
              other zones. The things other zones build feed you. Apprentices from the
              founding cohort come through your crew. Contests and festivals give your
              work visible honor.
            </p>
            <p className="font-medium text-stone-900">
              The city is not your competition. The city is the reason your art makes
              sense here and nowhere else.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600"
            >
              See how the engine works <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Example Zones */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Three example zones.
          </h2>
          <div className="mt-6 rounded-2xl border border-stone-900 bg-stone-50 p-6">
            <p className="text-sm font-semibold text-stone-900">A note on what your capital covers.</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">
              The city&rsquo;s capital (the seed round, the federal grant programs, the
              utility district bonds) pays for the site work, the structural shells, the
              shared utilities, and the communal infrastructure. Your capital &mdash;
              the $125K to $1M below &mdash; is for the interior buildout, the
              specialized equipment, and the working capital that gets your zone
              running.{" "}
              <strong className="text-stone-900">
                The shell is ours. The enterprise is yours.
              </strong>{" "}
              The capex figures in each example are the operator&rsquo;s side of that
              line.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {EXAMPLE_ZONES.map((zone) => (
              <div key={zone.name} className="border-t border-stone-200 pt-8">
                <h3 className="text-xl font-bold text-stone-900">{zone.name}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
                  {zone.rows.map((row) => (
                    <div key={row.label} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                      <dt className="w-full shrink-0 font-semibold text-stone-900 sm:w-40">
                        {row.label}
                      </dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm italic text-stone-500">
            These are not committed. If you are the right operator, your zone can
            replace any of them.
          </p>
        </div>
      </Section>

      {/* The offer */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The offer.
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <dl className="divide-y divide-stone-200">
              {[
                ["Investment", "$125K to $1M across four tiers"],
                ["Land", "1 to 10 paired acres"],
                ["Infrastructure", "Majority covered by federal and state grants"],
                ["Returns", "Preferred return + majority profit split"],
                ["Governance", "Seats scale with tier"],
                ["Exit", "Structured buyback after three years"],
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

          <h3 className="mt-12 text-xl font-bold text-stone-900">Four tiers</h3>
          <div className="mt-6 space-y-4 text-base text-stone-600">
            <p>
              <strong className="text-stone-900">Scout &mdash; $125K.</strong> One paired
              acre. Single-enterprise zone, run by one operator.
            </p>
            <p>
              <strong className="text-stone-900">Pathfinder &mdash; $250K.</strong> Two to
              three paired acres. A proven business ready to scale.
            </p>
            <p>
              <strong className="text-stone-900">Warden &mdash; $500K.</strong> Four to
              six paired acres. Multi-unit enterprise with a small team.
            </p>
            <p>
              <strong className="text-stone-900">Architect &mdash; $1M.</strong> Eight to
              ten paired acres. Governance seat on the operator council.
            </p>
          </div>
          <p className="mt-6 text-sm italic text-stone-500">
            Full economic terms, preferred returns, profit splits, and governance
            mechanics are in the operator term sheet. Request it and you will receive it
            the same day.
          </p>
        </div>
      </Section>

      {/* What you get on day one */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What you get on day one.
          </h2>
          <p className="mt-4 text-sm italic text-stone-500">
            Phase 1 is small, and we want you to know exactly what that means. These are
            the things that exist when you arrive &mdash; not the full-scale promises.
          </p>
          <ul className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">
                  Your first customers: the city itself, the founding cohort, and the
                  first wave of zones.
                </strong>{" "}
                As the network fills in, each new zone becomes both a supplier and a
                customer to the others.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Federal grant-funded infrastructure</strong>{" "}
                &mdash; water, fiber, power, roads.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Coordination, not automation.</strong>{" "}
                In Phase 1, coordination happens in person and on shared lists. The
                software-driven version arrives with scale.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">
                  A founding cohort rotating through your crew
                </strong>
                , bringing skills, prototypes, and apprenticeships.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">A governance seat</strong> that scales
                with your tier.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Shared infrastructure</strong> &mdash;
                communal kitchen, forge, workshop, lab, warehouse &mdash; built out as
                the cohort and the zones complete them.
              </span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Apply */}
      <Section className="bg-stone-50" >
        <div id="apply" className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Apply to run a zone.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Ten minutes. One 60-second video. We read every application personally.
          </p>
          <div className="mt-10">
            <OperatorForm />
          </div>
        </div>
      </Section>
    </>
  );
}

const EXAMPLE_ZONES = [
  {
    name: "The Brewery",
    rows: [
      { label: "Land", value: "3 paired acres (production plot near a spring; town-center plot on the central boulevard)" },
      { label: "CapEx (operator)", value: "approximately $400K (brewhouse, fermenters, taproom buildout)" },
      { label: "First customers", value: "the communal mess hall (daily orders), the festival calendar (monthly volume spikes), and every other zone that wants to keep beer on premises" },
      { label: "Shared inputs", value: "spring water from the city's reservoir, barley from on-site agriculture, wood for barrels from the timber mill" },
      { label: "Margin shape", value: "high. Direct-to-customer, minimal distribution, low marketing costs because the customers live within walking distance" },
    ],
  },
  {
    name: "The Drone and Robotics Workshop",
    rows: [
      { label: "Land", value: "2 paired acres (fabrication bay near the production district; town-center storefront for demos and sales)" },
      { label: "CapEx (operator)", value: "approximately $600K (CNC mills, 3D printers, electronics bench, flight test range, inventory)" },
      { label: "First customers", value: "every other zone, and the city itself. The workshop builds autonomous inspection drones for the infrastructure layer, delivery drones for the logistics system, fabrication tooling for the production zones, and custom robotics for the research residents." },
      { label: "Shared inputs", value: "electronics and rare components from regional suppliers, structural materials from the manufacturing zones, test airspace on the 15,000 acres" },
      { label: "Margin shape", value: "high. Specialized production, high-value end markets, and a built-in relationship with the research cohort pushing your product roadmap" },
    ],
  },
  {
    name: "The Timber Mill and Joinery",
    rows: [
      { label: "Land", value: "3 paired acres (production plot near the access road for hauling; town-center plot with a small showroom and a joinery workshop)" },
      { label: "CapEx (operator)", value: "approximately $500K (mid-size sawmill, kiln, planer, edge-banding and joinery tools, plus six months of working capital)" },
      { label: "First customers", value: "every other zone that needs lumber — the brewery's barrels, the bakery's shelving, the ceramics kiln's cord wood, the greenhouse and kitchen framing, the first cabins, the workshop benches, the central hall's flooring. The city itself is your biggest Phase 1 buyer." },
      { label: "Shared inputs", value: "timber from the property's 15,000 acres of hardwood forest (already under active harvest), sharpening and maintenance from the fabrication shop, power from the utility district" },
      { label: "Margin shape", value: "solid from day one. Raw material is on-site. Customers are walking distance. Specialized joinery for outside buyers comes later as the city's brand grows." },
    ],
  },
];
