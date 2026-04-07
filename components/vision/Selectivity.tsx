import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Selectivity() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          50 from 5,000.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          The acceptance rate is 1%.
        </p>
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          We are looking for a very specific kind of person. You&rsquo;ll know if you&rsquo;re
          that person&mdash;and so will we. People who&rsquo;ve built real things&mdash;with
          their hands or their minds. People who solve problems instead of talking about them.
          People who care more about building than consuming. People who want to be remembered
          for what they created.
        </p>
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          The application is not a form. It&rsquo;s a filter. We&rsquo;re looking at what
          you&rsquo;ve done, what you&rsquo;re capable of, and whether you belong in a room
          with the other 49.
        </p>
        <p className="mt-6 text-lg font-semibold text-stone-900">
          The Founding 50 will be remembered as long as this civilization exists.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/operator">Apply as Operator</Button>
          <Button href="/builder" variant="secondary">
            Apply as Builder
          </Button>
        </div>
      </div>
    </Section>
  );
}
