import Link from "next/link";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/fog-mountain.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            The First Living City
          </p>
          <h1 className="mx-auto mt-8 max-w-4xl text-[42px] leading-[1.05] font-bold tracking-tight text-white sm:text-[64px] lg:text-[80px]">
            A living city engineered to make your best self inevitable.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">
            On 15,491 acres in Tennessee, we are building a real city that turns what its
            people want into technologies, industries, festivals, and a progressively
            automated good life.
          </p>
          <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/investors" className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-semibold text-stone-900 hover:bg-stone-100">
              For Investors
            </Link>
            <Link href="/operator" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">
              Run a Zone
            </Link>
            <Link href="/builder" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">
              Join the First Fifty
            </Link>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wide text-white/50">
            Land under LOI. Phase 1 starts this year.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
      </section>

      {/* ── SECTION 1: FOUND THE NEXT AGE ── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Most cities are places you endure. The Living City is a place you advance.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-stone-600">
            <p>
              Modern life is an argument with your environment. You fight distraction to
              think. You fight your zip code to eat well. You fight bureaucracy to build
              anything real. You fight your schedule to see the people you love. You
              fight the city, and at the end of the day the city has eaten your time.
            </p>
            <p>The problem is not you. The problem is that nobody designed the city.</p>
            <p className="text-xl font-semibold text-stone-900">
              The Living City is what happens when you do.
            </p>
            <p>
              It gathers what people want to build, learn, experience, invent, and become
              &mdash; then turns those wants into zones, teams, factories, missions,
              contests, and festivals that make them real.
            </p>
            <p className="font-medium text-stone-900">
              This is not a nicer version of the present. It is a living civic
              technology, built on real land.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 2: WHAT THIS IS ── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Not a farm. Not a commune. Not a startup campus.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              The Living City is a real city built as one coordinated organism. Its
              residents are not dropped into isolated lives and told good luck. The city
              keeps a living picture of what its people want, what the land can support,
              what technologies and enterprises are missing, what must be built next, and
              which people should be brought together to make it happen. Then it
              organizes daily life around that picture.
            </p>
            <p>
              In Phase 1, that means the first honest version of the loop: shared meals,
              founding zones, research tracks, build crews, weekly contests, seasonal
              festivals, and a city that is small enough to run in person and real enough
              to matter.
            </p>
            <p>
              At full scale, it becomes 5,040 zones acting like one living engine &mdash;
              turning desire into capability, capability into new industries, new
              industries into new freedoms, and more of daily life into something the
              city itself can help carry.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
              See how the living engine works <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* ── SECTION 3: WHAT THIS MOUNTAIN BECOMES ── */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            The substrate
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The mountain is the substrate. The city is the product.
          </h2>
          <div className="mt-10 space-y-8 text-lg leading-relaxed text-stone-300">
            <div>
              <p className="text-xl font-semibold text-white">
                The mines become a compute core.
              </p>
              <p className="mt-2">
                Pre-excavated space at 55&deg;F for data infrastructure, subterranean
                industry, cold storage, mushroom production, logistics, and autonomous
                systems.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">
                The silica becomes glass, solar, and fabrication.
              </p>
              <p className="mt-2">
                The mountain is not scenery. It is raw material for the industries that
                unlock the city&rsquo;s next age.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">
                The plateau becomes a city-scale testbed.
              </p>
              <p className="mt-2">
                Autonomy, logistics, advanced manufacturing, governance, robotics,
                infrastructure, water systems, food systems, and real deployment on real
                land.
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">
                The city becomes a living engine.
              </p>
              <p className="mt-2">
                Not just buildings. A system that learns what people want, maps what it
                would take to make those things real, and reorganizes daily life around
                getting there faster.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 4: FULL SCALE PICTURE ── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
            What we are building toward
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            What happens when the living city reaches full temperature.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Fifty thousand people. 5,040 zones. Twelve domains of life running on a
              year-round calendar. Hundreds of contests and festivals across the city,
              every day, in every season. A living core that is continuously learning
              what its citizens care about, which technologies would unlock the next
              layer of possibility, which enterprises need to exist, which teams should
              meet, which places should come alive tonight, and which experiences would
              deepen friendship, strength, wisdom, beauty, health, courage, and wealth.
            </p>
            <p>
              At that scale, the city starts to feel less like real estate and more like
              a civilization with a nervous system. The machinery of ordinary existence
              &mdash; logistics, admin, matching, scheduling, coordination, domestic drag
              &mdash; gets progressively automated away. What fills the hours instead
              are mixed goods: the kinds of work, relationships, and experiences that are
              good now and make the future better at the same time.
            </p>
            <p className="text-lg font-medium text-stone-900">
              A city that is constantly redesigning its locations, calendars, teams, and
              resource flows so that the best day of your life stops feeling rare and
              starts feeling structural.
            </p>
            <p className="text-sm italic text-stone-500">
              That is the full-scale promise. Phase 1 is the first fifty people who make
              it real.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 5: THREE DOORS ── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Every city begins with a first fifty.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            The Living City is being built in phases over roughly a decade. It starts
            with fifty people and five zones &mdash; not because the ambition is small,
            but because every civilization starts as the first honest version of itself.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col rounded-sm border border-stone-200 bg-stone-50 p-8">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-stone-400">Capital</p>
            <h3 className="mt-3 text-xl font-bold text-stone-900">Back the capital machine.</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
              Buy the substrate. Issue the bonds. Unlock the next age. Repeat. A
              land-backed system for compute, manufacturing, autonomous infrastructure,
              and civic software.
            </p>
            <div className="mt-6">
              <Link href="/investors" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
                Read the investor memo <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-sm border border-stone-200 bg-stone-50 p-8">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-stone-400">Capital + Expertise</p>
            <h3 className="mt-3 text-xl font-bold text-stone-900">Build the industries that unlock the city&rsquo;s next age.</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
              Glass, robotics, fabrication, food, health, research, logistics,
              hospitality, media, advanced manufacturing. Own the zone that makes the
              next layer of the city possible.
            </p>
            <div className="mt-6">
              <Link href="/operator" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
                See the operator offer <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-sm border border-stone-200 bg-stone-50 p-8">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-stone-400">Frontier Work</p>
            <h3 className="mt-3 text-xl font-bold text-stone-900">Join the people founding the city&rsquo;s first age.</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
              A frontier residency for engineers, researchers, designers, creators, and
              builders working on the autonomy layer, the factories, the rituals, the
              governance, and the culture of the first living city.
            </p>
            <div className="mt-6">
              <Link href="/builder" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
                Join the first fifty <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SECTION 6: PROOF ── */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            This is not a rendering. This is a financing stack on real land.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            15,491 acres on Tennessee&rsquo;s Cumberland Plateau. An estimated $250M+ in
            geological resources. 161 million tons of proven
            coal reserves. 75&ndash;150 million tons of high-purity silica verified by
            three independent labs. Active wells generating revenue today. A 30&ndash;90
            day path to a bond-issuing Tennessee utility district. Federal grant programs
            covering 50&ndash;80% of Phase 1 infrastructure.
          </p>
          <p className="mt-4 text-lg font-medium text-stone-900">
            The dream is bold. The substrate is harder than the dream.
          </p>
          <div className="mt-8">
            <Link href="/land" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
              See the land, the numbers, and the documents <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* ── SECTION 7: PRECEDENT ── */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            This has been done before. Never like this.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-stone-600">
            <p>
              <strong className="text-stone-900">Walt Disney</strong> proved that a land
              visionary can build a destination that changes the world.
            </p>
            <p>
              <strong className="text-stone-900">The Villages</strong> proved that raw
              land plus a utility district plus bond issuance can become a city-scale
              machine.
            </p>
            <p>
              <strong className="text-stone-900">Mondrag&oacute;n</strong> proved that
              worker-owned production can scale.
            </p>
            <p>
              <strong className="text-stone-900">
                Plato, Vitruvius, and the ancient city
              </strong>{" "}
              proved that cities can be engineered around a way of life instead of around
              traffic and rent.
            </p>
            <p className="text-lg font-medium text-stone-900">
              What is new here is the combination: ancient blueprint, real substrate,
              modern capital stack, living coordination layer.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 8: CLOSE ── */}
      <section className="relative overflow-hidden px-6 py-28 sm:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/dusk/dusk-mountain.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The board is set. The first move is yours.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            The land closes this year. Phase 1 begins this year. The first fifty are
            being selected now.
          </p>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/investors" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-100">
              For Investors
            </Link>
            <Link href="/operator" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              Run a Zone
            </Link>
            <Link href="/builder" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              Join the First Fifty
            </Link>
            <Link href="/founder" className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
              From the Founder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
