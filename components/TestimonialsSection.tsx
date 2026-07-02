const testimonials = [
  {
    name: "James R.",
    vehicle: "Ferrari 488 Pista",
    text: "I've tried half a dozen detail shops in LA. DiamondLux is in a different league. The paint correction revealed colours in the red I'd never seen before. The ceramic coating has been flawless for eight months.",
    initial: "J",
  },
  {
    name: "Sophia M.",
    vehicle: "Rolls-Royce Ghost",
    text: "Impeccable attention to detail, immaculate communication, and the result exceeded every expectation. My Ghost looks better now than the day I collected it from the dealership. I won't trust anyone else with it.",
    initial: "S",
  },
  {
    name: "David K.",
    vehicle: "Porsche 911 GT3 RS",
    text: "The PPF installation was perfect — not a single bubble or misalignment. They treated my car like it was their own. The concierge service made the whole process completely effortless.",
    initial: "D",
  },
  {
    name: "Natalie T.",
    vehicle: "Bentley Continental GT",
    text: "From the first call to the final handover, every interaction was professional and genuinely personal. The interior restoration brought back the luxury feel I fell in love with. Highly recommended without reservation.",
    initial: "N",
  },
];

export default function TestimonialsSection() {
  return (
    <section
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
          What Our Clients Say
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
          The measure of our work is the experience of every client we serve.
        </p>
      </div>

      {/* 2×2 grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(212,175,55,0.1)",
              borderRadius: "3px",
              padding: "36px 32px",
            }}
          >
            {/* Stars */}
            <div
              style={{
                color: "#D4AF37",
                fontSize: "13px",
                letterSpacing: "3px",
                marginBottom: "18px",
              }}
            >
              ★★★★★
            </div>

            {/* Opening quote mark */}
            <div
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "56px",
                color: "rgba(212,175,55,0.18)",
                lineHeight: 0.75,
                marginBottom: "10px",
                userSelect: "none",
              }}
            >
              "
            </div>

            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#9A9A9A",
                lineHeight: 1.88,
                margin: "0 0 28px",
                fontStyle: "italic",
              }}
            >
              {t.text}
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "18px",
                  color: "#D4AF37",
                  flexShrink: 0,
                }}
              >
                {t.initial}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#F2EFE9",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    fontWeight: 300,
                    color: "#6a6a6a",
                    marginTop: "2px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t.vehicle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
