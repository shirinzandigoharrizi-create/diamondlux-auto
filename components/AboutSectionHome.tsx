import Image from "next/image";

const values = [
  { label: "Precision", desc: "No surface is overlooked. Every millimetre matters." },
  { label: "Integrity",  desc: "We say what we'll do — then we do exactly that." },
  { label: "Expertise",  desc: "Certified specialists, professional-grade materials only." },
  { label: "Discretion", desc: "Your vehicle, your privacy. Always handled with care." },
];

const team = [
  { name: "Marcus Bell",   role: "Founder & Lead Detailer", i: "M" },
  { name: "Leila Santos",  role: "Ceramic Coating Specialist", i: "L" },
  { name: "Tyler Okafor",  role: "PPF & Wrap Technician", i: "T" },
  { name: "Priya Sharma",  role: "Client Experience Manager", i: "P" },
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
          margin: "0 auto 88px",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative" }}>
          <Image
            src="/assets3/card-exterior.png"
            alt="DiamondLux workshop"
            width={560}
            height={400}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "3px",
              display: "block",
              filter: "brightness(0.88)",
            }}
          />
          {/* Corner accent */}
          <div
            style={{
              position: "absolute",
              bottom: "-16px",
              right: "-16px",
              width: "100px",
              height: "100px",
              border: "1px solid rgba(212,175,55,0.25)",
              borderRadius: "2px",
              zIndex: -1,
            }}
          />
          {/* Stat badge */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              background: "rgba(10,10,10,0.92)",
              border: "1px solid rgba(212,175,55,0.4)",
              borderRadius: "3px",
              padding: "16px 22px",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "34px",
                fontWeight: 700,
                color: "#D4AF37",
                lineHeight: 1,
              }}
            >
              8+
            </div>
            <div
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 300,
                color: "#9A9A9A",
                letterSpacing: "0.14em",
                marginTop: "4px",
                textTransform: "uppercase",
              }}
            >
              Years in Business
            </div>
          </div>
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
            entrusted to us deserve more than a wash and vacuum. They deserve a
            meticulous, knowledgeable approach once reserved for concours
            preparation and factory-level care.
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
            Over eight years and more than 1,200 vehicles, our methods have
            evolved — but our standard has never wavered. Every job leaves our
            studio looking as close to factory-perfect as the vehicle allows.
            Sometimes better.
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

      {/* Team row */}
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h3
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              color: "#D4AF37",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            The Team
          </h3>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {team.map((m) => (
            <div
              key={m.name}
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "3px",
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(212,175,55,0.07)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "24px",
                  color: "#D4AF37",
                }}
              >
                {m.i}
              </div>
              <div
                style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#F2EFE9",
                  marginBottom: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                {m.name}
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  color: "#D4AF37",
                  textTransform: "uppercase",
                }}
              >
                {m.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
