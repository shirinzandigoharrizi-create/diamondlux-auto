import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const gallery = [
  { src: "/assets3/card-exterior.png", label: "Exterior Detailing", tag: "Paint Correction" },
  { src: "/assets3/card-ceramic.png", label: "Ceramic Coating", tag: "9H Ceramic" },
  { src: "/assets3/card-interior.png", label: "Interior Restoration", tag: "Full Detail" },
  { src: "/assets3/card-ppf.png", label: "Paint Protection Film", tag: "Full Front" },
  { src: "/assets3/card-yacht.png", label: "Yacht Detailing", tag: "Marine Detail" },
  { src: "/assets3/card-exterior.png", label: "Black Series Detail", tag: "Multi-Stage" },
  { src: "/assets3/card-interior.png", label: "Supercar Interior", tag: "Leather Care" },
  { src: "/assets3/card-ceramic.png", label: "New Vehicle Protect", tag: "Ceramic + PPF" },
  { src: "/assets3/card-ppf.png", label: "Track Day Prep", tag: "PPF + Sealant" },
];

const testimonials = [
  {
    name: "James R.",
    vehicle: "Ferrari 488 Pista",
    rating: 5,
    text: "I've tried half a dozen detail shops in LA. DiamondLux is in a different league. The paint correction on my 488 revealed colours in the red I'd never seen before. The ceramic coating has been flawless for eight months now.",
  },
  {
    name: "Sophia M.",
    vehicle: "Rolls-Royce Ghost",
    rating: 5,
    text: "Impeccable attention to detail, immaculate communication, and the result exceeded every expectation. My Ghost looks better now than it did when I collected it from the dealership. I won't trust anyone else with it.",
  },
  {
    name: "David K.",
    vehicle: "Porsche 911 GT3 RS",
    rating: 5,
    text: "The PPF installation was perfect — not a single bubble or seam misalignment. They treated my car like it was their own. The concierge service made the whole process effortless.",
  },
  {
    name: "Natalie T.",
    vehicle: "Bentley Continental GT",
    rating: 5,
    text: "From the first call to the final handover, every interaction was professional and unhurried. The interior restoration on my Bentley brought back the luxury feel I fell in love with. Highly recommended without reservation.",
  },
];

const stats = [
  { value: "1,200+", label: "Vehicles Detailed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8 yrs", label: "In Business" },
  { value: "4.9★", label: "Average Rating" },
];

export default function OurWorkPage() {
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
            Our Work
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
            Every result tells a story of care, precision and the pursuit of perfection.
          </p>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37", margin: "28px auto 0" }} />
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        background: "#0d0d0d",
        borderBottom: "1px solid rgba(212,175,55,0.1)",
        padding: "32px 40px",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          textAlign: "center",
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "32px",
                fontWeight: 600,
                color: "#D4AF37",
                marginBottom: "4px",
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                color: "#7a7a7a",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
          {gallery.map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "3px",
                background: "#0e0e0e",
                border: "1px solid rgba(255,255,255,0.05)",
                cursor: "pointer",
                gridColumn: i === 0 ? "span 2" : undefined,
                gridRow: i === 0 ? "span 1" : undefined,
              }}
            >
              <Image
                src={item.src}
                alt={item.label}
                width={800}
                height={500}
                style={{
                  width: "100%",
                  height: i === 0 ? "340px" : "220px",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.85)",
                }}
              />
              {/* Overlay label */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)",
                padding: "32px 20px 16px",
              }}>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  color: "#D4AF37",
                  marginBottom: "4px",
                }}>
                  {item.tag}
                </div>
                <div style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#F2EFE9",
                  letterSpacing: "0.04em",
                }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
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
              margin: "0 0 16px",
            }}>
              What Our Clients Say
            </h2>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#7a7a7a",
              margin: 0,
            }}>
              The measure of our work is the experience of every client.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: "#0A0A0A",
                border: "1px solid rgba(212,175,55,0.12)",
                borderRadius: "3px",
                padding: "36px 32px",
              }}>
                {/* Stars */}
                <div style={{ marginBottom: "20px", color: "#D4AF37", fontSize: "14px", letterSpacing: "3px" }}>
                  {"★".repeat(t.rating)}
                </div>
                {/* Quote mark */}
                <div style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "52px",
                  color: "rgba(212,175,55,0.2)",
                  lineHeight: 0.8,
                  marginBottom: "8px",
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#9A9A9A",
                  lineHeight: 1.85,
                  margin: "0 0 28px",
                  fontStyle: "italic",
                }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Bodoni Moda', serif",
                    fontSize: "16px",
                    color: "#D4AF37",
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", fontWeight: 500, color: "#F2EFE9" }}>
                      {t.name}
                    </div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", fontWeight: 300, color: "#7a7a7a", marginTop: "2px" }}>
                      {t.vehicle}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            Ready to see your vehicle in this gallery?
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
              BOOK A DETAIL
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
