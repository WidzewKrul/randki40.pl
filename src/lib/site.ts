export const site = {
  name: "Randki40",
  tagline: "Portal randkowy dla dojrzałych singli — poznaj kogoś bliskiego po 40",
  url: "https://randki40.pl",
  locale: "pl-PL",
  twitterHandle: "@randki40",
} as const;

export const nav = [
  { href: "/", label: "Randki" },
  { href: "/#profile", label: "Profile" },
  { href: "/randki-po-40", label: "40+" },
  { href: "/premium", label: "Premium" },
] as const;

export const footerCrossLinks = [
  { href: "https://randkizone.pl", label: "Randkizone" },
  { href: "https://towarzyskieanonse.pl", label: "Towarzyskie Anonse" },
] as const;

export const pricing = {
  standard: {
    name: "Standard",
    price: 0,
    period: "zawsze",
    features: ["Przeglądanie profili", "Polubienia", "3 wiadomości miesięcznie"],
    highlighted: false,
    cta: "Rejestracja gratis",
    ctaHref: "/rejestracja",
  },
  premium: {
    name: "Premium",
    price: 49,
    period: "mies.",
    features: ["Nieograniczone wiadomości", "Kto Cię polubił", "Filtry zaawansowane", "Priorytet w wynikach"],
    highlighted: true,
    cta: "Wybierz Premium",
    ctaHref: "/rejestracja",
  },
  vip: {
    name: "VIP",
    price: 99,
    period: "mies.",
    features: ["Wszystko z Premium", "Boost profilu 2×/mies.", "Priorytet support", "Odznaka VIP w profilu"],
    highlighted: false,
    cta: "Wybierz VIP",
    ctaHref: "/rejestracja",
  },
} as const;
