const stats = [
  { value: "1,200+", label: "Vehicles Detailed" },
  { value: "98%",    label: "Client Satisfaction" },
  { value: "8 yrs",  label: "In Business" },
  { value: "4.9 ★",  label: "Average Rating" },
];

const gallery = [
  { label: "Exterior Detailing",   tag: "Paint Correction", wide: true,  icon: "◈" },
  { label: "Ceramic Coating",      tag: "9H Ceramic",       wide: false, icon: "◆" },
  { label: "Interior Detail",      tag: "Full Interior",    wide: false, icon: "◇" },
  { label: "Paint Protection",     tag: "PPF Full Front",   wide: false, icon: "◈" },
  { label: "Yacht Detailing",      tag: "Marine Detail",    wide: false, icon: "◆" },
  { label: "New Car Protection",   tag: "Ceramic + PPF",    wide: true,  icon: "◇" },
];

export default function GallerySectionHome() {
  return (
    <section
      id="our-work"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "96px 64px",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ width: "36px", height: "1px", background: "#D4AF37", margin: "0 auto 24px" }} />
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
          Our Work
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
          Every result tells a story of care, precision and the pursuit of perfection.
        </p>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(212,175,55,0.12)",
          border: "1px solid rgba(212,175,55,0.12)",
          borderRadius: "3px",
          overflow: "hidden",
          maxWidth: "900px",
          margin: "0 auto 48px",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{ background: "#0d0d0d", padding: "28px 20px", textAlign: "center" }}
          >
            <div
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "34px",
                fontWeight: 600,
                color: "#D4AF37",
                marginBottom: "6px",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                color: "#6a6a6a",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Gallery grid — CSS-only cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          maxWidth: "1152px",
          margin: "0 auto",
        }}
      >
        {gallery.map((item, i) => (
          <div
            key={i}
            style={{
              gridColumn: item.wide ? "span 2" : "span 1",
              position: "relative",
              height: item.wide ? "300px" : "220px",
              borderRadius: "3px",
              border: "1px solid rgba(212,175,55,0.15)",
              overflow: "hidden",
              background: "linear-gradient(135deg, #111110 0%, #0c0c0b 50%, #0f0f0e 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Corner accents */}
            <div style={{ position: "absolute", top: "12px", left: "12px", width: "20px", height: "20px", borderTop: "1px solid rgba(212,175,55,0.4)", borderLeft: "1px solid rgba(212,175,55,0.4)" }} />
            <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "20px", height: "20px", borderBottom: "1px solid rgba(212,175,55,0.4)", borderRight: "1px solid rgba(212,175,55,0.4)" }} />

            {/* Center icon */}
            <div
              style={{
                fontSize: item.wide ? "52px" : "40px",
                color: "rgba(212,175,55,0.12)",
                userSelect: "none",
                pointerEvents: "none",
                lineHeight: 1,
              }}
            >
              {item.icon}
            </div>

            {/* Label overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(0deg, rgba(8,8,8,0.95) 0%, transparent 100%)",
                padding: "36px 18px 18px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  color: "#D4AF37",
                  marginBottom: "4px",
                  textTransform: "uppercase",
                }}
              >
                {item.tag}
              </div>
              <div
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#F2EFE9",
                  letterSpacing: "0.03em",
                }}
              >
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
