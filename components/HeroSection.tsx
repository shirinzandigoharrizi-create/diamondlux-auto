"use client";

import Image from "next/image";
import QuotePanel from "./QuotePanel";

export default function HeroSection() {
  function scrollToServices() {
    const el = document.getElementById("services");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 4;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section style={{ position: "relative" }}>
      {/* Hero baked image */}
      <Image
        src="/assets3/hero.png"
        alt="DiamondLux Auto — luxury cars and a superyacht at golden hour"
        width={1280}
        height={720}
        priority
        style={{ display: "block", width: "100%", height: "auto" }}
        sizes="100vw"
      />

      {/* ── Desktop/Tablet: transparent hotspots + quote panel overlay ── */}
      {/* These are inside ScaleStage so pixel positions are correct at 1280px design units */}
      <div className="hidden sm:block">
        <button onClick={scrollToTop}  aria-label="Home"            style={hs(32,  10, 272, 104)} />
        <button onClick={scrollToTop}  aria-label="Home"            style={hs(386, 38, 44,  34)}  />
        <button onClick={scrollToServices} aria-label="Services"    style={hs(460, 38, 70,  34)}  />
        <button aria-label="Packages"                               style={hs(558, 38, 76,  34)}  />
        <button aria-label="Our Work"                               style={hs(662, 38, 78,  34)}  />
        <button aria-label="About Us"                               style={hs(768, 38, 78,  34)}  />
        <button aria-label="Contact"                                style={hs(870, 38, 72,  34)}  />
        <button onClick={scrollToTop}  aria-label="Book Appointment" style={hs(1024,30, 234, 48)} />

        <div style={{ position: "absolute", top: 92, left: 988, width: 235 }}>
          <QuotePanel />
        </div>
      </div>

      {/* ── Mobile only: quote panel stacked below hero ── */}
      <div className="sm:hidden" style={{ padding: "20px 16px 24px" }}>
        <QuotePanel />
      </div>
    </section>
  );
}

/** Transparent absolute hotspot button style */
function hs(left: number, top: number, width: number, height: number): React.CSSProperties {
  return {
    position: "absolute",
    left,
    top,
    width,
    height,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 0,
  };
}
