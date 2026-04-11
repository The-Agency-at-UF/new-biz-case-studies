"use client";

import { useRef } from "react";
import { useWhatIsAgencyReveal } from "./animations/useWhatIsAgencyReveal";

export default function WhatIsAgency() {
  const { sectionRef, videoOverlayRef, maskLayerRef, tvFrameRef, contentRef } = useWhatIsAgencyReveal();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Zooming video layer */}
      <div
        ref={videoOverlayRef}
        className="absolute z-10"
        style={{
            width: "42%",
            height: "28%",
            top: "calc(50% - 14%)",  
            left: "calc(50% - 21%)",
            overflow: "visible",
            opacity: 0,
            aspectRatio: "1.5 / 1",
        }}
        >
        <div
          ref={maskLayerRef}
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            borderRadius: "8px",
            maskImage: "url('/assets/Presentation/tv-mask_bw_1.png')",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "100% 100%",
            maskComposite: "multiply",
            WebkitMaskImage: "url('/assets/Presentation/tv-mask_bw_1.png')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "100% 100%",
            WebkitMaskComposite: "destination-in",
          }}
        >
          <video
            ref={videoRef}
            src="/assets/Presentation/agency-video.mp4"
            autoPlay
            muted={false}
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>

      {/* Static TV frame layer (left behind while video expands) */}
      <img
        ref={tvFrameRef}
        src="/assets/Presentation/tv-mask.png"
        alt=""
        aria-hidden
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
        className="absolute z-20"
        style={{
          top: "calc(50% - 14%)",
          left: "calc(50% - 21%)",
          width: "42%",
          height: "28%",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          opacity: 0,
        }}
      />

      {/* Content — fades in after video fills section */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-30 flex flex-col items-start justify-end p-16 opacity-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.20) 100%)" }}
      >
        <p className="text-white/50 text-sm uppercase tracking-widest mb-3">
          The Agency at UF
        </p>
        <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-wide mb-4">
          Full-Service Marketing.<br />
          Communications Agency.
        </h1>
        <p className="text-white/70 text-base max-w-xl leading-relaxed mb-6">
          We enable partner agencies and clients to tap into the energy, insights, diversity,
          and talent of the nation&#39;s top marketing, advertising, PR and communications students
          in a unique and scalable way.
          <br /><br />
          Our model scales seamlessly with your needs, adapting as your work ebbs and flows
          to deliver impact with efficiency. We&#39;re not just trend followers—we&#39;re trend creators.
          Powered by the brightest junior talent, we blend fresh perspectives with seasoned
          strategy to redefine marketing and advertising for the modern world.
        </p>
        <button className="border border-white text-white text-sm px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
          Our Services
        </button>
      </div>
    </section>
  );
}