export type City = { slug: string; name: string; region: string };

export const CITIES: City[] = [
  { slug: "warszawa", name: "Warszawa", region: "mazowieckie" },
  { slug: "krakow", name: "Kraków", region: "małopolskie" },
  { slug: "wroclaw", name: "Wrocław", region: "dolnośląskie" },
  { slug: "poznan", name: "Poznań", region: "wielkopolskie" },
  { slug: "gdansk", name: "Gdańsk", region: "pomorskie" },
  { slug: "lodz", name: "Łódź", region: "łódzkie" },
  { slug: "katowice", name: "Katowice", region: "śląskie" },
  { slug: "lublin", name: "Lublin", region: "lubelskie" },
  { slug: "bialystok", name: "Białystok", region: "podlaskie" },
  { slug: "szczecin", name: "Szczecin", region: "zachodniopomorskie" },
  { slug: "bydgoszcz", name: "Bydgoszcz", region: "kujawsko-pomorskie" },
  { slug: "rzeszow", name: "Rzeszów", region: "podkarpackie" },
  { slug: "olsztyn", name: "Olsztyn", region: "warmińsko-mazurskie" },
  { slug: "torun", name: "Toruń", region: "kujawsko-pomorskie" },
  { slug: "kielce", name: "Kielce", region: "świętokrzyskie" },
  { slug: "opole", name: "Opole", region: "opolskie" },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
