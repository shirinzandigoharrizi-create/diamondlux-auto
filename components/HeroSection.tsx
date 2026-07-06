"use client";

import Image from "next/image";
import QuotePanel from "./QuotePanel";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 4;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function HeroSection() {
  return (
    <section style={{ position: "relative" }}>
      {/* Hero baked image — unchanged (Book Appointment button removed from the artwork) */}
      <Image
        src="/assets3/hero.png"
        alt="DiamondLux Auto — luxury cars and a superyacht at golden hour"
        width={1280}
        height={720}
        priority
        style={{ display: "block", width: "100%", height: "auto" }}
        sizes="100vw"
      />

      {/* ── Transparent hotspot overlays over the baked nav ── */}
      <div>
        <button onClick={() => scrollTo("hero")}         aria-label="Home"             style={hs(32,  10, 272, 104)} />
        <button onClick={() => scrollTo("hero")}         aria-label="Home"             style={hs(386, 38, 44,  34)}  />
        <button onClick={() => scrollTo("services")}     aria-label="Services"         style={hs(460, 38, 70,  34)}  />
        <button onClick={() => scrollTo("packages")}     aria-label="Packages"         style={hs(558, 38, 76,  34)}  />
        <button onClick={() => scrollTo("our-work")}     aria-label="Our Work"         style={hs(662, 38, 78,  34)}  />
        <button onClick={() => scrollTo("about")}        aria-label="About Us"         style={hs(768, 38, 78,  34)}  />
        <button onClick={() => scrollTo("contact")}      aria-label="Contact"          style={hs(870, 38, 72,  34)}  />

        {/* Get a Quick Quote — top-right, vertical card, in the space of the removed Book Appointment block */}
        <div style={{ position: "absolute", top: 30, left: 1010, width: 235 }}>
          <QuotePanel />
        </div>
      </div>
    </section>
  );
}

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
