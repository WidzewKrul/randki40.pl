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
    <footer className="border-t border-line bg-bg-soft py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <BrandMark />
            <p className="mt-3 max-w-xs text-sm text-muted">
              Portal randkowy dla singli 40+. Poważne intencje, dyskrecja, polska obsługa.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-muted hover:text-accent">
                {item.label}
              </Link>
            ))}
            <Link href="/regulamin" className="text-muted hover:text-accent">Regulamin</Link>
            <Link href="/polityka-prywatnosci" className="text-muted hover:text-accent">Prywatność</Link>
          </nav>
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Portale partnerskie">
          {footerCrossLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted hover:text-accent" rel="noopener">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="mt-8 border-t border-line pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {site.name} · 18+
        </p>
      </div>
    </footer>
  );
}
