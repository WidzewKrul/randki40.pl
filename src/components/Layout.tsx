import Link from "next/link";
import { site, nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-stone-900">
          <span className="flex size-8 items-center justify-center rounded-full bg-rose-700 text-sm text-white">40</span>
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-stone-600 hover:text-rose-800">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/rejestracja"
          className="rounded-full bg-rose-700 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-800"
        >
          Załóż konto
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} {site.name} — portal randkowy 40+
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/regulamin" className="text-stone-600 hover:text-rose-800">Regulamin</Link>
            <Link href="/polityka-prywatnosci" className="text-stone-600 hover:text-rose-800">Prywatność</Link>
          </div>
        </div>
        <p className="mt-4 text-xs text-stone-400">
          Profile demonstracyjne na start — po rejestracji dołączają prawdziwi użytkownicy. Faza 2: auth + baza.
        </p>
      </div>
    </footer>
  );
}
