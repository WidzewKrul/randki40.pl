import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPages = ["", "/premium", "/rejestracja", "/regulamin", "/polityka-prywatnosci"];
  const cityPages = CITIES.map((c) => `/${c.slug}`);

  return [...staticPages, ...cityPages].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : path.includes("/") && !path.startsWith("/premium") ? 0.8 : 0.6,
  }));
}
