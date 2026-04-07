import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Workshop() {
  return (
    <Section className="bg-stone-50">
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        The ultimate workshop.
      </h2>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-stone-600 sm:text-lg">
        <p>
          Elon Musk says his idea of a good time is working with amazing engineers to create
          incredible technology. That&rsquo;s what this is.
        </p>
        <p>
          Imagine 15,000 acres of mountain land with coal mines, a silica sand mountain, a
          railroad, hardwood forests, gas wells, spring water, and thousands of people who were
          selected for brilliance and intensity. Now imagine you can build <em>anything.</em>
        </p>
        <p>
          A glass factory using silica sand pulled from the mountain above you. A mushroom farm
          in a pre-excavated coal mine at a constant 55&deg;F. An AI data center cooled for free
          by the same mine infrastructure. A timber mill processing 15,000 acres of oak, hickory,
          and walnut into furniture and architecture. A culinary operation fed by farms that
          surround it. A school where the teachers are practitioners and the curriculum is the
          civilization itself. A forge. A brewery. A research lab. A stone amphitheater cut into
          the plateau.
        </p>
        <p>
          There are 50 founding zones. Each one is a real enterprise. Each one makes every other
          one more valuable. The glass factory supplies the architecture. The timber mill supplies
          the furniture. The farms supply the kitchens. The kitchens feed the builders. The
          builders build the city. The city attracts more builders. This is not a business
          park&mdash;it&rsquo;s an ecosystem where everything you build has 4,999 customers on
          day one and the whole thing compounds.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {[
          { q: "Want to get wise?", a: "Structured path through real knowledge \u2014 philosophy, math, architecture, agriculture, technology. Learn from practitioners, not professors." },
          { q: "Want to be healthy?", a: "Food grown on-site. Mountain air. Spring water. You walk everywhere. Build with your hands. Eat together every night." },
          { q: "Want real friendship?", a: "Live and work alongside people who passed a 1% acceptance rate because they share your capacity and your drive." },
          { q: "Want meaningful work?", a: "You don\u2019t work FOR the city. You run a piece of it. And every other piece makes yours more valuable every day." },
        ].map((item) => (
          <div key={item.q} className="rounded-xl bg-white p-6">
            <p className="font-semibold text-stone-900">{item.q}</p>
            <p className="mt-2 text-sm text-stone-600">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/operator">Apply Now</Button>
      </div>
    </Section>
  );
}
