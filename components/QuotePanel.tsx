"use client";

import { useRef, useState } from "react";

const MAX_PHOTOS = 20;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // keep the JSON payload comfortably within serverless body limits

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

type FieldName = "name" | "email" | "phone" | "message";

function isValidNorthAmericanPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return /^[2-9]\d{9}$/.test(digits);
  if (digits.length === 11) return digits.startsWith("1") && /^1[2-9]\d{9}$/.test(digits);
  return false;
}

function validateField(field: FieldName, rawValue: string): string | null {
  const value = rawValue.trim();
  switch (field) {
    case "name":
      if (!value) return "Please enter your full name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      return null;
    case "email":
      if (!value) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
      return null;
    case "phone":
      if (!value) return null; // optional
      if (!isValidNorthAmericanPhone(value)) return "Enter a valid North American phone number.";
      return null;
    case "message":
      if (!value) return "Please tell us about your vehicle.";
      if (value.length < 10) return "Please provide at least 10 characters.";
      return null;
  }
}

const ICON_COLOR = "#C9A227";
const BORDER_NORMAL = "rgba(201,162,39,0.30)";
const BORDER_FOCUS = "rgba(230,192,74,0.9)";
const BORDER_VALID = "rgba(201,162,39,0.6)";
const BORDER_INVALID = "rgba(224,90,80,0.65)";
const BG_NORMAL = "#0a0a08";
const BG_INVALID = "rgba(200,60,50,0.06)";

function fieldWrapperStyle(state: "normal" | "focused" | "valid" | "invalid", extra?: React.CSSProperties): React.CSSProperties {
  let borderColor = BORDER_NORMAL;
  let background = BG_NORMAL;
  let boxShadow: string | undefined;

  if (state === "invalid") {
    borderColor = BORDER_INVALID;
    background = BG_INVALID;
  } else if (state === "focused") {
    borderColor = BORDER_FOCUS;
    boxShadow = "0 0 0 3px rgba(201,162,39,0.14)";
  } else if (state === "valid") {
    borderColor = BORDER_VALID;
  }

  return {
    display: "flex",
    alignItems: "center",
    gap: "9px",
    background,
    border: `1px solid ${borderColor}`,
    borderRadius: "8px",
    padding: "0 11px",
    height: "35px",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
    boxShadow,
    ...extra,
  };
}

const fieldLabelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "9.5px",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#9a9690",
  marginBottom: "5px",
};

const fieldErrorStyle: React.CSSProperties = {
  display: "block",
  marginTop: "5px",
  fontSize: "10.5px",
  color: "#e08a82",
  lineHeight: 1.4,
};

const fieldInputStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#F2EFE9",
  fontFamily: "var(--font-jost), sans-serif",
  fontSize: "12.5px",
  height: "100%",
};

export default function QuotePanel() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const [errors, setErrors] = useState<Record<FieldName, string | null>>({
    name: null,
    email: null,
    phone: null,
    message: null,
  });
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);

  const fieldValues: Record<FieldName, string> = { name, email, phone, message: details };

  function fieldState(field: FieldName): "normal" | "focused" | "valid" | "invalid" {
    if (touched[field] && errors[field]) return "invalid";
    if (focusedField === field) return "focused";
    if (touched[field] && !errors[field] && fieldValues[field].trim() !== "") return "valid";
    return "normal";
  }

  function handleFieldChange(field: FieldName, value: string, setter: (v: string) => void) {
    setter(value);
    // Only live-validate once the field has already been touched, so errors
    // clear the moment the user fixes them instead of appearing while typing.
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  }

  function handleFieldBlur(field: FieldName) {
    setFocusedField((current) => (current === field ? null : current));
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, fieldValues[field]) }));
  }

  function handleFieldFocus(field: FieldName) {
    setFocusedField(field);
  }

  function handlePhotosSelected(fileList: FileList | null) {
    if (!fileList) return;
    const files = Array.from(fileList).slice(0, MAX_PHOTOS);
    setSubmitError(null);
    setPhotos(files);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const nameError = validateField("name", name);
    const emailError = validateField("email", email);
    const phoneError = validateField("phone", phone);
    const messageError = validateField("message", details);

    setTouched({ name: true, email: true, phone: true, message: true });
    setErrors({ name: nameError, email: emailError, phone: phoneError, message: messageError });

    if (nameError || emailError || phoneError || messageError) {
      return;
    }

    const totalBytes = photos.reduce((sum, file) => sum + file.size, 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      setSubmitError("Your photos are too large. Please upload fewer or smaller images.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const encodedPhotos = await Promise.all(
        photos.map(async (file) => ({
          filename: file.name,
          contentType: file.type || "application/octet-stream",
          dataUrl: await readFileAsDataUrl(file),
        }))
      );

      const response = await fetch("/api/quick-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          phone,
          email,
          description: details,
          photos: encodedPhotos,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setSubmitError(null);
    setName("");
    setEmail("");
    setPhone("");
    setDetails("");
    setPhotos([]);
    setTouched({ name: false, email: false, phone: false, message: false });
    setErrors({ name: null, email: null, phone: null, message: null });
    setFocusedField(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <aside
      id="quick-quote-panel"
      style={{
        background: "#0c0b09",
        borderRadius: "12px",
        padding: "26px 16px 15px",
        fontFamily: "var(--font-jost), Arial, sans-serif",
      }}
    >
      {submitted ? (
        <div style={{ textAlign: "center", padding: "46px 6px" }} role="status" aria-live="polite">
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

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Full Name */}
              <div>
                <label htmlFor="quick-quote-name" style={fieldLabelStyle}>
                  Full Name
                </label>
                <div style={fieldWrapperStyle(fieldState("name"))}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    id="quick-quote-name"
                    value={name}
                    onChange={(e) => handleFieldChange("name", e.target.value, setName)}
                    onFocus={() => handleFieldFocus("name")}
                    onBlur={() => handleFieldBlur("name")}
                    placeholder="John Smith"
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={touched.name && errors.name ? "quick-quote-name-error" : undefined}
                    style={fieldInputStyle}
                  />
                </div>
                {touched.name && errors.name && (
                  <span id="quick-quote-name-error" role="alert" style={fieldErrorStyle}>
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="quick-quote-email" style={fieldLabelStyle}>
                  Email Address
                </label>
                <div style={fieldWrapperStyle(fieldState("email"))}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                  <input
                    id="quick-quote-email"
                    type="email"
                    value={email}
                    onChange={(e) => handleFieldChange("email", e.target.value, setEmail)}
                    onFocus={() => handleFieldFocus("email")}
                    onBlur={() => handleFieldBlur("email")}
                    placeholder="john@example.com"
                    aria-invalid={Boolean(touched.email && errors.email)}
                    aria-describedby={touched.email && errors.email ? "quick-quote-email-error" : undefined}
                    style={fieldInputStyle}
                  />
                </div>
                {touched.email && errors.email && (
                  <span id="quick-quote-email-error" role="alert" style={fieldErrorStyle}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="quick-quote-phone" style={fieldLabelStyle}>
                  Phone Number <span style={{ textTransform: "none", letterSpacing: 0, color: "#666" }}>(optional)</span>
                </label>
                <div style={fieldWrapperStyle(fieldState("phone"))}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <input
                    id="quick-quote-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => handleFieldChange("phone", e.target.value, setPhone)}
                    onFocus={() => handleFieldFocus("phone")}
                    onBlur={() => handleFieldBlur("phone")}
                    placeholder="+1 (555) 000-0000"
                    aria-invalid={Boolean(touched.phone && errors.phone)}
                    aria-describedby={touched.phone && errors.phone ? "quick-quote-phone-error" : undefined}
                    style={fieldInputStyle}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <span id="quick-quote-phone-error" role="alert" style={fieldErrorStyle}>
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Photos — untouched */}
              <div
                onClick={() => fileInputRef.current?.click()}
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
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handlePhotosSelected(e.target.files)}
                  style={{ display: "none" }}
                />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M17 8l-5-5-5 5" />
                  <path d="M12 3v12" />
                </svg>
                <div>
                  <div style={{ fontSize: "11.5px", color: "#E6E2D9", fontWeight: 500 }}>
                    {photos.length > 0
                      ? `${photos.length} photo${photos.length === 1 ? "" : "s"} selected`
                      : "Upload Photos (Max 20 photos)"}
                  </div>
                  <div style={{ fontSize: "10px", color: "#8a8a86", fontWeight: 300, marginTop: "1px" }}>
                    {photos.length > 0 ? "Tap to change your selection" : "You can upload up to 20 images"}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="quick-quote-message" style={fieldLabelStyle}>
                  Message
                </label>
                <div style={fieldWrapperStyle(fieldState("message"), { alignItems: "flex-start", height: "auto", padding: "9px 11px" })}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ICON_COLOR} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                    <path d="M9 13h6M9 17h6" />
                  </svg>
                  <textarea
                    id="quick-quote-message"
                    value={details}
                    onChange={(e) => handleFieldChange("message", e.target.value, setDetails)}
                    onFocus={() => handleFieldFocus("message")}
                    onBlur={() => handleFieldBlur("message")}
                    placeholder="Describe your vehicle and what you need"
                    rows={2}
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={touched.message && errors.message ? "quick-quote-message-error" : undefined}
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
                {touched.message && errors.message && (
                  <span id="quick-quote-message-error" role="alert" style={fieldErrorStyle}>
                    {errors.message}
                  </span>
                )}
              </div>
            </div>

            {submitError && (
              <div
                role="alert"
                aria-live="assertive"
                style={{
                  marginTop: "12px",
                  background: "rgba(200,60,50,0.1)",
                  border: "1px solid rgba(200,60,50,0.35)",
                  borderRadius: "8px",
                  padding: "8px 11px",
                  color: "#e08a82",
                  fontSize: "11.5px",
                  lineHeight: 1.5,
                }}
              >
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              aria-busy={submitting}
              className="dlx-gold"
              style={{
                width: "100%",
                marginTop: "13px",
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
                cursor: submitting ? "default" : "pointer",
                opacity: submitting ? 0.7 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "opacity 0.2s ease",
              }}
            >
              {submitting && (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a1407"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ animation: "dlx-spin 0.8s linear infinite" }}
                >
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
              )}
              {submitting ? "Submitting…" : "Request My Quote"}
            </button>
            <style>{`@keyframes dlx-spin { to { transform: rotate(360deg); } }`}</style>
          </form>

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
