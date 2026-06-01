"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconClose, IconMenu } from "@/components/icons";
import { footerCrossLinks, nav, site } from "@/lib/site";

function BrandMark() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <Image src="/logo.svg" alt={site.name} width={160} height={36} className="h-9 w-auto" priority />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <BrandMark />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Główne">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-bg-soft hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/rejestracja"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 sm:inline-flex"
          >
            Załóż konto
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-line md:hidden"
            aria-expanded={open}
            aria-label={open ? "Zamknij menu" : "Menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-card px-4 py-4 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-bg-soft"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rejestracja"
            className="mt-3 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Załóż konto
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <div>
            <p className="mb-2 font-semibold text-ink">Portal</p>
            <nav className="flex flex-col gap-1.5 text-muted" aria-label="Portal">
              <Link href="/" className="transition-colors hover:text-accent">Randki 40+</Link>
              <Link href="/randki-po-40" className="transition-colors hover:text-accent">Randki po 40</Link>
              <Link href="/randki-po-rozwodzie" className="transition-colors hover:text-accent">Randki po rozwodzie</Link>
            </nav>
          </div>
          <div>
            <p className="mb-2 font-semibold text-ink">Konto</p>
            <nav className="flex flex-col gap-1.5 text-muted" aria-label="Konto">
              <Link href="/rejestracja" className="transition-colors hover:text-accent">Rejestracja</Link>
              <Link href="/premium" className="transition-colors hover:text-accent">Premium</Link>
            </nav>
          </div>
          <div>
            <p className="mb-2 font-semibold text-ink">Informacje</p>
            <nav className="flex flex-col gap-1.5 text-muted" aria-label="Informacje">
              <Link href="/regulamin" className="transition-colors hover:text-accent">Regulamin</Link>
              <Link href="/polityka-prywatnosci" className="transition-colors hover:text-accent">Polityka prywatności</Link>
            </nav>
          </div>
          <div>
            <p className="mb-2 font-semibold text-ink">Inne portale</p>
            <nav className="flex flex-col gap-1.5 text-muted" aria-label="Inne portale">
              {footerCrossLinks.map((l) => (
                <a key={l.href} href={l.href} className="transition-colors hover:text-accent" rel="noopener">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t border-line pt-4 text-center text-xs text-muted">
          <p>© 2026 {site.name} · Serwis wyłącznie dla osób pełnoletnich (18+) · Dyskrecja gwarantowana</p>
        </div>
      </div>
    </footer>
  );
}
