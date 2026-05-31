// Offer cascade — portal-pl profile from markets/PL/offers.json
import offers from "./markets/PL/offers.json";

const PROFILE = offers["portal-pl"];
const CASCADE_TRACKING = PROFILE.tracking.cascade;

function resolveTemplate(url: string, s2: string, s4: string): string {
  return url.replace("{page}", s2).replace("{channel}", s4);
}

function resolveCascadeUrl(template: string): string {
  return resolveTemplate(template, CASCADE_TRACKING.s2, CASCADE_TRACKING.s4);
}

const CASCADE = PROFILE.cascade.map((entry) => ({
  id: entry.id,
  url: entry.url.includes("{") ? resolveCascadeUrl(entry.url) : entry.url,
}));

const FALLBACK =
  CASCADE.find((o) => "fallback" in o && o.fallback)?.url ??
  CASCADE[CASCADE.length - 1]?.url ??
  resolveCascadeUrl(PROFILE.cascade.find((o) => o.id === "crak")!.url);

export type OfferId = (typeof CASCADE)[number]["id"];

export function getCascadeFallbackUrl(): string {
  return FALLBACK;
}

function getUsedOffers(): Set<string> {
  if (typeof document === "undefined") return new Set();
  return new Set(
    (document.cookie.match(/used_offer_([a-z0-9]+)/g) ?? []).map((c) =>
      c.replace("used_offer_", ""),
    ),
  );
}

export function getOffer(): string {
  if (typeof window === "undefined") return FALLBACK;
  const used = getUsedOffers();
  return CASCADE.find((o) => !used.has(o.id))?.url ?? FALLBACK;
}

export function getOfferEntry(): { id: OfferId; url: string } {
  if (typeof window === "undefined") {
    const fallback = CASCADE.find((o) => o.id === "crak") ?? CASCADE[CASCADE.length - 1];
    return { id: fallback.id as OfferId, url: FALLBACK };
  }
  const used = getUsedOffers();
  const entry = CASCADE.find((o) => !used.has(o.id));
  if (entry) return { id: entry.id as OfferId, url: entry.url };
  const fallback = CASCADE.find((o) => o.id === "crak") ?? CASCADE[CASCADE.length - 1];
  return { id: fallback.id as OfferId, url: FALLBACK };
}

export function markOfferUsed(offerId: OfferId) {
  document.cookie = `used_offer_${offerId}=1; max-age=2592000; path=/; SameSite=Lax`;
}
