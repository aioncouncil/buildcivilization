import type { Metadata } from "next";
import { BuilderForm } from "@/components/forms/BuilderForm";

export const metadata: Metadata = {
  title: "Apply as Civilization Builder | Build Civilization",
  description:
    "We\u2019re selecting 50 builders from thousands to construct the first designed civilization from the ground up. Apply now.",
};

const TIMELINE = [
  {
    month: "Month 1",
    text: "Learn the land. Fell timber. Mill lumber. Build your cabin. Harvest mushrooms from the coal mines. Eat together every night.",
  },
  {
    month: "Month 3",
    text: "Frame buildings with your crew. Quarry sandstone for walls. Fire bricks from local clay. Forge your first tools. Compete in your first festival.",
  },
  {
    month: "Month 6",
    text: "You\u2019re building glass from silica sand you mined. The railroad is bringing in materials. Your zone is producing. Your equity is growing.",
  },
  {
    month: "Month 12",
    text: "You\u2019re one of the Founding 50. The stone forum is rising. New builders are arriving, and they look at you the way you once looked at the mountains.",
  },
];

export default function BuilderPage() {
  return (
    <div className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Apply to Build a Civilization
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-600">
          We&rsquo;re selecting 50 builders from thousands of applicants to construct the
          first designed civilization from the ground up. You&rsquo;ll learn real trades,
          build real structures, and earn real equity on 15,000 acres of Tennessee mountain
          land.
        </p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-stone-500">
          <span>
            <strong className="text-stone-700">Monthly:</strong> $0&ndash;$4K
          </span>
          <span>
            <strong className="text-stone-700">Minimum:</strong> 3 months
          </span>
          <span>
            <strong className="text-stone-700">Acceptance:</strong> 1%
          </span>
          <span>
            <strong className="text-stone-700">Time:</strong> ~10 min
          </span>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          <h2 className="text-xl font-bold text-stone-900">What you&rsquo;ll actually do</h2>
          <div className="mt-6 space-y-6">
            {TIMELINE.map((t) => (
              <div key={t.month} className="flex gap-4">
                <div className="w-20 shrink-0 text-sm font-semibold text-stone-900">
                  {t.month}
                </div>
                <p className="text-sm leading-relaxed text-stone-600">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <BuilderForm />
        </div>

        {/* Closing pitch */}
        <div className="mt-16 rounded-2xl bg-stone-50 p-8 text-center">
          <h3 className="text-xl font-bold text-stone-900">The Founding 50</h3>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-stone-600">
            Fifty people will be selected to live and build on 15,000 acres of resource-rich
            Tennessee mountain land. Your grandchildren will visit the buildings you raised.
            Your name will be carved into the foundation stone.
          </p>
          <p className="mt-4 text-sm font-medium text-stone-800">
            The question is not whether this will be built. The question is whether
            you&rsquo;ll be one of the people who built it.
          </p>
        </div>
      </div>
    </div>
  );
}
