"use client";

import Script from "next/script";

export default function LoginBkgd() {
  return (
    <section
      className="fixed inset-0 z-0 w-full overflow-hidden bg-black"
      style={{ height: "100dvh" }}
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden z-0 bg-black">
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.12.88/build/spline-viewer.js"
          strategy="lazyOnload"
        />

        {/* @ts-ignore */}
        <spline-viewer
          loading-anim-type="spinner-small-dark"
          url="https://prod.spline.design/hwzfhJT6iymGJQU9/scene.splinecode"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        ></spline-viewer>

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>
    </section>
  );
}