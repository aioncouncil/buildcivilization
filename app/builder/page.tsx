import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { BuilderForm } from "@/components/forms/BuilderForm";

export const metadata: Metadata = {
  title: "The Founding Cohort | The Living City",
  description:
    "A three-to-twelve month founding residency for elite engineers, researchers, designers, and creators. Work on frontier problems alongside a city being built from scratch.",
};

export default function BuilderPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            The Founding Cohort
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Come build something your grandchildren will visit.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            A three-to-twelve month founding residency for elite engineers, researchers,
            designers, and creators. Work on frontier problems &mdash; autonomous
            systems, AI, advanced manufacturing, governance, media, architecture &mdash;
            alongside a city being built from scratch.
          </p>
          <div className="mt-10">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Apply to the next cohort
            </a>
          </div>
        </div>
      </section>

      {/* Program */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The program.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              The Living City is not just a real estate project. It is a platform for
              doing work that is hard to do anywhere else &mdash; work that needs a
              place, a tribe, and a context. The Founding Cohort is the residency
              program for people who want to do that work.
            </p>
            <p>
              You come for three to twelve months. You live and work among fifty peers:
              engineers designing the next generation of drones and autonomous systems,
              researchers building the city&rsquo;s kernel, advanced manufacturing
              people unlocking new production lines, designers and architects shaping
              what the city looks like, performers and filmmakers building its culture,
              scientists whose work needs a physical testbed at city scale. Every
              person in the cohort is doing frontier work. Every person is contributing
              to something larger than themselves.
            </p>
            <p>
              At the end of your term, you walk away with real output you can point to,
              relationships that will last the rest of your life, and a founding equity
              grant in The Living City.
            </p>
            <p className="text-lg font-semibold text-stone-900">
              A focused, serious cohort. The right place. The right peers. The right
              problems.
            </p>
          </div>
        </div>
      </Section>

      {/* Tracks */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The tracks.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The Founding Cohort is organized around active research and development
            tracks, each focused on a real problem the city needs solved. You choose
            your track on arrival and can switch during your term if something
            isn&rsquo;t a fit.
          </p>
          <div className="mt-10 space-y-8">
            {TRACKS.map((track) => (
              <div key={track.name}>
                <h3 className="text-lg font-bold text-stone-900">{track.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{track.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Arc */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The arc.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The full residency is twelve months. Most residents come for three to six.
          </p>
          <div className="mt-10 space-y-8">
            {ARC.map((stage) => (
              <div key={stage.month} className="flex gap-5">
                <div className="w-28 shrink-0 text-sm font-bold text-stone-900">
                  {stage.month}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-stone-600">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Residency levels */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Residency levels.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Every level is structured as a research residency or fellowship. There is no
            employment relationship. Tuition, housing, and meals are underwritten by
            the city at the levels noted below.
          </p>
          <div className="mt-10 space-y-6">
            {LEVELS.map((level) => (
              <div
                key={level.name}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-stone-900">{level.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{level.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Apply */}
      <Section className="bg-white">
        <div id="apply" className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Apply to the next cohort.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Ten minutes. One 60-second video. We read every application personally.
          </p>
          <div className="mt-10">
            <BuilderForm />
          </div>
          <p className="mt-8 text-sm text-stone-500">
            Questions? Read{" "}
            <Link href="/how-it-works" className="font-semibold text-stone-900 underline">
              how the engine works
            </Link>{" "}
            or{" "}
            <Link href="/founder" className="font-semibold text-stone-900 underline">
              the founder&rsquo;s letter
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}

const TRACKS = [
  {
    name: "Autonomous Systems",
    body: "Design the next generation of drones, robots, and autonomous infrastructure for a city that has to coordinate 5,040 zones and 50,000 people. Real budget, real prototypes, real deployment on real land. The city is both the lab and the customer.",
  },
  {
    name: "The Kernel",
    body: "Build the software layer that runs the city — the coordination system that takes in what citizens want and outputs missions, festivals, and resource routing. This is frontier work at the intersection of AI, mechanism design, and game theory. The most ambitious software problem most of the cohort will ever touch.",
  },
  {
    name: "Advanced Manufacturing",
    body: "Unlock new forms of automated production — silica to glass, clay to ceramics, timber to engineered lumber, rare earths to electronics. Work with real raw materials from the property and real production targets for the city's zones. Ship physical output.",
  },
  {
    name: "Design and Architecture",
    body: "Design buildings, streets, public spaces, and products for a city being built from scratch on classical principles. Your work becomes what the city looks like, how it feels to walk through, and what future cities will copy.",
  },
  {
    name: "Media and Performance",
    body: "Build the festival calendar, the performance venues, the films and documentaries and stories that will be how the rest of the world comes to know this place. Performers, filmmakers, writers, and artists at the top of their craft, working on projects that can only exist at this scale.",
  },
  {
    name: "Governance and Philosophy",
    body: "Work on the actual operating specification of the city — the rules, the rituals, the processes, the philosophical foundations. Where the kernel meets the people.",
  },
  {
    name: "Science and Research",
    body: "The city is growing into a hospital, a lab, and a school. In Phase 1 you get the land, the first research tracks, the first facilities, and a real place to deploy work. Frontier research in integrative health, educational design, materials science, agriculture, and any domain where the city can provide a uniquely useful testing ground.",
  },
  {
    name: "Construction",
    body: "Yes, some of the work is physical — the city has to actually get built. A small number of tracks focus on classical construction alongside skilled tradespeople. Most of the cohort is working at a desk or in a lab as much as on a job site.",
  },
];

const ARC = [
  {
    month: "Month 1",
    body: "You meet the land. You meet the cohort. You choose your track. You set up your workspace or lab or workshop. You eat every meal with the other residents. You start to learn who you are actually working with.",
  },
  {
    month: "Month 3",
    body: "You ship your first prototype, run your first experiment, mount your first performance, or finish your first structure. You are no longer new. Your work is being noticed by the rest of the cohort.",
  },
  {
    month: "Month 6",
    body: "Your work is integrated into the city. Your drone design is flying missions. Your kernel contribution is in production. Your film is being shown. Your building is being lived in.",
  },
  {
    month: "Month 12",
    body: "You complete the residency. You leave with work you can point to, a network of fifty peers who will know you for the rest of your lives, and a founding equity grant in The Living City.",
  },
];

const LEVELS = [
  {
    name: "Founding Fellow — direct recruitment",
    body: "For exceptional practitioners we approach directly. Full underwriting, maximum founding equity grant, and a leadership role in the cohort.",
  },
  {
    name: "Fellowship — fully underwritten",
    body: "A full-immersion residency with tuition, housing, and meals fully underwritten by the city. Founding equity grant upon successful completion. This is the level for early-career frontier talent.",
  },
  {
    name: "Residency — underwritten plus stipend",
    body: "Same underwriting as the Fellowship, plus a monthly stipend for participants who need modest financial support during their term. For contributors with real output and real track records.",
  },
  {
    name: "Senior Residency — for master practitioners",
    body: "For senior researchers, engineers, and practitioners we want in the cohort to raise the ceiling for everyone else. Private housing, accelerated founding equity, and a teaching stipend.",
  },
  {
    name: "Explorer Residency — self-funded evaluation",
    body: "For people seriously considering becoming a Zone Operator later, who want to evaluate the city on their own terms before committing. Self-funded monthly fee covers private housing and full access to the cohort.",
  },
];
