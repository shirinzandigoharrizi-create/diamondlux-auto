import Image from "next/image";

const stats = [
  { value: "1,200+", label: "Vehicles Detailed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8 yrs", label: "In Business" },
  { value: "4.9 ★", label: "Average Rating" },
];

const gallery = [
  { src: "/assets3/card-exterior.png", label: "Exterior Detailing", tag: "Paint Correction", wide: true },
  { src: "/assets3/card-ceramic.png",  label: "Ceramic Coating",    tag: "9H Ceramic",      wide: false },
  { src: "/assets3/card-interior.png", label: "Interior Detail",    tag: "Full Interior",   wide: false },
  { src: "/assets3/card-ppf.png",      label: "Paint Protection",   tag: "PPF Full Front",  wide: false },
  { src: "/assets3/card-yacht.png",    label: "Yacht Detailing",    tag: "Marine Detail",   wide: false },
  { src: "/assets3/card-ceramic.png",  label: "New Car Protection", tag: "Ceramic + PPF",   wide: true  },
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
          marginBottom: "40px",
          maxWidth: "900px",
          margin: "0 auto 48px",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "#0d0d0d",
              padding: "28px 20px",
              textAlign: "center",
            }}
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

      {/* Gallery grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
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
              overflow: "hidden",
              borderRadius: "3px",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Image
              src={item.src}
              alt={item.label}
              width={800}
              height={500}
              style={{
                width: "100%",
                height: item.wide ? "300px" : "220px",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.82)",
              }}
            />
            {/* Label overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)",
                padding: "36px 18px 16px",
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
