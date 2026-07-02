import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const packages = [
  {
    tier: "Silver",
    tagline: "The perfect introduction to professional detailing.",
    accent: "#9EAAB4",
    features: [
      "Exterior decontamination & dry",
      "Wheel & tire cleaning",
      "Interior vacuum & wipe-down",
      "Glass cleaning (in & out)",
      "Tyre dressing",
      "Door jamb detail",
    ],
    excluded: [
      "Paint correction",
      "Ceramic coating",
      "Leather conditioning",
      "Odor treatment",
    ],
    time: "3 – 4 hours",
    ideal: "Regular maintenance",
  },
  {
    tier: "Gold",
    tagline: "A thorough restoration for vehicles that deserve more.",
    accent: "#D4AF37",
    featured: true,
    features: [
      "Everything in Silver",
      "Clay bar decontamination",
      "Single-stage paint correction",
      "Leather clean & condition",
      "Interior deep steam clean",
      "Odor neutralization",
      "6-month sealant protection",
      "Engine bay wipe-down",
    ],
    excluded: [
      "Ceramic coating",
      "Paint Protection Film",
    ],
    time: "7 – 9 hours",
    ideal: "Pre-sale prep or seasonal care",
  },
  {
    tier: "Diamond",
    tagline: "Total transformation. No compromise.",
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
    excluded: [],
    time: "2 – 4 days",
    ideal: "New vehicle protection or full restoration",
  },
];

const faq = [
  {
    q: "Do I need to book in advance?",
    a: "Yes — we work by appointment only to ensure each vehicle receives our full attention. We recommend booking at least one week ahead, especially for Diamond-tier services.",
  },
  {
    q: "Can I customise a package?",
    a: "Absolutely. Every vehicle is different. After your initial consultation we'll tailor a service scope and provide a precise quote for your exact requirements.",
  },
  {
    q: "Do you offer mobile detailing?",
    a: "Our Diamond package includes complimentary concierge pickup and delivery within a 30-mile radius. For other packages, contact us to discuss mobile options.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "Our professional-grade ceramic coatings are rated for 2 – 5 years depending on the formula selected and how the vehicle is maintained. We'll advise the right option during consultation.",
  },
];

export default function PackagesPage() {
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
            Packages & Pricing
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
            Three carefully constructed tiers — each a complete experience in itself.
          </p>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37", margin: "28px auto 0" }} />
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          alignItems: "start",
        }}>
          {packages.map((pkg) => (
            <div
              key={pkg.tier}
              style={{
                background: pkg.featured ? "linear-gradient(180deg, #141410 0%, #0f0f0a 100%)" : "#0e0e0e",
                border: `1px solid ${pkg.featured ? "rgba(212,175,55,0.45)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "4px",
                padding: "40px 32px",
                position: "relative",
                boxShadow: pkg.featured ? "0 0 40px rgba(212,175,55,0.07)" : "none",
              }}
            >
              {pkg.featured && (
                <div style={{
                  position: "absolute",
                  top: "-1px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#D4AF37",
                  color: "#0A0A0A",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  padding: "5px 18px",
                  textTransform: "uppercase",
                  borderRadius: "0 0 3px 3px",
                  whiteSpace: "nowrap",
                }}>
                  Most Popular
                </div>
              )}

              {/* Tier name */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
                marginTop: pkg.featured ? "16px" : 0,
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  background: pkg.accent,
                  transform: "rotate(45deg)",
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#F2EFE9",
                  letterSpacing: "0.05em",
                }}>
                  {pkg.tier}
                </span>
              </div>

              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#7a7a7a",
                lineHeight: 1.7,
                margin: "0 0 24px",
              }}>
                {pkg.tagline}
              </p>

              {/* Pricing placeholder */}
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                color: "rgba(212,175,55,0.4)",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}>
                Pricing on request
              </div>

              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "24px" }} />

              {/* Features */}
              <ul style={{ listStyle: "none", margin: "0 0 24px", padding: 0 }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "9px",
                  }}>
                    <span style={{ color: "#D4AF37", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "#C8C4BC",
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
                {pkg.excluded.map((f) => (
                  <li key={f} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "9px",
                    opacity: 0.4,
                  }}>
                    <span style={{ color: "#555", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>✕</span>
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "#666",
                      textDecoration: "line-through",
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Time */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "28px",
                color: "#8a8a8a",
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: "0.06em" }}>
                  Est. time: {pkg.time}
                </span>
              </div>

              {/* Ideal for */}
              <div style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.12)",
                borderRadius: "2px",
                padding: "10px 14px",
                marginBottom: "28px",
              }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#D4AF37", letterSpacing: "0.1em" }}>
                  IDEAL FOR: </span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#8a8a8a" }}>
                  {pkg.ideal}
                </span>
              </div>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <div style={{
                  background: pkg.featured ? "#D4AF37" : "transparent",
                  border: `1px solid ${pkg.featured ? "#D4AF37" : "rgba(212,175,55,0.4)"}`,
                  borderRadius: "2px",
                  padding: "13px 20px",
                  textAlign: "center",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.13em",
                  color: pkg.featured ? "#0A0A0A" : "#D4AF37",
                  cursor: "pointer",
                }}>
                  SELECT {pkg.tier.toUpperCase()}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: "center",
          fontFamily: "'Jost', sans-serif",
          fontSize: "12px",
          fontWeight: 300,
          color: "#555",
          marginTop: "32px",
        }}>
          All packages are tailored to your vehicle. Contact us for a personalised quote.
        </p>
      </section>

      {/* FAQ */}
      <section style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 40px",
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ width: "32px", height: "1px", background: "#D4AF37", margin: "0 auto 20px" }} />
            <h2 style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 500,
              color: "#F2EFE9",
              letterSpacing: "0.06em",
              margin: 0,
            }}>
              Frequently Asked Questions
            </h2>
          </div>

          {faq.map((item, i) => (
            <div key={i} style={{
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "28px 0",
            }}>
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}>
                <span style={{ color: "#D4AF37", fontSize: "16px", flexShrink: 0, marginTop: "2px" }}>◆</span>
                <div>
                  <h3 style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#F2EFE9",
                    margin: "0 0 10px",
                    letterSpacing: "0.02em",
                  }}>
                    {item.q}
                  </h3>
                  <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "#8a8a8a",
                    lineHeight: 1.85,
                    margin: 0,
                  }}>
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#F2EFE9",
            margin: "0 0 28px",
            lineHeight: 1.4,
          }}>
            Ready to experience the DiamondLux difference?
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
              BOOK YOUR APPOINTMENT
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
