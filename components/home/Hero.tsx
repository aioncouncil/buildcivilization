"use client";

import { useEffect, useState } from "react";
import { AB_COOKIE, HEADLINES, pickVariant, type ABVariant } from "@/lib/ab";
import { Button } from "@/components/ui/Button";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}

export function Hero() {
  const [variant, setVariant] = useState<ABVariant | null>(null);

  useEffect(() => {
    const existing = getCookie(AB_COOKIE) as ABVariant | null;
    if (existing && existing in HEADLINES) {
      setVariant(existing);
    } else {
      const v = pickVariant();
      setCookie(AB_COOKIE, v, 30);
      setVariant(v);
    }
  }, []);

  return (
    <section className="px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1
          className={`text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl transition-opacity duration-300 ${variant ? "opacity-100" : "opacity-0"}`}
        >
          {variant ? HEADLINES[variant] : HEADLINES.A}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
          15,491 acres of resource-rich mountain land in Tennessee. Coal mines, silica sand,
          a railroad, hardwood forests, and federal grants covering 50&ndash;80% of
          infrastructure. We&rsquo;re selecting 50 founders to build the first designed
          civilization.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/operator">Apply as Zone Operator</Button>
          <Button href="/builder" variant="secondary">
            Apply as Civilization Builder
          </Button>
        </div>
      </div>
    </section>
  );
}
