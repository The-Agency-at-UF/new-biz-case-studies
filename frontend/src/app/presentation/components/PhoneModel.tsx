"use client";

import { useEffect } from "react";

const SPLINE_VIEWER_SRC =
  "https://unpkg.com/@splinetool/viewer@1.12.71/build/spline-viewer.js";

export default function PhoneModel() {
  useEffect(() => {
    if (customElements.get("spline-viewer")) return;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${SPLINE_VIEWER_SRC}"]`
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = SPLINE_VIEWER_SRC;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="w-full h-full">
      <spline-viewer
        url="https://prod.spline.design/P-BAXqmJiUsWs0Gh/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}