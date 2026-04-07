import type { Metadata } from "next";
import { BrokenPaths } from "@/components/vision/BrokenPaths";
import { Workshop } from "@/components/vision/Workshop";
import { LandDeal } from "@/components/vision/LandDeal";
import { Precedents } from "@/components/vision/Precedents";
import { Stats } from "@/components/home/Stats";
import { TwoWaysIn } from "@/components/home/TwoWaysIn";
import { Selectivity } from "@/components/vision/Selectivity";
import { FAQ } from "@/components/vision/FAQ";

export const metadata: Metadata = {
  title: "The Vision | Build Civilization",
  description:
    "The complete argument for building a designed civilization on 15,491 acres of Tennessee mountain land. Why the paths are broken, what we\u2019re building, and how it works.",
};

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-16 pt-20 sm:pb-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Open access to the good life.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            You want eight things. Wisdom. Health. Friendship. Strength. Beauty. Resources.
            Courage. Meaningful work. Every human who has ever lived has wanted these things.
            The problem has never been wanting them&mdash;it&rsquo;s been getting them.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 sm:text-xl">
            We&rsquo;re building a city designed from the ground up to make every path to the
            good life as short, clear, and open as possible. We&rsquo;re looking for 50
            founders.
          </p>
        </div>
      </section>

      <BrokenPaths />
      <Workshop />
      <LandDeal />
      <Precedents />
      <Stats />
      <TwoWaysIn />
      <Selectivity />
      <FAQ />
    </>
  );
}
