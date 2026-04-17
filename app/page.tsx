import Link from "next/link";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/selected/round2/hero-dusk-citadel.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            The First Living City
          </p>
          <h1 className="mx-auto mt-8 max-w-4xl text-[42px] leading-[1.05] font-bold tracking-tight text-white sm:text-[64px] lg:text-[80px]">
            A living city engineered to make your best self inevitable.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
            On 15,491 acres in Tennessee, we are building the first living city: a real
            city that turns what its people want into technologies, industries, festivals,
            and a progressively automated good life.
          </p>
          <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/investors" className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-semibold text-stone-900 hover:bg-stone-100">For Investors</Link>
            <Link href="/operators" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">Run a Zone</Link>
            <Link href="/cohort" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">Join the First Fifty</Link>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wide text-white/50">
            Land under LOI &middot; Phase 1 starts this year
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5EFE6] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — WHAT THIS IS
          ═══════════════════════════════════════════════════════════ */}
      <Section className="bg-[#F5EFE6]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            We are building the first living city.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-700">
            <p>
              Not a farm. Not a commune. Not a startup campus. Not a real-estate pitch
              with good branding.
            </p>
            <p>
              A real city.
            </p>
            <p>
              A city that gathers what its people want to build, learn, experience, and
              become &mdash; then turns those wants into zones, teams, factories, missions,
              contests, festivals, and new technologies that make them real.
            </p>
            <p className="text-xl font-semibold text-stone-900">
              Most cities are places you endure. The Living City is a place you advance.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — FOUND THE NEXT AGE
          ═══════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
            Phase 1 &middot; The First Age
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Every city begins with a first age.
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-stone-600">
            <p>
              The Living City will eventually house <strong className="text-stone-900">50,000 people across 5,040 zones</strong>.
            </p>
            <p>
              But it does not begin as a finished world. It begins with a first fifty:
              the first residents, the first operators, the first cohort, the first
              industries, the first calendar, and the first loop that proves the city
              can wake up and start moving.
            </p>
            <p className="text-stone-900 font-medium">
              The people who come first are not arriving at the end of the story.
              They are the people who make the story real.
            </p>
          </div>

          {/* Pioneer imagery — triptych of real land */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="/images/property/photo-085.jpg" alt="Dusk over the plateau" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="/images/property/photo-065.jpg" alt="Deep valley at sunset" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="/images/property/photo-035.jpg" alt="Sunset from the ridge" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — WHAT THIS MOUNTAIN BECOMES
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B0F14] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#D7AF63]">
            The Substrate
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The mountain is the substrate. The city is the product.
          </h2>
          <p className="mt-4 text-lg text-stone-400">
            This land is not just beautiful. It is loaded.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/selected/05-hero-requiem.png" alt="Mine entrance — future compute core" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">The mines become a compute core.</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">55&deg;F year-round. Cooling, storage, subterranean logistics, mushroom production, robotics infrastructure, and the backbone for AI-scale operations.</p>
              </div>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/selected/06-silica-forge.png" alt="Silica face — future fabrication" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">The silica becomes glass, solar, fabrication, and advanced materials.</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">The mountain is not scenery. It is raw input for entire industries.</p>
              </div>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/selected/07-hero-flash-sentinel.jpeg" alt="Plateau — future testbed" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">The plateau becomes a city-scale testbed.</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">Autonomous systems. Logistics. Manufacturing. Infrastructure. Governance. New forms of daily life, deployed on real land instead of trapped in demos.</p>
              </div>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/selected/01-valley-deltahalo-flash.jpeg" alt="The living engine" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">The city becomes a living engine.</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">Not just buildings. A system that takes what people want and turns it into capability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — AT FULL TEMPERATURE
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0B0F14] border-t border-white/10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#89E7FF]">
            What We Are Building Toward
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            At full temperature, the city feels alive.
          </h2>
          <p className="mt-2 text-sm italic text-stone-500">
            Not on day one. But this is what the machine is being built to do.
          </p>

          <div className="mt-12 aspect-[21/9] min-h-[300px] overflow-hidden rounded-sm">
            <img src="/images/selected/03-hero-central-spire.png" alt="The living city at full scale" className="h-full w-full object-cover" />
          </div>

          <div className="mt-12 max-w-3xl space-y-5 text-base leading-relaxed text-stone-300">
            <p>
              At full scale, the Living City runs across <strong className="text-white">50,000 people and 5,040 zones</strong>,
              organized into <strong className="text-white">twelve domains of life</strong> &mdash; home, making, learning,
              trade, beauty, health, defense, governance, agriculture, infrastructure,
              hospitality, and transformation.
            </p>
            <p>
              Hundreds of contests and festivals run across the city every day.
            </p>
            <p>
              The city learns what kinds of people, projects, places, rhythms, and teams
              bring out the best in each other &mdash; then uses that knowledge to reshape
              the daily calendar: who meets, what gets built, which domains get investment,
              which celebrations mark real achievement, which technologies unlock the next
              age, and which parts of ordinary life can be automated away.
            </p>
            <p>
              It starts to feel less like living in a place and more like living inside
              an intelligence.
            </p>
          </div>

          <div className="mt-10 max-w-3xl space-y-1 text-base text-stone-400">
            <p>A city that knows which friendships deepen each other.</p>
            <p>A city that knows which environments sharpen invention.</p>
            <p>A city that knows which rituals produce loyalty, beauty, and meaning.</p>
            <p>A city that knows which bottlenecks to remove so more of your day belongs to what matters.</p>
          </div>

          <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-stone-300">
            <p>The result is not just efficiency. It is a different quality of life.</p>
            <p>
              Better friendships. Better work. Better training. Better health. Better
              access to resources. Better environments for invention. Better odds that
              your day contains something worth remembering.
            </p>
            <p className="text-lg font-semibold text-white">
              Build it far enough, and the city stops feeling like a backdrop. It starts
              feeling like a world that knows you, challenges you, harmonizes you with
              the right people, and helps make more of what you care about real.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — HOW THE CITY MOVES
          ═══════════════════════════════════════════════════════════ */}
      <Section className="bg-[#F5EFE6]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The city takes what people want and turns it into a world.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Every resident and every zone contributes what they actually care about &mdash;
              the things they want to build, solve, unlock, learn, and become.
            </p>
            <p>The city keeps that visible.</p>
            <p>It maps what those things depend on.</p>
            <p>It translates those dependencies into missions, teams, zones, contests, and festivals.</p>
            <p>When those are completed, the city gains a new capability.</p>
            <p>That new capability makes more things possible.</p>
            <p className="font-medium text-stone-900">The loop runs again. That is how the city moves through ages.</p>
          </div>
          <div className="mt-8">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
              See how it works in detail <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — WHY HERE, WHY NOW
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#8A5B44]">
            The Financing Stack
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            This is not a dream. This is a capital machine.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-600">
            This is not a nicer version of the present. It is a new operating system for
            civilization, built on real land.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["15,491 acres", "Cumberland Plateau"],
              ["~$11B", "Estimated geological resources"],
              ["27 active wells", "Producing revenue today"],
              ["50–80%", "Federal grant coverage (projected)"],
              ["30–90 days", "TN utility district formation"],
              ["Cash-flow positive", "From day one"],
            ].map(([stat, desc]) => (
              <div key={stat} className="rounded-sm border border-stone-300 bg-stone-50 p-5">
                <p className="text-2xl font-bold text-stone-900">{stat}</p>
                <p className="mt-1 text-sm text-stone-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — THE MACHINE FOR GROWTH
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Buy the substrate. Issue the bonds. Unlock the next age. Repeat.
          </h2>
          <div className="mt-8 space-y-3 text-base leading-relaxed text-stone-600">
            <p>Acquire the land.</p>
            <p>Form the district.</p>
            <p>Use grants and bonds to build infrastructure.</p>
            <p>Bring on operators and industries.</p>
            <p>Revalue the land.</p>
            <p>Issue again.</p>
            <p>Unlock the next age.</p>
          </div>
          <p className="mt-8 font-medium text-stone-900">
            This is how raw land becomes a city-scale platform.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <Link href="/land" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
              See the land and financing <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/investors" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
              Read the investor page <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — THREE DOORS
          ═══════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Civilization requires three kinds of founders.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-sm border border-stone-300 bg-stone-50 p-6">
              <div className="aspect-[3/2] overflow-hidden rounded-sm">
                <img src="/images/property/photo-090.jpg" alt="The substrate" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-400">Capital</p>
              <h3 className="mt-2 text-lg font-bold text-stone-900">Back the first living city.</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                A land-backed platform for compute, manufacturing, autonomous
                infrastructure, and civic software.
              </p>
              <div className="mt-4">
                <Link href="/investors" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">For Investors <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
            <div className="flex flex-col rounded-sm border border-stone-300 bg-stone-50 p-6">
              <div className="aspect-[3/2] overflow-hidden rounded-sm">
                <img src="/images/property/photo-040.jpg" alt="Raw materials" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-400">Capital + Operational Expertise</p>
              <h3 className="mt-2 text-lg font-bold text-stone-900">Build the industry that unlocks the city&rsquo;s next age.</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                Own a zone. Run a real enterprise. Give the city a capability it does
                not yet have.
              </p>
              <div className="mt-4">
                <Link href="/operators" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">Run a Zone <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
            <div className="flex flex-col rounded-sm border border-stone-300 bg-stone-50 p-6">
              <div className="aspect-[3/2] overflow-hidden rounded-sm">
                <img src="/images/property/photo-150.jpg" alt="The plateau at dusk" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-400">Frontier Talent</p>
              <h3 className="mt-2 text-lg font-bold text-stone-900">Join the people founding the city&rsquo;s first age.</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                A three-to-twelve month residency for engineers, researchers, designers,
                creators, and operators building the autonomy layer, factories, governance,
                media, and architecture of the first living city.
              </p>
              <div className="mt-4">
                <Link href="/cohort" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">Join the First Fifty <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — THE CLOSE
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-6 py-28 sm:py-36">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/selected/02-beacon-flash.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/80 via-[#0B0F14]/70 to-[#0B0F14]/90" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The first age starts now.
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-white/75">
            <p>There are moments when a new institution enters the world quietly, before history has language for what it is.</p>
            <p>This is one of those moments.</p>
            <p>The land is real. The financing path is real. The first cohort is forming now.</p>
            <p className="text-lg font-semibold text-white">If this works, it changes what cities are for.</p>
          </div>
          <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/investors" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-100">For Investors</Link>
            <Link href="/operators" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Run a Zone</Link>
            <Link href="/cohort" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Join the First Fifty</Link>
            <Link href="/founder" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Speak with the Founder</Link>
          </div>
        </div>
      </section>
    </>
  );
}
