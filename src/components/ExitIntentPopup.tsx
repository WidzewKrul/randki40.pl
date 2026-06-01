"use client";
import { useEffect, useRef, useState } from "react";

const INACTIVITY_MS = 25_000;

export function ExitIntentPopup({ offerUrl }: { offerUrl: string }) {
  const [visible, setVisible] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    function fire() {
      if (firedRef.current) return;
      firedRef.current = true;
      setVisible(true);
    }

    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 5 && e.relatedTarget === null) fire();
    }

    let lastY = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      if (lastY - y > 80 && y < 150) fire();
      lastY = y;
    }

    let timer: ReturnType<typeof setTimeout>;
    function resetTimer() {
      clearTimeout(timer);
      if (!firedRef.current) timer = setTimeout(fire, INACTIVITY_MS);
    }

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousemove", resetTimer, { passive: true });
    document.addEventListener("touchstart", resetTimer, { passive: true });
    document.addEventListener("keydown", resetTimer);
    resetTimer();

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousemove", resetTimer);
      document.removeEventListener("touchstart", resetTimer);
      document.removeEventListener("keydown", resetTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && setVisible(false)}
    >
      <div className="relative w-full max-w-md rounded-3xl border border-line bg-card p-8 text-center shadow-2xl">
        <button
          onClick={() => setVisible(false)}
          aria-label="Zamknij"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-line hover:text-ink"
        >
          ✕
        </button>

        <p className="text-4xl">🔥</p>
        <h2 className="mt-3 text-xl font-extrabold">Zanim wyjdziesz…</h2>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">
          Mamy oferty dopasowane do tego, czego szukasz — sprawdź zanim zamkniesz.
        </p>

        <a
          href={offerUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setVisible(false)}
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-accent to-accent-2 px-6 py-4 font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.98]"
        >
          Zobacz oferty →
        </a>

        <button
          onClick={() => setVisible(false)}
          className="mt-3 block w-full text-center text-xs text-muted transition-colors hover:text-ink"
        >
          Nie, dzięki
        </button>
      </div>
    </div>
  );
}
