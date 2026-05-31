/** AUTO-GENERATED from markets/PL/cities.json — do not edit by hand */
/** Regenerate: ./scripts/sync-cities.sh --write */

export type City = { slug: string; name: string; region: string };

export const CITIES: City[] = [
  {
    "slug": "warszawa",
    "name": "Warszawa",
    "region": "mazowieckie"
  },
  {
    "slug": "krakow",
    "name": "Kraków",
    "region": "małopolskie"
  },
  {
    "slug": "wroclaw",
    "name": "Wrocław",
    "region": "dolnośląskie"
  },
  {
    "slug": "poznan",
    "name": "Poznań",
    "region": "wielkopolskie"
  },
  {
    "slug": "gdansk",
    "name": "Gdańsk",
    "region": "pomorskie"
  },
  {
    "slug": "lodz",
    "name": "Łódź",
    "region": "łódzkie"
  },
  {
    "slug": "katowice",
    "name": "Katowice",
    "region": "śląskie"
  },
  {
    "slug": "lublin",
    "name": "Lublin",
    "region": "lubelskie"
  },
  {
    "slug": "szczecin",
    "name": "Szczecin",
    "region": "zachodniopomorskie"
  },
  {
    "slug": "bydgoszcz",
    "name": "Bydgoszcz",
    "region": "kujawsko-pomorskie"
  },
  {
    "slug": "bialystok",
    "name": "Białystok",
    "region": "podlaskie"
  },
  {
    "slug": "rzeszow",
    "name": "Rzeszów",
    "region": "podkarpackie"
  },
  {
    "slug": "kielce",
    "name": "Kielce",
    "region": "świętokrzyskie"
  },
  {
    "slug": "olsztyn",
    "name": "Olsztyn",
    "region": "warmińsko-mazurskie"
  },
  {
    "slug": "opole",
    "name": "Opole",
    "region": "opolskie"
  },
  {
    "slug": "torun",
    "name": "Toruń",
    "region": "kujawsko-pomorskie"
  },
  {
    "slug": "czestochowa",
    "name": "Częstochowa",
    "region": "śląskie"
  },
  {
    "slug": "zielona-gora",
    "name": "Zielona Góra",
    "region": "lubuskie"
  }
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
