"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useWhatIsAgencyReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tvOverlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const videoOverlay = videoOverlayRef.current;
    const content = contentRef.current;
    const video = videoRef.current;
    const tvOverlay = tvOverlayRef.current;
    if (!section || !videoOverlay || !content || !video || !tvOverlay) return;

    const ctx = gsap.context(() => {

      // Phase 1 — video overlay pops in from below
      gsap.set(videoOverlay, {
        y: 120,
        opacity: 0,
        borderRadius: "8px",
        transformOrigin: "center center",
        willChange: "transform, opacity, border-radius",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(videoOverlay, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.7)", // spring overshoot
          });
        },
      });

      // Phase 2 — scroll drives video expansion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=75%",
          scrub: 0.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 2,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      tl.fromTo(
        videoOverlay,
        {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          borderRadius: "8px",
        },
        {
          x: () => window.innerWidth / 2 - videoOverlay.offsetLeft - videoOverlay.offsetWidth / 2,
          y: () => window.innerHeight / 2 - videoOverlay.offsetTop - videoOverlay.offsetHeight / 2,
          // Use a single scale factor so the video keeps its aspect ratio.
          scaleX: () => Math.max(
            window.innerWidth / videoOverlay.offsetWidth,
            window.innerHeight / videoOverlay.offsetHeight
          ),
          scaleY: () => Math.max(
            window.innerWidth / videoOverlay.offsetWidth,
            window.innerHeight / videoOverlay.offsetHeight
          ),
          borderRadius: "0px",
          ease: "none",
          duration: 1.0,
        }
      );

      // Halfway through the zoom, fade out the TV frame
      tl.to(
        tvOverlay,
        { opacity: 0, duration: 0.5, ease: "none" },
        0.5 // Starts at 0.5s into the 1.0s timeline
      );

      // Pop the video out of the TV screen
      tl.to(
        video,
        {
          left: "0%",
          top: "0%",
          width: "100%",
          height: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.5
      );

      tl.fromTo(
        content,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "none", duration: 0.3 },
        "-=0.08"
      );

      // Dynamic company pages can change layout after this section mounts.
      // Refresh once the trigger is fully created so pin/start/end values are
      // recalculated against the final document height.
      requestAnimationFrame(() => ScrollTrigger.refresh());

    }, section);

    return () => ctx.revert();
  }, []);

  return { sectionRef, videoOverlayRef, contentRef, videoRef, tvOverlayRef };
}