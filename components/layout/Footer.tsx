import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900 text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="mb-10">
          <p className="font-serif text-xl font-semibold text-white">The Living City</p>
          <p className="mt-2 text-sm italic text-stone-400">
            This is not a dream. This is a land deal.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-stone-500">
              The Project
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/how-it-works" className="text-sm text-stone-300 hover:text-white">How It Works</Link>
              <Link href="/land" className="text-sm text-stone-300 hover:text-white">The Land</Link>
              <Link href="/blueprint" className="text-sm text-stone-300 hover:text-white">Blueprint</Link>
              <Link href="/founder" className="text-sm text-stone-300 hover:text-white">From the Founder</Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-stone-500">
              Join
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/investors" className="text-sm text-stone-300 hover:text-white">Investors</Link>
              <Link href="/operator" className="text-sm text-stone-300 hover:text-white">Operators</Link>
              <Link href="/builder" className="text-sm text-stone-300 hover:text-white">Builders</Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-stone-500">
              Progress
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/updates" className="text-sm text-stone-300 hover:text-white">Updates</Link>
              <Link href="/team" className="text-sm text-stone-300 hover:text-white">Team</Link>
              <Link href="/faq" className="text-sm text-stone-300 hover:text-white">FAQ</Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-stone-500">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-stone-300">
              <a href="mailto:investors@buildcivilization.com" className="hover:text-white">investors@buildcivilization.com</a>
              <a href="mailto:operators@buildcivilization.com" className="hover:text-white">operators@buildcivilization.com</a>
              <a href="mailto:builders@buildcivilization.com" className="hover:text-white">builders@buildcivilization.com</a>
              <a href="mailto:mars@buildcivilization.com" className="hover:text-white">mars@buildcivilization.com</a>
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-stone-800 pt-8">
          <p className="font-mono text-xs text-stone-500">
            Pioneer, Tennessee &middot; Cumberland Plateau
          </p>
          <p className="mt-2 font-mono text-xs text-stone-500">
            &copy; {new Date().getFullYear()} General Temple Inc. &middot; Delaware C-Corporation
          </p>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-stone-600">
            Numbers and estimates on this site are explained on the Land page. Investment
            opportunities are offered only to verified accredited investors under applicable
            federal securities law.
          </p>
        </div>
      </div>
    </footer>
  );
}
