"use client";

function scrollToQuote() {
  const el = document.getElementById("hero");
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 4;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

const paths = [
  {
    title: "Ask the AI Assistant",
    desc: "Use our AI assistant for quick questions, service guidance, and help choosing the right detailing option for your vehicle.",
    action: "Use the AI assistant in the bottom-right corner for instant help",
  },
  {
    title: "Get a Quick Quote",
    desc: "Want pricing? Send us your contact details, a short description of your vehicle, and upload photos for a faster and more accurate quote.",
    action: "Use the Get a Quick Quote form above",
  },
];

export default function ContactSectionHome() {
  return (
    <section
      id="contact"
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        padding: "96px 64px",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ width: "36px", height: "1px", background: "#D4AF37", margin: "0 auto 24px" }} />
        <h2 style={{
          fontFamily: "'Bodoni Moda', serif",
          fontSize: "42px",
          fontWeight: 500,
          color: "#F2EFE9",
          letterSpacing: "0.06em",
          margin: "0 0 16px",
          lineHeight: 1.1,
        }}>
          Need Help or Ready for a Quote?
        </h2>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "14px",
          fontWeight: 300,
          color: "#8a8a8a",
          letterSpacing: "0.02em",
          lineHeight: 1.8,
          maxWidth: "720px",
          margin: "0 auto",
        }}>
          If you have questions about our services, pricing, or what your vehicle needs, our AI
          assistant can help instantly. If you&apos;re ready for a personalized estimate, use Get a
          Quick Quote to send us your vehicle details, upload photos, and receive a faster, more
          accurate quote.
        </p>
      </div>

      {/* Two-path cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "28px",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        {paths.map((p) => (
          <div
            key={p.title}
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "4px",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <h3 style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "22px",
              fontWeight: 500,
              color: "#F2EFE9",
              letterSpacing: "0.03em",
              margin: "0 0 14px",
            }}>
              {p.title}
            </h3>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#8a8a8a",
              lineHeight: 1.85,
              margin: "0 0 22px",
            }}>
              {p.desc}
            </p>
            {p.title === "Get a Quick Quote" ? (
              <button
                onClick={scrollToQuote}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(212,175,55,0.5)",
                  color: "#D4AF37",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "12px 22px",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}
              >
                {p.action}
              </button>
            ) : (
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(212,175,55,0.5)",
                borderRadius: "2px",
                padding: "12px 20px",
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "#D4AF37",
                textAlign: "left",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M7 7l10 10" />
                  <path d="M17 7v10H7" />
                </svg>
                {p.action}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
