import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { OperatorForm } from "@/components/forms/OperatorForm";

export const metadata: Metadata = {
  title: "Zone Operators | The Living City",
  description:
    "Own the zone that unlocks the next layer of the city. Build one of the core industries of the first living city.",
};

export default function OperatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-12 pt-20 sm:pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Zone Operators</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Own the zone that unlocks the next layer of the city.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            You are not opening a small business in the woods. You are building one of the
            city&rsquo;s core industries &mdash; robotics, fabrication, materials, food,
            health, hospitality, research, logistics, media, or manufacturing &mdash;
            inside a system designed to make every zone more valuable.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row">
            <a href="#apply" className="inline-flex items-center justify-center rounded-sm bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-800">Apply to run a zone</a>
            <a href="mailto:operators@buildcivilization.com?subject=Operator%20Term%20Sheet" className="inline-flex items-center justify-center rounded-sm border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-50">Request the term sheet</a>
          </div>
          <div className="mt-10">
            <ImageSlot language="pioneering" description="Operator workspace — serious person at a workbench/forge/lab with real tools, real materials, frontier energy" shot="Shot #37 — Operator hero" aspect="16/9" />
          </div>
        </div>
      </section>

      {/* Why This */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Why this.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>You already know how to operate. You have made payroll, shipped products, balanced risk, hired, fired, built teams, and solved problems under pressure. You also know how much of ordinary business life is wasted on friction that has nothing to do with the craft itself.</p>
            <p>The Living City is built to change that.</p>
            <p>A zone here is not an isolated shop hoping for foot traffic. It is one of the industries the city itself needs in order to unlock the next age of its development. The city becomes your first customer, your first network, your first recruiting environment, and your first context for compounding.</p>
          </div>
        </div>
      </Section>

      {/* What a Zone Is */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What a zone is.</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-600">
            <p>A zone is a specialized enterprise with land, tools, crew, economics, and civic importance. Each zone combines a <strong>production plot</strong> and a <strong>town-facing presence</strong>. The production plot is where the real work happens. The town-facing presence is where the city touches your enterprise in daily life.</p>
            <p>But the real point is not the parcel. The point is the position in the machine.</p>
            <p className="font-medium text-stone-900">The best way to understand a zone is not &ldquo;small business.&rdquo; It is &ldquo;the industry the city would otherwise be missing.&rdquo;</p>
          </div>
          <div className="mt-8"><Link href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600">See how the engine works <span aria-hidden="true">&rarr;</span></Link></div>
        </div>
      </Section>

      {/* Industries We Need */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">The industries that unlock the city&rsquo;s next age.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-base text-stone-600">
            {["Robotics and autonomous systems","Materials and fabrication","Glass / solar / silica-derived manufacturing","Food systems and fermentation","Diagnostics / clinical infrastructure","Construction systems and engineered materials","Water / waste / utility support","Logistics and movement","Research and educational infrastructure","Media, publishing, performance, and civic memory"].map(i => (
              <li key={i} className="flex gap-2"><span className="text-stone-400">&bull;</span>{i}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium text-stone-900">If you can run one of those well, you are not decorating the city. You are changing what becomes possible inside it.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <ImageSlot language="pioneering" description="Manufacturing zone — fabrication, CNC, materials processing" shot="Shot #38 — Manufacturing zone" aspect="4/3" />
            <ImageSlot language="pioneering" description="Food systems zone — greenhouse, fermentation lab, shared kitchen" shot="Shot #39 — Food systems zone" aspect="4/3" />
          </div>
        </div>
      </Section>

      {/* The Offer */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">The offer.</h2>
          <p className="mt-6 text-sm text-stone-500">The city&rsquo;s capital pays for site work, structural shells, shared utilities, and communal infrastructure. Your capital is for the interior buildout, specialized equipment, and working capital. The shell is ours. The enterprise is yours.</p>
          <div className="mt-8 overflow-hidden rounded-sm border border-stone-200 bg-stone-50">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 text-stone-900"><tr><th className="px-4 py-3 font-semibold">Tier</th><th className="px-4 py-3 font-semibold text-right">Investment</th><th className="px-4 py-3 font-semibold">Ideal use</th></tr></thead>
              <tbody className="divide-y divide-stone-200 bg-white text-stone-600">
                <tr><td className="px-4 py-3 font-medium text-stone-900">Scout</td><td className="px-4 py-3 text-right">$125K</td><td className="px-4 py-3">First single-enterprise zone</td></tr>
                <tr><td className="px-4 py-3 font-medium text-stone-900">Pathfinder</td><td className="px-4 py-3 text-right">$250K</td><td className="px-4 py-3">Proven operator ready to scale</td></tr>
                <tr><td className="px-4 py-3 font-medium text-stone-900">Warden</td><td className="px-4 py-3 text-right">$500K</td><td className="px-4 py-3">Multi-unit or technical build</td></tr>
                <tr><td className="px-4 py-3 font-medium text-stone-900">Architect</td><td className="px-4 py-3 text-right">$1M</td><td className="px-4 py-3">Major zone, governance seat</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm italic text-stone-500">Full economics, preferred terms, land-rights structure, and exit provisions live in the term sheet.</p>
        </div>
      </Section>

      {/* What You Get */}
      <Section className="bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">What you get on day one.</h2>
          <p className="mt-4 text-sm italic text-stone-500">Phase 1 reality, not future-state fantasy.</p>
          <ul className="mt-8 space-y-4 text-base leading-relaxed text-stone-600">
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>The city itself as your first customer</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>The founding cohort as your first talent and apprenticeship environment</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>Shared infrastructure as it comes online</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>A visible backlog of what the city most needs next</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>Weekly contests and milestone festivals that surface and honor the best work</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>Governance influence that scales with your tier</span></li>
            <li className="flex gap-3"><span className="text-stone-400">&bull;</span><span>The chance to shape how your industry is built into the city from the beginning</span></li>
          </ul>
          <p className="mt-6 text-sm font-medium text-stone-900">You are not arriving to sell into a finished economy. You are arriving to help create one.</p>
          <div className="mt-8">
            <ImageSlot language="substrate" description="Site plan sketch — 5 founding zones placed on the land, with shared infrastructure paths connecting them" shot="Shot #40 — Phase 1 zone layout" aspect="16/9" />
          </div>
        </div>
      </Section>

      {/* At Scale */}
      <Section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">What the role becomes at scale.</h2>
          <p className="mt-6 text-base leading-relaxed text-stone-300">At full scale, operators are not just running profitable enterprises. They are stewarding whole domains of civilization. A single zone can become a supplier to hundreds of other zones, the anchor of a domain festival, the apprenticeship path for an entire craft, the place where new technologies get tested first, and the institution that changes what thousands of people can do.</p>
          <div className="mt-8"><ImageSlot language="festival" description="Domain festival — warm light, communal celebration inside Forerunner architecture" shot="Shot #35 — Festival-light image" aspect="16/9" /></div>
          <p className="mt-4 text-base font-medium text-white">This is why the best operators will want to be early. The first people to build a domain become part of the city&rsquo;s permanent memory.</p>
        </div>
      </Section>

      {/* Apply */}
      <Section className="bg-white">
        <div id="apply" className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Apply to run a zone.</h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">Ten minutes. One 60-second video. We read every application personally.</p>
          <div className="mt-10"><OperatorForm /></div>
        </div>
      </Section>
    </>
  );
}
