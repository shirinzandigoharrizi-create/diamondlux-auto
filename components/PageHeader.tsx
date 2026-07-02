"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PACKAGES", href: "/packages" },
  { label: "OUR WORK", href: "/our-work" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function PageHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      background: "#0A0A0A",
      borderBottom: "1px solid rgba(212,175,55,0.14)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      width: "100%",
    }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 40px",
        height: "76px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <div>
            <div style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "21px",
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
              marginTop: "3px",
            }}>
              AUTO
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="dlx-desktop-nav" style={{ gap: "30px", flex: 1, justifyContent: "center" }}>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: "0.14em",
                  color: isActive ? "#D4AF37" : "#C8C4BC",
                  textDecoration: "none",
                  borderBottom: isActive ? "1.5px solid #D4AF37" : "1.5px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Book Appointment — desktop */}
        <Link href="/contact" style={{ textDecoration: "none", flexShrink: 0 }} className="dlx-desktop-nav">
          <div style={{
            border: "1px solid rgba(212,175,55,0.65)",
            borderRadius: "2px",
            padding: "9px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Jost', sans-serif",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: "#D4AF37",
            cursor: "pointer",
            transition: "all 0.2s",
          }}>
            BOOK APPOINTMENT
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
        </Link>

        {/* Hamburger — mobile */}
        <button
          className="dlx-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#D4AF37",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="13" x2="21" y2="13" /><line x1="3" y1="19" x2="21" y2="19" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="dlx-mobile-menu" style={{
          background: "#0d0d0d",
          borderTop: "1px solid rgba(212,175,55,0.1)",
          padding: "8px 24px 24px",
        }}>
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "13px 0",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.14em",
                  color: isActive ? "#D4AF37" : "#C8C4BC",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
            <div style={{
              marginTop: "20px",
              border: "1px solid rgba(212,175,55,0.65)",
              borderRadius: "2px",
              padding: "13px 20px",
              textAlign: "center",
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.13em",
              color: "#D4AF37",
            }}>
              BOOK APPOINTMENT
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}
