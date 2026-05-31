"use client";

import { useEffect, useState } from "react";

const KEY = "age-verified-18";

/** Bramka 18+ — wymagana dla ruchu adult/dating (compliance + ochrona domeny). */
export function AgeGate() {
  const [verified, setVerified] = useState(true);

  useEffect(() => {
    setVerified(localStorage.getItem(KEY) === "1");
  }, []);

  if (verified) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-5 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-2xl">
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-rose-700 text-2xl font-black text-white">
          18+
        </div>
        <h2 className="text-2xl font-extrabold text-stone-900">Treści dla dorosłych</h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Ta strona zawiera materiały przeznaczone wyłącznie dla osób pełnoletnich.
          Wchodząc, oświadczasz, że masz ukończone 18 lat.
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => {
              localStorage.setItem(KEY, "1");
              setVerified(true);
            }}
            className="rounded-2xl bg-rose-700 px-6 py-4 text-base font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-rose-800"
          >
            Mam ukończone 18 lat — wejdź
          </button>
          <a
            href="https://www.google.com"
            className="rounded-2xl border border-stone-200 px-6 py-3 text-sm font-semibold text-stone-600 hover:text-stone-900"
          >
            Mam mniej niż 18 lat — wyjdź
          </a>
        </div>
      </div>
    </div>
  );
}
