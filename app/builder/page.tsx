import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { BuilderForm } from "@/components/forms/BuilderForm";

export const metadata: Metadata = {
  title: "The First Fifty | The Living City",
  description:
    "Join the people founding the city's first age. A frontier residency for engineers, researchers, designers, operators, builders, artists, and creators.",
};

export default function BuilderPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">The First Fifty</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Join the people founding the city&rsquo;s first age.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            A frontier residency for engineers, researchers, designers, operators,
            builders, artists, architects, technologists, and creators building the
            autonomy layer, the factories, the rituals, the software, the architecture,
            and the culture of the first living city.
          </p>
          <div className="mt-10">
            <a href="#apply" className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800">Apply to the first fifty</a>
          </div>
        </div>
      </section>

      {/* The Spell */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Come work on the kind of problems most people only get to imagine.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>The world does not have a place where the most ambitious people can take real land, real resources, real institutions, real software, real rituals, and real infrastructure and build an entire civilization out of them.</p>
            <p>We are building that place.</p>
            <p className="text-white font-medium">This is not a normal residency. It is not a normal startup. It is not a normal build program. It is the first age of a city that is trying to become alive.</p>
          </div>
        </div>
      </Section>

      {/* The Translation */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What you are actually doing here.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>You come for three to twelve months. You join one of the tracks that matters most to the city&rsquo;s next age. You live among a small cohort of people selected for ambition, competence, and range. You eat together, build together, ship real work, argue hard, test ideas on real land, and watch your output get folded into a city that is actually taking shape around you.</p>
            <p>At the end, you leave with real shipped work, a tribe of peers, a founding equity grant where applicable, and a permanent place in the city&rsquo;s first age.</p>
          </div>
        </div>
      </Section>

      {/* Tracks */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Work on the layers that make the city alive.</h2>
          <div className="mt-10 space-y-6">
            {[
              ["Autonomous Systems","Drones, robotics, logistics, sensor networks, inspection, mobility, deployment."],
              ["The Kernel","The software layer that helps the city see itself: desires, routing, matching, calendars, mission generation, domain intelligence."],
              ["Advanced Manufacturing","Glass, materials, fabrication, additive systems, process design, tooling, production lines."],
              ["Architecture and Urban Form","Buildings, streets, public space, spatial grammar, domain centers, interfaces between ritual and industry."],
              ["Media and Performance","Films, documentation, performance, narrative systems, festival programming, civic memory."],
              ["Governance and Philosophy","Rules, rituals, constitutional logic, the human layer where the engine meets the people."],
              ["Construction and Physical Systems","Classical and modern building systems, utility deployment, physical substrate, the first permanent structures."],
              ["Science and Research","Agriculture, health, education, materials, energy — any domain where a city-scale substrate creates a uniquely powerful testbed."],
            ].map(([name, desc]) => (
              <div key={name}>
                <h3 className="text-lg font-bold text-stone-900">{name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What it becomes */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What this becomes at full scale.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>By the time the city is operating at full scale, the people who helped found its first age will be able to walk through places they helped make possible: districts alive with festivals every day, industries that did not exist when they arrived, calendars that pulse across twelve domains, institutions that train the next generations, software that quietly coordinates the whole organism, and a city that feels less like a settlement and more like a living world.</p>
            <p className="font-medium text-stone-900">You are not just joining a program. You are arriving early enough to help decide what this thing becomes.</p>
          </div>
        </div>
      </Section>

      {/* Why people will come */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Why people will come.</h2>
          <div className="mt-6 text-base leading-relaxed text-stone-600">
            <p>Because the ambition level is absurd and the substrate is real.</p>
            <p className="mt-4">Because there are not many places left in the world where you can work on AI, autonomy, manufacturing, governance, architecture, culture, and the actual design of daily life &mdash; all at once, in one place, with the explicit goal of building something that lasts for centuries.</p>
            <p className="mt-4 font-medium text-stone-900">This will attract exactly the people it should.</p>
          </div>
        </div>
      </Section>

      {/* Phase 1 */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-400">Phase 1 reality</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">The boot sequence, not the finished world.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-sm text-stone-600">
            {["Shared meals","Daily work blocks","A visible backlog","Small but serious labs, workshops, and project rooms","Weekly contests","Seasonal festivals","Real output on real timelines","The first enterprises, not the full economy","The first rhythm, not the full calendar"].map(i => (
              <li key={i} className="flex gap-2"><span className="text-stone-400">&bull;</span>{i}</li>
            ))}
          </ul>
          <p className="mt-8 text-base font-medium text-stone-900">Phase 1 is not a polished world. It is the group of people who make the world possible.</p>
        </div>
      </Section>

      {/* Apply */}
      <Section className="bg-stone-50">
        <div id="apply" className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Apply to the first fifty.</h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">Ten minutes. One 60-second video. We read every application personally.</p>
          <div className="mt-10"><BuilderForm /></div>
        </div>
      </Section>
    </>
  );
}
