import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
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
import { site } from "@/lib/site";

export type SegmentPageProps = {
  badge: string;
  h1: string;
  subtitle: string;
  ctaLabel: string;
  stats: { value: string; label: string }[];
  benefits: { icon: string; title: string; text: string }[];
  testimonials: { quote: string; author: string; meta: string }[];
  faq: { q: string; a: string }[];
  finalTitle: string;
  finalSubtitle?: string;
  path: string;
};

const STEPS = [
  { n: "01", title: "Załóż konto w minutę", text: "Podaj e-mail — profil gotowy natychmiast. Bez karty, bez ukrytych opłat." },
  { n: "02", title: "Przeglądaj i filtruj", text: "Miasto, wiek, czego szukasz. Widzisz tylko osoby pasujące do Twoich preferencji." },
  { n: "03", title: "Pisz i umawiaj się", text: "Pierwsza wiadomość kosztuje zero. Wszystko dyskretnie, w swoim tempie." },
];

export function SegmentPage({
  badge,
  h1,
  subtitle,
  ctaLabel,
  stats,
  benefits,
  testimonials,
  faq,
  finalTitle,
  finalSubtitle,
  path,
}: SegmentPageProps) {
  const canonical = new URL(path, site.url).toString();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: h1,
      url: canonical,
      description: subtitle,
      inLanguage: "pl-PL",
      isPartOf: { "@type": "WebSite", url: site.url, name: site.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <HeroShell>
        <Badge>{badge}</Badge>
        <h1 className="font-display mt-5 text-3xl font-bold tracking-tight text-ink sm:text-5xl">{h1}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/rejestracja" size="lg">
            {ctaLabel}
          </Button>
        </div>
        <TrustPills />
      </HeroShell>

      <Section className="!py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-line bg-card p-6 sm:grid-cols-4 sm:p-8">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Co tu znajdziesz" />
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((b) => (
              <Card key={b.title}>
                <span className="text-3xl" aria-hidden>
                  {b.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line bg-bg-soft">
        <Container>
          <SectionHeading title="Jak to działa" />
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
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Co mówią użytkownicy" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
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

      <Section className="border-t border-line bg-bg-soft">
        <Container>
          <SectionHeading title="Najczęstsze pytania" />
          <Faq items={faq} />
        </Container>
      </Section>

      <FinalCtaBox title={finalTitle} subtitle={finalSubtitle} ctaLabel={ctaLabel} />
    </>
  );
}
