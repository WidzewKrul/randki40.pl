import { CITIES } from "@/lib/cities";
import { site } from "@/lib/site";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || site.url;

export const dynamic = "force-static";

export function GET() {
  const cities = CITIES.map(
    (c) => `- [Randki ${c.name}](${BASE}/${c.slug}): portal randkowy ${c.name}, singli 40+`,
  ).join("\n");

  const text = `# Randki40 — portal randkowy dla singli 40+
> Polski portal randkowy dla dojrzałych singli 35–55 lat. Poważne intencje, darmowa rejestracja, Premium przez Stripe. 18+.

## Główne sekcje
- [Strona główna](${BASE}/): portal randkowy dla seniorów, randki po 40, portale randkowe dla seniorów
- [Randki 40+](${BASE}/randki-po-40): randki po 40, randki dojrzałe, randki po 50
- [Rejestracja](${BASE}/rejestracja): portal randkowy bez rejestracji, randka bez rejestracji — darmowe konto
- [Premium](${BASE}/premium): plany Premium i VIP — wiadomości, filtry, boost profilu

## Miasta (${CITIES.length})
${cities}

## Powiązane serwisy (cross-link)
- [Randkizone](https://randkizone.pl): flagowy portal randkowy — randki online, masaż, blog
- [Randkizone — randki 40+](https://randkizone.pl/randki-po-40): przewodnik randki po 40
- [Towarzyskie Anonse](https://towarzyskieanonse.pl): anonse towarzyskie, ogłoszenia erotyczne

## Prawne
- [Regulamin](${BASE}/regulamin)
- [Polityka prywatności](${BASE}/polityka-prywatnosci)
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
