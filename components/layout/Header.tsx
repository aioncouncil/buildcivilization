"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900">
          Build Civilization
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/vision"
            className="hidden text-sm font-medium text-stone-600 hover:text-stone-900 sm:block"
          >
            Vision
          </Link>
          {!isHome && (
            <>
              <Link
                href="/operator"
                className="hidden text-sm font-medium text-stone-600 hover:text-stone-900 sm:block"
              >
                Operators
              </Link>
              <Link
                href="/builder"
                className="hidden text-sm font-medium text-stone-600 hover:text-stone-900 sm:block"
              >
                Builders
              </Link>
            </>
          )}
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
