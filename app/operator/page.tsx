import type { Metadata } from "next";
import { OperatorForm } from "@/components/forms/OperatorForm";

export const metadata: Metadata = {
  title: "Apply as Zone Operator | Build Civilization",
  description:
    "Apply to operate a sovereign enterprise within a designed civilization. Investment range: $125K\u2013$1M. Acceptance rate: less than 2%.",
};

export default function OperatorPage() {
  return (
    <div className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Apply to Run a Zone
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-600">
          You&rsquo;re applying to operate a sovereign enterprise within a designed
          civilization. This is not a franchise&mdash;you own your zone. We provide the land,
          infrastructure, operating system, and 4,999 other zones that make yours more
          valuable.
        </p>
        <div className="mt-6 flex gap-6 text-sm text-stone-500">
          <span>
            <strong className="text-stone-700">Investment:</strong> $125K&ndash;$1M
          </span>
          <span>
            <strong className="text-stone-700">Acceptance:</strong> &lt;2%
          </span>
          <span>
            <strong className="text-stone-700">Time:</strong> ~8 min
          </span>
        </div>

        <div className="mt-12">
          <OperatorForm />
        </div>
      </div>
    </div>
  );
}
