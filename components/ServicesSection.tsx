import Image from "next/image";

const services = [
  {
    img: "/assets3/card-interior.png",
    title: "Interior Detailing",
    desc: "Interior restoration, leather conditioning & surface care.",
  },
  {
    img: "/assets3/card-exterior.png",
    title: "Exterior Detailing",
    desc: "Paint correction, polish & protection.",
  },
  {
    img: "/assets3/card-ceramic.png",
    title: "Ceramic Coating",
    desc: "Long-lasting protection with incredible shine.",
  },
  {
    img: "/assets3/card-ppf.png",
    title: "Paint Protection Film",
    desc: "Invisible shield against rocks, scratches & road debris.",
  },
  {
    img: "/assets3/card-yacht.png",
    title: "Yacht Detailing",
    desc: "Premium care for your vessel inside & out.",
  },
];

function ServiceCard({ svc, imgHeight }: { svc: typeof services[0]; imgHeight: number }) {
  return (
    <div
      className="dlx-svc"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#0d0c0b",
        border: "1px solid rgba(201,162,39,0.24)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: `${imgHeight}px` }}>
        <Image
          src={svc.img}
          alt={svc.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 50vw, 200px"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "12px 14px",
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "#F2EFE9",
            textTransform: "uppercase",
          }}
        >
          {svc.title}
        </div>
        <div
          style={{
            marginTop: "7px",
            fontSize: "12px",
            lineHeight: 1.5,
            color: "#9A9A9A",
            fontWeight: 300,
          }}
        >
          {svc.desc}
        </div>
        <button
          className="dlx-learn"
          style={{
            marginTop: "auto",
            paddingTop: "10px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "transparent",
            border: "none",
            color: "#D4AF37",
            fontFamily: "var(--font-jost), sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Learn More
          <svg width="14" height="11" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9h18M14 3l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{ position: "relative", background: "#0A0A0A", paddingBottom: "16px" }}
    >
      {/* ── Services layout (always inside ScaleStage) ── */}
      <div style={{ paddingTop: "16px", paddingLeft: "28px", paddingRight: "28px" }}>
        <div style={{ maxWidth: "953px" }}>
          <div
            style={{
              textAlign: "center",
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "21px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              color: "#D4AF37",
              textTransform: "uppercase",
            }}
          >
            Our Services
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "14px",
              marginTop: "10px",
            }}
          >
            {services.map((svc) => (
              <ServiceCard key={svc.title} svc={svc} imgHeight={76} />
            ))}
          </div>
        </div>

        {/* Diamond decoration — absolute within the section */}
        <div
          style={{
            position: "absolute",
            top: "37px",
            right: "58px",
            pointerEvents: "none",
          }}
        >
          <Image
            src="/assets3/diamond.png"
            alt=""
            width={170}
            height={170}
            loading="eager"
            unoptimized
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
