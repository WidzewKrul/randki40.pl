import routes from "./markets/PL/keywords-routes.json";
import { site } from "./site";

type DomainRoutes = Record<string, string[]>;

function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash.slice(0, -1) : withSlash;
}

/** Tier-1 keywords for a route path (markets/PL/keywords-routes.json). */
export function keywordsForPath(path: string, domain?: string): string[] {
  const hostname = domain ?? new URL(site.url).hostname;
  const domainRoutes = routes[hostname as keyof typeof routes] as DomainRoutes | undefined;
  if (!domainRoutes || typeof domainRoutes !== "object") return [];
  const keywords = domainRoutes[normalizePath(path)];
  return Array.isArray(keywords) ? keywords : [];
}
