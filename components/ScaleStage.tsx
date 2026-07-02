"use client";

import { useEffect, useRef } from "react";

export default function ScaleStage({ children }: { children: React.ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const wrapper = wrapperRef.current;
    if (!stage || !wrapper) return;

    function fit() {
      if (!stage || !wrapper) return;
      const z = Math.min(1, window.innerWidth / 1280);
      // transform: scale() works identically in all browsers (Chrome, Safari, Firefox)
      stage.style.transform = `scale(${z})`;
      stage.style.transformOrigin = "top left";
      // Manually set wrapper dimensions to match the visual (scaled) size
      // because transform does not affect the layout box
      wrapper.style.width = `${1280 * z}px`;
      wrapper.style.height = `${stage.scrollHeight * z}px`;
    }

    fit();

    // Re-measure if content height changes (e.g. images load)
    const ro = new ResizeObserver(fit);
    ro.observe(stage);
    window.addEventListener("resize", fit);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", background: "#0A0A0A" }}>
      <div ref={wrapperRef} style={{ overflow: "hidden", background: "#0A0A0A", flexShrink: 0 }}>
        <div ref={stageRef} style={{ width: "1280px", background: "#0A0A0A" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
