import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/fog-mountain.jpg')" }}
      />
      {/* Dark gradient overlay — horizon in upper third */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-white/70">
          The Living City
        </p>
        <h1 className="mx-auto mt-8 max-w-4xl text-[42px] leading-[1.05] font-bold tracking-tight text-white sm:text-[64px] lg:text-[80px]">
          A living city engineered to make your best self inevitable.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          A real city on 15,491 acres in Tennessee, built so the things that matter most
          stop being uphill fights.
        </p>
        <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href="/investors"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
          >
            For Investors
          </Link>
          <Link
            href="/operator"
            className="inline-flex items-center justify-center rounded-sm border border-white/40 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Run a Zone
          </Link>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center rounded-sm border border-white/40 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Build With Us
          </Link>
        </div>
        <p className="mt-8 font-mono text-xs tracking-wide text-white/50">
          Phase 1 breaks ground this year. Applications are open.
        </p>
      </div>

      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
