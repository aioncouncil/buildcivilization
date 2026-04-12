import Link from "next/link";

export function Hero() {
  return (
    <section className="px-6 pb-16 pt-20 sm:pb-20 sm:pt-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            The Living City
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            A living city engineered to make your best self inevitable.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            A real city on 15,491 acres in Tennessee, built so the things that matter most
            stop being uphill fights.
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/investors"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white hover:bg-stone-800"
            >
              For Investors
            </Link>
            <Link
              href="/operator"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Run a Zone
            </Link>
            <Link
              href="/builder"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-900 hover:bg-stone-50"
            >
              Build With Us
            </Link>
          </div>
          <p className="mt-6 text-sm italic text-stone-500">
            Phase 1 breaks ground this year. Applications are open.
          </p>
        </div>

        <div className="mt-16 aspect-[16/9] overflow-hidden rounded-2xl bg-stone-200 shadow-lg">
          <img
            src="/images/land/elk-valley-1.jpg"
            alt="Cumberland Plateau, Tennessee — Elk Valley tract"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-3 text-center text-xs text-stone-500">
          Cumberland Plateau, Tennessee &middot; Elk Valley tract, 15,491 acres under LOI
        </p>
      </div>
    </section>
  );
}
