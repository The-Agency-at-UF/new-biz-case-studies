"use client";

import { useEffect, useState } from "react";
import { useAdventure } from "../context/AdventureContext";

const SPLINE_VIEWER_SRC =
  "https://unpkg.com/@splinetool/viewer@1.12.71/build/spline-viewer.js";

export default function ChooseYourAdventure() {
  const { selectBlob } = useAdventure();
  const [blobSelected, setBlobSelected] = useState(false);

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

  function handleBlobClick(blobNumber: 1 | 2 | 3) {
    if (blobSelected) return;

    setBlobSelected(true);

    requestAnimationFrame(() => {
      selectBlob(blobNumber);
    });
  }

  return (
    <section className="relative w-full h-dvh bg-black overflow-hidden">
      <>
        <spline-viewer
          url="https://prod.spline.design/M5OJQIIS7GYvr4OW/scene.splinecode"
          className="absolute inset-0 w-full h-full z-0"
        />
      </>

      <div className="absolute inset-0 z-10 flex flex-row items-center justify-around px-12">
        <p
          onClick={() => handleBlobClick(1)}
          className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wide text-center cursor-pointer hover:opacity-70 transition-opacity"
        >
          What is the Agency?
        </p>
        <p
          onClick={() => handleBlobClick(2)}
          className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wide text-center cursor-pointer hover:opacity-70 transition-opacity"
        >
          Our Services
        </p>
        <p
          onClick={() => handleBlobClick(3)}
          className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wide text-center cursor-pointer hover:opacity-70 transition-opacity"
        >
          See our Work
        </p>
      </div>
    </section>
  );
}