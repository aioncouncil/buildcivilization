import { Section } from "@/components/ui/Section";

export function Pitch() {
  return (
    <Section className="bg-stone-50">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            The ultimate workshop.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Imagine 15,000 acres of mountain land with coal mines, a silica sand mountain,
            a railroad, hardwood forests, gas wells, spring water, and thousands of people
            selected for brilliance and intensity. Now imagine you can build{" "}
            <em>anything.</em>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            A glass factory using silica sand pulled from the mountain. A mushroom farm in a
            pre-excavated coal mine at 55&deg;F. An AI data center cooled for free by the same
            mine infrastructure. A timber mill processing hardwood into furniture and
            architecture. 50 founding zones. Each one a real enterprise. Each one making every
            other one more valuable.
          </p>
          <p className="mt-4 text-base font-medium text-stone-900">
            This is not a business park&mdash;it&rsquo;s an ecosystem where everything you
            build has 4,999 customers on day one.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
          <div className="flex h-full items-center justify-center text-stone-400 text-sm">
            <div className="text-center">
              <p className="text-4xl">&#9968;</p>
              <p className="mt-2">Cumberland Plateau</p>
              <p className="text-xs text-stone-400">15,491 acres &middot; Pioneer, TN</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
