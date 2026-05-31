import type { Metadata } from "next";
import { site } from "./site";

type SeoInput = {
  title: string;
  description: string;
  /** ścieżka kanoniczna, np. "/premium" */
  path: string;
  keywords?: string[];
  /** ścieżka do OG (domyślnie route'owe opengraph-image przejmie, jeśli istnieje) */
  ogImage?: string;
};

/** Spójny builder metadanych: canonical, OG, Twitter, robots. */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: SeoInput): Metadata {
  const url = new URL(path, site.url).toString();
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url,
      locale: "pl_PL",
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitterHandle,
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
