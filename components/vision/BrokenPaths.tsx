import { Section } from "@/components/ui/Section";

export function BrokenPaths() {
  return (
    <Section>
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        You already know the paths are broken.
      </h2>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-stone-600 sm:text-lg">
        <div>
          <p className="font-semibold text-stone-900">Wisdom.</p>
          <p className="mt-2">
            Where do you go to actually get wise? Not educated&mdash;wise. School teaches
            compliance and credentials. After that, you&rsquo;re on your own. There&rsquo;s
            no institution in the world designed to make you wiser every day you&rsquo;re
            inside it. The best books are open, but the path through them is unmarked and
            lonely. The average American spends 7 hours a day on screens and reads 4 books a
            year.
          </p>
        </div>
        <div>
          <p className="font-semibold text-stone-900">Therefore, health.</p>
          <p className="mt-2">
            Without wisdom to guide your choices, health becomes a battle against your own
            environment. Eating well costs more than eating badly. Gyms are boxes with
            machines inside strip malls. The culture around you is engineered by corporations
            to make you consume, not to make you strong. If you earn less than $75K a year,
            the statistical odds of being obese are nearly double. You are fighting the
            current every day, and most people are losing.
          </p>
        </div>
        <div>
          <p className="font-semibold text-stone-900">Therefore, friendship.</p>
          <p className="mt-2">
            Real friendship&mdash;people who share your values, your ambitions, your
            capacity&mdash;requires proximity and shared work. After school ends, forming
            those friendships requires extraordinary intentionality. You have to find people
            of the right quality, arrange to be near them, find shared projects, and sustain
            all of it against the gravity of suburban isolation, 50-hour work weeks, and a
            culture that replaces community with content. Loneliness is now classified as a
            public health epidemic.
          </p>
        </div>
        <div>
          <p className="font-semibold text-stone-900">Therefore, resources.</p>
          <p className="mt-2">
            You want to build something. Start a business. Create. But the path from idea to
            execution is an obstacle course of permits, financing, supplier relations,
            regulatory compliance, insurance, zoning, inspections. The average cost to open a
            restaurant in America is $275,000. The failure rate is 60% in the first year. Not
            because the food was bad&mdash;because the system eats founders alive.
          </p>
        </div>
        <div>
          <p className="font-semibold text-stone-900">Therefore, everything else.</p>
          <p className="mt-2">
            Beauty is a side effect of health and environment&mdash;and your environment
            wasn&rsquo;t designed for beauty. Strength requires training, nutrition, time, and
            community&mdash;and all four are expensive. Courage requires something worth being
            brave for&mdash;and most jobs don&rsquo;t qualify. Meaningful work requires work
            that actually matters to other people&mdash;and most work is bureaucratic friction
            that exists to service other bureaucratic friction.
          </p>
        </div>
        <div className="border-l-4 border-stone-900 pl-6">
          <p className="text-xl font-bold text-stone-900 sm:text-2xl">
            The problem is not you. The problem is that nobody designed the city.
          </p>
          <p className="mt-4 text-stone-600">
            Every city on Earth was built by accident. Centuries of competing landlords, zoning
            compromises, and bureaucratic accumulation stacked on top of each other until
            something like a city emerged. Nobody sat down and asked:{" "}
            <em>
              what do humans actually need to live a good life, and how do we remove every
              obstacle to getting it?
            </em>
          </p>
          <p className="mt-4 font-medium text-stone-900">
            That question has never been answered at the scale of a city. Until now.
          </p>
        </div>
      </div>
    </Section>
  );
}
