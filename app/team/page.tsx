import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";

export const metadata: Metadata = {
  title: "Team | The Living City",
  description:
    "Who is actually building The Living City, and who is advising them. Named humans, real roles, and ten founding positions with equity ranges.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Team
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            The humans.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Who is actually building this, and who is advising them.
          </p>
        </div>
      </section>

      {/* Founder */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Founder
          </p>
          <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">
            Mars Argeadai
          </h2>
          <p className="text-base text-stone-500">Founder, The Living City</p>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Mars is the founder of The Living City and the author of the philosophical
            specification it is built around. He spent years reading Plato&rsquo;s{" "}
            <em>Republic</em>, <em>Laws</em>, <em>Philebus</em>, <em>Timaeus</em>,{" "}
            <em>Statesman</em>, and <em>Critias</em> as engineering specifications, not
            abstract philosophy &mdash; and turned the reading into a working design
            document for a real city: the coordination kernel, the governance structure,
            the economic model, the festival architecture, and the long-arc plan for
            progressive automation of daily life. Before The Living City, he built an
            earlier codebase working through the civilization-engine architecture in
            software. He founded General Temple Inc. (the Delaware C-Corp holding the
            project) and put 15,491 acres on the Cumberland Plateau under LOI in April
            2026.
          </p>
          <a
            href="mailto:mars@buildcivilization.com"
            className="mt-4 inline-block text-sm font-medium text-stone-900 underline hover:text-stone-600"
          >
            mars@buildcivilization.com
          </a>
          <div className="mt-6"><ImageSlot language="pioneering" description="Mars environmental portrait — on the land, natural light" shot="Shot #20 — Founder portrait" aspect="1/1" className="max-w-[200px]" /></div>
        </div>
      </Section>

      {/* Real Estate */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Real Estate
          </p>
          <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">
            Heath Thompson
          </h2>
          <p className="text-base text-stone-500">
            Managing Broker, Hayden Outdoors Real Estate
          </p>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Heath was the broker on the Ketchen Holdings property before it came under
            LOI and is continuing as the buyer&rsquo;s agent through closing. He knows
            this land and this region &mdash; the access roads, the water, the mineral
            rights, the railroad easements, the historical ownership, the neighbors
            &mdash; better than anyone currently involved in the project, and his
            photographic and aerial library of the Cumberland Plateau is the visual
            foundation of this site. He has agreed to be publicly named as the
            project&rsquo;s real estate partner through the close.
          </p>
          <a
            href="mailto:Heath@haydenoutdoors.com"
            className="mt-4 inline-block text-sm font-medium text-stone-900 underline hover:text-stone-600"
          >
            Heath@haydenoutdoors.com
          </a>
        </div>
      </Section>

      {/* Legal + Advisors */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Legal
            </p>
            <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">
              Legal counsel &mdash; engagement in progress
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              Corporate, real estate, securities, and regulatory matters. Counsel
              advises on the Delaware C-Corp structure, the land transaction, the
              Tennessee utility district pathway, and the seed round. Counsel will be
              named publicly once the engagement is finalized.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Advisors
            </p>
            <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">
              One confirmed advisor &mdash; name held pending public disclosure
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              A senior technologist and philosopher who built one of the foundational
              simulations of the 1990s and brings deep reading across Plato and Kant.
              Committed to twice-weekly working sessions on the governance kernel and
              the coordination loop. Additional advisors are in active conversation and
              will be named as they sign on.
            </p>
          </div>
        </div>
      </Section>

      {/* Hiring */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            The Founding Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            We are hiring.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The project is recruiting ten founding roles. These are not normal hires.
            They are for people who want to arrive early enough to shape what the city
            actually becomes, and who are willing to commit the next three to five years
            of their lives to making the engine real.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Equity ranges below are real. Compensation will be a mix of cash (from the
            seed round) and founding equity in General Temple Inc. Full terms are shared
            after a first conversation. If you see your role below and the description
            describes you, email{" "}
            <a
              href="mailto:mars@buildcivilization.com"
              className="font-semibold text-stone-900 underline"
            >
              mars@buildcivilization.com
            </a>{" "}
            directly.
          </p>

          <div className="mt-12 space-y-6">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-stone-900">{role.title}</h3>
                  <span className="rounded-sm bg-stone-900 px-3 py-1 text-xs font-semibold text-white">
                    {role.equity}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {role.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-stone-600">
            For dated progress, see the{" "}
            <Link href="/updates" className="font-semibold text-stone-900 underline">
              Updates page
            </Link>
            . For the founder&rsquo;s voice, read{" "}
            <Link href="/founder" className="font-semibold text-stone-900 underline">
              From the Founder
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}

const ROLES = [
  {
    title: "Chief Technology Officer — Systems Architect",
    equity: "3–8% founding equity",
    body: "Leads the build of the coordination engine itself — the shared list, the dependency map, the mission/team/contest/festival layer, the long-arc automation infrastructure. The most technically ambitious role on the team.",
  },
  {
    title: "Head of Game Design",
    equity: "2–5% founding equity",
    body: "Designs the city's daily loop — how missions surface, how teams form, how contests and festivals get run, how the three kinds of goods (present, future, mixed) get balanced across a week and a season.",
  },
  {
    title: "Head of Mechanism Design and Economics",
    equity: "2–5% founding equity",
    body: "Designs the governance kernel, the economics inside the operator term sheet, the incentive and reputation mechanics, and the long-arc economic structure as the city scales from 50 to 5,040 zones.",
  },
  {
    title: "Head of AI — Kernel Lead",
    equity: "2–5% founding equity",
    body: "Leads the Kernel residency track inside the Founding Cohort and the software-supported version of the coordination engine that arrives with scale.",
  },
  {
    title: "Head of Community",
    equity: "1–3% founding equity",
    body: "Leads cohort recruitment, operator relationships, and the first wave of public storytelling from inside the city.",
  },
  {
    title: "Head of Governance and Civic Tech",
    equity: "1–3% founding equity",
    body: "Leads the legal-tech layer, the governance rules, the operating-agreement architecture, and the relationship with the Tennessee utility district.",
  },
  {
    title: "Head of Philosophy",
    equity: "1–3% founding equity",
    body: "Stewards the Platonic specification in practice — the translation of Republic, Laws, and Philebus into daily governance, curriculum, and festival content. Works directly with Mars on the Blueprint.",
  },
  {
    title: "Head of Growth",
    equity: "1–3% founding equity",
    body: "Leads public launch, narrative building, network development, and the second and third cohorts' recruiting funnel.",
  },
  {
    title: "Chief Financial Officer",
    equity: "1–3% founding equity",
    body: "Leads capital strategy across the seed round, the Tennessee utility district bond issuance, the federal and state grant pipeline, and operator capital. Eventually responsible for the Phase 2 bond issuance.",
  },
  {
    title: "Chief of Operations",
    equity: "1–3% founding equity",
    body: "Runs the Phase 1 operating layer — coordination, facilities, logistics, relationships with external contractors, and the founding team's day-to-day.",
  },
];
