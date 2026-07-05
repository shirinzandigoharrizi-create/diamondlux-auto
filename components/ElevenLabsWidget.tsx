"use client";

import { useEffect, useRef, useState } from "react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";

const AGENT_ID = "agent_9901kwmyt6mqftdvqf1xfmbswyhd";

type ViewMode = "voice" | "chat";
type ChatMessage = { id: string; role: "user" | "agent"; text: string };

function MicIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10v2a7 7 0 0 0 14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  );
}

function ChatIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function SendIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function ElevenLabsWidget() {
  return (
    <ConversationProvider>
      <ElevenLabsWidgetInner />
    </ConversationProvider>
  );
}

function ElevenLabsWidgetInner() {
  const [open, setOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("voice");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const pendingMessageRef = useRef<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      if (pendingMessageRef.current) {
        conversation.sendUserMessage(pendingMessageRef.current);
        pendingMessageRef.current = null;
      }
    },
    onMessage: ({ message, role, event_id }) => {
      setMessages((prev) => [...prev, { id: `${event_id ?? Date.now()}-${prev.length}`, role, text: message }]);
    },
    onError: (message) => {
      console.error("ElevenLabs conversation error:", message);
    },
  });

  const { status, mode, startSession, endSession, sendUserMessage } = conversation;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function beginVoice() {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      startSession({ agentId: AGENT_ID, connectionType: "webrtc" });
    } catch (err) {
      console.error("Microphone access denied:", err);
    }
  }

  function switchMode(next: ViewMode) {
    if (next === viewMode) return;
    if (status === "connected" || status === "connecting") {
      endSession();
    }
    setViewMode(next);
  }

  function sendChat() {
    const text = chatInput.trim();
    if (!text) return;
    setChatInput("");
    if (status === "connected") {
      sendUserMessage(text);
    } else {
      pendingMessageRef.current = text;
      startSession({ agentId: AGENT_ID, connectionType: "webrtc", textOnly: true });
    }
  }

  const orbState = status !== "connected" ? "idle" : mode === "speaking" ? "speaking" : "listening";

  const statusLabel =
    status === "connecting"
      ? "Connecting…"
      : status === "connected"
        ? viewMode === "voice"
          ? mode === "speaking"
            ? "Speaking"
            : "Listening"
          : "Online"
        : "Online";

  const voiceHeadline =
    status === "connecting"
      ? "Connecting…"
      : status === "connected"
        ? mode === "speaking"
          ? "Speaking"
          : "Listening"
        : "Voice Concierge";

  const voiceSub =
    status === "connecting"
      ? "Setting up your conversation"
      : status === "connected"
        ? mode === "speaking"
          ? "The concierge is responding"
          : "I'm listening — go ahead"
        : "Tap below to start a live voice conversation";

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999, fontFamily: "'Jost', Arial, sans-serif" }} className="dlx-elw-trigger-wrap">
      {open && (
        <div
          className="dlx-elw-panel"
          style={{
            position: "fixed",
            bottom: 92,
            right: 20,
            width: 380,
            height: 520,
            background: "var(--cream-50)",
            borderRadius: 20,
            border: "1px solid color-mix(in srgb, var(--gold-400) 30%, transparent)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "16px 16px 12px",
              borderBottom: "1px solid color-mix(in srgb, var(--ink-900) 8%, transparent)",
              flexShrink: 0,
              gap: 10,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 16, fontWeight: 600, color: "var(--ink-900)", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
                DiamondLux Concierge
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4, fontSize: 11, color: "var(--gray-500)" }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 9999,
                    background: status === "connected" ? "var(--gold-400)" : "var(--gray-400)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                {statusLabel}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <div style={{ display: "flex", gap: 10 }}>
                <button
                  className="dlx-elw-toggle"
                  onClick={() => switchMode("voice")}
                  style={{
                    border: "none",
                    borderBottom: viewMode === "voice" ? "2px solid var(--gold-500)" : "2px solid transparent",
                    color: viewMode === "voice" ? "var(--ink-900)" : "var(--gray-500)",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 11,
                    fontWeight: viewMode === "voice" ? 600 : 400,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "2px 0 4px",
                    cursor: "pointer",
                  }}
                >
                  Voice
                </button>
                <button
                  className="dlx-elw-toggle"
                  onClick={() => switchMode("chat")}
                  style={{
                    border: "none",
                    borderBottom: viewMode === "chat" ? "2px solid var(--gold-500)" : "2px solid transparent",
                    color: viewMode === "chat" ? "var(--ink-900)" : "var(--gray-500)",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 11,
                    fontWeight: viewMode === "chat" ? 600 : 400,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "2px 0 4px",
                    cursor: "pointer",
                  }}
                >
                  Chat
                </button>
              </div>
              <button
                className="dlx-elw-iconbtn"
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 9999,
                  border: "1px solid transparent",
                  color: "var(--ink-900)",
                  fontSize: 16,
                  lineHeight: 1,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                ×
              </button>
            </div>
          </div>

          {/* Body */}
          {viewMode === "voice" ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22, padding: "24px" }}>
              <div
                className={`dlx-elw-orb dlx-elw-orb--${orbState}`}
                style={{
                  position: "relative",
                  width: 116,
                  height: 116,
                  borderRadius: 9999,
                  background: "linear-gradient(160deg, var(--gold-300), var(--gold-500))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 40px color-mix(in srgb, var(--gold-400) 45%, transparent)",
                  color: "var(--ink-900)",
                }}
              >
                <span className="dlx-elw-ring dlx-elw-ring--1" />
                <span className="dlx-elw-ring dlx-elw-ring--2" />
                <span className="dlx-elw-ring dlx-elw-ring--3" />
                <MicIcon size={34} />
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 16, color: "var(--ink-900)" }}>{voiceHeadline}</div>
                <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 6, maxWidth: 240, lineHeight: 1.5 }}>{voiceSub}</div>
              </div>

              {status === "connected" || status === "connecting" ? (
                <button
                  className="dlx-elw-begin"
                  onClick={() => endSession()}
                  style={{
                    border: "1.5px solid color-mix(in srgb, var(--ink-900) 30%, transparent)",
                    color: "var(--ink-900)",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "10px 22px",
                    borderRadius: 9999,
                    cursor: "pointer",
                  }}
                >
                  End Conversation
                </button>
              ) : (
                <button
                  className="dlx-elw-begin"
                  onClick={beginVoice}
                  style={{
                    border: "1.5px solid var(--gold-500)",
                    color: "var(--gold-500)",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "10px 22px",
                    borderRadius: 9999,
                    cursor: "pointer",
                  }}
                >
                  Begin Conversation
                </button>
              )}
            </div>
          ) : (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
              <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 10 }}>
                {messages.length === 0 ? (
                  <div style={{ margin: "auto", textAlign: "center", color: "var(--gray-500)", fontSize: 12.5, maxWidth: 230, lineHeight: 1.6 }}>
                    Ask about detailing packages, pricing, or book an appointment — type a message to start chatting.
                  </div>
                ) : (
                  messages.map((m) => (
                    <div
                      key={m.id}
                      className="dlx-elw-bubble-in"
                      style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}
                    >
                      <div
                        style={{
                          maxWidth: "78%",
                          background: m.role === "user" ? "var(--ink-900)" : "color-mix(in srgb, var(--ink-900) 6%, transparent)",
                          color: m.role === "user" ? "var(--cream-50)" : "var(--ink-900)",
                          padding: "9px 13px",
                          borderRadius: m.role === "user" ? "14px 14px 3px 14px" : "14px 14px 14px 3px",
                          fontSize: 13,
                          lineHeight: 1.5,
                        }}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: 12,
                  borderTop: "1px solid color-mix(in srgb, var(--ink-900) 8%, transparent)",
                  flexShrink: 0,
                }}
              >
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendChat();
                  }}
                  placeholder="Type a message…"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: "color-mix(in srgb, var(--ink-900) 4%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--ink-900) 12%, transparent)",
                    borderRadius: 9999,
                    padding: "10px 14px",
                    fontSize: 13,
                    color: "var(--ink-900)",
                    fontFamily: "'Jost', sans-serif",
                  }}
                />
                <button
                  className="dlx-elw-send"
                  onClick={sendChat}
                  aria-label="Send"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    border: "1px solid color-mix(in srgb, var(--gold-400) 55%, transparent)",
                    color: "var(--gold-500)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <SendIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {open ? (
        <button
          className="dlx-elw-iconbtn"
          onClick={() => setOpen(false)}
          aria-label="Close concierge widget"
          style={{
            width: 56,
            height: 56,
            borderRadius: 9999,
            border: "1px solid color-mix(in srgb, var(--gold-400) 55%, transparent)",
            color: "var(--gold-400)",
            fontSize: 24,
            lineHeight: 1,
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>
      ) : (
        <button
          className="dlx-elw-trigger"
          onClick={() => setOpen(true)}
          aria-label="Open concierge widget"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 20px",
            borderRadius: 9999,
            border: "1px solid color-mix(in srgb, var(--gold-400) 55%, transparent)",
            color: "var(--gold-400)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            backdropFilter: "blur(10px)",
            cursor: "pointer",
          }}
        >
          <MicIcon />
          <span style={{ width: 1, height: 18, background: "color-mix(in srgb, var(--gold-400) 40%, transparent)" }} />
          <ChatIcon />
        </button>
      )}
    </div>
  );
}
