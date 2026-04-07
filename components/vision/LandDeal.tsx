import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function LandDeal() {
  return (
    <Section>
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        This is not a dream. This is a land deal.
      </h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-stone-900">The Land</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              15,491 contiguous acres on Tennessee&rsquo;s Cumberland Plateau. Campbell and
              Scott Counties. A silica sand mountain with 160+ million tons of raw material
              for glass and silicon. Coal mines with pre-excavated underground space at a
              constant 55&deg;F. 27 active oil and gas wells producing revenue now. 15,000
              acres of managed hardwood forest. An active CSX railroad&mdash;import and export
              at 1/10th the cost of trucking. Multiple creeks, springs, and 50+ inches of
              annual rainfall. $11 billion in geological resources on-site.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900">The Funding</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              Campbell and Scott Counties are classified as economically distressed Appalachian
              coal counties. That designation unlocks federal grants that cover 50&ndash;80% of
              infrastructure costs. ARC grants: $100K&ndash;$5M per project at 80% federal
              match. POWER grants: $500K&ndash;$5M for coal-impacted communities. AMLER
              grants: $1M&ndash;$20M for economic development on former mine land. USDA loans
              at 1.5&ndash;3% interest.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-stone-900">The Legal Structure</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              Tennessee lets us form a Utility District in 30&ndash;90 days for $10&ndash;$25K
              by landowner petition. This gives us power to issue tax-exempt bonds, levy
              assessments, and build infrastructure. The equivalent structure in Texas takes
              18&ndash;24 months and costs $2.5&ndash;5.5M. We chose Tennessee because the
              legal path is fastest and the federal incentives are strongest.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900">The Worst Case</h3>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              You own equity in 15,491 acres of Tennessee mountain land with $11B in
              geological resources, active gas wells, managed timber, and a railroad. The
              resources produce revenue regardless of whether anyone lives there. The downside
              floor is a resource play. The upside is a civilization.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Button href="/operator">Apply as Operator</Button>
      </div>
    </Section>
  );
}
