import { Section } from "@/components/ui/Section";

const PRECEDENTS = [
  {
    name: "Walt Disney",
    text: "Bought 25,000 acres of Florida swampland in secret. Built the most visited destination on Earth. His original plan for EPCOT was a real city. He proved that visionary land acquisition at scale creates disproportionate value. We have better land and better economics.",
  },
  {
    name: "The Villages",
    text: "33,000 acres in central Florida. 150,000+ residents. $9.9 billion in cumulative revenue. The exact financing model we\u2019re using: buy land, form utility district, issue bonds, sell zones, let operator assessments repay bonds. They did it with retirement homes and golf courses. We\u2019re doing it with a civilization.",
  },
  {
    name: "William Penn",
    text: "Granted 45,000 acres and designed Philadelphia from scratch on philosophical principles \u2014 religious freedom, grid layout, green spaces. The city he designed in the 1680s is still standing, still the fifth-largest city in America. You can found a city on principles and have it last centuries.",
  },
  {
    name: "Mondrag\u00F3n",
    text: "A network of cooperatives in the Basque region of Spain. 80,000 worker-owners. $12.9 billion per year in revenue. Started by one priest in one town in 1956. Proof that cooperative enterprise scales, produces wealth, and lasts generations.",
  },
];

export function Precedents() {
  return (
    <Section className="bg-stone-50">
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        This has been done before. By people you&rsquo;ve heard of.
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {PRECEDENTS.map((p) => (
          <div key={p.name} className="rounded-xl bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-stone-900">{p.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
