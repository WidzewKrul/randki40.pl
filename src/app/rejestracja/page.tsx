"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const ESP_URL = process.env.NEXT_PUBLIC_ESP_FORM_URL;

export default function RegisterPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (ESP_URL && ESP_URL !== "PODMIEN") {
      try {
        const body = new URLSearchParams({
          email,
          name,
          age,
          gender,
          source: "randki40-rejestracja",
        });
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
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Darmowa rejestracja
          </p>
          <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Dołącz do {site.name}
          </h1>
          <p className="mt-2 text-muted">
            Singli 40+ — spokojne poznawanie, bez gier. 18+.
          </p>
        </div>

        {done ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <span className="text-2xl" aria-hidden>✓</span>
            </div>
            <p className="text-lg font-bold text-emerald-900">Konto gotowe!</p>
            <p className="mt-2 text-sm text-emerald-800">
              {ESP_URL && ESP_URL !== "PODMIEN"
                ? `Potwierdzenie wysłaliśmy na ${email}.`
                : `Zapisano ${email} na liście oczekujących.`}
            </p>
            <Link
              href="/"
              className="mt-5 inline-block text-sm font-semibold text-accent hover:underline"
            >
              Wróć na stronę główną
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-line bg-card p-6 shadow-sm sm:p-8">
            {/* Krok 1 */}
            {step === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
                    Imię lub pseudonim
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="np. Katarzyna"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="mb-1 block text-sm font-medium text-ink">
                    Wiek
                  </label>
                  <input
                    id="age"
                    type="number"
                    required
                    min={18}
                    max={99}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="np. 44"
                  />
                </div>
                <div>
                  <span className="mb-2 block text-sm font-medium text-ink">Jestem</span>
                  <div className="grid grid-cols-2 gap-3">
                    {["Kobietą", "Mężczyzną"].map((g) => (
                      <label
                        key={g}
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition ${
                          gender === g
                            ? "border-accent bg-accent/5 text-accent"
                            : "border-line bg-bg-soft text-ink hover:border-accent/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={gender === g}
                          onChange={() => setGender(g)}
                          className="sr-only"
                          required
                        />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-3 font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
                >
                  Dalej →
                </button>
                <p className="text-center text-xs text-muted">Krok 1 z 2</p>
              </form>
            )}

            {/* Krok 2 */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                    Adres e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="twoj@email.pl"
                  />
                  <p className="mt-1.5 text-xs text-muted">
                    Tylko do potwierdzenia konta. Nie spamujemy.
                  </p>
                </div>
                <label className="flex items-start gap-3 text-sm text-muted">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded accent-accent" />
                  <span>
                    Akceptuję{" "}
                    <Link href="/regulamin" className="text-accent underline underline-offset-2">
                      regulamin
                    </Link>{" "}
                    i{" "}
                    <Link
                      href="/polityka-prywatnosci"
                      className="text-accent underline underline-offset-2"
                    >
                      politykę prywatności
                    </Link>
                    . Mam ukończone 18 lat.
                  </span>
                </label>
                {error && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-3 font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
                >
                  Utwórz bezpłatne konto
                </button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full rounded-xl border border-line py-2.5 text-sm font-medium text-muted transition hover:text-ink"
                >
                  ← Wróć
                </button>
                <p className="text-center text-xs text-muted">Krok 2 z 2</p>
              </form>
            )}
          </div>
        )}

        <p className="mt-6 text-center text-xs text-muted">
          Serwis wyłącznie dla osób pełnoletnich (18+) · Dyskrecja gwarantowana
        </p>
      </div>
    </div>
  );
}
