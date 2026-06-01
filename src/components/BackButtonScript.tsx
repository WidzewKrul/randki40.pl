"use client";
import { useEffect } from "react";

export function BackButtonScript({ fallbackUrl }: { fallbackUrl: string }) {
  useEffect(() => {
    try {
      history.pushState(null, "", location.href);
      history.pushState(null, "", location.href);
      const handler = () => {
        window.location.replace(fallbackUrl);
      };
      window.addEventListener("popstate", handler);
      return () => window.removeEventListener("popstate", handler);
    } catch {}
  }, [fallbackUrl]);
  return null;
}
