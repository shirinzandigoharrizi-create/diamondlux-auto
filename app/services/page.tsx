import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const services = [
  {
    id: "interior",
    title: "Interior Detailing",
    subtitle: "A sanctuary, spotless.",
    image: "/assets3/card-interior.png",
    description:
      "Every surface, seam, and stitch receives our undivided attention. We extract years of embedded contaminants from carpets and upholstery, condition leather to a supple finish, and leave every panel — from the headliner to the door sills — impeccably clean.",
    features: [
      "Deep extraction shampooing of all upholstery & carpets",
      "Leather cleaning, conditioning & pH-balanced protection",
      "Dashboard, console & trim detailing with UV-guard dressing",
      "Complete glass cleaning — streak-free interior windows",
      "Odor neutralization (ozone treatment available)",
      "Air vent purging & headliner spot treatment",
    ],
    time: "4 – 6 hours",
  },
  {
    id: "exterior",
    title: "Exterior Detailing",
    subtitle: "Perfection, every panel.",
    image: "/assets3/card-exterior.png",
    description:
      "We treat your paint with the same precision a watchmaker applies to a movement. A multi-stage decontamination and hand-polish process removes swirls, oxidation, and micro-marring — revealing depth and gloss you may not have seen since the car left the factory.",
    features: [
      "Two-bucket hand wash with pH-neutral soap",
      "Clay bar decontamination to remove bonded surface deposits",
      "Iron & tar removal for brake-dust contamination",
      "Single- or multi-stage machine polish for swirl correction",
      "Carnauba or synthetic sealant protection coat",
      "Wheel, caliper, tire, and exhaust tip detailing",
    ],
    time: "5 – 8 hours",
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    subtitle: "Armour that never dulls.",
    image: "/assets3/card-ceramic.png",
    description:
      "A professional-grade nano-ceramic coating forms a semi-permanent bond with your clear coat, creating a hydrophobic, chemical-resistant shield. Contaminants bead off effortlessly, gloss is amplified, and your paint is protected from UV degradation for years.",
    features: [
      "Full paint correction prep before coating application",
      "Professional-grade 9H ceramic formula",
      "Hydrophobic self-cleaning surface effect",
      "UV, chemical & light scratch resistance",
      "Enhanced depth and mirror-like gloss",
      "2 – 5 year durability (package dependent)",
    ],
    time: "2 – 3 days",
  },
  {
    id: "ppf",
    title: "Paint Protection Film",
    subtitle: "Invisible. Indestructible.",
    image: "/assets3/card-ppf.png",
    description:
      "Our optically clear urethane film shields high-impact zones from rock chips, road debris, and light abrasions — then heals itself under heat, leaving no trace. Available in partial or full-body coverage for complete long-term protection.",
    features: [
      "Optically clear, gloss or matte finish film",
      "Self-healing top coat — minor scratches disappear",
      "Front-end partial kits or full-body coverage",
      "Precision computer-cut templates for your exact model",
      "Stain- and yellowing-resistant formula",
      "10-year manufacturer warranty on film",
    ],
    time: "2 – 5 days",
  },
  {
    id: "yacht",
    title: "Yacht Detailing",
    subtitle: "From sea level to showroom.",
    image: "/assets3/card-yacht.png",
    description:
      "Extending our standard of luxury beyond the road, our yacht detailing service covers hull, topsides, and interior with equal precision. We use marine-certified products to combat salt, UV exposure, and oxidation while protecting your investment for seasons ahead.",
    features: [
      "Hull cleaning, compounding & gelcoat polish",
      "Teak deck cleaning, brightening & oiling",
      "Stainless & chrome polishing throughout",
      "Interior cabin detailing — upholstery, carpets & surfaces",
      "Anti-fouling paint inspection & light touch-up",
      "Canvas, vinyl & acrylic window treatment",
    ],
    time: "1 – 3 days",
  },
];

export default function ServicesPage() {
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
            Our Services
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
            Five specialised disciplines — one uncompromising standard of excellence.
          </p>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37", margin: "28px auto 0" }} />
        </div>
      </section>

      {/* Service sections */}
      {services.map((svc, i) => {
        const reversed = i % 2 !== 0;
        return (
          <section
            key={svc.id}
            id={svc.id}
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "80px 40px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "72px",
              alignItems: "center",
              direction: reversed ? "rtl" : "ltr",
              borderBottom: i < services.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            {/* Image */}
            <div style={{ direction: "ltr", position: "relative", borderRadius: "4px", overflow: "hidden" }}>
              <Image
                src={svc.image}
                alt={svc.title}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              />
              {/* Gold accent corner */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: reversed ? "auto" : 0,
                right: reversed ? 0 : "auto",
                width: "3px",
                height: "60px",
                background: "linear-gradient(180deg, transparent, #D4AF37)",
              }} />
            </div>

            {/* Text */}
            <div style={{ direction: "ltr" }}>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}>
                {svc.subtitle}
              </div>
              <h2 style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 500,
                color: "#F2EFE9",
                letterSpacing: "0.04em",
                margin: "0 0 24px",
                lineHeight: 1.15,
              }}>
                {svc.title}
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#8a8a8a",
                lineHeight: 1.9,
                margin: "0 0 28px",
              }}>
                {svc.description}
              </p>

              {/* Features */}
              <ul style={{ listStyle: "none", margin: "0 0 32px", padding: 0 }}>
                {svc.features.map((f) => (
                  <li key={f} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "10px",
                  }}>
                    <span style={{ color: "#D4AF37", fontSize: "14px", marginTop: "1px", flexShrink: 0 }}>◆</span>
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "#C8C4BC",
                      lineHeight: 1.6,
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Time + CTA */}
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(212,175,55,0.07)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: "2px",
                  padding: "8px 16px",
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", color: "#D4AF37", letterSpacing: "0.08em" }}>
                    {svc.time}
                  </span>
                </div>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#D4AF37",
                    borderRadius: "2px",
                    padding: "10px 24px",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    color: "#0A0A0A",
                    cursor: "pointer",
                  }}>
                    REQUEST A QUOTE
                  </div>
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section style={{
        background: "linear-gradient(180deg, #0A0A0A 0%, #0f0f0f 100%)",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        padding: "80px 40px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, fontStyle: "italic", color: "#F2EFE9", margin: "0 0 24px", lineHeight: 1.4 }}>
            Not sure which service is right for your vehicle?
          </p>
          <Link href="/packages" style={{ textDecoration: "none" }}>
            <div style={{
              display: "inline-block",
              border: "1px solid rgba(212,175,55,0.65)",
              borderRadius: "2px",
              padding: "13px 32px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              color: "#D4AF37",
              cursor: "pointer",
            }}>
              VIEW OUR PACKAGES
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
