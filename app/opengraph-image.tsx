import { ImageResponse } from "next/og";
import { seo, site } from "@/lib/content";

export const alt = `${site.name} — ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0f14",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(44, 201, 222, 0.12), transparent)",
          color: "#e6edf3",
          fontSize: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#2cc9de",
            fontSize: 28,
            marginBottom: 24,
          }}
        >
          {`~/${site.shortName} $`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          {site.name}
        </div>
        <div
          style={{ display: "flex", fontSize: 40, color: "#8fa1b3" }}
        >
          {site.headline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "#2cc9de",
          }}
        >
          {seo.ogStackLine}
        </div>
      </div>
    ),
    { ...size }
  );
}
