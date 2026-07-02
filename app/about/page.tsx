import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const values = [
  {
    icon: "◆",
    title: "Uncompromising Precision",
    description:
      "We treat every vehicle as if it were our own. No shortcut is ever taken, no surface overlooked. Precision is not a feature of our service — it is the only way we work.",
  },
  {
    icon: "◆",
    title: "Transparency First",
    description:
      "Before we begin, you know exactly what we'll do, how long it will take, and what it will cost. No hidden charges, no up-selling, no surprises.",
  },
  {
    icon: "◆",
    title: "Products That Perform",
    description:
      "We source only professional-grade chemicals and materials — the same products trusted by top concours preparation teams and manufacturer detailing programmes worldwide.",
  },
  {
    icon: "◆",
    title: "White-Glove Experience",
    description:
      "From your first enquiry to the moment we hand back your keys, every touchpoint is designed to be effortless, pleasant, and genuinely personal.",
  },
];

const certifications = [
  { name: "IDA Member", body: "International Detailing Association" },
  { name: "Gtechniq Accredited", body: "Ceramic Coating Certified Installer" },
  { name: "XPEL Certified", body: "Paint Protection Film Certified Dealer" },
  { name: "3M Pro", body: "Authorized 3M Window Film Installer" },
];

const team = [
  {
    name: "Marcus Bell",
    role: "Founder & Lead Detailer",
    bio: "15 years refining vehicles for collectors, dealerships, and motorsport teams across North America.",
    initial: "M",
  },
  {
    name: "Leila Santos",
    role: "Ceramic Coating Specialist",
    bio: "Gtechniq-accredited and obsessed with perfect surface chemistry. Responsible for every coating application.",
    initial: "L",
  },
  {
    name: "Tyler Okafor",
    role: "PPF & Wrap Technician",
    bio: "XPEL-certified with eight years of precision film work on everything from daily drivers to supercars.",
    initial: "T",
  },
  {
    name: "Priya Sharma",
    role: "Client Experience Manager",
    bio: "Your first and last point of contact. Priya ensures every client interaction exceeds expectation.",
    initial: "P",
  },
];

export default function AboutPage() {
  return (
    <main style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <PageHeader />

      {/* Page hero */}
      <section style={{
        background: "linear-gradient(180deg, #111111 0%, #0A0A0A 100%)",
        borderBottom: "1px solid rgba(212,175,55,0.12)",
        padding: "80px 40px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37", margin: "0 auto 28px" }} />
          <h1 style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "clamp(34px, 5vw, 54px)",
            fontWeight: 500,
            color: "#F2EFE9",
            letterSpacing: "0.08em",
            margin: "0 0 18px",
            lineHeight: 1.1,
          }}>
            About Us
          </h1>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#8a8a8a",
            letterSpacing: "0.04em",
            lineHeight: 1.9,
            margin: 0,
          }}>
            A decade of dedication to the highest standard of automotive care.
          </p>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37", margin: "28px auto 0" }} />
        </div>
      </section>

      {/* Story section */}
      <section style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "88px 40px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }}>
        {/* Image side */}
        <div style={{ position: "relative" }}>
          <Image
            src="/assets3/card-exterior.png"
            alt="DiamondLux workshop"
            width={600}
            height={440}
            style={{ width: "100%", height: "440px", objectFit: "cover", borderRadius: "3px", display: "block", filter: "brightness(0.9)" }}
          />
          {/* Gold frame accent */}
          <div style={{
            position: "absolute",
            bottom: "-20px",
            right: "-20px",
            width: "120px",
            height: "120px",
            border: "1px solid rgba(212,175,55,0.3)",
            borderRadius: "2px",
            zIndex: -1,
          }} />
          {/* Badge */}
          <div style={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
            background: "#0A0A0A",
            border: "1px solid rgba(212,175,55,0.4)",
            borderRadius: "3px",
            padding: "16px 24px",
          }}>
            <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "36px", fontWeight: 700, color: "#D4AF37", lineHeight: 1 }}>8+</div>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", fontWeight: 300, color: "#9A9A9A", letterSpacing: "0.1em", marginTop: "4px" }}>YEARS IN BUSINESS</div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <div style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.25em",
            color: "#D4AF37",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Our Story
          </div>
          <h2 style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: 500,
            color: "#F2EFE9",
            letterSpacing: "0.04em",
            margin: "0 0 28px",
            lineHeight: 1.2,
          }}>
            Born from a passion for automotive perfection
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#8a8a8a",
            lineHeight: 1.9,
            margin: "0 0 20px",
          }}>
            DiamondLux Auto was founded with a single belief: that the vehicles entrusted to us deserve a meticulous, knowledgeable approach — the kind once reserved for concours preparation and factory-level care.
          </p>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#8a8a8a",
            lineHeight: 1.9,
            margin: "0 0 20px",
          }}>
            What began as a one-man operation out of a modest garage in Beverly Hills has grown into a boutique studio trusted by collectors, performance car owners, and yacht enthusiasts who won't accept second best.
          </p>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#8a8a8a",
            lineHeight: 1.9,
            margin: 0,
          }}>
            Over eight years and more than 1,200 vehicles, our methods have evolved — but our standard has never wavered. Every job leaves our studio looking as close to factory-perfect as the vehicle's condition allows. Sometimes better.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 40px",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ width: "32px", height: "1px", background: "#D4AF37", margin: "0 auto 20px" }} />
            <h2 style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 500,
              color: "#F2EFE9",
              letterSpacing: "0.06em",
              margin: 0,
            }}>
              What We Stand For
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {values.map((v) => (
              <div key={v.title} style={{
                background: "#0A0A0A",
                border: "1px solid rgba(212,175,55,0.1)",
                borderRadius: "3px",
                padding: "36px 32px",
                display: "flex",
                gap: "24px",
              }}>
                <span style={{ color: "#D4AF37", fontSize: "20px", flexShrink: 0, marginTop: "2px" }}>◆</span>
                <div>
                  <h3 style={{
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#F2EFE9",
                    margin: "0 0 12px",
                    letterSpacing: "0.03em",
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "#8a8a8a",
                    lineHeight: 1.85,
                    margin: 0,
                  }}>
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ width: "32px", height: "1px", background: "#D4AF37", margin: "0 auto 20px" }} />
          <h2 style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 500,
            color: "#F2EFE9",
            letterSpacing: "0.06em",
            margin: "0 0 16px",
          }}>
            The Team
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: "#7a7a7a",
            margin: 0,
          }}>
            Small on purpose. Every member is a specialist.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {team.map((member) => (
            <div key={member.name} style={{
              background: "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "3px",
              padding: "32px 24px",
              textAlign: "center",
            }}>
              {/* Avatar */}
              <div style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "28px",
                color: "#D4AF37",
              }}>
                {member.initial}
              </div>
              <div style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "18px",
                fontWeight: 500,
                color: "#F2EFE9",
                marginBottom: "6px",
                letterSpacing: "0.03em",
              }}>
                {member.name}
              </div>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                {member.role}
              </div>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                color: "#7a7a7a",
                lineHeight: 1.75,
                margin: 0,
              }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "60px 40px",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <h3 style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              color: "#D4AF37",
              textTransform: "uppercase",
              margin: 0,
            }}>
              Certifications & Accreditations
            </h3>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}>
            {certifications.map((c) => (
              <div key={c.name} style={{
                background: "#0A0A0A",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "3px",
                padding: "24px 20px",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#D4AF37",
                  marginBottom: "8px",
                }}>
                  {c.name}
                </div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "#7a7a7a",
                  lineHeight: 1.5,
                }}>
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#F2EFE9",
            margin: "0 0 28px",
            lineHeight: 1.4,
          }}>
            Meet us. Let's talk about your vehicle.
          </p>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <div style={{
              display: "inline-block",
              background: "#D4AF37",
              borderRadius: "2px",
              padding: "14px 36px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#0A0A0A",
              cursor: "pointer",
            }}>
              BOOK A CONSULTATION
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
