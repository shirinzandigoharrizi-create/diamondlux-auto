import React from "react";

const steps = [
  {
    num: "01",
    title: "Book & Consult",
    desc: "Contact us to schedule a no-obligation consultation. We assess your vehicle in person, discuss your goals, and provide a precise written quote before any work begins.",
    detail: "In-person assessment · Written scope · Fixed pricing",
  },
  {
    num: "02",
    title: "Precision Detailing",
    desc: "Your vehicle enters our temperature-controlled studio where our specialists dedicate the full scope of agreed services — with no corners cut and no timeline pressures.",
    detail: "Climate-controlled studio · Certified specialists · Progress updates",
  },
  {
    num: "03",
    title: "Handover & Care Guide",
    desc: "We present your vehicle for a joint walk-around inspection, then provide a personalised maintenance guide so your results last as long as possible.",
    detail: "Walk-around inspection · Care instructions · 30-day follow-up",
  },
];

export default function ProcessSection() {
  return (
    <section
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "96px 64px",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <div
          style={{
            width: "36px",
            height: "1px",
            background: "#D4AF37",
            margin: "0 auto 24px",
          }}
        />
        <h2
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "42px",
            fontWeight: 500,
            color: "#F2EFE9",
            letterSpacing: "0.06em",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          How It Works
        </h2>
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#8a8a8a",
            letterSpacing: "0.04em",
            margin: 0,
          }}
        >
          A clear, straightforward process — from first contact to final delivery.
        </p>
      </div>

      {/* Steps */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 56px 1fr 56px 1fr",
          alignItems: "start",
          gap: "0",
        }}
      >
        {steps.map((step, i) => (
          <React.Fragment key={step.num}>
            {/* Step card */}
            <div>
              {/* Number circle */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid rgba(212,175,55,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                  background: "rgba(212,175,55,0.05)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#D4AF37",
                    letterSpacing: "0.04em",
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#F2EFE9",
                  letterSpacing: "0.04em",
                  margin: "0 0 16px",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#8a8a8a",
                  lineHeight: 1.85,
                  margin: "0 0 20px",
                }}
              >
                {step.desc}
              </p>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#D4AF37",
                  letterSpacing: "0.08em",
                  opacity: 0.75,
                }}
              >
                {step.detail}
              </div>
            </div>

            {/* Connector arrow between steps */}
            {i < steps.length - 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "16px",
                }}
              >
                <svg
                  width="32"
                  height="2"
                  viewBox="0 0 32 2"
                  style={{ overflow: "visible" }}
                >
                  <line
                    x1="0"
                    y1="1"
                    x2="28"
                    y2="1"
                    stroke="rgba(212,175,55,0.3)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                  />
                  <polygon
                    points="26,−3 32,1 26,5"
                    fill="rgba(212,175,55,0.3)"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
