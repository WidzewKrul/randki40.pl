import Link from "next/link";
import type { Profile } from "@/lib/profiles";

const GOAL_LABEL: Record<Profile["goal"], string> = {
  relacja: "Relacja",
  towarzystwo: "Towarzystwo",
  poważnie: "Poważnie",
};

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div
        className="relative flex h-44 items-end p-4"
        style={{
          background: `linear-gradient(145deg, hsl(${profile.avatarHue} 35% 75%), hsl(${(profile.avatarHue + 40) % 360} 40% 55%))`,
        }}
      >
        {profile.online && (
          <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-medium text-white">
            online
          </span>
        )}
        <div>
          <h3 className="text-lg font-bold text-white drop-shadow-sm">
            {profile.name}, {profile.age}
          </h3>
          <p className="text-sm text-white/90">{profile.city}</p>
        </div>
      </div>
      <div className="p-4">
        <span className="inline-block rounded-full bg-bg-soft px-2.5 py-0.5 text-xs font-medium text-accent">
          {GOAL_LABEL[profile.goal]}
        </span>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{profile.bio}</p>
        <Link
          href="/rejestracja"
          className="mt-3 block w-full rounded-xl bg-accent py-2.5 text-center text-sm font-semibold text-white transition hover:brightness-110"
        >
          Napisz wiadomość
        </Link>
      </div>
    </article>
  );
}

export function ProfileGrid({ profiles }: { profiles: Profile[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {profiles.map((p) => (
        <ProfileCard key={p.id} profile={p} />
      ))}
    </div>
  );
}
