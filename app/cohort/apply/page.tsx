import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { BuilderForm } from "@/components/forms/BuilderForm";

export const metadata: Metadata = {
  title: "Apply to the Founding Cohort | The Living City",
  description:
    "Apply to join the founding cohort of The Living City. A 3-12 month frontier residency for engineers, researchers, designers, architects, builders, and creators.",
};

export default function CohortApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Founding Cohort</p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Apply to the founding cohort.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Ten minutes. One 60-second video. We read every application personally.
            If you are selected, you will hear from us within two weeks.
          </p>
        </div>
      </section>

      {/* What We Look For */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">What we look for.</h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-stone-600">
            <li className="flex gap-2"><span className="text-stone-400">&bull;</span><strong className="text-stone-900">Real skills.</strong> You have built things, shipped things, solved hard problems. We care about what you have done, not where you went to school.</li>
            <li className="flex gap-2"><span className="text-stone-400">&bull;</span><strong className="text-stone-900">Range.</strong> The best cohort members contribute beyond their track. Specialists who can think across domains.</li>
            <li className="flex gap-2"><span className="text-stone-400">&bull;</span><strong className="text-stone-900">Ambition.</strong> You want to work on problems that matter at a scale that matters. Incremental is not interesting to you.</li>
            <li className="flex gap-2"><span className="text-stone-400">&bull;</span><strong className="text-stone-900">Frontier tolerance.</strong> Phase 1 is not polished. You are comfortable with uncertainty, improvisation, and building from scratch.</li>
            <li className="flex gap-2"><span className="text-stone-400">&bull;</span><strong className="text-stone-900">Cohort fit.</strong> You make the people around you better. You argue hard and build harder.</li>
          </ul>
        </div>
      </Section>

      {/* Tracks reminder */}
      <Section className="bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">Tracks.</h2>
          <p className="mt-4 text-sm text-stone-500">Select the track where your skills matter most. You will collaborate across all of them.</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-stone-600">
            {[
              "Autonomous Systems",
              "The Kernel",
              "Advanced Manufacturing",
              "Architecture",
              "Media",
              "Governance",
              "Science",
              "Construction",
            ].map(t => (
              <li key={t} className="flex gap-2"><span className="text-stone-400">&bull;</span>{t}</li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="/cohort" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
              Read full track descriptions <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section className="bg-stone-50">
        <div id="apply" className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">Your application.</h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            All fields are required unless marked optional. Your application is
            confidential and reviewed only by the founding team.
          </p>
          <div className="mt-10">
            <BuilderForm />
          </div>
        </div>
      </Section>

      {/* Back link */}
      <Section className="bg-white">
        <div className="mx-auto max-w-2xl">
          <Link href="/cohort" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">
            <span aria-hidden="true">&larr;</span> Back to Founding Cohort
          </Link>
        </div>
      </Section>
    </>
  );
}
