import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Artin Karimi — Full-Stack Developer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "66px 76px",
        background: "#0a0b11",
        color: "#f0eff5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 19 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 59,
            height: 59,
            border: "2px solid #b4a6f3",
            borderRadius: 11,
            color: "#b4a6f3",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          a.
        </div>
        <div style={{ display: "flex", fontSize: 31, fontWeight: 700 }}>
          Artin Karimi
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 27 }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.05,
            letterSpacing: -3,
            fontWeight: 700,
          }}
        >
          Full-Stack Developer
        </div>
        <div style={{ display: "flex", color: "#b4a6f3", fontSize: 36 }}>
          AI-Assisted Development
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #393440",
          paddingTop: 27,
          fontSize: 25,
          color: "#a9a7b8",
        }}
      >
        <span>Web products, from interface to API.</span>
        <span>Selected work · About · Contact</span>
      </div>
    </div>,
    size,
  );
}
