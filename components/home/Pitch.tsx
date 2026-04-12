import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function Pitch() {
  return (
    <>
      {/* Scroll 1 — The Problem */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            The problem is not you. The problem is that nobody designed the city.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-600">
            <p>
              Every modern life is an argument with your environment. You fight distraction
              to think. You fight your zip code to eat well. You fight your schedule to see
              your friends. You fight bureaucracy to build anything real.
            </p>
            <p>
              You were not designed wrong. The city was. Modern cities are accidents of
              commerce, not works of intention. Nobody sat down and asked what a human being
              actually needs to flourish.
            </p>
            <p className="font-medium text-stone-900">We are.</p>
          </div>
        </div>
      </Section>

      {/* Scroll 2 — What the City Does */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            The city takes what people want and turns it into a world.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-600">
            <p>
              Modern cities are indifferent to what their residents actually want. Ours is
              organized around it. The Living City gathers what its people want to build,
              learn, make, experience, and become &mdash; maps what those things depend on
              &mdash; and turns daily life into missions, teams, apprenticeships, contests,
              and festivals that make them real.
            </p>
            <p className="text-stone-900 font-medium">
              Every day has a mission. Every day ends with a meal.
            </p>
            <p>
              In the first year, that looks like this: you wake up in mountain air. You eat
              breakfast with the fifty people who passed the same bar you did. You spend
              the morning on your track &mdash; writing the next iteration of the
              coordination software, prototyping an autonomous drone, cutting beams at the
              timber mill, bringing a kiln online for the first firing, or running a crew
              on a shared mission. At midday you join a contest, or &mdash; when the season
              calls for it &mdash; a festival. In the afternoon you work across zones,
              apprentice under someone whose craft you respect, or keep shipping. In the
              evening everyone eats together, and something worth remembering happens.
            </p>
            <p>
              At full scale, the same loop runs across 5,040 zones. The machinery of
              ordinary life gets progressively automated, and more of your day belongs to
              the things that actually make a life worth living.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600"
            >
              See how the engine works <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
