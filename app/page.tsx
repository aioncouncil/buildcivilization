import Link from "next/link";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
          Image: one full-bleed dawn aerial of the Plateau
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
            <Link href="/operator" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">Run a Zone</Link>
            <Link href="/builder" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">Join the First Fifty</Link>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wide text-white/50">
            Land under LOI &middot; Phase 1 starts this year &middot; 50 founding spots
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F4EFE7] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHAT THIS MOUNTAIN BECOMES
          The first visual event. Dark band. Four cards.
          Each card: real substrate image + luminous geometry overlay
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
            {/* Card 1: Mine → Compute */}
            <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/selected/05-hero-requiem.png" alt="Forerunner compute citadel emerging from the mountain" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">The mines become a compute core.</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  55&deg;F year-round. Cooling, storage, subterranean logistics, mushroom
                  production, robotics infrastructure, and the backbone for AI-scale
                  operations.
                </p>
              </div>
            </div>

            {/* Card 2: Silica → Glass/Solar */}
            <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/selected/06-silica-forge.png" alt="Ancient foundry built into the mineral face" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">The silica becomes glass, solar, fabrication, and advanced materials.</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  The mountain is not scenery. It is raw input for entire industries.
                </p>
              </div>
            </div>

            {/* Card 3: Plateau → Testbed */}
            <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/selected/07-hero-flash-sentinel.jpeg" alt="City-scale testbed with sentinel deployment" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">The plateau becomes a city-scale testbed.</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  Autonomous systems. Logistics. Manufacturing. New governance. New forms
                  of daily life, deployed on real land instead of trapped in demos.
                </p>
              </div>
            </div>

            {/* Card 4: City → Living Engine */}
            <div className="rounded-sm border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src="/images/selected/01-valley-deltahalo-flash.jpeg" alt="The living engine — ancient city across the valley" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">The city becomes a living engine.</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  Not just buildings. A system that takes what people want and turns it
                  into capability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — FULL TEMPERATURE
          The make-or-break section. Immersive dark band.
          Domain constellation / festival-light / city-at-temperature
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

          {/* Main vision image — the domain constellation / city at temperature */}
          <div className="mt-12 aspect-[21/9] min-h-[300px] overflow-hidden rounded-sm">
            <img src="/images/selected/03-hero-central-spire.png" alt="Central citadel — the living city at full scale" className="h-full w-full object-cover" />
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-base leading-relaxed text-stone-300">
              <p>
                50,000 people. 5,040 zones. Twelve domains of life on a year-round
                calendar. Hundreds of contests and festivals across the city, every day.
              </p>
              <p>
                The city learns what kinds of people, projects, places, and rhythms
                bring out the best in each other &mdash; then reshapes the daily
                calendar: who meets, what gets built, which teams form, which
                celebrations mark real achievement, which new technologies unlock the
                next age.
              </p>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-stone-300">
              <p>
                Better friendships. Better work. Better health. Better access to
                resources. Better environments for invention. Better odds that your day
                contains something worth remembering.
              </p>
              <p className="text-lg font-semibold text-white">
                Build it far enough, and the city stops feeling like a backdrop. It
                starts feeling like a world that knows you, challenges you, and helps
                make more of what you care about real.
              </p>
            </div>
          </div>

          {/* Festival + pioneering image strip */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="/images/property/photo-085.jpg" alt="Dusk over the plateau" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="/images/property/photo-065.jpg" alt="Path through the land" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img src="/images/property/photo-035.jpg" alt="Sunset from the ridge" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="mt-10">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-stone-300">
              See how the living engine works <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — CAPITAL MACHINE + THREE DOORS
          Proof grid + bond cascade + doors. No scenic photos.
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4EFE7] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#8A5B44]">
            The Financing Stack
          </p>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            This is not a dream. This is a capital machine.
          </h2>
          <p className="mt-4 text-lg font-medium text-[#8A5B44]">
            Buy the substrate. Issue the bonds. Unlock the next age. Repeat.
          </p>

          {/* Proof metrics grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["15,491 acres", "Cumberland Plateau"],
              ["$250M+", "Estimated resources"],
              ["50–80%", "Federal grant coverage"],
              ["30–90 days", "To bond-issuing district"],
            ].map(([stat, desc]) => (
              <div key={stat} className="rounded-sm border border-stone-300 bg-white p-5">
                <p className="text-2xl font-bold text-stone-900">{stat}</p>
                <p className="mt-1 text-sm text-stone-500">{desc}</p>
              </div>
            ))}
          </div>

          {/* Bond cascade diagram placeholder */}
          {/* Bond cascade — visual flow */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-center font-mono text-xs text-stone-500">
            {["Acquire land", "→", "Form district", "→", "Grants + bonds", "→", "Build infrastructure", "→", "Revalue", "→", "Issue again"].map((step, i) => (
              <span key={i} className={step === "→" ? "text-[#8A5B44] text-lg" : "rounded-sm border border-stone-300 bg-white px-3 py-2 text-stone-900 font-semibold text-[11px]"}>
                {step}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed text-stone-600">
            Acquire the land. Form the district. Use grants and bonds to build
            infrastructure. Bring on operators. Revalue the land. Issue again. Unlock
            the next age. The same municipal-finance logic that built The Villages
            &mdash; but with mountain land, railroad access, mines, water, and a far
            more ambitious product.
          </p>

          <div className="mt-8">
            <Link href="/land" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
              See the land, numbers, and documents <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Three doors */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              Civilization requires three kinds of founders.
            </h3>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col rounded-sm border border-stone-300 bg-white p-6">
                <div className="aspect-[3/2] overflow-hidden rounded-sm"><img src="/images/property/photo-090.jpg" alt="Property boundary — parcel map" className="h-full w-full object-cover" /></div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-400">Capital</p>
                <h4 className="mt-2 text-lg font-bold text-stone-900">Back the first living city.</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">A land-backed platform for compute, manufacturing, autonomous infrastructure, and civic software.</p>
                <div className="mt-4"><Link href="/investors" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">For Investors <span aria-hidden="true">&rarr;</span></Link></div>
              </div>
              <div className="flex flex-col rounded-sm border border-stone-300 bg-white p-6">
                <div className="aspect-[3/2] overflow-hidden rounded-sm"><img src="/images/property/photo-040.jpg" alt="Mineral substrate — raw materials" className="h-full w-full object-cover" /></div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-400">Capital + Expertise</p>
                <h4 className="mt-2 text-lg font-bold text-stone-900">Build the industry that unlocks the city&rsquo;s next age.</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">Own a zone. Run a real enterprise. Help give the city a capability it does not yet have.</p>
                <div className="mt-4"><Link href="/operator" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">Run a Zone <span aria-hidden="true">&rarr;</span></Link></div>
              </div>
              <div className="flex flex-col rounded-sm border border-stone-300 bg-white p-6">
                <div className="aspect-[3/2] overflow-hidden rounded-sm"><img src="/images/property/photo-150.jpg" alt="The plateau at dusk — where it begins" className="h-full w-full object-cover" /></div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-400">Frontier Talent</p>
                <h4 className="mt-2 text-lg font-bold text-stone-900">Join the people founding the city&rsquo;s first age.</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">A frontier residency for engineers, researchers, designers, and creators building the first living city.</p>
                <div className="mt-4"><Link href="/builder" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">Join the First Fifty <span aria-hidden="true">&rarr;</span></Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — THE CLOSE
          Quiet. Dusk image or very faint. Let the line land.
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
          <div className="mt-12">
            <Link href="/founder" className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-semibold text-stone-900 hover:bg-stone-100">
              Speak with the founder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
