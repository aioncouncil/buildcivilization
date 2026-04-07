import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-stone-900">Build Civilization</p>
            <p className="mt-2 text-sm text-stone-500">Pioneer, Tennessee</p>
            <p className="mt-1 text-sm text-stone-500">Open access to the good life.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">Apply</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/operator" className="text-sm text-stone-600 hover:text-stone-900">
                Zone Operator
              </Link>
              <Link href="/builder" className="text-sm text-stone-600 hover:text-stone-900">
                Civilization Builder
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">Learn More</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/vision" className="text-sm text-stone-600 hover:text-stone-900">
                The Full Vision
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 pt-8 text-center text-xs text-stone-400">
          &copy; {new Date().getFullYear()} General Temple LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
