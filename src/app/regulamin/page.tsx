import type { Metadata } from "next";

export const metadata: Metadata = { title: "Regulamin" };

export default function RegulaminPage() {
  return (
    <div className="prose mx-auto max-w-3xl px-4 py-12">
      <h1>Regulamin serwisu Randki40</h1>
      <p>Serwis randkowy dla osób pełnoletnich (18+). Treść regulaminu — uzupełnij przed produkcją z prawnikiem.</p>
    </div>
  );
}
