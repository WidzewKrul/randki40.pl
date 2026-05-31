import Link from "next/link";
import { ProfileGrid } from "@/components/ProfileCard";
import { CITIES } from "@/lib/cities";
import { featuredProfiles } from "@/lib/profiles";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = featuredProfiles();

  return (
    <>
      <section className="border-b border-stone-200 bg-gradient-to-b from-rose-50 to-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-700">40+ · po rozwodzie · poważne intencje</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Randki dla dojrzałych singli
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            {site.tagline}. Bez swipe’ów jak na Tinderze — spokojne poznawanie, prawdziwe profile, Stripe i polska obsługa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/rejestracja" className="rounded-full bg-rose-700 px-8 py-3 font-semibold text-white hover:bg-rose-800">
              Załóż darmowe konto
            </Link>
            <Link href="/premium" className="rounded-full border border-stone-300 bg-white px-8 py-3 font-semibold text-stone-800 hover:bg-stone-50">
              Zobacz Premium
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-stone-900">Aktywni dziś</h2>
          <p className="mt-1 text-stone-600">Poznaj singli 40+ w Twojej okolicy</p>
          <div className="mt-8">
            <ProfileGrid profiles={featured} />
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-stone-900">Miasta</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-700 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-900"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
