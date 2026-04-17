import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";

export const metadata: Metadata = {
  title: "How It Works | The Living City",
  description:
    "The coordination engine in plain English. What the city actually does, what Phase 1 looks like, and what the full city becomes at scale.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            How It Works
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            The city takes what people want and turns it into a world.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Plain English. No mystification. Here is what the machine actually
            does, what Phase&nbsp;1 looks like, and what the full city becomes
            when it reaches full temperature.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <ImageSlot
          language="awakening"
          description="Aerial view of the plateau at dawn — mist in valleys, ridges catching first light, the landscape that becomes the city"
          shot="Shot #25 — Dawn aerial hero"
          aspect="21/9"
          className="min-h-[200px]"
        />
      </div>

      {/* ── 2. HOW TO READ THIS PAGE ── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            How to read this page
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Every claim on this site falls into one of three time horizons. We
            want you to hold all three in your head at once before you read any
            further.
          </p>
          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-stone-900 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-stone-900">True today.</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  The land, the LOI, the entity, the counsel, the first
                  conversations with operators and builders. Verifiable now.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-stone-700 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-stone-900">Phase 1 reality.</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  The first fifty residents, the first five zones, the first
                  working version of the loop described below. Small, manual,
                  honest, real.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-stone-500 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-stone-900">Full scale.</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  5,040 zones, a continuous festival calendar, automated
                  baseline life, the engine running at full temperature.
                </p>
              </div>
            </li>
          </ol>
          <p className="mt-8 text-sm leading-relaxed text-stone-600">
            We take the third category seriously. It is what we are building
            toward, and the whole design of the city is bent around making it
            real. But we do not want anyone arriving in Phase&nbsp;1 expecting
            category three and finding category two. The people we most want are
            the ones who see the gap between the first two categories and the
            third&nbsp;&mdash; and who want to help close it.
          </p>
        </div>
      </Section>

      {/* ── 3. THE SHORTEST VERSION ── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The shortest version.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The city is a civilization engine. It gathers what its residents
            actually want&nbsp;&mdash; to build, to learn, to make, to
            experience, to become&nbsp;&mdash; maps what those things depend on,
            and organizes daily life into missions, teams, enterprises,
            apprenticeships, contests, and festivals that make them real.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            That is the whole product. Everything else on this site is either the
            land that makes it possible, the people who make it real, or the
            philosophical tradition that tells us it will work.
          </p>
        </div>
      </Section>

      {/* ── 4. WHY CITIES NEED AN ENGINE ── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why cities need an engine.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Modern cities are not coordinated. They are accidents of commerce,
              traffic, and real estate. What people actually want&nbsp;&mdash; to
              build good things, to learn real skills, to do meaningful work, to
              eat well, to see their friends, to raise their children
              well&nbsp;&mdash; gets scattered across a hundred disconnected
              transactions, each of which the individual has to fight for alone.
            </p>
            <p>
              The result is that most of modern life is spent practicing{" "}
              <em>secondary arts</em>: the art of taxes, the art of commuting,
              the art of bureaucracy, the art of insurance, the art of isolating
              yourself enough to get any real work done. Nobody moves to a city
              because they want to be good at those things. They want to be good
              at their real craft, their real relationships, and their real lives.
            </p>
            <p>
              A city that coordinates the secondary arts on its
              residents&rsquo;&nbsp;behalf, so they can spend their time on the
              things that actually make a life worth living, is not a luxury. It
              is what cities were supposed to be the first time, and have stopped
              being.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 5. THE TWELVE DOMAINS ── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The twelve domains.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Everything the city coordinates falls into twelve domains of life.
            Each domain contains zones, enterprises, apprenticeships, and its own
            festival cycle. Together, they cover the full surface area of what a
            civilization actually needs to run.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
            {TWELVE_DOMAINS.map((d) => (
              <div key={d.name}>
                <p className="text-sm font-bold text-stone-900">{d.name}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-stone-500">
                  {d.sub}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ImageSlot
              language="proof"
              description="Twelve-domain wheel or constellation — each domain labeled, showing interconnections"
              shot="Shot #30 — Twelve domains diagram"
              aspect="1/1"
              className="max-w-md mx-auto"
            />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-stone-600">
            No single domain runs in isolation. A bakery (Home / Hospitality)
            depends on grain (Agriculture / Food), power (Energy / Fire), and
            apprentices (Education / Truth). The engine&rsquo;s job is to make
            those dependencies visible and keep them fed.
          </p>
        </div>
      </Section>

      {/* ── 6. THE LOOP ── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The loop.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            At the heart of The Living City is one loop. The same loop runs at
            every scale, from a single person making their day to the whole city
            planning its year.
          </p>
          <div className="mt-10 space-y-8">
            {LOOP_STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border-2 border-stone-900 text-sm font-bold text-stone-900">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-stone-600">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 italic text-stone-600">
            That is the whole mechanism. Everything else is detail.
          </p>
          <div className="mt-10">
            <ImageSlot
              language="proof"
              description="The coordination loop diagram: wants → shared list → dependency map → missions → contests → new capability"
              shot="Shot #28 — Loop diagram"
              aspect="16/9"
            />
          </div>
        </div>
      </Section>

      {/* ── 7. WHAT PHASE 1 ACTUALLY FEELS LIKE ── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Category 2 &middot; Phase 1 reality
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What Phase 1 actually feels like.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Phase&nbsp;1 is roughly fifty residents, five founding zones, and the
            first honest version of the coordination engine above.
          </p>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-600">
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Shared meals.</strong> Eating
                together is the default, not the exception. The kitchen is the
                first zone that comes online.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Daily work.</strong> Morning
                blocks inside your zone or track, crew-based projects across
                zones in the afternoon, apprenticeship under practitioners,
                evening gatherings, rest when you need it.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">The visible list.</strong>{" "}
                Maintained openly from day one. Small at first&nbsp;&mdash;
                dozens of items, not thousands. Growing as more residents arrive
                and contribute.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Missions.</strong> A handful
                per week, coordinated in person. No software required to make the
                loop work at this scale&nbsp;&mdash; fifty people and a
                whiteboard is enough.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Contests.</strong> Weekly.
                Simple at first&nbsp;&mdash; who builds the best version of the
                thing the city needs next.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Festivals.</strong> Seasonal
                in Phase&nbsp;1, not daily. Early festivals mark real
                milestones&nbsp;&mdash; first harvest, first completed structure,
                first cohort graduation, first new zone coming online.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Automation.</strong> Almost
                none. In Phase&nbsp;1 the engine runs on people paying attention
                to each other, and on the honest practice of the loop.
              </span>
            </li>
          </ul>
          <p className="mt-8 text-base leading-relaxed text-stone-600">
            This is the first working version of the city. It is not the finished
            city. People who arrive in Phase&nbsp;1 are not arriving{" "}
            <em>at</em> the vision&nbsp;&mdash; they are the ones who make the
            vision possible.
          </p>
          <div className="mt-8">
            <ImageSlot
              language="pioneering"
              description="Small team working together on the land — honest, early, real"
              shot="Shot #13 — Team around prototype"
              aspect="16/9"
            />
          </div>
        </div>
      </Section>

      {/* ── 8. WHAT THE FULL CITY BECOMES ── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Category 3 &middot; Full-scale vision
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What the full city becomes.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Fifty thousand people. 5,040 zones. Twelve domains of life running
              on a year-round calendar. Hundreds of contests and festivals across
              the city, every day, in every season. A living core that is
              continuously learning what its citizens care about, which
              technologies would unlock the next layer of possibility, which
              enterprises need to exist, which teams should meet, which places
              should come alive tonight, and which experiences would deepen
              friendship, strength, wisdom, beauty, health, courage, and wealth.
            </p>
            <p>
              At that scale, the city starts to feel less like real estate and
              more like a{" "}
              <strong className="text-stone-900">
                civilization with a nervous system
              </strong>
              .
            </p>
            <p>
              The long arc is simple: take more of life off people&rsquo;s
              backs. The recommendation engines that currently optimize your feed
              get repurposed to optimize your world. The dependency trees that
              currently live inside software projects get expanded to cover
              factories, schools, kitchens, transit, rituals, performances,
              prototypes, and entire domains of life. The machinery of ordinary
              existence&nbsp;&mdash; logistics, admin, matching, scheduling,
              coordination, domestic drag&nbsp;&mdash; gets progressively
              automated away. What fills the hours instead are mixed goods: the
              kinds of work, relationships, and experiences that are good now and
              make the future better at the same time.
            </p>
          </div>
          <div className="mt-10">
            <ImageSlot
              language="awakening"
              description="Domain constellation — 12 luminous nodes across the landscape showing the city at full temperature"
              shot="Shot #32 — Domain constellation map"
              aspect="21/9"
              className="min-h-[200px]"
            />
          </div>
          <p className="mt-10 text-lg font-medium leading-relaxed text-stone-900">
            A city that is constantly redesigning its locations, calendars,
            teams, and resource flows so that the best day of your life stops
            feeling rare and starts feeling structural.
          </p>
        </div>
      </Section>

      {/* ── 9. WHAT THE AI CORE IS ── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What the AI core is.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              The AI is a coordination layer, not a ruler. It does not tell
              people what to want. It takes what people already want, maps the
              dependencies, finds the overlaps, and suggests the fastest path to
              making those things real.
            </p>
            <p>
              Think of it as the nervous system, not the brain. The residents are
              the brain. The AI keeps the signals moving&nbsp;&mdash; matching
              people to missions, surfacing what the shared list needs next,
              scheduling contests, routing resources between zones, and
              progressively automating the secondary arts so that human attention
              stays on the things that actually require it.
            </p>
            <p>
              In Phase&nbsp;1 the AI barely exists. The loop runs on
              whiteboards, shared documents, and daily standups. The software
              grows into the coordination role as the city grows into the
              complexity that demands it. We do not ship the AI and hope the city
              follows. We ship the city and let the AI catch up.
            </p>
          </div>
          <div className="mt-8">
            <ImageSlot
              language="proof"
              description="Coordination layer diagram — AI as nervous system connecting 12 domains, with residents at the center"
              shot="Shot #33 — AI core diagram"
              aspect="16/9"
            />
          </div>
        </div>
      </Section>

      {/* ── 10. WHY THIS IS DIFFERENT ── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why this is different.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Other new-city projects are either land plays dressed up in vision,
              or vision plays with no land. We have both. And we are clear that
              the engine&nbsp;&mdash; not the land&nbsp;&mdash; is the product.
            </p>
            <p>
              The land is the substrate. The financing is the runway. The
              founding cohort is the first team. The engine is what we are
              actually trying to ship. The reason the land matters is that you
              cannot run the engine on a rendering. The reason the engine matters
              is that land without coordination is just real estate.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 11. NEXT STEP ── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Choose your door.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            If the loop on this page describes something you want to be part of,
            the next step is to pick an entry point.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              href="/investors"
              className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Back the founding
            </Link>
            <Link
              href="/operators"
              className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Run a zone
            </Link>
            <Link
              href="/cohort"
              className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Join the Founding Cohort
            </Link>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-stone-500">
            Or, if you want to go deeper into the philosophy underneath the
            engine&nbsp;&mdash; Plato, Vitruvius, Mondrag&oacute;n, the why
            behind the how&nbsp;&mdash; start with{" "}
            <Link
              href="/blueprint"
              className="font-semibold text-stone-900 underline"
            >
              the Blueprint
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}

/* ── DATA ── */

const TWELVE_DOMAINS = [
  { name: "Home / Hospitality", sub: "Housing, shared meals, guest hosting" },
  { name: "Governance / Law", sub: "Rules, councils, dispute resolution" },
  { name: "Making / Manufacturing", sub: "Workshops, forges, fabrication" },
  { name: "Education / Truth", sub: "Schools, apprenticeships, research" },
  { name: "Youth / Athletics", sub: "Training, sport, physical culture" },
  { name: "Trade / Communication", sub: "Markets, logistics, messaging" },
  { name: "Energy / Fire", sub: "Power, heat, fuel systems" },
  { name: "Defense / Training", sub: "Security, resilience, readiness" },
  { name: "Beauty / Culture", sub: "Art, music, performance, ritual" },
  { name: "Agriculture / Food", sub: "Farming, orchards, preservation" },
  { name: "Water / Infrastructure", sub: "Plumbing, roads, civil systems" },
  {
    name: "Mining / Recycling / Transformation",
    sub: "Materials, waste, circular economy",
  },
];

const LOOP_STEPS = [
  {
    title: "Wants",
    body: "Every resident and every zone contributes what they actually care about — the things they want to build, the skills they want to learn, the problems they want to solve, the experiences they want to have. These are specific, concrete wants, gathered continuously and kept visible.",
  },
  {
    title: "The shared list",
    body: "All of those wants go into one shared, open list. Some are small and can happen today. Some are large and depend on other things existing first. Some overlap with what other people want and can be pursued together. The list is visible, updated, and honestly prioritized.",
  },
  {
    title: "The dependency map",
    body: "Most of what people want depends on something else existing first. You cannot have a good bakery without good flour. You cannot have good flour without a mill. You cannot have a mill without a craftsman, a power source, and a building. The city keeps these dependencies visible.",
  },
  {
    title: "Missions, teams, and zones",
    body: "The dependency map translates into real work: missions with clear goals, teams of residents and operators who want to do them, and — over time — zones that take on recurring pieces of the work permanently.",
  },
  {
    title: "Contests and festivals",
    body: "Important work is celebrated. Contests reward the best solutions to open problems in each domain. Festivals honor completed work, mark the passage of seasons, and give the city a rhythm. Both are how the city tells itself what it values.",
  },
  {
    title: "New capability",
    body: "When work is completed, the city has a new capability, and the shared list changes. Some wants are satisfied. Others become possible for the first time. New wants arrive. The loop runs again.",
  },
];
