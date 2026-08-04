"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useWhatIsAgencyReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tvOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const videoOverlay = videoOverlayRef.current;
    const content = contentRef.current;
    const video = videoRef.current;
    const tvOverlay = tvOverlayRef.current;
    if (!section || !videoOverlay || !content || !video || !tvOverlay) return;

    const refresh = () => ScrollTrigger.refresh();
    const startVideo = () => {
      video.play().catch(() => {
        // If the browser blocks autoplay on first paint, the next user gesture
        // or layout refresh can retry playback.
      });
    };

    // Read once at mount; toggling the OS setting later applies on reload.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {

      // Phase 1 — video overlay pops in from below
      gsap.set(videoOverlay, {
        y: 120,
        opacity: 0,
        borderRadius: "8px",
        transformOrigin: "center center",
        willChange: "transform, opacity, border-radius",
      });

      if (prefersReduced) {
        // Skip the spring pop-in; just present the overlay.
        gsap.set(videoOverlay, { y: 0, opacity: 1 });
      } else {
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
      }

      if (video.readyState >= 2) {
        startVideo();
      }

      // Phase 2 — scroll drives video expansion.
      // No snap: the old snapTo:[0,1] yanked the page to the framed state on its
      // own (scrolljacking). Instead the scrubbed zoom is the featured animation and
      // a trailing hold (added after the tweens) lets the finished reveal rest
      // without moving the page. Under reduced motion we skip the pin/scrub entirely.
      const tl = gsap.timeline(
        prefersReduced
          ? { paused: true }
          : {
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=110%",
                scrub: 0.2,
                pin: true,
                pinSpacing: true,
                anticipatePin: 2,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
              },
            }
      );

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

      // Fade out the TV frame in lockstep with the zoom (both 0 → 1.0) so the frame
      // is gone exactly when the video reaches full screen.
      tl.to(
        tvOverlay,
        {
          opacity: 0,
          duration: 1.0,
          ease: "none",
        },
        0 // Starts at the same time as the video zoom (0s)
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

      // Content fades in over the tail of the zoom and finishes exactly when the
      // scaling / TV-frame fade / pop all complete (t = 1.0). It used to end ~0.2
      // later, so the video looked "done" while the copy was still arriving — the
      // awkward gap where you had to scroll again to reach the final state.
      tl.fromTo(
        content,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "none", duration: 0.3 },
        0.7 // absolute position → ends at 1.0, together with the video scaling
      );

      if (prefersReduced) {
        // Render the completed composition statically — no zoom motion, but the
        // full-screen video and the copy are fully shown and readable.
        tl.progress(1);
      } else {
        // Short settle after the complete final state (already reached at t = 1.0)
        // — just a beat before further scroll leaves the section, not a long dead
        // zone the user has to scrub through.
        tl.to({}, { duration: 0.25 });
      }

    }, section);

    const rafId = window.requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);
    video.addEventListener("loadeddata", startVideo, { once: true });
    video.addEventListener("canplay", startVideo, { once: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("load", refresh);
      video.removeEventListener("loadeddata", startVideo);
      video.removeEventListener("canplay", startVideo);
      ctx.revert();
    };
  }, []);

  return { sectionRef, videoOverlayRef, contentRef, videoRef, tvOverlayRef };
}