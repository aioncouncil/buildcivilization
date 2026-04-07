export const AB_COOKIE = "ab_variant";
export const AB_VARIANTS = ["A", "B", "C", "D"] as const;
export type ABVariant = (typeof AB_VARIANTS)[number];

export const HEADLINES: Record<ABVariant, string> = {
  A: "We\u2019re building a city from scratch. 15,000 acres. 50,000 people. Apply.",
  B: "Don\u2019t buy a franchise. Build a civilization.",
  C: "50 founding spots. 15,000 acres. One civilization. Apply now.",
  D: "The first city designed from the ground up since ancient Athens. We\u2019re selecting 50 founders.",
};

export function pickVariant(): ABVariant {
  const idx = Math.floor(Math.random() * AB_VARIANTS.length);
  return AB_VARIANTS[idx];
}
