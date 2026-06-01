import Link from "next/link";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ProfileGrid } from "@/components/ProfileCard";
import {
  Badge,
  Button,
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
import { site } from "@/lib/site";

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
    a: "Tak. Założenie konta i przeglądanie profili jest bezpłatne. Plany Premium odblokowują wiadomości, filtry i boost profilu — płatność przez Stripe w PLN.",
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
    q: "Czym Randki40 różni się od innych portali randkowych?",
    a: "Skupiamy się na dojrzałych singlach z jasnymi intencjami — bez swipe'ów i gier. To własny portal z rejestracją i Premium, nie agregator ogłoszeń.",
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
];

export default function HomePage() {
  const featured = featuredProfiles();

  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroShell image="/img/hero-bg.webp">
        <Badge>40+ · po rozwodzie · poważne intencje</Badge>
        <h1 className="font-display mt-5 text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          Randki dla dojrzałych singli
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          {site.tagline}. Bez swipe&apos;ów — spokojne poznawanie, prawdziwe profile, Stripe i polska obsługa.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/rejestracja" size="lg">
            Załóż darmowe konto
          </Button>
          <Button href="/premium" variant="secondary" size="lg">
            Zobacz Premium
          </Button>
        </div>
        <TrustPills />
      </HeroShell>

      <Section className="!py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-line bg-card p-6 sm:grid-cols-4 sm:p-8">
            <Stat value="Darmowy" label="start" />
            <Stat value="18" label="miast" />
            <Stat value="Stripe" label="płatności PLN" />
            <Stat value="18+" label="wyłącznie dorośli" />
          </div>
        </Container>
      </Section>

      <Section>
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

      <Section className="border-t border-line bg-bg-soft">
        <Container>
          <SectionHeading title="Miasta" subtitle="Wybierz swoje miasto i przeglądaj profile lokalne." center={false} />
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

      <Section className="border-t border-line bg-bg-soft">
        <Container>
          <SectionHeading
            title="Najczęściej zadawane pytania"
            subtitle="Wszystko, co warto wiedzieć przed założeniem konta na Randki40."
          />
          <Faq items={faqItems} />
        </Container>
      </Section>

      <FinalCtaBox
        title="Gotowy na poważne randki?"
        subtitle="Dołącz do singli 40+, którzy szukają relacji bez pośpiechu."
        ctaLabel="Załóż darmowe konto"
      />
    </>
  );
}
