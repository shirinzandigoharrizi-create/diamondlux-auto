"use client";

const navLinks = [
  { label: "Services",  id: "services" },
  { label: "Packages",  id: "packages" },
  { label: "Our Work",  id: "our-work" },
  { label: "About Us",  id: "about" },
  { label: "Contact",   id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 4, behavior: "smooth" });
}

export default function SiteFooter() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
      {/* Main grid */}
      <div style={{
        padding: "72px 64px 48px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1.4fr",
        gap: "48px",
      }}>
        {/* Brand */}
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
            color: "#6a6a6a",
            fontSize: "13px",
            lineHeight: 1.85,
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            maxWidth: "260px",
            margin: "0 0 28px",
          }}>
            Where precision meets luxury. We restore, protect, and elevate every vehicle to its absolute finest.
          </p>
          {/* Social circles */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[{ l: "IG", t: "Instagram" }, { l: "FB", t: "Facebook" }, { l: "TK", t: "TikTok" }, { l: "YT", t: "YouTube" }].map(({ l, t }) => (
              <div key={l} title={t} style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#D4AF37",
                fontFamily: "'Jost', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                cursor: "pointer",
              }}>
                {l}
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "20px" }}>
            Services
          </div>
          {["Interior Detailing", "Exterior Detailing", "Ceramic Coating", "Paint Protection Film", "Yacht Detailing"].map(s => (
            <button key={s} onClick={() => scrollTo("services")} style={{
              display: "block", background: "none", border: "none", cursor: "pointer",
              color: "#6a6a6a", fontSize: "13px", fontFamily: "'Jost', sans-serif",
              fontWeight: 300, textDecoration: "none", marginBottom: "10px", padding: 0,
              textAlign: "left",
            }}>
              {s}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "20px" }}>
            Navigate
          </div>
          {navLinks.map(({ label, id }) => (
            <button key={label} onClick={() => scrollTo(id)} style={{
              display: "block", background: "none", border: "none", cursor: "pointer",
              color: "#6a6a6a", fontSize: "13px", fontFamily: "'Jost', sans-serif",
              fontWeight: 300, marginBottom: "10px", padding: 0, textAlign: "left",
            }}>
              {label}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "20px" }}>
            Contact
          </div>
          <div style={{ color: "#6a6a6a", fontSize: "13px", fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: 1.95 }}>
            <div>1234 Luxury Drive, Suite 100</div>
            <div>Beverly Hills, CA 90210</div>
            <div style={{ marginTop: "10px" }}>+1 (555) 123-4567</div>
            <div>info@diamondluxauto.com</div>
            <div style={{ marginTop: "14px", color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.08em" }}>HOURS</div>
            <div>Mon – Fri: 8 am – 6 pm</div>
            <div>Saturday: 9 am – 5 pm</div>
            <div>Sunday: Closed</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        padding: "20px 64px",
        borderTop: "1px solid rgba(212,175,55,0.07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <span style={{ color: "#3a3a3a", fontSize: "12px", fontFamily: "'Jost', sans-serif" }}>
          © {new Date().getFullYear()} DiamondLux Auto. All rights reserved.
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Service"].map(t => (
            <span key={t} style={{ color: "#3a3a3a", fontSize: "12px", fontFamily: "'Jost', sans-serif", cursor: "pointer" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
