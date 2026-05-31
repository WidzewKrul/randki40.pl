"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const ESP_URL = process.env.NEXT_PUBLIC_ESP_FORM_URL;

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (ESP_URL && ESP_URL !== "PODMIEN") {
      try {
        const body = new URLSearchParams({ email, source: "randki40-rejestracja" });
        const res = await fetch(ESP_URL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
          mode: "no-cors",
        });
        void res;
        setDone(true);
        return;
      } catch {
        setError("Nie udało się wysłać — spróbuj ponownie.");
        return;
      }
    }

    // Dev / brak ESP: zapis lokalny waitlist
    try {
      const list = JSON.parse(localStorage.getItem("waitlist") ?? "[]") as string[];
      if (!list.includes(email)) list.push(email);
      localStorage.setItem("waitlist", JSON.stringify(list));
      setDone(true);
    } catch {
      setError("Błąd zapisu.");
    }
  }

  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-md px-4">
        <h1 className="text-2xl font-bold text-stone-900">Dołącz do {site.name}</h1>
        <p className="mt-2 text-stone-600">Darmowa rejestracja — 18+, singli 40+.</p>

        {done ? (
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
            <p className="font-semibold text-emerald-900">Dziękujemy!</p>
            <p className="mt-2 text-sm text-emerald-800">
              {ESP_URL && ESP_URL !== "PODMIEN"
                ? `Potwierdzenie wyślemy na ${email}.`
                : `Zapisano ${email} (waitlist lokalny — podłącz NEXT_PUBLIC_ESP_FORM_URL w produkcji).`}
            </p>
            <Link href="/" className="mt-4 inline-block text-sm font-medium text-rose-700 hover:underline">
              Wróć na stronę główną
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="twoj@email.pl"
              />
            </div>
            <label className="flex items-start gap-2 text-sm text-stone-600">
              <input type="checkbox" required className="mt-1" />
              <span>
                Akceptuję <Link href="/regulamin" className="text-rose-700 underline">regulamin</Link> i mam ukończone 18 lat.
              </span>
            </label>
            <button type="submit" className="w-full rounded-xl bg-rose-700 py-3 font-semibold text-white hover:bg-rose-800">
              Utwórz konto
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
