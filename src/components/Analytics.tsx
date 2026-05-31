"use client";

import { useEffect } from "react";
import { captureClickId } from "@/lib/tracking";

export function Analytics() {
  useEffect(() => {
    captureClickId();
  }, []);

  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!umamiId) return null;

  return (
    <script defer src="https://cloud.umami.is/script.js" data-website-id={umamiId} />
  );
}
