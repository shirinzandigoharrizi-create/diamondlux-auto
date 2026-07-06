const values = [
  { label: "Precision", desc: "No surface is overlooked. Every millimetre matters." },
  { label: "Integrity",  desc: "We say what we'll do — then we do exactly that." },
  { label: "Expertise",  desc: "Certified specialists, professional-grade materials only." },
  { label: "Discretion", desc: "Your vehicle, your privacy. Always handled with care." },
];

export default function AboutSectionHome() {
  return (
    <section
      id="about"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "96px 64px",
      }}
    >
      {/* Story row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        {/* Stats panel — CSS only */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            alignContent: "start",
          }}
        >
          {[
            { value: "1,200+", label: "Vehicles Detailed",   sub: "And counting" },
            { value: "98%",    label: "Client Satisfaction",  sub: "5-star average" },
            { value: "5",      label: "Specialist Services",  sub: "Under one roof" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "3px",
                padding: "32px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top gold line accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #D4AF37 0%, transparent 100%)" }} />
              <div
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "48px",
                  fontWeight: 600,
                  color: "#D4AF37",
                  lineHeight: 1,
                  marginBottom: "10px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#C8C4BC",
                  letterSpacing: "0.08em",
                  marginBottom: "4px",
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  fontWeight: 300,
                  color: "#4a4a4a",
                  letterSpacing: "0.06em",
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div>
          <div
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              color: "#D4AF37",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Our Story
          </div>
          <h2
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "38px",
              fontWeight: 500,
              color: "#F2EFE9",
              letterSpacing: "0.04em",
              margin: "0 0 24px",
              lineHeight: 1.2,
            }}
          >
            Born from a passion for automotive perfection
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#8a8a8a",
              lineHeight: 1.9,
              margin: "0 0 18px",
            }}
          >
            DiamondLux Auto was founded with a single belief: the vehicles
            entrusted to us deserve a meticulous, knowledgeable approach —
            the kind once reserved for concours preparation and factory-level care.
          </p>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#8a8a8a",
              lineHeight: 1.9,
              margin: "0 0 36px",
            }}
          >
            Across more than 1,200 vehicles, our methods have evolved — but our
            standard has never wavered. Every job leaves our studio looking as
            close to factory-perfect as the vehicle allows. Sometimes better.
          </p>

          {/* Values 2×2 mini grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {values.map((v) => (
              <div
                key={v.label}
                style={{
                  background: "#0d0d0d",
                  border: "1px solid rgba(212,175,55,0.1)",
                  borderRadius: "2px",
                  padding: "18px 16px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    color: "#D4AF37",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  {v.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "#7a7a7a",
                    lineHeight: 1.6,
                  }}
                >
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
