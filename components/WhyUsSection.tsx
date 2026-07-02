const pillars = [
  {
    icon: "◆",
    title: "Precision You Can See",
    desc: "Every vehicle exits our studio with a finish that reflects our obsession with detail. No surface left untouched, no shortcut ever taken.",
  },
  {
    icon: "◈",
    title: "Professional-Grade Materials",
    desc: "We source the same products trusted by concours preparation teams worldwide — from 9H ceramic formulas to self-healing PPF film.",
  },
  {
    icon: "◇",
    title: "Complete Transparency",
    desc: "Before work begins, you receive a full assessment and exact scope in writing. No hidden fees, no surprise up-sells — guaranteed.",
  },
  {
    icon: "◆",
    title: "White-Glove Experience",
    desc: "From first call to key handover, every touchpoint is crafted to be effortless, unhurried, and genuinely personal.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(212,175,55,0.1)",
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
          Why DiamondLux?
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
          Four principles that define everything we do.
        </p>
      </div>

      {/* Pillars grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        {pillars.map((p, i) => (
          <div
            key={i}
            style={{
              background: "#0A0A0A",
              border: "1px solid rgba(212,175,55,0.1)",
              borderRadius: "3px",
              padding: "36px 28px",
              transition: "border-color 0.25s",
            }}
            className="dlx-svc"
          >
            <div
              style={{
                fontSize: "22px",
                color: "#D4AF37",
                marginBottom: "20px",
              }}
            >
              {p.icon}
            </div>
            <h3
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "20px",
                fontWeight: 500,
                color: "#F2EFE9",
                letterSpacing: "0.03em",
                margin: "0 0 14px",
                lineHeight: 1.2,
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#8a8a8a",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
