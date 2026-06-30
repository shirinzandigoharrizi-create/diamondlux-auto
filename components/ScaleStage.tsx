"use client";

import { useEffect, useRef } from "react";

export default function ScaleStage({ children }: { children: React.ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function fit() {
      if (!stageRef.current) return;
      const z = Math.min(1, window.innerWidth / 1280);
      stageRef.current.style.transform = `scale(${z})`;
      stageRef.current.style.transformOrigin = "top left";
      stageRef.current.parentElement!.style.height = `${stageRef.current.scrollHeight * z}px`;
    }
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div ref={stageRef} style={{ width: "1280px", background: "#0A0A0A" }}>
        {children}
      </div>
    </div>
  );
}
