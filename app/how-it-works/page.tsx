import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "How It Works | The Living City",
  description:
    "The coordination engine in plain English. What the city actually does, what Phase 1 will feel like, and what the full city becomes at scale.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            How It Works
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            The city takes what people want and turns it into a world.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Plain English. No jargon. Here is what the engine actually does, what it looks
            like in Phase 1, and what it grows into at full scale.
          </p>
        </div>
      </section>

      {/* How to read this page */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            How to read this page
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Every claim on this site falls into one of three categories. We want you to
            hold all three in your head at once before you read any further.
          </p>
          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-stone-900">What is true today.</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  The land, the LOI, the entity, the counsel, the first conversations
                  with operators and builders. Verifiable now.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-700 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-stone-900">What Phase 1 will feel like.</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  The first fifty residents, the first five zones, the first working
                  version of the loop described below. Small, manual, honest, real.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-500 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-stone-900">
                  What the full city becomes at scale.
                </p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  5,040 zones, a continuous festival calendar, automated baseline life,
                  the engine running at full temperature.
                </p>
              </div>
            </li>
          </ol>
          <p className="mt-8 text-sm leading-relaxed text-stone-600">
            We take the third category seriously. It is what we are building toward, and
            the whole design of the city is bent around making it real. But we do not
            want anyone arriving in Phase 1 expecting category three and finding category
            two. The people we most want are the ones who see the gap between the first
            two categories and the third &mdash; and who want to help close it.
          </p>
        </div>
      </Section>

      {/* The shortest version */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The shortest version.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            The city is a coordination engine. It gathers what its residents actually
            want &mdash; to build, to learn, to make, to experience, to become &mdash;
            maps what those things depend on, and organizes daily life into missions,
            teams, enterprises, apprenticeships, contests, and festivals that make them
            real.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            That is the whole product. Everything else on this site is either the land
            that makes it possible, the people who make it real, or the philosophical
            tradition that tells us it will work.
          </p>
        </div>
      </Section>

      {/* Why cities need an engine */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why cities need an engine.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Modern cities are not coordinated. They are accidents of commerce, traffic,
              and real estate. What people actually want &mdash; to build good things, to
              learn real skills, to do meaningful work, to eat well, to see their
              friends, to raise their children well &mdash; gets scattered across a
              hundred disconnected transactions, each of which the individual has to
              fight for alone.
            </p>
            <p>
              The result is that most of modern life is spent practicing{" "}
              <em>secondary arts</em>: the art of taxes, the art of commuting, the art of
              bureaucracy, the art of insurance, the art of isolating yourself enough to
              get any real work done. Nobody moves to a city because they want to be good
              at those things. They want to be good at their real craft, their real
              relationships, and their real lives.
            </p>
            <p>
              A city that coordinates the secondary arts on its residents&rsquo; behalf,
              so they can spend their time on the things that actually make a life worth
              living, is not a luxury. It is what cities were supposed to be the first
              time, and have stopped being.
            </p>
          </div>
        </div>
      </Section>

      {/* The loop */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The loop.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            At the heart of The Living City is one loop. The same loop runs at every
            scale, from a single person making their day to the whole city planning its
            year.
          </p>
          <div className="mt-10 space-y-8">
            {LOOP_STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-stone-900 text-sm font-bold text-stone-900">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">{step.title}</h3>
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
        </div>
      </Section>

      {/* Zones */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Zones are arts, not shops.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              A zone is a specialized enterprise &mdash; bakery, ceramics, forge, clinic,
              workshop, school, brewery, research lab. But a zone is not a shop sitting
              alone on a plot of land hoping for walk-in customers.
            </p>
            <p>
              A zone is an <em>art</em>, plugged into the engine above. Its work is
              visible to the rest of the city. Its outputs feed other zones. Its needs
              are visible to the shared list. Its apprentices come from the founding
              cohort. Its customers are the city itself, the festival calendar, and the
              other zones whose work depends on it.
            </p>
            <p className="font-medium text-stone-900">
              Running a zone is not running a small business in a nicer zip code. It is
              stewarding a working organ inside a larger organism.
            </p>
          </div>
        </div>
      </Section>

      {/* Three kinds of goods */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Three kinds of goods.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The city explicitly cares about three kinds of outputs and tries to keep them
            in honest balance. We think this balance is one of the reasons most modern
            cities fail to produce good lives.
          </p>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="font-bold text-stone-900">Present goods.</dt>
              <dd className="mt-1 text-base leading-relaxed text-stone-600">
                Things that are good right now &mdash; a shared meal, a concert, rest,
                play, a conversation with a friend, a walk through a forest. The city
                protects these actively and does not treat them as rewards deferred until
                after the real work.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-stone-900">Future goods.</dt>
              <dd className="mt-1 text-base leading-relaxed text-stone-600">
                Things that are good because of what they become &mdash; learning a hard
                skill, training the body, building infrastructure, raising a child,
                planting a tree. The city structures time so that these can happen
                without requiring heroism from the individual.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-stone-900">Mixed goods.</dt>
              <dd className="mt-1 text-base leading-relaxed text-stone-600">
                Things that are both at once &mdash; a festival, a shared project, an
                apprenticeship, a good day of work with good people. Mixed goods are the
                highest output of the engine and the dominant texture of daily life at
                full scale.
              </dd>
            </div>
          </dl>
          <p className="mt-8 italic text-stone-600">
            A life spent mostly on present goods gets shallow. A life spent mostly on
            future goods gets miserable. A life spent mostly on mixed goods is what we
            are aiming at.
          </p>
        </div>
      </Section>

      {/* Phase 1 */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Category 2 &middot; Phase 1 reality
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What Phase 1 will actually feel like.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Phase 1 is roughly fifty residents, five founding zones, and the first honest
            version of the coordination engine above.
          </p>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-600">
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Daily life:</strong> shared meals,
                daily work blocks inside your zone or track, crew-based projects across
                zones, apprenticeship under practitioners, evening gatherings, rest when
                you need it.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">The shared list:</strong> maintained
                openly from day one. Small at first &mdash; dozens of items, not
                thousands. Growing as more residents arrive and contribute.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Missions:</strong> a handful per
                week, coordinated in person. No software required to make the loop work
                at this scale &mdash; fifty people and a whiteboard is enough.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Contests:</strong> weekly. Simple at
                first &mdash; who builds the best version of the thing the city needs
                next.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Festivals:</strong> seasonal in Phase
                1, not daily. The full festival calendar arrives with scale. Early
                festivals mark real milestones &mdash; first harvest, first completed
                structure, first cohort graduation, first new zone coming online.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Automation:</strong> almost none. In
                Phase 1 the engine runs on people paying attention to each other, and on
                the honest practice of the loop.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-stone-400">&bull;</span>
              <span>
                <strong className="text-stone-900">Who does the heavy civil build:</strong>{" "}
                external contractors, working under the federal grant programs. The
                Founding 50 are not hand-digging the sewer lines and framing every cabin
                while also writing the coordination software. The raw infrastructure
                build happens alongside the cohort&rsquo;s work, not on top of it. The
                cohort&rsquo;s job is the systems, the specialized zones, and the first
                real version of the coordination loop.
              </span>
            </li>
          </ul>
          <p className="mt-8 text-base leading-relaxed text-stone-600">
            This is the first working version of the city. It is not the finished city.
            People who arrive in Phase 1 are not arriving <em>at</em> the vision &mdash;
            they are the ones who make the vision possible.
          </p>
        </div>
      </Section>

      {/* Full scale */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Category 3 &middot; Full-scale vision
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            What the full city becomes.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            At full scale the same loop runs across roughly 50,000 people and 5,040
            zones. Plato&rsquo;s <em>Laws</em> specifies that exact number of households
            for a city that holds together. We are taking him literally.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            At that scale the shared list is continuous, the dependency map connects
            every art to every other art, missions run every day across every domain,
            contests happen constantly, and festivals honor each of the twelve domains of
            life in a calendar that runs year-round. Most importantly, the secondary
            arts &mdash; the taxes, the bureaucracy, the logistics, the administrative
            drag, the domestic friction &mdash; have been progressively automated away.
            Each phase of the city&rsquo;s growth is meant to take more of the secondary
            arts off its residents&rsquo; plates and hand more of their hours back to
            the things that actually make a life worth living.
          </p>
          <p className="mt-6 text-base leading-relaxed text-stone-900 font-medium">
            At full scale, the city&rsquo;s residents get to practice fewer arts, more
            deeply. Not &ldquo;you will get whatever you want&rdquo; &mdash; but &ldquo;the
            machinery of ordinary life will no longer eat your time, and the things you
            actually care about will become the default shape of your day.&rdquo;
          </p>
        </div>
      </Section>

      {/* Why different */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why this is different.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
            <p>
              Other new-city projects are either land plays dressed up in vision, or
              vision plays with no land. We have both. And we are clear that the
              engine &mdash; not the land &mdash; is the product.
            </p>
            <p>
              The land is the substrate. The financing is the runway. The founding cohort
              is the first team. The engine is what we are actually trying to ship. The
              reason the land matters is that you cannot run the engine on a rendering.
              The reason the engine matters is that land without coordination is just
              real estate.
            </p>
          </div>
        </div>
      </Section>

      {/* Next step */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The next step.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            If the loop on this page describes something you want to be part of, the next
            step is to pick your door.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              href="/investors"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Back the founding
            </Link>
            <Link
              href="/operator"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Run a zone
            </Link>
            <Link
              href="/builder"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Join the Founding Cohort
            </Link>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-stone-500">
            Or, if you want to go deeper into the philosophy underneath the engine &mdash;
            Plato, Vitruvius, Mondragón, the why behind the how &mdash; start with{" "}
            <Link href="/blueprint" className="font-semibold text-stone-900 underline">
              the Blueprint
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}

const LOOP_STEPS = [
  {
    title: "What people want",
    body: "Every resident and every zone contributes what they actually care about — the things they want to build, the skills they want to learn, the problems they want to solve, the experiences they want to have, the people they want to become. These are not abstract wish lists. They are specific, concrete wants, gathered continuously and kept visible.",
  },
  {
    title: "The shared list",
    body: "All of those wants go into one shared, open list. Some are small and can happen today. Some are large and depend on other things existing first. Some overlap with what other people want and can be pursued together. The list is visible, updated, and honestly prioritized. Every resident can see what the city is trying to build and why.",
  },
  {
    title: "The dependency map",
    body: "Most of what people want depends on something else existing first. You cannot have a good bakery without good flour. You cannot have good flour without a mill. You cannot have a mill without a craftsman, a power source, and a building. The city keeps these dependencies visible so that everyone can see what would have to be true for the things they care about to exist.",
  },
  {
    title: "Missions, teams, and enterprises",
    body: "The dependency map translates into real work: missions with clear goals, teams of residents and operators who want to do them, and — over time — enterprises (zones) that take on recurring pieces of the work permanently. A mission might be \"build the kiln.\" A team might be three residents and two operators for two weeks. A zone might be the ceramics enterprise that runs the kiln forever.",
  },
  {
    title: "Contests and festivals",
    body: "Work in the city is not only transactional. Important work is celebrated. Contests reward the best solutions to open problems in each domain. Festivals honor completed work, mark the passage of seasons, and give the city a rhythm beyond the weekly one. Both are how the city tells itself what it values. Both are where new relationships and new ideas most often form.",
  },
  {
    title: "New capability, new wants",
    body: "When work is completed, the city has a new capability, and the shared list changes. Some wants are satisfied. Others become possible for the first time. New wants arrive. The loop runs again.",
  },
];
