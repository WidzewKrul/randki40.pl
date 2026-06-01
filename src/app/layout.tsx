import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/Layout";
import { AgeGate } from "@/components/AgeGate";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { BackButtonScript } from "@/components/BackButtonScript";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { getBackButtonUrl, getExitIntentUrl } from "@/lib/offer-router";
import { site } from "@/lib/site";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.tagline,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  description: "Portal randkowy dla dojrzałych singli 40+ — poważne intencje, pełna dyskrecja.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "pl-PL",
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${geist.variable} flex min-h-screen flex-col antialiased`}>
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackButtonScript fallbackUrl={getBackButtonUrl()} />
        <ExitIntentPopup offerUrl={getExitIntentUrl()} />
        <AgeGate />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
