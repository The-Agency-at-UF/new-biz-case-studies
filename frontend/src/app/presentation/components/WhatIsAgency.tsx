"use client";

import { useRef } from "react";
import { useWhatIsAgencyReveal } from "./animations/useWhatIsAgencyReveal";

export default function WhatIsAgency() {
  const { sectionRef, tvRef, videoOverlayRef, contentRef } = useWhatIsAgencyReveal();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* TV Spline iframe */}
      <div
        ref={tvRef}
        className="relative z-10"
        style={{
          width: "60%",
          height: "60%",
          opacity: 0,
        }}
      >
        <iframe
          src="https://my.spline.design/untitled-qDZWt89GvNBFjkv6LVJyMs29/"
          frameBorder="0"
          style={{ width: "100%", height: "100%", border: "none" }}
          allowFullScreen
        />
      </div>

      {/* Video overlay — your exact TV screen dimensions */}
      <div
        ref={videoOverlayRef}
        className="absolute z-20"
        style={{
            width: "21%",
            height: "37%",
            top: "calc(46% - 18.5%)",  
            left: "calc(50% - 10.5%)",
            overflow: "hidden",
            opacity: 0,
            borderRadius: "8px",
        }}
        >
        <video
          ref={videoRef}
          src="/assets/Presentation/agency-video.mp4"
          autoPlay
          muted={false}
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* <div style={{
    position: "absolute",
    inset: 0,
    background: "rgba(83, 1, 215, 0.35)",
    pointerEvents: "none",
  }} /> */}
      </div>

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