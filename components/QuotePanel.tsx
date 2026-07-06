"use client";

import { useState } from "react";

export default function QuotePanel() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit() {
    setSubmitted(true);
  }

  function resetForm() {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setDetails("");
  }

  return (
    <aside
      id="quick-quote-panel"
      style={{
        background: "linear-gradient(180deg,#15130f,#0c0b09)",
        border: "1px solid rgba(201,162,39,0.40)",
        borderRadius: "12px",
        boxShadow: "0 24px 56px rgba(0,0,0,0.55)",
        padding: "26px 16px 15px",
        fontFamily: "var(--font-jost), Arial, sans-serif",
      }}
    >
      {submitted ? (
        <div style={{ textAlign: "center", padding: "46px 6px" }}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A227"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: "14px", display: "block", margin: "0 auto 14px" }}
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="M22 4 12 14.01l-3-3" />
          </svg>
          <div
            style={{
              fontFamily: "var(--font-bodoni), serif",
              fontSize: "21px",
              color: "#F2EFE9",
              marginBottom: "8px",
            }}
          >
            Thank you.
          </div>
          <div style={{ fontSize: "12.5px", color: "#9A9A9A", lineHeight: 1.6 }}>
            We&apos;ll respond within 24&nbsp;hours with your personalized quote.
          </div>
          <button
            onClick={resetForm}
            className="dlx-outline"
            style={{
              marginTop: "18px",
              background: "transparent",
              border: "1px solid rgba(201,162,39,0.5)",
              color: "#D4AF37",
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "9px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            New Request
          </button>
        </div>
      ) : (
        <div>
          <div style={{ width: "32px", height: "1px", background: "#D4AF37", margin: "0 auto 14px" }} />
          <div
            style={{
              textAlign: "center",
              fontFamily: "var(--font-bodoni), serif",
              fontSize: "17px",
              fontWeight: 600,
              letterSpacing: "0.03em",
              color: "#E3C04A",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Get a Quick Quote
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "11.5px",
              color: "#c9c6be",
              fontWeight: 300,
              margin: "5px 0 11px",
              lineHeight: 1.4,
            }}
          >
            Upload photos and get a<br />personalized quote.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                background: "#0a0a08",
                border: "1px solid rgba(201,162,39,0.30)",
                borderRadius: "8px",
                padding: "0 11px",
                height: "35px",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                id="quick-quote-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "transparent",
                  border: "none",
                  color: "#F2EFE9",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: "12.5px",
                  height: "100%",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                background: "#0a0a08",
                border: "1px solid rgba(201,162,39,0.30)",
                borderRadius: "8px",
                padding: "0 11px",
                height: "35px",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "transparent",
                  border: "none",
                  color: "#F2EFE9",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: "12.5px",
                  height: "100%",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                background: "#0a0a08",
                border: "1px solid rgba(201,162,39,0.30)",
                borderRadius: "8px",
                padding: "0 11px",
                height: "35px",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "transparent",
                  border: "none",
                  color: "#F2EFE9",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: "12.5px",
                  height: "100%",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#0a0a08",
                border: "1px solid rgba(201,162,39,0.30)",
                borderRadius: "8px",
                padding: "7px 11px",
                cursor: "pointer",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M17 8l-5-5-5 5" />
                <path d="M12 3v12" />
              </svg>
              <div>
                <div style={{ fontSize: "11.5px", color: "#E6E2D9", fontWeight: 500 }}>
                  Upload Photos (Max 20 photos)
                </div>
                <div style={{ fontSize: "10px", color: "#8a8a86", fontWeight: 300, marginTop: "1px" }}>
                  You can upload up to 20 images
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "9px",
                background: "#0a0a08",
                border: "1px solid rgba(201,162,39,0.30)",
                borderRadius: "8px",
                padding: "9px 11px",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                <path d="M9 13h6M9 17h6" />
              </svg>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe your vehicle and what you need"
                rows={2}
                style={{
                  flex: 1,
                  minWidth: 0,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  color: "#F2EFE9",
                  fontFamily: "var(--font-jost), sans-serif",
                  fontSize: "12.5px",
                  lineHeight: 1.5,
                }}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="dlx-gold"
            style={{
              width: "100%",
              marginTop: "11px",
              background: "linear-gradient(180deg,#E6C04A,#C9A227)",
              border: "none",
              color: "#1a1407",
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: "12.5px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "11px 0",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Request My Quote
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              marginTop: "9px",
              color: "#8a8a86",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span style={{ fontSize: "9.5px", textAlign: "center", lineHeight: 1.4 }}>
              Your information is safe and secure.<br />We never share your details.
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}
