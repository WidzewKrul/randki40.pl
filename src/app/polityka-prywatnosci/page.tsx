import type { Metadata } from "next";

export const metadata: Metadata = { title: "Polityka prywatności" };

export default function PrivacyPage() {
  return (
    <div className="prose mx-auto max-w-3xl px-4 py-12">
      <h1>Polityka prywatności</h1>
      <p>RODO, cookies, przetwarzanie danych rejestracyjnych — uzupełnij przed produkcją.</p>
    </div>
  );
}
