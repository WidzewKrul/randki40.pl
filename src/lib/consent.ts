/** RODO consent tiers — localStorage key shared across components. */
export const CONSENT_KEY = "cookie-consent";

export type ConsentLevel = "all" | "necessary";

export function getConsent(): ConsentLevel | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "all" || v === "necessary") return v;
  return null;
}

export function hasAnalyticsConsent(): boolean {
  return getConsent() === "all";
}

export function hasMarketingConsent(): boolean {
  return getConsent() === "all";
}

export const CONSENT_CHANGED = "dating:consent-changed";

export function setConsent(level: ConsentLevel) {
  localStorage.setItem(CONSENT_KEY, level);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED, { detail: level }));
}
