import Link from "next/link";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ProfileGrid } from "@/components/ProfileCard";
import {
  Badge,
  Button,
  Card,
  Container,
  FinalCtaBox,
  HeroShell,
  Section,
  SectionHeading,
  Stat,
  TrustPills,
} from "@/components/ui";
import { CITIES } from "@/lib/cities";
import { featuredProfiles } from "@/lib/profiles";
import { keywordsForPath } from "@/lib/keywords-routes";
import { buildMetadata } from "@/lib/seo";
import { pricing, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Randki40 — portal randkowy dla singli 40+ | dojrzałe randki online",
  description:
    "Randki40 to portal randkowy dla dojrzałych singli 40+. Poważne intencje, prawdziwe profile, randki po rozwodzie i w Twoim mieście. Darmowa rejestracja, Premium przez Stripe.",
  path: "/",
  keywords: keywordsForPath("/"),
});

const faqItems: FaqItem[] = [
  {
    q: "Czy Randki40 to portal tylko dla osób po 40?",
    a: "Tak. Randki40 koncentruje się na singlach 35–55 lat — dojrzałych osobach szukających poważnego kontaktu, bez presji młodzieżowych aplikacji typu Tinder.",
  },
  {
    q: "Czy rejestracja jest darmowa?",
    a: "Tak. Założenie konta i przeglądanie profili jest bezpłatne. Plany Premium odblokowują nieograniczone wiadomości, filtry i boost profilu — płatność przez Stripe w PLN.",
  },
  {
    q: "Jak znaleźć randki 40+ w moim mieście?",
    a: "Wybierz swoje miasto z listy (Warszawa, Kraków, Wrocław i 15 innych) lub ustaw lokalizację po rejestracji. Widzisz profile singli z Twojej okolicy.",
  },
  {
    q: "Czy korzystanie z portalu jest dyskretne?",
    a: "Tak. Dbamy o prywatność — sam decydujesz, kiedy i komu udostępniasz więcej informacji. Serwis jest przeznaczony wyłącznie dla osób 18+.",
  },
  {
    q: "Czym Randki40 różni się od Tindera i innych aplikacji?",
    a: "Skupiamy się na dojrzałych singlach z jasnymi intencjami — bez swipe'ów i gier. To własny portal z rejestracją i Premium, nie agregator ogłoszeń.",
  },
  {
    q: "Czy muszę od razu płacić za Premium?",
    a: "Nie. Plan Standard jest całkowicie bezpłatny — możesz przeglądać profile i wysyłać polubienia. Premium odblokowuje nieograniczone wiadomości i zaawansowane filtry.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "pl-PL",
    description: site.tagline,
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: "Portal randkowy dla dojrzałych singli 40+ w Polsce.",
    areaServed: "PL",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

const STEPS = [
  {
    n: "01",
    title: "Załóż konto w minutę",
    text: "Podaj e-mail, opisz siebie w kilku zdaniach. Profil gotowy od razu — bez karty, bez ukrytych opłat.",
  },
  {
    n: "02",
    title: "Przeglądaj dopasowane profile",
    text: "Filtruj po mieście, wieku i tym, czego szukasz. Widzisz tylko osoby w Twoim przedziale wiekowym.",
  },
  {
    n: "03",
    title: "Nawiąż kontakt i umów się",
    text: "Napisz pierwszą wiadomość — dyskretnie, bez pośpiechu. W swoim tempie, na własnych warunkach.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Wróciłam do randkowania po rozstaniu po 8 latach. Nie spodziewałam się, że tak szybko znajdę kogoś z podobnym podejściem do życia.",
    author: "Beata",
    meta: "44 lata, Warszawa",
  },
  {
    quote: "Tu nie ma dwudziestolatków szukających zabawy. Trafiałem wyłącznie na osoby z głową na karku — mniej gierek, więcej konkretów.",
    author: "Tomasz",
    meta: "49 lat, Wrocław",
  },
  {
    quote: "Zależy mi na dyskrecji i poważnym podejściu. Randki40 dało mi jedno i drugie — bez presji i bez taniego teatru.",
    author: "Agnieszka",
    meta: "46 lat, Kraków",
  },
];

export default function HomePage() {
  const featured = featuredProfiles();
  const plans = [pricing.standard, pricing.premium, pricing.vip];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* 1. HERO */}
      <HeroShell image="/img/hero-bg.webp">
        <Badge>40+ · po rozwodzie · poważne intencje</Badge>
        <h1 className="font-display mt-5 text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Poznaj kogoś bliskiego po 40
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          Randki dla dorosłych — prawdziwe, bez gier. Spokojne poznawanie dojrzałych singli
          z Twojego miasta. Bez swipe&apos;ów, bez Tindera — tylko konkretni ludzie
          z&nbsp;jasnymi intencjami.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/rejestracja" size="lg">
            Załóż darmowe konto
          </Button>
          <Button href="/#profile" variant="secondary" size="lg">
            Zobacz profile
          </Button>
        </div>
        <TrustPills />
      </HeroShell>

      {/* 2. STATS */}
      <Section className="!py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-line bg-card p-6 sm:grid-cols-4 sm:p-8">
            <Stat value="Darmowy" label="start" />
            <Stat value="40+" label="profil i baza" />
            <Stat value="Polska" label="obsługa i płatności" />
            <Stat value="Dyskrecja" label="gwarantowana" />
          </div>
        </Container>
      </Section>

      {/* 3. JAK TO DZIAŁA */}
      <Section className="border-t border-line bg-bg-soft">
        <Container>
          <SectionHeading
            eyebrow="Prosto i bez komplikacji"
            title="Jak zacząć randkować po 40?"
            subtitle="Trzy kroki do pierwszego kontaktu. Bez zbędnych formalności."
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n}>
                <Card>
                  <span className="font-display text-4xl font-extrabold text-accent">{s.n}</span>
                  <h3 className="mt-3 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Button href="/rejestracja" size="lg">
              Zarejestruj się bezpłatnie
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. PROFILE GRID */}
      <Section id="profile">
        <Container>
          <SectionHeading
            eyebrow="Aktywni dziś"
            title="Poznaj singli 40+ w Twojej okolicy"
            subtitle="Profile demo — po rejestracji zobaczysz pełne konta z Twojego miasta."
            center={false}
          />
          <ProfileGrid profiles={featured} />
        </Container>
      </Section>

      {/* 5. PREMIUM */}
      <Section className="border-t border-line bg-bg-soft">
        <Container>
          <SectionHeading
            eyebrow="Plany i cennik"
            title="Zacznij za darmo, rozwiń kiedy chcesz"
            subtitle="Przeglądanie profili jest zawsze bezpłatne. Premium odblokowuje pełen kontakt."
          />
          <div className="mt-2 grid gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.highlighted
                    ? "relative rounded-2xl border-2 border-accent bg-card p-6 shadow-md"
                    : "rounded-2xl border border-line bg-card p-6 shadow-sm"
                }
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Najpopularniejszy
                  </span>
                )}
                <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                <p className="mt-3">
                  <span className="font-display text-3xl font-bold text-accent">
                    {plan.price === 0 ? "0" : plan.price}
                  </span>
                  <span className="ml-1 text-sm text-muted">
                    {plan.price === 0 ? "PLN" : `PLN / ${plan.period}`}
                  </span>
                </p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-0.5 text-accent" aria-hidden>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={
                    plan.highlighted
                      ? "mt-6 block rounded-xl bg-accent py-2.5 text-center text-sm font-semibold text-white transition hover:brightness-110"
                      : "mt-6 block rounded-xl border border-line bg-bg-soft py-2.5 text-center text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Płatność przez Stripe — PLN, anuluj kiedy chcesz.
          </p>
        </Container>
      </Section>

      {/* 6. OPINIE */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Co mówią użytkownicy"
            title="Prawdziwe randki, prawdziwe opinie"
            subtitle="Singli 40+ którzy znaleźli to, czego szukali."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.author}>
                <Card hover={false}>
                  <p className="text-accent" aria-hidden>
                    ★★★★★
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm">
                    <span className="font-bold text-ink">{t.author}</span>
                    <span className="text-muted"> · {t.meta}</span>
                  </footer>
                </Card>
              </blockquote>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. MIASTA */}
      <Section className="border-t border-line bg-bg-soft">
        <Container>
          <SectionHeading title="Randki 40+ w Twoim mieście" subtitle="Wybierz miasto i przeglądaj profile lokalne." center={false} />
          <div className="flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-ink transition hover:border-accent hover:bg-bg-soft hover:text-accent"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. FAQ */}
      <Section className="border-t border-line">
        <Container>
          <SectionHeading
            title="Najczęściej zadawane pytania"
            subtitle="Wszystko, co warto wiedzieć przed założeniem konta na Randki40."
          />
          <Faq items={faqItems} />
        </Container>
      </Section>

      {/* 9. FINALNE CTA */}
      <FinalCtaBox
        title="Gotowy na poważne randki?"
        subtitle="Dołącz do singli 40+, którzy szukają relacji bez pośpiechu. Rejestracja jest bezpłatna."
        ctaLabel="Załóż darmowe konto"
      />
    </>
  );
}
