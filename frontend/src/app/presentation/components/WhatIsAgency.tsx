"use client";

import { useRef, useState } from "react";
import { useWhatIsAgencyReveal } from "./animations/useWhatIsAgencyReveal";

export default function WhatIsAgency() {
  const { sectionRef, videoOverlayRef, contentRef } = useWhatIsAgencyReveal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Zooming video layer (starts small, expands to fill screen on scroll) */}
      <div
        ref={videoOverlayRef}
        className="absolute z-10"
        style={{
          width: "50vw",
          height: "28.125vw",
          top: "calc(50% - 14.0625vw)",
          left: "calc(50% - 25vw)",
          overflow: "hidden",
          opacity: 0,
          borderRadius: "8px",
        }}
      >
        <video
          ref={videoRef}
          src="https://new-biz-case-studies-bucket.s3.us-east-1.amazonaws.com/case-studies/Spring'24Recruitment_v4_02_22_24.mp4"
          autoPlay
          muted={isMuted}
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

      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute z-40"
        style={{
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "999px",
          padding: "0.5rem 1rem",
          color: "white",
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.05em",
          cursor: "pointer",
          transition: "background 0.2s, border-color 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
      >
        {isMuted ? (
          // Speaker with X (muted)
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          // Speaker with waves (unmuted)
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </section>
  );
}