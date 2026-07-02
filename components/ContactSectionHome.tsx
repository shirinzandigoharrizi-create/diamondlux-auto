"use client";
import { useState } from "react";

const iStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "2px",
  padding: "12px 14px",
  fontFamily: "'Jost', sans-serif",
  fontSize: "13px",
  fontWeight: 300,
  color: "#F2EFE9",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const lStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Jost', sans-serif",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.18em",
  color: "#7a7a7a",
  textTransform: "uppercase",
  marginBottom: "7px",
};

const hours = [
  { day: "Monday – Friday", time: "8:00 am – 6:00 pm" },
  { day: "Saturday",        time: "9:00 am – 5:00 pm" },
  { day: "Sunday",          time: "Closed" },
];

export default function ContactSectionHome() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", vehicle: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section
      id="contact"
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        padding: "96px 64px",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{ width: "36px", height: "1px", background: "#D4AF37", margin: "0 auto 24px" }} />
        <h2 style={{
          fontFamily: "'Bodoni Moda', serif",
          fontSize: "42px",
          fontWeight: 500,
          color: "#F2EFE9",
          letterSpacing: "0.06em",
          margin: "0 0 16px",
          lineHeight: 1.1,
        }}>
          Book an Appointment
        </h2>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "14px",
          fontWeight: 300,
          color: "#8a8a8a",
          letterSpacing: "0.04em",
          margin: 0,
        }}>
          We work by appointment only. We'll respond within 24 hours.
        </p>
      </div>

      {/* Two-column layout */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.6fr",
        gap: "64px",
        maxWidth: "1100px",
        margin: "0 auto",
        alignItems: "start",
      }}>
        {/* Left — contact details */}
        <div>
          {[
            {
              label: "Studio Location",
              content: ["1234 Luxury Drive, Suite 100", "Beverly Hills, CA 90210", "United States"],
            },
          ].map((b) => (
            <div key={b.label} style={{ marginBottom: "36px" }}>
              <div style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: "#D4AF37",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}>
                {b.label}
              </div>
              {b.content.map((line) => (
                <div key={line} style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#C8C4BC",
                  lineHeight: 1.85,
                }}>
                  {line}
                </div>
              ))}
            </div>
          ))}

          <div style={{ marginBottom: "36px" }}>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#D4AF37",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Get in Touch
            </div>
            {[
              { icon: "📞", text: "+1 (555) 123-4567" },
              { icon: "✉️", text: "info@diamondluxauto.com" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ fontSize: "14px" }}>{icon}</span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "13px", fontWeight: 300, color: "#C8C4BC" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div>
            <div style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#D4AF37",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Opening Hours
            </div>
            {hours.map(({ day, time }) => (
              <div key={day} style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                marginBottom: "9px",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                paddingBottom: "9px",
              }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", fontWeight: 300, color: "#7a7a7a" }}>
                  {day}
                </span>
                <span style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: time === "Closed" ? "#454545" : "#C8C4BC",
                }}>
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{
          background: "#0A0A0A",
          border: "1px solid rgba(212,175,55,0.15)",
          borderRadius: "4px",
          padding: "40px 36px",
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{
                width: "60px", height: "60px", borderRadius: "50%",
                border: "1.5px solid #D4AF37",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px",
                fontSize: "22px", color: "#D4AF37",
              }}>
                ✓
              </div>
              <h3 style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "24px", fontWeight: 500,
                color: "#F2EFE9", margin: "0 0 12px",
                letterSpacing: "0.04em",
              }}>
                Message Received
              </h3>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px", fontWeight: 300,
                color: "#8a8a8a", lineHeight: 1.85, margin: 0,
              }}>
                Thank you. A member of our team will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 20px" }}>
                <div>
                  <label style={lStyle}>Full Name *</label>
                  <input name="name" value={form.name} onChange={set} required placeholder="John Smith" style={iStyle} />
                </div>
                <div>
                  <label style={lStyle}>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={set} required placeholder="john@example.com" style={iStyle} />
                </div>
                <div>
                  <label style={lStyle}>Phone</label>
                  <input name="phone" type="tel" value={form.phone} onChange={set} placeholder="+1 (555) 000-0000" style={iStyle} />
                </div>
                <div>
                  <label style={lStyle}>Vehicle</label>
                  <input name="vehicle" value={form.vehicle} onChange={set} placeholder="2023 Porsche 911" style={iStyle} />
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <label style={lStyle}>Service of Interest *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={set}
                    required
                    style={{
                      ...iStyle,
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 14px center",
                      paddingRight: "36px",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" style={{ background: "#111" }}>Select a service…</option>
                    {["Interior Detailing","Exterior Detailing","Ceramic Coating","Paint Protection Film","Yacht Detailing","Full Package","Not Sure — Need Advice"].map(s => (
                      <option key={s} value={s} style={{ background: "#111" }}>{s}</option>
                    ))}
                  </select>
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <label style={lStyle}>Additional Notes</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={set}
                    placeholder="Tell us about your vehicle's condition, any specific concerns, or preferred timing…"
                    rows={4}
                    style={{ ...iStyle, resize: "vertical", minHeight: "100px", lineHeight: 1.7 }}
                  />
                </div>
              </div>
              <div style={{ margin: "12px 0 20px" }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "11px", fontWeight: 300, color: "#454545" }}>
                  * Required fields. We respond within 24 hours during business hours.
                </span>
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#D4AF37",
                  border: "none",
                  borderRadius: "2px",
                  padding: "14px 24px",
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
          )}
        </div>
      </div>
    </section>
  );
}
