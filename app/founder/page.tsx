import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "From the Founder | The Living City",
  description: "A letter from Mars Argeadai — the truth about The Living City.",
};

export default function FounderPage() {
  return (
    <article className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
          Letter from the Founder
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          I am going to tell you the truth about this project.
        </h1>
        <p className="mt-4 text-sm italic text-stone-500">April 2026</p>
        <div className="mt-8 max-w-sm">
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img src="/images/people/mars-founder.png" alt="Mars Argeadai, founder of The Living City" className="h-full w-full object-cover" />
          </div>
          <p className="mt-3 text-xs text-stone-500">Mars Argeadai &middot; Founder</p>
        </div>

        <div className="mt-12 space-y-6 text-lg leading-[1.75] text-stone-700">
          <p>My name is Mars Argeadai. I am the founder of The Living City.</p>

          <p className="text-xl font-semibold text-stone-900">
            I am not building a harder life for the sake of hardness.
          </p>

          <p>
            I am building a place where the ordinary things &mdash; eating,
            working, learning, making, celebrating &mdash; are organized well
            enough that they stop being background noise and start being the
            point. A place where you do not have to fight the city to live the
            life you actually want.
          </p>

          <p className="text-xl font-semibold text-stone-900">
            I am trying to wake up an old civic technology.
          </p>

          <p>
            Modern cities feel dead because they are dead in the specific sense
            that matters most: they do not actively help us become anything. They
            contain life. They do not shape it well. They do not learn what their
            people care about. They do not organize work and celebration
            together. They do not build the right teams at the right time. They
            do not carry the weight of ordinary life so that people can spend
            more of their time inside the things that actually matter.
          </p>

          <p>I want to build a city that does.</p>

          <p>
            That idea did not come to me from nowhere. It came from years of
            fighting distraction to think. Fighting bureaucracy to build.
            Fighting the pull to do something easier, something that would look
            better on a slide deck, something that would raise faster or explain
            in one sentence.
          </p>

          <p>
            When you stop reading Plato&rsquo;s <em>Republic</em> and{" "}
            <em>Laws</em> as abstract philosophy and start reading them as
            engineering documents, everything changes. The old city &mdash; the
            whole forgotten grammar of how to organize life well together
            &mdash; stops looking like metaphor and starts looking like a build
            problem. A hard one. But a solvable one.
          </p>

          <p>So I started looking for substrate.</p>

          <div className="my-8 aspect-[16/9] overflow-hidden rounded-sm">
            <img src="/images/property/photo-062.jpg" alt="Sunset over the Cumberland Plateau — the substrate, ridges receding into the distance" className="h-full w-full object-cover" />
          </div>

          <p>
            What we have now is 15,491 acres in Tennessee, real resources, a real
            financing path, a real entity, a real grant stack, a real
            municipal-bond pathway, and the beginnings of the first people who
            can help make the engine real.
          </p>

          <p>
            What I am building is not a commune, not a resort, not a campus, not
            a brand. It is the first living city: a city that takes what its
            people want and continuously tries to turn those wants into
            technologies, industries, rituals, teams, experiences, and ways of
            life.
          </p>

          <p className="text-xl font-semibold text-stone-900">
            When this works, the city stops feeling like background. It starts
            feeling like a world that is awake.
          </p>

          <p>
            That is the scale of the vision. And because the vision is that
            large, I want to be honest about the early years.
          </p>

          <p>
            Phase 1 is small. Fifty people. Five zones. The first working loop.
            Shared meals. Daily work. Weekly contests. Seasonal festivals. Very
            little automation. Very little polish. A city just beginning to
            become itself.
          </p>

          <p>
            If you come early, you are not arriving at the finished world. You
            are one of the people who help make it exist.
          </p>

          <p>
            That means it will be hard. I will make mistakes. I have already made
            mistakes. I spent too long building alone when I should have been
            recruiting. I spent too long in the philosophy when I should have
            been closing the land. I wrote two million tokens of specification
            before I had a team to read it. I know what that looks like from the
            outside, and I am not going to pretend otherwise.
          </p>

          <p>
            But there is a difference between mistakes made in vapor and mistakes
            made on substrate. This project has substrate. The land is real. The
            mineral stack is real. The bond path is real. The grant stack is
            real. The first demand is real. The people are beginning to become
            real.
          </p>

          <p>
            Things will slip. Some things we believe will turn out to be wrong
            and will need to be rebuilt. That is not me being theatrical. That is
            the cost of genuinely new work.
          </p>

          <p className="text-xl font-semibold text-stone-900">
            Everyone who is here gets real work, real terms, and a real seat at
            the table.
          </p>

          <p>
            I am not asking anyone to take this on faith. I am asking you to
            look at the land, look at the numbers, look at the specification,
            look at the terms &mdash; and decide whether this is the kind of
            thing you want to help build.
          </p>

          <p>
            If you want to help found the first age of a living city, I want to
            hear from you.
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
            <Link
              href="/how-it-works"
              className="font-semibold text-stone-900 underline"
            >
              see how the engine works
            </Link>{" "}
            or{" "}
            <Link
              href="/land"
              className="font-semibold text-stone-900 underline"
            >
              see the land
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
