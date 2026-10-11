import { ImageResponse } from "next/og";

export const alt = "Youssef Elbltagi — Frontend Developer & QA Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#181818",
          color: "#F4F1EA",
          border: "16px solid #FF5A36",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                backgroundColor: "#FF5A36",
                color: "#F4F1EA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 900,
              }}
            >
              YS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 24, fontWeight: 800, textTransform: "uppercase" }}>
                Youssef Salah Elbltagi
              </div>
              <div style={{ display: "flex", fontSize: 16, color: "#C6F36B" }}>
                DEPI SOFTWARE TESTING TRAINEE
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "8px 20px",
              backgroundColor: "#24252B",
              border: "1px solid rgba(255,255,255,0.2)",
              fontSize: 16,
              color: "#C6F36B",
            }}
          >
            CREATIVE STUDIO PORTFOLIO
          </div>
        </div>

        {/* Center Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex", gap: 16 }}>
              <span>I BUILD IT.</span>
              <span style={{ color: "#FF5A36" }}>I BREAK IT.</span>
            </div>
            <div style={{ display: "flex" }}>
              <span>I MAKE IT BETTER.</span>
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 24, color: "#9E9B95", maxWidth: 900 }}>
            Frontend Developer & QA Engineer specializing in React, Next.js, and structured manual quality assurance.
          </div>
        </div>

        {/* Bottom Skill Tags */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {["React.js", "Next.js", "Manual Testing", "EP & BVA", "Bug Reporting", "Postman APIs"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  backgroundColor: "#24252B",
                  border: "1px solid rgba(255,255,255,0.15)",
                  fontSize: 14,
                  color: "#F4F1EA",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
