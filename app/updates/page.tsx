import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Updates | The Living City",
  description:
    "Dated entries. Real progress. No spin. The build log for The Living City on Tennessee's Cumberland Plateau.",
};

export default function UpdatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Updates
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Build log.
          </h1>
          <p className="mt-6 text-lg italic text-stone-600">
            Dated entries. Real progress. No spin.
          </p>
        </div>
      </section>

      {/* Intro */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-stone-600">
            This is the page where we keep receipts. Every material milestone &mdash;
            land diligence, legal progress, hires, site visits, operator commitments,
            builder acceptances &mdash; goes here, dated, with evidence when we have it.
            If you want to know whether this project is actually happening, this is
            where you look.
          </p>
          <p className="mt-4 text-sm italic text-stone-500">
            Entries are added as milestones land. The newest entry is at the top.
          </p>
        </div>
      </Section>

      {/* Dated entries */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Dated entries
          </h2>
          <div className="mt-8 space-y-10">
            {ENTRIES.map((entry) => (
              <article
                key={entry.date}
                className="border-l-2 border-stone-900 pl-6"
              >
                <p className="text-sm font-semibold text-stone-900">{entry.date}</p>
                <h3 className="mt-1 text-xl font-bold text-stone-900">{entry.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-stone-600">
                  {entry.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Currently in progress */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            Currently in progress
          </h2>
          <ul className="mt-8 space-y-5">
            {IN_PROGRESS.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-stone-400" />
                <div>
                  <p className="font-semibold text-stone-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Sign up */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Sign up for updates.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-300">
            We send an email when a meaningful update goes live. Once a month at most.
          </p>
          <a
            href="mailto:updates@buildcivilization.com?subject=Add%20me%20to%20the%20update%20list"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-100"
          >
            Add me to the list
          </a>
        </div>
      </Section>
    </>
  );
}

const ENTRIES = [
  {
    date: "2026-04-10",
    title: "Due diligence package delivered.",
    body: "A 296-file due diligence package was delivered under NDA from the seller-side broker, covering geological surveys, title work, prior third-party appraisals (2014 Woodford estimate: $34.76M; 2022 Canvas CFO estimate: $81.6M), coal reserves, silica sand assays (98.52% SiO₂ post-flotation per the 2025 RCWalker analysis), oil and gas production history, and timber cruise data. The project's diligence team is working through the materials now.",
  },
  {
    date: "2026-04-08",
    title: "Letter of Intent signed with Ketchen Holdings LLC.",
    body: "A non-binding Letter of Intent was signed between a land-holding vehicle under General Temple Inc. and Ketchen Holdings LLC for the acquisition of 15,491 contiguous acres on Tennessee's Cumberland Plateau. The property spans four tracts — Elk Valley, Westbourne Mountain, Mars Sand Mountain, and the Buffalo Tract — across Campbell and Scott Counties. Purchase price: $25 million (down from the original $37.6 million ask). Earnest money: $25,000. A 90-day due diligence period begins on execution of the definitive Purchase and Sale Agreement.",
  },
  {
    date: "2026-Q1",
    title: "General Temple Inc. formed.",
    body: "General Temple Inc. was incorporated as a Delaware C-Corporation to hold the project. The structure contemplates nested land-holding LLCs under the parent for the acquisition itself, and will be expanded as the Tennessee utility district, operator zones, and cohort entities come online.",
  },
];

const IN_PROGRESS = [
  {
    title: "Phase I Environmental Site Assessment",
    body: "Initiated as part of the 90-day diligence period, scheduled for completion before the close.",
  },
  {
    title: "Federal and state grant applications",
    body: "Active conversations with ARC (Appalachian Regional Commission), POWER, EDA, USDA Rural Development, and Tennessee FastTrack. Targeting 50–80% combined coverage of Phase 1 infrastructure costs, consistent with program rules and comparable Appalachian distressed-zone projects.",
  },
  {
    title: "Legal counsel engagement",
    body: "In progress. Counsel will be named on the Team page once finalized.",
  },
  {
    title: "Founding Cohort outreach",
    body: "Recruiting funnel open. Early conversations with prospective operators, builders, and investors are underway. Outreach to engineering, AI research, advanced manufacturing, design and architecture, media, and governance communities has begun.",
  },
  {
    title: "First confirmed advisor",
    body: "On board and committed to twice-weekly working sessions on the governance kernel and coordination loop. Publicly named as additional advisors join.",
  },
];
