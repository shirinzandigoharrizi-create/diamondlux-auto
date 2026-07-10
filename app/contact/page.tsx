"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "2px",
  padding: "13px 16px",
  fontFamily: "'Jost', sans-serif",
  fontSize: "13px",
  fontWeight: 300,
  color: "#F2EFE9",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Jost', sans-serif",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.2em",
  color: "#8a8a8a",
  textTransform: "uppercase",
  marginBottom: "8px",
};

const hours = [
  { day: "Monday – Friday", time: "8:00 am – 6:00 pm" },
  { day: "Saturday", time: "9:00 am – 5:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

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
            Contact Us
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
            We work by appointment only. Tell us about your vehicle and we'll be in touch within 24 hours.
          </p>
          <div style={{ width: "40px", height: "1px", background: "#D4AF37", margin: "28px auto 0" }} />
        </div>
      </section>

      {/* Main content */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "72px",
          alignItems: "start",
        }}>
          {/* Left — info panel */}
          <div>
            {/* Location */}
            <div style={{ marginBottom: "44px" }}>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                Studio Location
              </div>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#C8C4BC",
                lineHeight: 1.85,
              }}>
                1234 Luxury Drive, Suite 100<br />
                Beverly Hills, CA 90210<br />
                United States
              </div>
            </div>

            {/* Contact details */}
            <div style={{ marginBottom: "44px" }}>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                Get in Touch
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { icon: "✉️", label: "info@diamondluxauto.com" },
                ].map(({ icon, label }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "16px" }}>{icon}</span>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", fontWeight: 300, color: "#C8C4BC" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: "44px" }}>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                Opening Hours
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {hours.map(({ day, time }) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px" }}>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", fontWeight: 300, color: "#8a8a8a" }}>{day}</span>
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: time === "Closed" ? "#555" : "#C8C4BC",
                    }}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{
              background: "#0d0d0d",
              border: "1px solid rgba(212,175,55,0.12)",
              borderRadius: "3px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              color: "#555",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", letterSpacing: "0.1em", color: "#555" }}>
                MAP PLACEHOLDER
              </span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", fontWeight: 300, color: "#444", textAlign: "center", padding: "0 20px" }}>
                1234 Luxury Drive, Beverly Hills
              </span>
            </div>
          </div>

          {/* Right — contact form */}
          <div style={{
            background: "#0d0d0d",
            border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: "4px",
            padding: "48px 40px",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "1.5px solid #D4AF37",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                  fontSize: "24px",
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "26px",
                  fontWeight: 500,
                  color: "#F2EFE9",
                  margin: "0 0 14px",
                  letterSpacing: "0.04em",
                }}>
                  Message Received
                </h3>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#8a8a8a",
                  lineHeight: 1.85,
                  margin: 0,
                }}>
                  Thank you for reaching out. A member of our team will review your enquiry and respond within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{
                  fontFamily: "'Bodoni Moda', serif",
                  fontSize: "26px",
                  fontWeight: 500,
                  color: "#F2EFE9",
                  margin: "0 0 8px",
                  letterSpacing: "0.04em",
                }}>
                  Send an Enquiry
                </h2>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#7a7a7a",
                  margin: "0 0 36px",
                  lineHeight: 1.7,
                }}>
                  Fill in the details below and we'll prepare a tailored quote for your vehicle.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px" }}>
                    {/* Name */}
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        style={inputStyle}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        style={inputStyle}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        style={inputStyle}
                      />
                    </div>

                    {/* Vehicle */}
                    <div>
                      <label style={labelStyle}>Vehicle (Year, Make, Model)</label>
                      <input
                        name="vehicle"
                        value={form.vehicle}
                        onChange={handleChange}
                        placeholder="2023 Porsche 911"
                        style={inputStyle}
                      />
                    </div>

                    {/* Service — full width */}
                    <div style={{ gridColumn: "span 2" }}>
                      <label style={labelStyle}>Service of Interest *</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        style={{
                          ...inputStyle,
                          appearance: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                          paddingRight: "40px",
                          cursor: "pointer",
                        }}
                      >
                        <option value="" style={{ background: "#111", color: "#888" }}>Select a service…</option>
                        <option value="interior" style={{ background: "#111" }}>Interior Detailing</option>
                        <option value="exterior" style={{ background: "#111" }}>Exterior Detailing</option>
                        <option value="ceramic" style={{ background: "#111" }}>Ceramic Coating</option>
                        <option value="ppf" style={{ background: "#111" }}>Paint Protection Film</option>
                        <option value="yacht" style={{ background: "#111" }}>Yacht Detailing</option>
                        <option value="package" style={{ background: "#111" }}>Full Package</option>
                        <option value="unsure" style={{ background: "#111" }}>Not Sure — Need Advice</option>
                      </select>
                    </div>

                    {/* Message — full width */}
                    <div style={{ gridColumn: "span 2" }}>
                      <label style={labelStyle}>Additional Notes</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your vehicle's current condition, any specific concerns, or your preferred timeline…"
                        rows={5}
                        style={{
                          ...inputStyle,
                          resize: "vertical",
                          minHeight: "120px",
                          lineHeight: 1.7,
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: "8px", marginBottom: "28px" }}>
                    <span style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      fontWeight: 300,
                      color: "#555",
                      letterSpacing: "0.02em",
                    }}>
                      * Required fields. We'll respond within 24 hours during business hours.
                    </span>
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      background: "#D4AF37",
                      border: "none",
                      borderRadius: "2px",
                      padding: "15px 24px",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      color: "#0A0A0A",
                      cursor: "pointer",
                      textTransform: "uppercase",
                    }}
                  >
                    Send Enquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
