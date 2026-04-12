import Link from "next/link";
import { Section } from "@/components/ui/Section";

const PROOF = [
  {
    value: "~$11B",
    label: "Estimated in-ground geological resources",
    note: "Third-party estimate at current prices",
  },
  {
    value: "27",
    label: "Active oil and gas wells",
    note: "Generating revenue today",
  },
  {
    value: "50–80%",
    label: "Federal grant coverage of Phase 1 infrastructure",
    note: "Projected under ARC, POWER, EDA, USDA, TN FastTrack",
  },
  {
    value: "Active",
    label: "CSX rail through the property",
    note: "Main line access, verified",
  },
];

export function Stats() {
  return (
    <Section className="bg-stone-50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          This is not a dream. This is a land deal.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          15,491 contiguous acres on Tennessee&rsquo;s Cumberland Plateau, under LOI.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4">
        {PROOF.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-3xl font-bold text-stone-900 sm:text-4xl">{item.value}</p>
            <p className="mt-3 text-sm font-medium text-stone-700">{item.label}</p>
            <p className="mt-1 text-xs text-stone-500">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 mx-auto max-w-2xl text-center text-base leading-relaxed text-stone-600">
        <p>
          The worst case is owning resource-producing land that pays for itself. The best
          case is founding something that will last for centuries.
        </p>
        <div className="mt-8">
          <Link
            href="/land"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-600"
          >
            See the full land dossier <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
