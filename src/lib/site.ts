export const site = {
  name: "Randki40",
  tagline: "Portal randkowy dla dojrzałych singli 40+",
  url: "https://randki40.pl",
  locale: "pl-PL",
} as const;

export const nav = [
  { href: "/", label: "Odkrywaj" },
  { href: "/premium", label: "Premium" },
  { href: "/rejestracja", label: "Dołącz" },
] as const;

export const pricing = {
  premium: { name: "Premium", price: 49, period: "mies.", features: ["Unlimited wiadomości", "Kto Cię polubił", "Filtry zaawansowane"] },
  vip: { name: "VIP", price: 99, period: "mies.", features: ["Wszystko z Premium", "Boost profilu 2×/mies.", "Priorytet support"] },
  yearly: { name: "Roczny", price: 499, period: "rok", features: ["VIP przez 12 mies.", "Oszczędzasz 58%", "Anuluj kiedy chcesz"] },
} as const;
