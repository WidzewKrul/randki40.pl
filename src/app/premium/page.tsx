import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { pricing, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Premium — plany i cennik Randki40",
  description: "Plany Premium i VIP dla portalu Randki40. Stripe, PLN, anuluj kiedy chcesz. Odblokuj wiadomości, filtry i boost profilu.",
  path: "/premium",
  keywords: [
    "Randki40 Premium",
    "portal randkowy Premium",
    "cennik randki 40+",
    "randki VIP",
    "płatność Stripe randki",
  ],
});

export default function PremiumPage() {
  const plans = [pricing.premium, pricing.vip, pricing.yearly];

  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-3xl font-bold text-stone-900">Premium {site.name}</h1>
        <p className="mt-2 text-stone-600">Odblokuj wiadomości, filtry i boost profilu. Płatność Stripe — PLN.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-stone-200 bg-white p-6 text-left shadow-sm">
              <h2 className="text-lg font-bold text-stone-900">{plan.name}</h2>
              <p className="mt-2">
                <span className="text-3xl font-bold text-rose-700">{plan.price}</span>
                <span className="text-stone-500"> PLN / {plan.period}</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-stone-600">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <Link
                href="/rejestracja"
                className="mt-6 block rounded-xl bg-stone-900 py-2.5 text-center text-sm font-semibold text-white hover:bg-stone-800"
              >
                Wybierz plan
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-stone-400">Stripe checkout — podmień NEXT_PUBLIC_STRIPE_* w .env przed produkcją.</p>
      </div>
    </div>
  );
}
