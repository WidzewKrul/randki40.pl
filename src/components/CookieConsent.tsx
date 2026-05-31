"use client";

import { useEffect, useState } from "react";
import {
  CONSENT_CHANGED,
  getConsent,
  hasAnalyticsConsent,
  setConsent,
  type ConsentLevel,
} from "@/lib/consent";

/** Pasek zgody cookie (RODO). Analytics/marketing tylko po „Akceptuję”. */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!getConsent()) setShow(true);
  }, []);

  if (!show) return null;

  const decide = (v: ConsentLevel) => {
    setConsent(v);
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] p-4">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-line bg-card/95 p-5 shadow-2xl backdrop-blur-md sm:flex-row">
        <p className="text-xs leading-relaxed text-muted sm:text-sm">
          Niezbędne pliki cookie są wymagane do działania strony. Analityka i reklamy
          partnerskie — tylko za Twoją zgodą (RODO).
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("necessary")}
            className="rounded-xl border border-line px-4 py-2 text-xs font-semibold text-muted hover:text-ink"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="rounded-xl px-4 py-2 text-xs font-bold text-white [background-image:linear-gradient(135deg,var(--accent),var(--accent-2))]"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  );
}

/** Hook for client components that need consent-gated scripts. */
export function useAnalyticsConsent(): boolean {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const sync = () => setOk(hasAnalyticsConsent());
    sync();
    window.addEventListener(CONSENT_CHANGED, sync);
    return () => window.removeEventListener(CONSENT_CHANGED, sync);
  }, []);
  return ok;
}
