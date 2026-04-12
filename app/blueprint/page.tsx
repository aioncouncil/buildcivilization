import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Blueprint | The Living City",
  description:
    "The philosophical foundation of The Living City — Plato, Vitruvius, Mondragón, and the sources that built the specification.",
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
            This is the part of the site where, if you want, you can go all the way down.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-stone-600">
            Most of buildcivilization.com is about the land, the offer, and the
            application. That is on purpose. You do not need to understand what is on
            this page to join us. But if you want to know why we believe this is going
            to work &mdash; not just financially, but structurally &mdash; this is where
            we explain it.
          </p>
        </div>
      </Section>

      {SECTIONS.map((sec, i) => (
        <Section
          key={sec.heading}
          className={i % 2 === 0 ? "bg-stone-50" : "bg-white"}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              {sec.heading}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
              {sec.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Further reading.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            If you want to go deeper, these are the texts that formed the specification.
            Every one is in the public domain.
          </p>
          <ul className="mt-6 space-y-2 text-base text-stone-700">
            <li>Plato, <em>Republic</em></li>
            <li>Plato, <em>Laws</em></li>
            <li>Plato, <em>Philebus</em></li>
            <li>Plato, <em>Timaeus</em></li>
            <li>Euclid, <em>Elements</em></li>
            <li>Vitruvius, <em>Ten Books on Architecture</em></li>
            <li>José María Arizmendiarrieta, writings on Mondragón</li>
          </ul>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Return home
            </Link>
            <Link
              href="/operator"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
            >
              Apply
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

const SECTIONS = [
  {
    heading: "The Republic is a specification.",
    paragraphs: [
      "Plato's Republic has been read for 2,400 years as political philosophy. When you stop reading it that way and start reading it as an engineering specification, everything changes.",
      "The Republic describes a city where happiness is the proper ordering of its parts — a rational layer that contemplates the Good, a spirited layer that acts on it, and an appetitive layer that wants things. Happiness, in a person or a city, is structural harmony. Not the absence of pain. Not the presence of wealth.",
      "If this is right, then a city designed around the specification should produce happy citizens by default, not by accident. That is the bet.",
    ],
  },
  {
    heading: "The Laws describes the daily texture.",
    paragraphs: [
      "Where the Republic describes the structure, Plato's Laws describes the texture. It specifies a life built around daily rites and monthly festivals, one per god, one per domain. Athenian festivals were roughly a quarter of GDP. Work and celebration were not separate activities in the ancient city. They were the same activity.",
      "We are bringing this back. Not as cosplay, but as operations. Every month in The Living City is a festival month honoring one of the twelve gods, and each god corresponds to a domain of life — wisdom, manufacturing, agriculture, defense, arts, trade, and so on. The festival is not a break from work. It is the frame within which that month's work happens.",
    ],
  },
  {
    heading: "The Philebus is the kernel.",
    paragraphs: [
      "Plato's Philebus is the least-read of his major dialogues and the most important for our work. It describes how to combine pleasure and intelligence, appetite and reason, in proportions that produce both happiness and goodness.",
      "The Philebus gives us a hierarchy of the Good: measurement at the top, beauty, wisdom, the sciences, and pure pleasures at the base. It gives us a taxonomy of pleasure. It gives us the tripartite soul. And it gives us a flow: desires flow in, get organized, get transformed into forethought, align on the Good, and output action.",
      "This is the specification we are writing the kernel around. Not as metaphor — as a working design document.",
    ],
  },
  {
    heading: "Vitruvius provides the grammar.",
    paragraphs: [
      "For the physical city, we use Vitruvius — the first-century Roman architect whose Ten Books on Architecture became the foundation of classical Western design.",
      "Vitruvius specifies six principles every built thing should satisfy: order, arrangement, eurythmy, symmetry, propriety, and economy. Every building, street, and zone passes through these six principles before it is built.",
      "Vitruvius also gives us construction as rule-and-compass in the Euclidean sense. Designs are reproducible, teachable, and certifiable.",
    ],
  },
  {
    heading: "Mondragón proves the economics.",
    paragraphs: [
      "Plato describes the structure. Vitruvius describes the form. Mondragón proves the economics work.",
      "Mondragón Cooperative Corporation is a federation of 80,000 worker-owners in Spain's Basque region. Founded in 1956. Current revenue: $12.9 billion annually. It has survived the Spanish Civil War, the Franco regime, the 2008 financial crisis, and a global pandemic.",
      "Our operator model is drawn directly from Mondragón. Zone operators own their enterprises outright. The city provides land, infrastructure, and coordination. The operators provide capital, expertise, and work. Profits belong to the operators. Decisions that affect the whole city run through governance structures modeled on Mondragón's federal council.",
    ],
  },
  {
    heading: "The synthesis.",
    paragraphs: [
      "Put it together and here is what you get: The city's structure comes from Plato's Republic. The city's daily texture comes from Plato's Laws. The city's kernel comes from Plato's Philebus. The city's physical form comes from Vitruvius. The city's economics comes from Mondragón. The city's land comes from the Cumberland Plateau. The city's financing comes from Tennessee utility district law, federal and state grants, and cooperative operator capital.",
      "Every piece has 2,400 years of precedent, 70 years of modern proof, or both. Nothing here is untested. What is new is the combination.",
    ],
  },
];
