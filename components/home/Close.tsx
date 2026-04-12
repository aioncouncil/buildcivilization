import Link from "next/link";
import { Section } from "@/components/ui/Section";

export function Close() {
  return (
    <Section className="bg-stone-900 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The first fifty are being chosen now.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-300">
          Applications close when the fifty are filled. The first cohort arrives this
          year. The land closes this summer.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/investors"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-100"
          >
            For Investors
          </Link>
          <Link
            href="/operator"
            className="inline-flex items-center justify-center rounded-full border border-stone-600 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
          >
            Run a Zone
          </Link>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center rounded-full border border-stone-600 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
          >
            Build With Us
          </Link>
          <Link
            href="/founder"
            className="inline-flex items-center justify-center rounded-full border border-stone-600 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800"
          >
            Speak with the founder
          </Link>
        </div>
      </div>
    </Section>
  );
}
