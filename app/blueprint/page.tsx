import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";


export const metadata: Metadata = {
  title: "Blueprint | The Living City",
  description:
    "The philosophical foundation of The Living City — Plato, Vitruvius, Mondrag\u00f3n, and the sources that built the specification.",
};

export default function BlueprintPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            The Blueprint
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            The city has a soul.
          </h1>
          <p className="mt-6 text-lg italic text-stone-600">
            This is the part of the site where, if you want, you can go all the
            way down.
          </p>
        </div>
      </section>

      {/* Why this page exists */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Why this page exists.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Most of buildcivilization.com is about the land, the offer, and the
            application. That is on purpose. You do not need to understand what
            is on this page to join us.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            But if you want to know why we believe this is going to work &mdash;
            not just financially, but structurally, at the level of how a city
            actually produces good lives &mdash; this is where we explain it.
            Five sources. One synthesis.
          </p>
          <div className="mt-10 aspect-[16/9] overflow-hidden rounded-sm">
            <img src="/images/generated/blueprint-dividedline.png" alt="Plato's Divided Line — Forms, Mathematics, Objects, Images" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* The Republic */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The Republic.
          </h2>
          <p className="mt-2 text-lg italic text-stone-500">
            &ldquo;The city is the soul written large.&rdquo;
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Plato&rsquo;s <em>Republic</em> has been read for 2,400 years as
              political philosophy. When you stop reading it that way and start
              reading it as an engineering specification, everything changes.
            </p>
            <p>
              The Republic describes a city where happiness is the proper
              ordering of its parts &mdash; a rational layer that contemplates
              the Good, a spirited layer that acts on it, and an appetitive layer
              that wants things. Happiness, in a person or a city, is structural
              harmony. Not the absence of pain. Not the presence of wealth. Not
              a feeling. A proportion.
            </p>
            <p>
              If this is right, then a city designed around the specification
              should produce happy citizens by default, not by accident. That is
              the bet. The Republic gives us the architecture of the whole.
            </p>
          </div>
        </div>
      </Section>

      {/* The Laws */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The Laws.
          </h2>
          <p className="mt-2 text-lg italic text-stone-500">
            &ldquo;A city should have a calendar, not just an economy.&rdquo;
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Where the Republic describes the structure, Plato&rsquo;s{" "}
              <em>Laws</em> describes the texture. The daily rhythm. The
              festivals. The way time itself is organized so that work and
              celebration are not separate activities but the same activity seen
              from different angles.
            </p>
            <p>
              The Laws specifies a life built around daily rites and monthly
              festivals, one per god, one per domain. Athenian festivals were
              roughly a quarter of GDP. That is not waste. That is the city
              investing in the thing that makes its people want to stay.
            </p>
            <p>
              We are bringing this back. Not as cosplay, but as operations.
              Every month in The Living City is a festival month honoring one of
              the twelve domains &mdash; wisdom, manufacturing, agriculture,
              defense, arts, trade, and so on. The festival is not a break from
              work. It is the frame within which that month&rsquo;s work
              happens.
            </p>
          </div>
        </div>
      </Section>

      {/* The Philebus */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The Philebus.
          </h2>
          <p className="mt-2 text-lg italic text-stone-500">
            &ldquo;The machine has to know the difference between appetite and a
            good life.&rdquo;
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Plato&rsquo;s <em>Philebus</em> is the least-read of his major
              dialogues and the most important for our work. It answers the
              question every city eventually has to face: what do you optimize
              for?
            </p>
            <p>
              Modern platforms optimize for appetite. More engagement. More
              consumption. More of whatever the user clicked on last. The
              Philebus says that is precisely backwards. It describes how to
              combine pleasure and intelligence, appetite and reason, in
              proportions that produce both happiness and goodness. Not your
              impulses. Your best self.
            </p>
            <p>
              The Philebus gives us a hierarchy of the Good: measurement at the
              top, then beauty, then wisdom, then the sciences, and pure
              pleasures at the base. It gives us a taxonomy of desire. It gives
              us the tripartite soul &mdash; rational, spirited, appetitive. And
              it gives us a flow: desires flow in, get organized, get
              transformed into forethought, align on the Good, and output
              action.
            </p>
            <p>
              This is the specification we are writing the kernel around. The
              city&rsquo;s coordination engine does not maximize appetite. It
              orders desire. It helps you become what you are trying to become,
              not just consume what you last consumed.
            </p>
          </div>
        </div>
      </Section>

      {/* Vitruvius */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Vitruvius.
          </h2>
          <p className="mt-2 text-lg italic text-stone-500">
            &ldquo;Beauty is not decoration. It is operational.&rdquo;
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              For the physical city, we use Vitruvius &mdash; the first-century
              Roman architect whose <em>Ten Books on Architecture</em> became
              the foundation of classical Western design.
            </p>
            <p>
              Vitruvius specifies six principles every built thing should
              satisfy: order, arrangement, eurythmy, symmetry, propriety, and
              economy. These are not aesthetic preferences. They are structural
              requirements. A building that satisfies all six works. A building
              that does not, fails &mdash; not because it is ugly, but because
              it does not serve the people who use it.
            </p>
            <p>
              Vitruvius also gives us construction as rule-and-compass in the
              Euclidean sense. Designs are reproducible, teachable, and
              certifiable. Every building, street, and zone passes through these
              six principles before it is built. Beauty in this system is not
              something you add at the end. It is the evidence that the design is
              correct.
            </p>
          </div>
        </div>
      </Section>

      {/* Mondrag\u00f3n */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Mondrag&oacute;n.
          </h2>
          <p className="mt-2 text-lg italic text-stone-500">
            &ldquo;The economics have to work in the world we actually live
            in.&rdquo;
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Plato describes the structure. Vitruvius describes the form.
              Mondrag&oacute;n proves the economics work.
            </p>
            <p>
              Mondrag&oacute;n Cooperative Corporation is a federation of 80,000
              worker-owners in Spain&rsquo;s Basque region. Founded in 1956.
              Current revenue: $12.9 billion annually. It has survived the
              Spanish Civil War, the Franco regime, the 2008 financial crisis,
              and a global pandemic.
            </p>
            <p>
              Our operator model is drawn directly from Mondrag&oacute;n. Zone
              operators own their enterprises outright. The city provides land,
              infrastructure, and coordination. The operators provide capital,
              expertise, and work. Profits belong to the operators. Decisions
              that affect the whole city run through governance structures
              modeled on Mondrag&oacute;n&rsquo;s federal council.
            </p>
            <p>
              This is not untested idealism. This is a seventy-year-old proof
              that cooperative economics can operate at industrial scale, in bad
              economies, under hostile governments, and still grow.
            </p>
          </div>
        </div>
      </Section>

      {/* The Synthesis */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            The synthesis.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Put it together and here is what you get:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="text-stone-400">&bull;</span>
                <span>
                  The city&rsquo;s <strong className="text-stone-900">structure</strong> comes from
                  Plato&rsquo;s Republic.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">&bull;</span>
                <span>
                  The city&rsquo;s <strong className="text-stone-900">daily texture</strong> comes from
                  Plato&rsquo;s Laws.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">&bull;</span>
                <span>
                  The city&rsquo;s <strong className="text-stone-900">kernel</strong> comes from
                  Plato&rsquo;s Philebus.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">&bull;</span>
                <span>
                  The city&rsquo;s <strong className="text-stone-900">physical form</strong> comes from
                  Vitruvius.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">&bull;</span>
                <span>
                  The city&rsquo;s <strong className="text-stone-900">economics</strong> comes from
                  Mondrag&oacute;n.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">&bull;</span>
                <span>
                  The city&rsquo;s <strong className="text-stone-900">land</strong> comes from the
                  Cumberland Plateau.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">&bull;</span>
                <span>
                  The city&rsquo;s <strong className="text-stone-900">financing</strong> comes from
                  Tennessee utility district law, federal and state grants, and
                  cooperative operator capital.
                </span>
              </li>
            </ul>
            <p>
              Every piece has 2,400 years of precedent, 70 years of modern
              proof, or both. Nothing here is untested. What is new is the
              combination.
            </p>
          </div>
          <div className="mt-10 aspect-[16/9] overflow-hidden rounded-sm">
            <img src="/images/generated/blueprint-synthesis.png" alt="Five sources converging: Republic, Laws, Philebus, Vitruvius, Mondragón → The Living City" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* Further reading */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Further reading.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            If you want to go deeper, these are the texts that formed the
            specification. Every one is in the public domain.
          </p>
          <ul className="mt-6 space-y-2 text-base text-stone-700">
            <li>
              Plato, <em>Republic</em>
            </li>
            <li>
              Plato, <em>Laws</em>
            </li>
            <li>
              Plato, <em>Philebus</em>
            </li>
            <li>
              Plato, <em>Timaeus</em>
            </li>
            <li>
              Euclid, <em>Elements</em>
            </li>
            <li>
              Vitruvius, <em>Ten Books on Architecture</em>
            </li>
            <li>
              Jos&eacute; Mar&iacute;a Arizmendiarrieta, writings on
              Mondrag&oacute;n
            </li>
          </ul>
          <div className="mt-8 aspect-[3/1] min-h-[100px] overflow-hidden rounded-sm">
            <img src="/images/generated/blueprint-sources.png" alt="Aged philosophical texts — Republic, Elements, Ten Books" className="h-full w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-sm border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Return home
            </Link>
            <Link
              href="/operators"
              className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Apply
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
