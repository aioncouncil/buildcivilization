import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";

export const metadata: Metadata = {
  title: "Founding Cohort | The Living City",
  description:
    "Join the people founding the city's first age. A 3-12 month frontier residency for engineers, researchers, designers, architects, builders, and creators.",
};

export default function CohortPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Founding Cohort</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Join the people founding the city&rsquo;s first age.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            A 3&ndash;12 month frontier residency for engineers, researchers, designers,
            architects, builders, artists, and creators working on the hardest problems
            in autonomy, manufacturing, governance, architecture, media, and the actual
            design of daily life &mdash; on real land, with a serious cohort, building
            something that lasts.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
            <Link href="/cohort/apply" className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800">Apply to the founding cohort</Link>
            <a href="mailto:cohort@buildcivilization.com?subject=Cohort%20Question" className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50">Ask a question</a>
          </div>
          <div className="mt-10">
            <ImageSlot language="pioneering" description="5-8 serious people around prototype, drone, or planning table — frontier lab energy" shot="Shot #60 — Cohort hero" aspect="16/9" />
          </div>
        </div>
      </section>

      {/* What This Is */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What this is.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-300">
            <p>
              This is not a volunteer camp. You are not donating labor to someone
              else&rsquo;s project. This is not a retreat. You are not here to find
              yourself. This is not an accelerator. Nobody is pitching on demo day.
            </p>
            <p className="text-white font-medium">
              This is a frontier residency where a small group of extremely capable
              people come to build the first layer of a real city &mdash; on real
              land, with real tools, real deadlines, and real consequences.
            </p>
          </div>
        </div>
      </Section>

      {/* Why People Join */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Why people join.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Because the problems are real and unsolved. Autonomous inspection of
              15,000 acres. Manufacturing systems from raw silica. Governance for a
              city that does not exist yet. Architecture that has to work in mud, wind,
              and budget. Software that coordinates a living organism. Media that
              documents a founding.
            </p>
            <p>
              Because the land is real. Not a simulation, not a whiteboard exercise,
              not a hackathon. Fifteen thousand acres on the Cumberland Plateau with
              rail, water, minerals, and space.
            </p>
            <p className="font-medium text-stone-900">
              Because the cohort is serious. The selection filter exists specifically to
              ensure that the people around you are operating at your level or above.
            </p>
          </div>
        </div>
      </Section>

      {/* Tracks */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Tracks.</h2>
          <p className="mt-4 text-sm text-stone-500">You join the track where your skills matter most. You collaborate across all of them.</p>
          <div className="mt-10 space-y-6">
            {[
              ["Autonomous Systems", "Drones, robotics, logistics, sensor networks, inspection, mobility, deployment."],
              ["The Kernel", "The software layer that helps the city see itself: desires, routing, matching, calendars, mission generation, domain intelligence."],
              ["Advanced Manufacturing", "Glass, materials, fabrication, additive systems, process design, tooling, production lines."],
              ["Architecture", "Buildings, streets, public space, spatial grammar, domain centers, interfaces between ritual and industry."],
              ["Media", "Films, documentation, performance, narrative systems, festival programming, civic memory."],
              ["Governance", "Rules, rituals, constitutional logic, the human layer where the engine meets the people."],
              ["Science", "Agriculture, health, education, materials, energy — any domain where a city-scale substrate creates a uniquely powerful testbed."],
              ["Construction", "Classical and modern building systems, utility deployment, physical substrate, the first permanent structures."],
            ].map(([name, desc]) => (
              <div key={name}>
                <h3 className="text-lg font-bold text-stone-900">{name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ImageSlot language="pioneering" description="Autonomous systems — drone over terrain, sensor array" shot="Shot #61 — Autonomy track" aspect="1/1" />
            <ImageSlot language="awakening" description="The Kernel — code on screens, coordination dashboard" shot="Shot #62 — Kernel track" aspect="1/1" />
            <ImageSlot language="pioneering" description="Manufacturing — CNC, glass furnace, materials lab" shot="Shot #63 — Manufacturing track" aspect="1/1" />
            <ImageSlot language="festival" description="Architecture — model on table, building rising behind" shot="Shot #64 — Architecture track" aspect="1/1" />
          </div>
        </div>
      </Section>

      {/* What Phase 1 Feels Like */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-400">Phase 1 reality</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What Phase 1 feels like.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              You wake up on a mountain. You eat with the cohort. You walk to your
              track&rsquo;s workspace. You build something real before lunch. In the
              afternoon the tracks cross-pollinate &mdash; the construction crew needs
              the autonomy team&rsquo;s survey data, the kernel team needs the
              governance track&rsquo;s rules, the media team documents what everyone
              shipped. Weekly contests surface the best work. Seasonal festivals mark
              what changed.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-sm text-stone-600">
            {[
              "Shared meals",
              "Daily work blocks",
              "A visible backlog of what the city needs",
              "Small but serious labs, workshops, and project rooms",
              "Weekly contests",
              "Seasonal festivals",
              "Real output on real timelines",
              "The first enterprises, not the full economy",
              "The first rhythm, not the full calendar",
            ].map(i => (
              <li key={i} className="flex gap-2"><span className="text-stone-400">&bull;</span>{i}</li>
            ))}
          </ul>
          <p className="mt-8 text-base font-medium text-stone-900">
            Phase 1 is not a polished world. It is the group of people who make the
            world possible.
          </p>
          <div className="mt-8">
            <ImageSlot language="pioneering" description="Phase 1 daily life — shared meal outdoors, small group, real setting, honest and early" shot="Shot #65 — Cohort Phase 1 life" aspect="16/9" />
          </div>
        </div>
      </Section>

      {/* What the Full City Unlocks */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">What the full city unlocks.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-300">
            <p>
              By the time the city is operating at full scale, the people who helped
              found its first age will be able to walk through places they helped make
              possible: districts alive with festivals every day, industries that did
              not exist when they arrived, calendars that pulse across twelve domains,
              institutions that train the next generations, software that quietly
              coordinates the whole organism, and a city that feels less like a
              settlement and more like a living world.
            </p>
          </div>
          <div className="mt-8">
            <ImageSlot language="awakening" description="Forerunner districts alive with festivals — the full city at scale" shot="Shot #66 — Full city cohort view" aspect="16/9" />
          </div>
          <p className="mt-4 text-base font-medium text-white">
            You are not just joining a program. You are arriving early enough to help
            decide what this thing becomes.
          </p>
        </div>
      </Section>

      {/* Levels */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Levels.</h2>
          <p className="mt-4 text-sm text-stone-500">Different depths of commitment for different stages of readiness.</p>
          <div className="mt-8 overflow-hidden rounded-sm border border-stone-200 bg-stone-50">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-stone-900">
                <tr>
                  <th className="px-4 py-3 font-semibold">Level</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white text-stone-600">
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Founding Fellow</td>
                  <td className="px-4 py-3">12 months</td>
                  <td className="px-4 py-3">Full commitment. You are founding a track. Equity grant eligible.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Fellowship</td>
                  <td className="px-4 py-3">6&ndash;12 months</td>
                  <td className="px-4 py-3">Deep residency. Lead a major project within a track. Equity grant eligible.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Residency</td>
                  <td className="px-4 py-3">3&ndash;6 months</td>
                  <td className="px-4 py-3">Standard cohort term. Ship real work on a defined project.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Senior Residency</td>
                  <td className="px-4 py-3">3&ndash;6 months</td>
                  <td className="px-4 py-3">For experienced professionals. Mentorship role alongside project work.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-stone-900">Explorer Residency</td>
                  <td className="px-4 py-3">3 months</td>
                  <td className="px-4 py-3">Short-term immersion. Contribute to one project, evaluate fit for longer commitment.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* What You Get */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What you get.</h2>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-600">
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>Housing on site for the duration of your residency</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>Shared meals with the cohort</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>Access to labs, workshops, tools, and project rooms</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>A real project with real deadlines and real output</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>A cohort of people selected for ambition, competence, and range</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>Weekly contests and seasonal festivals</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>Founding equity grant where applicable (Founding Fellow and Fellowship levels)</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>A permanent place in the city&rsquo;s first age</span></li>
          </ul>
        </div>
      </Section>

      {/* Who This Is For / Not For */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Who this is for.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-bold text-stone-900">This is for you if:</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You have real skills &mdash; engineering, research, design, architecture, media, construction, science, governance</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You want frontier problems, not incremental ones</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You can commit 3&ndash;12 months of focused time</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You work well with ambitious peers under pressure</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You want to ship real work that becomes part of something lasting</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-stone-900">This is not for you if:</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-600">
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You are looking for a wellness retreat or digital detox</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You want to &ldquo;explore&rdquo; without committing to output</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You need a salary &mdash; this is a residency, not employment</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You are not comfortable with frontier conditions</li>
                <li className="flex gap-2"><span className="text-stone-400">&bull;</span>You want someone to tell you what to do every day</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Money / Terms / Equity */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Money, terms, and equity.</h2>
          {/* [COUNSEL] This section must clearly distinguish residency payments from securities. Confirm that the equity grant language does not constitute an unregistered securities offering to non-accredited participants. Review compensation-for-services vs. investment framing. */}
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              <strong className="text-stone-900">You are not buying securities.</strong>{" "}
              The residency payment covers your housing, meals, workspace access,
              tools, and participation in the program. It is a program fee, not an
              investment.
            </p>
            <p>
              Founding Fellows and Fellowship-level residents may receive equity
              grants in Build Civilization Trading Company as compensation for
              exceptional contribution. These grants are awarded at the company&rsquo;s
              discretion, vest over time, and are subject to the terms of the
              company&rsquo;s equity plan.
            </p>
            <p>
              Residency pricing varies by level and duration. Specific terms are
              shared after acceptance.
            </p>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-stone-500">
            {/* [COUNSEL] Confirm this disclaimer adequately separates the residency program from the securities offering on /operators. Confirm equity grant structure (ISOs, RSAs, phantom equity) and applicable securities exemptions. */}
            Equity grants, where applicable, are compensation for services rendered
            during the residency and are not offered as part of a securities
            offering. The residency program is separate from any investment
            opportunity described elsewhere on this site.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The next step is your application.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-300">
            Ten minutes. One 60-second video. We read every application personally.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link href="/cohort/apply" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-100">Apply to the founding cohort</Link>
            <a href="mailto:cohort@buildcivilization.com?subject=Cohort%20Question" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Ask a question</a>
          </div>
        </div>
      </Section>
    </>
  );
}
