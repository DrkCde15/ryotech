import { ImageResponse } from "next/og";

export const alt = "RyoTech | IA, automação, dados e desenvolvimento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "80px",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 30,
              fontWeight: 700,
              color: "#d4d4d8",
            }}
          >
            R
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -1 }}>
            RyoTech
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -2 }}>
            Tecnologia que gera resultado
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa" }}>
            IA · Automação · Dados · Sites e Aplicativos
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#71717a",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
          }}
        >
          <span>ryotech.com.br</span>
          <span>ryotech08@gmail.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
