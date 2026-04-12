import { Section } from "@/components/ui/Section";

const PRECEDENTS = [
  {
    name: "Walt Disney",
    stat: "25,000 acres in Florida",
    result: "Built the most visited destination on Earth.",
  },
  {
    name: "The Villages",
    stat: "150,000 residents · $9.9B annual revenue",
    result: "Same utility-district municipal-bond financing model we are using.",
  },
  {
    name: "William Penn",
    stat: "Philadelphia, 1682",
    result:
      "Founded on explicit philosophical principles. Still America's fifth-largest city.",
  },
  {
    name: "Mondragón",
    stat: "80,000 worker-owners · $12.9B annual revenue since 1956",
    result: "Proves the cooperative economic model scales.",
  },
];

export function SocialProof() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          This has been done before. The difference is the blueprint.
        </h2>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {PRECEDENTS.map((p) => (
          <div key={p.name} className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-base font-semibold text-stone-900">{p.name}</p>
            <p className="mt-2 text-sm font-medium text-stone-700">{p.stat}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">{p.result}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-2xl text-center text-base italic text-stone-600">
        What is new in our project is the combination.
      </p>
    </Section>
  );
}
