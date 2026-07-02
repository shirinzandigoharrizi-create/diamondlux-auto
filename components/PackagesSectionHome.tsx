"use client";

const tiers = [
  {
    tier: "Silver",
    tagline: "The professional introduction to premium care.",
    accent: "#9EAAB4",
    features: [
      "Exterior decontamination & dry",
      "Wheel & tire cleaning",
      "Interior vacuum & wipe-down",
      "Interior & exterior glass",
      "Tyre dressing",
      "Door jamb detail",
    ],
    note: "Est. 3 – 4 hours",
  },
  {
    tier: "Gold",
    tagline: "Deep restoration for vehicles that deserve more.",
    accent: "#D4AF37",
    featured: true,
    features: [
      "Everything in Silver",
      "Clay bar decontamination",
      "Single-stage paint correction",
      "Leather clean & condition",
      "Interior deep steam clean",
      "6-month sealant protection",
      "Odor neutralization",
      "Engine bay wipe",
    ],
    note: "Est. 7 – 9 hours",
  },
  {
    tier: "Diamond",
    tagline: "Total transformation. Absolute perfection.",
    accent: "#E8E0D0",
    features: [
      "Everything in Gold",
      "Multi-stage paint correction",
      "Professional ceramic coating",
      "Paint protection film (partial)",
      "Full leather restoration",
      "Ozone odor elimination",
      "Concierge pickup & delivery",
      "12-month ceramic warranty",
    ],
    note: "Est. 2 – 4 days",
  },
];

export default function PackagesSectionHome() {
  return (
    <section
      id="packages"
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        padding: "96px 64px",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
          Packages & Pricing
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
          Three carefully constructed tiers — each a complete experience.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto 32px",
          alignItems: "start",
        }}
      >
        {tiers.map((pkg) => (
          <div
            key={pkg.tier}
            style={{
              background: pkg.featured
                ? "linear-gradient(180deg, #141410 0%, #0f0f0a 100%)"
                : "#0A0A0A",
              border: `1px solid ${
                pkg.featured
                  ? "rgba(212,175,55,0.45)"
                  : "rgba(255,255,255,0.07)"
              }`,
              borderRadius: "3px",
              padding: "40px 32px",
              position: "relative",
              boxShadow: pkg.featured
                ? "0 0 40px rgba(212,175,55,0.06)"
                : "none",
            }}
          >
            {pkg.featured && (
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#D4AF37",
                  color: "#0A0A0A",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  padding: "5px 18px",
                  textTransform: "uppercase",
                  borderRadius: "0 0 3px 3px",
                  whiteSpace: "nowrap",
                }}
              >
                Most Popular
              </div>
            )}

            {/* Tier header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                marginTop: pkg.featured ? "16px" : 0,
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: pkg.accent,
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#F2EFE9",
                  letterSpacing: "0.04em",
                }}
              >
                {pkg.tier}
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                color: "#6a6a6a",
                lineHeight: 1.7,
                margin: "0 0 20px",
              }}
            >
              {pkg.tagline}
            </p>

            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                color: "rgba(212,175,55,0.4)",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Pricing on request
            </div>

            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.06)",
                marginBottom: "20px",
              }}
            />

            {/* Features */}
            <ul style={{ listStyle: "none", margin: "0 0 24px", padding: 0 }}>
              {pkg.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "9px",
                  }}
                >
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "11px",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "12px",
                      fontWeight: 300,
                      color: "#C8C4BC",
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* Time badge */}
            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                fontWeight: 300,
                color: "#555",
                letterSpacing: "0.06em",
                marginBottom: "24px",
              }}
            >
              {pkg.note}
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el)
                  window.scrollTo({
                    top: el.getBoundingClientRect().top + window.scrollY - 4,
                    behavior: "smooth",
                  });
              }}
              style={{
                width: "100%",
                background: pkg.featured ? "#D4AF37" : "transparent",
                border: `1px solid ${
                  pkg.featured ? "#D4AF37" : "rgba(212,175,55,0.4)"
                }`,
                borderRadius: "2px",
                padding: "12px 20px",
                textAlign: "center",
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.13em",
                color: pkg.featured ? "#0A0A0A" : "#D4AF37",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Select {pkg.tier}
            </button>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          fontFamily: "'Jost', sans-serif",
          fontSize: "11px",
          fontWeight: 300,
          color: "#454545",
          letterSpacing: "0.03em",
        }}
      >
        All packages are tailored to your vehicle. Contact us for a personalised quote.
      </p>
    </section>
  );
}
