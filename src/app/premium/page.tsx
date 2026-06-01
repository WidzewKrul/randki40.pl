import Link from "next/link";
import { Container, FinalCtaBox, Section, SectionHeading } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { pricing, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Premium — plany i cennik Randki40",
  description:
    "Plany Premium i VIP dla portalu Randki40. Stripe, PLN, anuluj kiedy chcesz. Odblokuj nieograniczone wiadomości, filtry i boost profilu.",
  path: "/premium",
  keywords: [
    "Randki40 Premium",
    "portal randkowy Premium",
    "cennik randki 40+",
    "randki VIP",
    "płatność Stripe randki",
  ],
});

const PLAN_COMPARE = [
  { feature: "Przeglądanie profili", standard: true, premium: true, vip: true },
  { feature: "Polubienia", standard: true, premium: true, vip: true },
  { feature: "Wiadomości", standard: "3 / mies.", premium: "Nieograniczone", vip: "Nieograniczone" },
  { feature: "Kto Cię polubił", standard: false, premium: true, vip: true },
  { feature: "Filtry zaawansowane", standard: false, premium: true, vip: true },
  { feature: "Priorytet w wynikach", standard: false, premium: true, vip: true },
  { feature: "Boost profilu", standard: false, premium: false, vip: "2× miesięcznie" },
  { feature: "Odznaka VIP", standard: false, premium: false, vip: true },
  { feature: "Priorytet support", standard: false, premium: false, vip: true },
];

function PlanCell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-accent font-semibold">✓</span>;
  if (value === false) return <span className="text-muted">—</span>;
  return <span className="text-sm text-ink">{value}</span>;
}

export default function PremiumPage() {
  const plans = [pricing.standard, pricing.premium, pricing.vip];

  return (
    <>
      <Section className="border-b border-line bg-bg-soft !py-14">
        <Container size="narrow">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Plany i cennik
            </p>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Zacznij za darmo,<br className="hidden sm:block" /> rozwiń kiedy chcesz
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Przeglądanie profili jest zawsze bezpłatne. Premium i VIP odblokowują
              nieograniczone wiadomości, filtry i boost profilu.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.highlighted
                    ? "relative rounded-2xl border-2 border-accent bg-card p-7 shadow-md"
                    : "rounded-2xl border border-line bg-card p-7 shadow-sm"
                }
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                    Najpopularniejszy
                  </span>
                )}
                <h2 className="text-xl font-bold text-ink">{plan.name}</h2>
                <p className="mt-4">
                  <span className="font-display text-4xl font-bold text-accent">
                    {plan.price === 0 ? "0" : plan.price}
                  </span>
                  <span className="ml-1.5 text-sm text-muted">
                    {plan.price === 0 ? "PLN zawsze" : `PLN / ${plan.period}`}
                  </span>
                </p>
                <ul className="mt-5 space-y-3">
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
                      ? "mt-7 block rounded-xl bg-accent py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
                      : "mt-7 block rounded-xl border border-line bg-bg-soft py-3 text-center text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Płatność Stripe — PLN, bezpieczna transakcja. Anuluj kiedy chcesz.
          </p>
        </Container>
      </Section>

      {/* Tabela porównawcza */}
      <Section className="border-t border-line bg-bg-soft">
        <Container>
          <SectionHeading
            title="Co zawiera każdy plan?"
            subtitle="Szczegółowe porównanie funkcji dostępnych w każdym planie."
          />
          <div className="overflow-x-auto rounded-2xl border border-line bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-4 py-4 text-left font-semibold text-ink">Funkcja</th>
                  <th className="px-4 py-4 text-center font-semibold text-muted">Standard</th>
                  <th className="px-4 py-4 text-center font-semibold text-accent">Premium</th>
                  <th className="px-4 py-4 text-center font-semibold text-ink">VIP</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_COMPARE.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-bg-soft/50" : ""}>
                    <td className="px-4 py-3 font-medium text-ink">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      <PlanCell value={row.standard} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <PlanCell value={row.premium} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <PlanCell value={row.vip} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <FinalCtaBox
        title={`Dołącz do ${site.name} — bezpłatnie`}
        subtitle="Zacznij od planu Standard — bez karty, bez zobowiązań. Upgrade kiedy poczujesz, że warto."
        ctaLabel="Załóż darmowe konto"
      />
    </>
  );
}
