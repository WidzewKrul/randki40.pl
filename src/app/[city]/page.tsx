import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfileGrid } from "@/components/ProfileCard";
import { getCity, CITIES } from "@/lib/cities";
import { profilesForCity } from "@/lib/profiles";
import { site } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `Randki 40+ ${city.name}`,
    description: `Portal randkowy dla singli 40+ w ${city.name}. Poważne relacje, rozwodzeni, dojrzałe randki.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const profiles = profilesForCity(city.slug, city.name, 16);

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-stone-900">
          Randki 40+ — {city.name}
        </h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          Singli w wieku 40+ z {city.name} ({city.region}). {site.name} — bez presji młodzieżowych app.
        </p>
        <div className="mt-10">
          <ProfileGrid profiles={profiles} />
        </div>
      </div>
    </div>
  );
}
