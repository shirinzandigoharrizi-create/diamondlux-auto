"use client";

import Script from "next/script";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "agent-id": string },
        HTMLElement
      >;
    }
  }
}

export default function ElevenLabsWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <elevenlabs-convai agent-id="agent_9901kwmyt6mqftdvqf1xfmbswyhd" />
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
        async
      />
    </div>
  );
}
