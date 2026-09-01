import { ImageResponse } from "next/og";
import { seo, site } from "@/lib/content";

export const alt = `${site.name} — ${site.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Preview OG na paleta do terminal Red Team Ops (app/geek.css). */
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
          backgroundColor: "#141414",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255, 82, 82, 0.10), transparent)",
          color: "#e8e8e8",
          fontSize: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#7ce38b",
            fontSize: 28,
            marginBottom: 24,
          }}
        >
          visitor@rnmenzs:~$ finger renan
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-2px",
            marginBottom: 24,
            color: "#ff5252",
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#ff8a80" }}>
          {site.headline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "#7ce38b",
          }}
        >
          {seo.ogStackLine}
        </div>
      </div>
    ),
    { ...size }
  );
}
