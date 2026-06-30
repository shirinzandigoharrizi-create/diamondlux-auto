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
      {/* Hero image */}
      <Image
        src="/assets3/hero.png"
        alt="DiamondLux Auto — luxury cars and a superyacht at golden hour"
        width={1280}
        height={720}
        priority
        style={{ display: "block", width: "100%", height: "auto" }}
        sizes="100vw"
      />

      {/* Nav hotspots — desktop only */}
      <div className="hidden lg:block">
        {/* Logo / Home */}
        <button
          onClick={scrollToTop}
          aria-label="Home"
          style={{
            position: "absolute",
            left: "32px",
            top: "10px",
            width: "272px",
            height: "104px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
        {/* Home nav link */}
        <button
          onClick={scrollToTop}
          aria-label="Home"
          style={{
            position: "absolute",
            left: "386px",
            top: "38px",
            width: "44px",
            height: "34px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
        {/* Services */}
        <button
          onClick={scrollToServices}
          aria-label="Services"
          style={{
            position: "absolute",
            left: "460px",
            top: "38px",
            width: "70px",
            height: "34px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
        {/* Packages */}
        <button
          aria-label="Packages"
          style={{
            position: "absolute",
            left: "558px",
            top: "38px",
            width: "76px",
            height: "34px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
        {/* Our Work */}
        <button
          aria-label="Our Work"
          style={{
            position: "absolute",
            left: "662px",
            top: "38px",
            width: "78px",
            height: "34px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
        {/* About Us */}
        <button
          aria-label="About Us"
          style={{
            position: "absolute",
            left: "768px",
            top: "38px",
            width: "78px",
            height: "34px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
        {/* Contact */}
        <button
          aria-label="Contact"
          style={{
            position: "absolute",
            left: "870px",
            top: "38px",
            width: "72px",
            height: "34px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />
        {/* Book Appointment CTA */}
        <button
          onClick={scrollToTop}
          aria-label="Book Appointment"
          style={{
            position: "absolute",
            left: "1024px",
            top: "30px",
            width: "234px",
            height: "48px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        />

        {/* Quote Panel — desktop */}
        <div
          style={{
            position: "absolute",
            top: "92px",
            left: "988px",
            width: "235px",
          }}
        >
          <QuotePanel />
        </div>
      </div>

      {/* Mobile quote panel — shown below hero image on small screens */}
      <div className="lg:hidden" style={{ padding: "24px 16px" }}>
        <QuotePanel />
      </div>
    </section>
  );
}
