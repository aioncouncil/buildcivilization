"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "15,491", label: "Acres of contiguous mountain land" },
  { value: "$11B+", label: "In geological resources on-site" },
  { value: "27", label: "Active oil and gas wells" },
  { value: "50\u201380%", label: "Infrastructure funded by federal grants" },
  { value: "$9.9B", label: "Revenue from The Villages using the same model" },
  { value: "85%", label: "Self-sufficiency target by Year 3" },
  { value: "50", label: "Founding spots available" },
  { value: "1%", label: "Acceptance rate" },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-stone-900 sm:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-stone-500">{label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto grid max-w-5xl grid-cols-2 gap-10 sm:grid-cols-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {STATS.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}
