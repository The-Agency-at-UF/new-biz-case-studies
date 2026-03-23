"use client";

import { useEffect } from "react";

export default function PhoneModel() {
  useEffect(() => {
    // dynamically load the spline viewer script once on mount
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.70/build/spline-viewer.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
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