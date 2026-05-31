import { CITIES } from "./cities";

export type Profile = {
  id: string;
  name: string;
  age: number;
  city: string;
  citySlug: string;
  bio: string;
  goal: "relacja" | "towarzystwo" | "poważnie";
  online: boolean;
  /** Placeholder avatar — zamień na real photos / user uploads w Fazie 2 */
  avatarHue: number;
};

const GOALS: Profile["goal"][] = ["relacja", "towarzystwo", "poważnie"];
const NAMES_F = ["Anna", "Katarzyna", "Magdalena", "Ewa", "Joanna", "Agnieszka", "Monika", "Beata", "Dorota", "Iwona"];
const NAMES_M = ["Piotr", "Tomasz", "Marcin", "Andrzej", "Krzysztof", "Marek", "Robert", "Jan", "Michał", "Grzegorz"];
const BIOS = [
  "Lubię długie spacery i dobrą kawę. Szukam kogoś na poważnie, bez gier.",
  "Po rozwodzie wiem czego chcę — spokój, szczerość i wspólne plany.",
  "Aktywny/a, podróże, teatr. Chętnie poznam kogoś z podobnymi wartościami.",
  "Dzieci już dorosłe — czas na siebie. Randki bez pośpiechu.",
  "Nie lubię Tindera — wolę rozmowę twarzą w twarz niż nieskończone swipe.",
];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/** Programmatic seed profiles per city — Faza 1 demo content */
export function profilesForCity(citySlug: string, cityName: string, count = 12): Profile[] {
  const profiles: Profile[] = [];
  for (let i = 0; i < count; i++) {
    const female = i % 2 === 0;
    const names = female ? NAMES_F : NAMES_M;
    const name = names[(hash(citySlug) + i) % names.length];
    const age = 40 + ((hash(citySlug + String(i)) % 18));
    profiles.push({
      id: `${citySlug}-${i}`,
      name,
      age,
      city: cityName,
      citySlug,
      bio: BIOS[(hash(name) + i) % BIOS.length],
      goal: GOALS[i % GOALS.length],
      online: i < 4,
      avatarHue: (hash(citySlug + name) % 360),
    });
  }
  return profiles;
}

export function featuredProfiles(): Profile[] {
  return CITIES.slice(0, 8).flatMap((c) => profilesForCity(c.slug, c.name, 1));
}
