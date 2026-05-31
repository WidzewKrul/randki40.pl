import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #fff1f2 0%, #fecdd3 50%, #9f1239 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#9f1239", marginBottom: 24 }}>
          40+ · {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 800, color: "#1c1917", lineHeight: 1.1, maxWidth: 900 }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#44403c", marginTop: 32 }}>
          Poważne randki · Polska · 18+
        </div>
      </div>
    ),
    { ...size },
  );
}
