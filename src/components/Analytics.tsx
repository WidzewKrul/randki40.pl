"use client";

import { useEffect } from "react";
import { useAnalyticsConsent } from "@/components/CookieConsent";
import { captureClickId } from "@/lib/tracking";

/**
 * Analytics bootstrapper (consent-gated):
 * - click-ID capture: always (strictly necessary for attribution)
 * - Umami: only after cookie consent "all"
 */
export function Analytics() {
  const analyticsOk = useAnalyticsConsent();

  useEffect(() => {
    captureClickId();
  }, []);

  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!umamiId || !analyticsOk) return null;

  return (
    <script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id={umamiId}
    />
  );
}
