import Link from "next/link";

const G: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "#D4AF37",
  marginBottom: "20px",
};

const L: React.CSSProperties = {
  color: "#8a8a8a",
  fontSize: "13px",
  fontFamily: "'Jost', sans-serif",
  fontWeight: 300,
  textDecoration: "none",
  display: "block",
  marginBottom: "11px",
  transition: "color 0.2s",
};

export default function Footer() {
  return (
    <footer style={{
      background: "#080808",
      borderTop: "1px solid rgba(212,175,55,0.13)",
    }}>
      {/* Main grid */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "72px 40px 48px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1.4fr",
        gap: "48px",
      }}>
        {/* Brand column */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "22px",
              fontWeight: 700,
              color: "#D4AF37",
              letterSpacing: "0.07em",
              lineHeight: 1,
            }}>
              DIAMOND<span style={{ color: "#F2EFE9" }}>LUX</span>
            </div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "9px",
              fontWeight: 300,
              color: "#9A9A9A",
              letterSpacing: "0.55em",
              marginTop: "4px",
            }}>
              AUTO
            </div>
          </div>
          <p style={{
            color: "#7a7a7a",
            fontSize: "13px",
            lineHeight: 1.85,
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            maxWidth: "270px",
            margin: "0 0 28px",
          }}>
            Where precision meets luxury. We restore, protect, and
            elevate every vehicle to its absolute finest.
          </p>
          {/* Social circles */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { label: "IG", title: "Instagram" },
              { label: "FB", title: "Facebook" },
              { label: "TK", title: "TikTok" },
              { label: "YT", title: "YouTube" },
            ].map(({ label, title }) => (
              <div
                key={label}
                title={title}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(212,175,55,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#D4AF37",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <div style={G}>Services</div>
          {[
            "Interior Detailing",
            "Exterior Detailing",
            "Ceramic Coating",
            "Paint Protection Film",
            "Yacht Detailing",
          ].map((s) => (
            <Link key={s} href="/services" style={L}>{s}</Link>
          ))}
        </div>

        {/* Company column */}
        <div>
          <div style={G}>Company</div>
          {[
            { label: "About Us", href: "/about" },
            { label: "Our Work", href: "/our-work" },
            { label: "Packages", href: "/packages" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={L}>{label}</Link>
          ))}
        </div>

        {/* Contact column */}
        <div>
          <div style={G}>Contact</div>
          <div style={{ color: "#7a7a7a", fontSize: "13px", fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 2 }}>
            <div>1234 Luxury Drive, Suite 100</div>
            <div>Beverly Hills, CA 90210</div>
            <div style={{ marginTop: "12px" }}>+1 (555) 123-4567</div>
            <div>info@diamondluxauto.com</div>
            <div style={{ marginTop: "16px", color: "#9A9A9A", fontSize: "12px", letterSpacing: "0.05em" }}>HOURS</div>
            <div>Mon – Fri: 8 am – 6 pm</div>
            <div>Saturday: 9 am – 5 pm</div>
            <div>Sunday: Closed</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "20px 40px",
        borderTop: "1px solid rgba(212,175,55,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <span style={{ color: "#454545", fontSize: "12px", fontFamily: "'Jost', sans-serif" }}>
          © {new Date().getFullYear()} DiamondLux Auto. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Service"].map((t) => (
            <span key={t} style={{ color: "#454545", fontSize: "12px", fontFamily: "'Jost', sans-serif", cursor: "pointer" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
