import Link from "next/link";

const NAV = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/land", label: "The Land" },
  { href: "/operator", label: "Operators" },
  { href: "/builder", label: "Builders" },
  { href: "/investors", label: "Investors" },
  { href: "/updates", label: "Updates" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-stone-900 whitespace-nowrap"
        >
          The Living City
        </Link>
        <nav className="flex items-center gap-5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-sm font-medium text-stone-600 hover:text-stone-900 lg:block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/operator"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800"
          >
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}
