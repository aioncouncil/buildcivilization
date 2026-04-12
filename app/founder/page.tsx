import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From the Founder | The Living City",
  description:
    "A letter from Mars Argeadai. The truth about what The Living City is, what Phase 1 will look like, and what happens when it works.",
};

export default function FounderPage() {
  return (
    <article className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
          Letter from the Founder
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          I am going to tell you the truth about this project.
        </h1>
        <p className="mt-4 text-sm italic text-stone-500">April 2026</p>

        <div className="mt-12 space-y-6 text-lg leading-[1.75] text-stone-700">
          <p>
            My name is Mars Argeadai. I am the founder of The Living City. I am writing
            this because you deserve to hear from me directly before you commit any
            serious part of your life &mdash; your capital, your time, your reputation,
            your hopes &mdash; to what I am doing.
          </p>

          <p className="text-xl font-semibold text-stone-900">
            I am not building a hard place for the sake of hardness.
          </p>

          <p className="text-xl font-semibold text-stone-900">
            I am trying to build a city that stops wasting human life.
          </p>

          <p>
            I believe modern cities are accidents. Nobody designed them. They grew around
            commerce, real estate, traffic, nothing in particular. They were not built
            for people, and it shows. Every day, everyone I know is fighting their
            environment to do the things that should be easy: to eat well, to think
            clearly, to see their friends, to do work that matters, to be healthy, to be
            kind, to be brave. We are all fighting the city. The city should be fighting
            for us.
          </p>

          <p>
            When you stop reading Plato&rsquo;s <em>Republic</em> and <em>Laws</em> as
            abstract philosophy and start reading them as an engineering specification,
            everything changes. They are not describing an ideal. They are describing a
            blueprint for a place that produces human flourishing as an output &mdash;
            not as an accident, not as a lucky coincidence, but as a default. That
            specification has never been built.
          </p>

          <p className="font-semibold text-stone-900">So I am going to build it.</p>

          <p>
            The Living City is organized around one idea: most of daily life should not
            be something you have to fight. The city gathers what its residents actually
            want &mdash; to build, to learn, to make, to experience, to become &mdash;
            maps what those things depend on, and turns daily life into missions, teams,
            enterprises, apprenticeships, contests, and festivals that make them real.
            The long arc of the project is to progressively automate the parts of life
            that eat your time, and hand those hours back to the things that actually
            make a life worth living: real craft, real relationships, real becoming.
          </p>

          <p>
            When this works &mdash; and I believe it will &mdash; the people who were
            here first will have built something that has not existed in four hundred
            years. A real place, on real land, where the default shape of your day is
            becoming good at the things you actually care about, and the machinery of
            ordinary life is increasingly taken care of by the city itself. Not a
            commune. Not a campus. Not a rendering. A city that is actively,
            structurally, on your side.
          </p>

          <p className="text-xl font-semibold italic text-stone-900">
            If you succeed at living well in most modern cities, it is in spite of the
            city. Here, it will be because of it.
          </p>

          <p>
            And I want to be honest about what the first version of all of that actually
            looks like.
          </p>

          <p>
            Phase 1 is small. Roughly fifty residents. Five founding zones. The first
            honest version of the coordination loop &mdash; kept in person and on shared
            lists, not in software. Seasonal festivals. Weekly contests. Shared meals,
            apprenticeships under practitioners, daily work inside the zones and across
            them. It is not the finished city. It is the first working version of the
            city, and the people who arrive in Phase 1 are not arriving at the end of
            the story. They are the ones who make the story real.
          </p>

          <p>
            Because they are, I have to tell you the other half. I will make mistakes. I
            will ship things that do not work and have to rebuild them. I will miss
            deadlines and revise plans. The people who come with me will have hard
            months. That is the nature of genuinely new work on a long arc. I am not
            hiding it, because hiding it would be a worse betrayal than experiencing it.
          </p>

          <p>
            What I can tell you is this. There is 15,491 acres of real land in Tennessee
            under LOI. There is a financing pathway through federal grants, Tennessee
            utility district law, and cooperative operator capital. There is a Delaware
            C-corp holding the whole thing. There is counsel engaged. There are the
            first serious conversations with operators, builders, and investors who have
            looked at this and decided it is real. Every material decision I have made
            to date is visible on this site, and every material document is linked from
            the Land page. The worst case is owning resource-producing land that pays
            for itself while we build the rest. The best case is helping found a city
            that is still alive four hundred years from now.
          </p>

          <p>
            If you want to be one of the people who helps make the engine real &mdash;
            who shows up early enough to shape what the city actually becomes &mdash;
            send me an email. I read every one.
          </p>

          <div className="pt-4">
            <p className="text-stone-900">&mdash; Mars Argeadai</p>
            <a
              href="mailto:mars@buildcivilization.com"
              className="mt-1 inline-block text-base text-stone-600 underline hover:text-stone-900"
            >
              mars@buildcivilization.com
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-stone-200 pt-10">
          <p className="text-sm text-stone-600">
            Next:{" "}
            <Link href="/how-it-works" className="font-semibold text-stone-900 underline">
              see how the engine works
            </Link>{" "}
            or{" "}
            <Link href="/land" className="font-semibold text-stone-900 underline">
              see the land
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
