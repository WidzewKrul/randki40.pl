import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq, type FaqItem } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { ProfileGrid } from "@/components/ProfileCard";
import { Button, Container, FinalCtaBox, Section, SectionHeading } from "@/components/ui";
import { getCity, CITIES } from "@/lib/cities";
import { profilesForCity } from "@/lib/profiles";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

function cityFaq(cityName: string): FaqItem[] {
  return [
    {
      q: `Gdzie znaleźć randki 40+ w ${cityName}?`,
      a: `Na tej stronie — przeglądasz profile singli 40+ z ${cityName} i okolic. Po rejestracji możesz pisać wiadomości i filtrować osoby w swoim wieku.`,
    },
    {
      q: "Czy rejestracja jest darmowa?",
      a: "Tak. Założenie konta i przeglądanie profili jest bezpłatne. Plany Premium odblokowują nieograniczone wiadomości i zaawansowane filtry.",
    },
    {
      q: "Czy portal jest tylko dla osób po 40?",
      a: "Randki40 koncentruje się na singlach 35–55 lat — dojrzałych osobach szukających poważnego kontaktu, bez presji młodzieżowych aplikacji.",
    },
    {
      q: `Czy są tu osoby po rozwodzie z ${cityName}?`,
      a: `Tak. Randki40 to między innymi portal dla singli po rozwodzie i w separacji — w ${cityName} i w całej Polsce. Profil anonimowy do momentu, gdy sam zdecydujesz.`,
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return buildMetadata({
    title: `Randki 40+ ${city.name} — singli dojrzałych w ${city.name}`,
    description: `Portal randkowy dla singli 40+ w ${city.name} (${city.region}). Poważne relacje, randki po rozwodzie, dojrzałe randki — darmowa rejestracja.`,
    path: `/${slug}`,
    keywords: [
      `randki 40+ ${city.name}`,
      `randki po 40 ${city.name}`,
      `portal randkowy ${city.name}`,
      `singli 40+ ${city.name}`,
      "randki dojrzałe",
      "randki po rozwodzie",
    ],
  });
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const profiles = profilesForCity(city.slug, city.name, 16);
  const faq = cityFaq(city.name);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Randki 40+ ${city.name}`,
    url: new URL(`/${slug}`, site.url).toString(),
    inLanguage: "pl-PL",
    description: `Portal randkowy dla singli 40+ w ${city.name}.`,
    about: {
      "@type": "Place",
      name: city.name,
      address: { "@type": "PostalAddress", addressLocality: city.name, addressCountry: "PL" },
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <Section className="border-b border-line bg-gradient-to-b from-bg-soft to-bg !pt-10 !pb-12">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{city.region}</p>
          <h1 className="font-display mt-2 text-3xl font-bold text-ink sm:text-4xl">
            Randki 40+ — {city.name}
          </h1>
          <p className="mt-3 max-w-2xl text-muted">
            Poznaj dojrzałych singli z {city.name} i okolic. {site.name} — spokojne randkowanie
            bez presji, z jasnymi intencjami.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/rejestracja">
              Dołącz za darmo
            </Button>
            <Button href="/premium" variant="secondary">
              Zobacz plany
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title={`Profile singli 40+ w ${city.name}`}
            subtitle={`Dojrzałe osoby szukające prawdziwego kontaktu. Zarejestruj się i zacznij pisać.`}
            center={false}
          />
          <ProfileGrid profiles={profiles} />
        </Container>
      </Section>

      {/* Internal linking */}
      <Section className="border-t border-line bg-bg-soft !py-10">
        <Container>
          <SectionHeading
            title="Więcej o randkowaniu po 40"
            subtitle="Przydatne strony i poradniki na Randki40.pl."
            center={false}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/randki-po-40"
              className="group rounded-2xl border border-line bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <h3 className="font-bold text-ink group-hover:text-accent">Randki po 40</h3>
              <p className="mt-1 text-sm text-muted">
                Poradnik i profile dla singli 35–55 lat w Polsce.
              </p>
            </Link>
            <Link
              href="/randki-po-rozwodzie"
              className="group rounded-2xl border border-line bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <h3 className="font-bold text-ink group-hover:text-accent">Randki po rozwodzie</h3>
              <p className="mt-1 text-sm text-muted">
                Portal dla osób, które zaczynają nowy rozdział.
              </p>
            </Link>
            <Link
              href="/premium"
              className="group rounded-2xl border border-line bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <h3 className="font-bold text-ink group-hover:text-accent">Premium</h3>
              <p className="mt-1 text-sm text-muted">
                Nieograniczone wiadomości i zaawansowane filtry.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <SectionHeading title={`FAQ — randki 40+ ${city.name}`} center={false} />
          <Faq items={faq} />
        </Container>
      </Section>

      <FinalCtaBox
        title={`Poznaj kogoś w ${city.name}`}
        subtitle="Rejestracja jest bezpłatna. Dołącz do singli 40+ i zacznij rozmawiać."
        ctaLabel="Załóż darmowe konto"
      />
    </>
  );
}
