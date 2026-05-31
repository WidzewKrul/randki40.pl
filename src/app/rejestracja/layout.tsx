import { keywordsForPath } from "@/lib/keywords-routes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Rejestracja — dołącz do Randki40 za darmo",
  description: "Darmowa rejestracja na portal randkowy Randki40. Singli 40+, poważne intencje, pełna dyskrecja. Wyłącznie 18+.",
  path: "/rejestracja",
  keywords: keywordsForPath("/rejestracja"),
});

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
