import { ImageResponse } from "next/og";
import { site } from "@/lib/config";
import { getContent } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const content = getContent("en");

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
          background: "#09090b",
          backgroundImage:
            "linear-gradient(rgba(245,165,36,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(245,165,36,0.10) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 28,
            color: "#f5a524",
            fontFamily: "monospace",
            marginBottom: 32,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#f5a524" }} />
          {content.availability.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            color: "#f5f5f5",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          {site.fullName}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#a1a1aa", marginTop: 24 }}>
          {content.roleLong}
        </div>
      </div>
    ),
    { ...size }
  );
}
