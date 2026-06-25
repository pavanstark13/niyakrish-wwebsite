import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NIYA — NIYAKRISH INDUSTRIES PVT LTD.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1c1917",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #292524 0%, transparent 50%), radial-gradient(circle at 75% 75%, #292524 0%, transparent 50%)",
            opacity: 0.6,
          }}
        />

        {/* Amber accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#f59e0b",
          }}
        />

        {/* Logo block */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: "#f59e0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
            }}
          >
            <span
              style={{
                color: "#1c1917",
                fontWeight: 900,
                fontSize: 32,
              }}
            >
              N
            </span>
          </div>
          <span
            style={{
              color: "white",
              fontWeight: 900,
              fontSize: 72,
              letterSpacing: 12,
            }}
          >
            NIYA
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            color: "#f59e0b",
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          NIYAKRISH INDUSTRIES PVT LTD.
        </p>

        {/* Description */}
        <p
          style={{
            color: "#a8a29e",
            fontSize: 22,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Ready Mix Concrete · Solid Blocks · Aggregates
        </p>
      </div>
    ),
    { ...size }
  );
}
