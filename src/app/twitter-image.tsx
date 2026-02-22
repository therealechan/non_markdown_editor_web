import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Markdown Now — Native macOS Markdown Editor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ededed",
            fontFamily: "monospace",
            marginBottom: "24px",
          }}
        >
          {"{M}"}
        </span>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 600,
            color: "#ededed",
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}
        >
          Markdown Now
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#a1a1aa",
            maxWidth: "600px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          A fast, native macOS markdown editor with live preview. Built with
          Rust and GPUI.
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "32px",
            fontSize: "16px",
            color: "#52525b",
          }}
        >
          <span>GPU-accelerated</span>
          <span>·</span>
          <span>Open Source</span>
          <span>·</span>
          <span>macOS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
