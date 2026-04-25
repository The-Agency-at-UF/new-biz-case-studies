"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const services = [
  { label: "RESEARCH",    src: "/assets/Presentation/Service%20Blobs/Research.svg" },
  { label: "STRATEGY",    src: "/assets/Presentation/Service%20Blobs/Strategy.svg" },
  { label: "CREATIVE",    src: "/assets/Presentation/Service%20Blobs/Creative.svg" },
  { label: "PRODUCTION",  src: "/assets/Presentation/Service%20Blobs/Production.svg" },
  { label: "DEVELOPMENT", src: "/assets/Presentation/Service%20Blobs/Development.svg" },
  { label: "MEDIA",       src: "/assets/Presentation/Service%20Blobs/Media.svg" },
];

const BLOB_W = "clamp(200px, 30vw, 540px)";
const BLOB_H = "clamp(53px, 8vw, 143px)";
const BLOB_H_PX = 143; // used for GSAP pixel animation

function BlobLabel({ label, src }: { label: string; src: string }) {
  return (
    <span style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}>
      <img
        src={src}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 0,
        }}
      />
      <span style={{
        position: "relative",
        zIndex: 1,
        fontSize: "clamp(18px, 2.5vw, 48px)",
        fontWeight: 700,
        color: "#000",
        letterSpacing: "0.05em",
        lineHeight: 1,
        whiteSpace: "nowrap",
        textAlign: "center",
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
    requestAnimationFrame(() => {
      const h = slotARef.current?.offsetHeight ?? 143;
      const w = slotARef.current?.offsetWidth ?? 200;
      gsap.set(containerRef.current, { width: w, height: h });
      gsap.set(slotARef.current, { y: 0 });
      gsap.set(slotBRef.current, { y: h });
    });

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
        // use the incoming (offStage) element's natural width
        const newW = offStage.current?.offsetWidth ?? 200;
        const h = onStage.current?.offsetHeight ?? 143;

        // Animate the container width smoothly in the timeline below
        gsap.set(containerRef.current, { height: h });
        
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
          .to(offStage.current, { y: 0 }, 0)
          .to(containerRef.current, { width: newW }, 0);
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
        overflow: "hidden",
        verticalAlign: "middle",
        margin: "0px 0",
      }}
    >
      <span ref={slotARef} style={{ position: "absolute", top: 0, left: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <BlobLabel label={slotAContent.current.label} src={slotAContent.current.src} />
      </span>
      <span ref={slotBRef} style={{ position: "absolute", top: 0, left: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <BlobLabel label={slotBContent.current.label} src={slotBContent.current.src} />
      </span>
    </span>
  );
}