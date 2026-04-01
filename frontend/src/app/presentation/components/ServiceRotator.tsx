"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const services = [
  { label: "RESEARCH",    fill: "#F97316" },
  { label: "STRATEGY",    fill: "#A855F7" },
  { label: "CREATIVE",    fill: "#EF4444" },
  { label: "PRODUCTION",  fill: "#3B82F6" },
  { label: "DEVELOPMENT", fill: "#22C55E" },
  { label: "MEDIA",       fill: "#EC4899" },
];

const BLOB_PATH = "M39.5673 5.5534C7.36227 7.77476 -0.226278 30.5437 0.00508057 41.6505V99.267C0.00508057 113.382 8.75035 141.195 43.7314 139.529C78.7125 137.863 169.359 136.058 210.309 135.364C223.635 129.255 407.889 137.909 498.35 143C530.555 136.336 539.532 118.472 539.995 110.374V47.2039C540.689 -1.38835 475.446 6.94175 462.952 4.16505C452.958 1.94369 285.269 0.462783 202.674 0C161.724 0.925566 71.7724 3.33204 39.5673 5.5534Z";

const BLOB_W = "clamp(200px, 30vw, 540px)";
const BLOB_H = "clamp(53px, 8vw, 143px)";
const BLOB_H_PX = 143; // used for GSAP pixel animation

function BlobLabel({ label, fill }: { label: string; fill: string }) {
  return (
    <span style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: BLOB_W,
      height: BLOB_H,
    }}>
      <svg
        viewBox="0 0 540 143"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        preserveAspectRatio="none"
      >
        <path d={BLOB_PATH} fill={fill} />
      </svg>
      <span style={{
        position: "relative",
        zIndex: 1,
        fontSize: "clamp(18px, 2.5vw, 48px)",
        fontWeight: 700,
        color: "#000",
        letterSpacing: "0.05em",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}>
        {label}
      </span>
    </span>
  );
}

export default function ServiceRotator() {
  const indexRef = useRef(0);
  const isAnimating = useRef(false);
  const slotARef = useRef<HTMLSpanElement>(null);
  const slotBRef = useRef<HTMLSpanElement>(null);
  const slotAContent = useRef(services[0]);
  const slotBContent = useRef(services[1]);
  const activeSlot = useRef<"a" | "b">("a");
  const containerRef = useRef<HTMLSpanElement>(null);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    gsap.set(slotARef.current, { y: 0 });
    gsap.set(slotBRef.current, { y: BLOB_H_PX });

    const interval = setInterval(() => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const nextIndex = (indexRef.current + 1) % services.length;
      const nextService = services[nextIndex];

      const onStage = activeSlot.current === "a" ? slotARef : slotBRef;
      const offStage = activeSlot.current === "a" ? slotBRef : slotARef;

      if (activeSlot.current === "a") {
        slotBContent.current = nextService;
      } else {
        slotAContent.current = nextService;
      }

      forceUpdate(n => n + 1);

      requestAnimationFrame(() => {
        // get actual rendered height for accurate animation
        const h = containerRef.current?.offsetHeight ?? BLOB_H_PX;

        gsap.set(offStage.current, { y: h });

        gsap.timeline({
          defaults: { duration: 0.5, ease: "power2.inOut" },
          onComplete: () => {
            indexRef.current = nextIndex;
            activeSlot.current = activeSlot.current === "a" ? "b" : "a";
            isAnimating.current = false;
          },
        })
          .to(onStage.current, { y: -h }, 0)
          .to(offStage.current, { y: 0 }, 0);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      ref={containerRef}
      style={{
        position: "relative",
        display: "inline-block",
        width: BLOB_W,
        height: BLOB_H,
        overflow: "hidden",
        verticalAlign: "middle",
        margin: "8px 0",
        boxSizing: "content-box",
      }}
    >
      <span ref={slotARef} style={{ position: "absolute", inset: 0, display: "block" }}>
        <BlobLabel label={slotAContent.current.label} fill={slotAContent.current.fill} />
      </span>
      <span ref={slotBRef} style={{ position: "absolute", inset: 0, display: "block" }}>
        <BlobLabel label={slotBContent.current.label} fill={slotBContent.current.fill} />
      </span>
    </span>
  );
}