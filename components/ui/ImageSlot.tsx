/**
 * Image placeholder showing designers exactly what goes in each slot.
 * Replace with <img> once the real image is ready.
 */
type ImageLanguage = "substrate" | "awakening" | "festival" | "pioneering" | "proof";

const COLORS: Record<ImageLanguage, { border: string; label: string; bg: string }> = {
  substrate: { border: "border-stone-500/40", label: "text-stone-400", bg: "bg-stone-800" },
  awakening: { border: "border-[#89E7FF]/30", label: "text-[#89E7FF]", bg: "bg-[#0A0D12]" },
  festival: { border: "border-[#F1B35B]/30", label: "text-[#F1B35B]", bg: "bg-stone-900" },
  pioneering: { border: "border-stone-400/30", label: "text-stone-300", bg: "bg-stone-800" },
  proof: { border: "border-[#4FD36C]/30", label: "text-[#4FD36C]", bg: "bg-[#0A0D12]" },
};

const LABELS: Record<ImageLanguage, string> = {
  substrate: "Substrate Documentary",
  awakening: "Ancient Technology Awakening",
  festival: "Festival Luminosity",
  pioneering: "Age One Pioneering",
  proof: "Proof / Data Visual",
};

export function ImageSlot({
  language,
  description,
  shot,
  aspect = "16/9",
  className = "",
}: {
  language: ImageLanguage;
  description: string;
  shot?: string;
  aspect?: string;
  className?: string;
}) {
  const c = COLORS[language];
  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-dashed ${c.border} ${c.bg} flex items-center justify-center ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className="text-center px-4 py-6">
        <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${c.label}`}>
          {LABELS[language]}
        </p>
        <p className="mt-2 text-sm text-stone-400">{description}</p>
        {shot && <p className="mt-1 text-[10px] text-stone-600">{shot}</p>}
      </div>
    </div>
  );
}
