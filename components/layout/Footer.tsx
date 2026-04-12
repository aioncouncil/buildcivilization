import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-lg font-semibold text-stone-900">The Living City</p>
          <p className="mt-1 text-sm italic text-stone-600">
            This is not a dream. This is a land deal.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-stone-900">The Project</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/how-it-works" className="text-sm text-stone-600 hover:text-stone-900">
                How It Works
              </Link>
              <Link href="/land" className="text-sm text-stone-600 hover:text-stone-900">
                The Land
              </Link>
              <Link href="/blueprint" className="text-sm text-stone-600 hover:text-stone-900">
                Blueprint
              </Link>
              <Link href="/founder" className="text-sm text-stone-600 hover:text-stone-900">
                From the Founder
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">Join</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/investors" className="text-sm text-stone-600 hover:text-stone-900">
                Investors
              </Link>
              <Link href="/operator" className="text-sm text-stone-600 hover:text-stone-900">
                Operators
              </Link>
              <Link href="/builder" className="text-sm text-stone-600 hover:text-stone-900">
                Builders
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">Progress</p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/updates" className="text-sm text-stone-600 hover:text-stone-900">
                Updates
              </Link>
              <Link href="/team" className="text-sm text-stone-600 hover:text-stone-900">
                Team
              </Link>
              <Link href="/faq" className="text-sm text-stone-600 hover:text-stone-900">
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-stone-600">
              <a href="mailto:investors@buildcivilization.com" className="hover:text-stone-900">
                investors@buildcivilization.com
              </a>
              <a href="mailto:operators@buildcivilization.com" className="hover:text-stone-900">
                operators@buildcivilization.com
              </a>
              <a href="mailto:builders@buildcivilization.com" className="hover:text-stone-900">
                builders@buildcivilization.com
              </a>
              <a href="mailto:mars@buildcivilization.com" className="hover:text-stone-900">
                mars@buildcivilization.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 pt-8">
          <p className="text-xs text-stone-500">Pioneer, Tennessee &middot; Cumberland Plateau</p>
          <p className="mt-2 text-xs text-stone-500">
            &copy; {new Date().getFullYear()} General Temple Inc. &middot; Delaware C-Corporation
          </p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-stone-400">
            Numbers and estimates on this site are explained on the Land page. Investment
            opportunities are offered only to verified accredited investors under applicable
            federal securities law.
          </p>
        </div>
      </div>
    </footer>
  );
}
