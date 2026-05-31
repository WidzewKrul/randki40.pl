"use client";

import { useEffect, useState } from "react";

const KEY = "cookie-consent";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-stone-200 bg-white/95 p-5 shadow-lg sm:flex-row">
        <p className="text-xs text-stone-600 sm:text-sm">
          Używamy plików cookie, aby poprawić działanie strony.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => { localStorage.setItem(KEY, "necessary"); setShow(false); }}
            className="rounded-xl border border-stone-300 px-4 py-2 text-xs font-semibold text-stone-600"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={() => { localStorage.setItem(KEY, "all"); setShow(false); }}
            className="rounded-xl bg-rose-700 px-4 py-2 text-xs font-bold text-white"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}
