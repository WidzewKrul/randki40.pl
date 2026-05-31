import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPages = ["", "/randki-po-40", "/premium", "/rejestracja", "/regulamin", "/polityka-prywatnosci"];
  const cityPages = CITIES.map((c) => `/${c.slug}`);

  return [...staticPages, ...cityPages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : path === "/randki-po-40" ? 0.9 : path.includes("/") && !path.startsWith("/premium") ? 0.8 : 0.6,
  }));
}
