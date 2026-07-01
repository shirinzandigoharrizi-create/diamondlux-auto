"use client";

import { useEffect, useRef } from "react";

export default function ScaleStage({ children }: { children: React.ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function fit() {
      if (!stageRef.current) return;
      // zoom is layout-aware (unlike transform: scale) — matches original prototype
      const z = Math.min(1, window.innerWidth / 1280);
      (stageRef.current.style as CSSStyleDeclaration & { zoom: string }).zoom = String(z);
    }
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", background: "#0A0A0A" }}>
      <div
        ref={stageRef}
        style={{ width: "1280px", background: "#0A0A0A", flexShrink: 0 }}
      >
        {children}
      </div>
    </div>
  );
}
