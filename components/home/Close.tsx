import Link from "next/link";

export function Close() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36">
      {/* Dusk background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/dusk/dusk-mountain.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          The first fifty are being chosen now.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Applications close when the fifty are filled. The first cohort arrives this
          year. The land closes this summer.
        </p>
        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/investors"
            className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
          >
            For Investors
          </Link>
          <Link
            href="/operator"
            className="inline-flex items-center justify-center rounded-sm border border-white/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Run a Zone
          </Link>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center rounded-sm border border-white/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Build With Us
          </Link>
          <Link
            href="/founder"
            className="inline-flex items-center justify-center rounded-sm border border-white/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            From the Founder
          </Link>
        </div>
      </div>
    </section>
  );
}
