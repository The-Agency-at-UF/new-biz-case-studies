"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroller } from "../../SmoothScrollWrapper";

gsap.registerPlugin(ScrollTrigger);

export function useWhatIsAgencyReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const maskLayerRef = useRef<HTMLDivElement>(null);
  const tvFrameRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scroller = useScroller();

  useEffect(() => {
    const section = sectionRef.current;
    const videoOverlay = videoOverlayRef.current;
    const maskLayer = maskLayerRef.current;
    const tvFrame = tvFrameRef.current;
    const content = contentRef.current;
    if (!section || !videoOverlay || !maskLayer || !content || !scroller.current) return;

    const maskImageValue = "url('/assets/Presentation/tv-mask_bw.png')";

    const setMaskEnabled = (enabled: boolean) => {
      const cssValue = enabled ? maskImageValue : "none";
      maskLayer.style.maskImage = cssValue;
      maskLayer.style.WebkitMaskImage = cssValue;
    };

    const ctx = gsap.context(() => {

      // Phase 1 — video overlay pops in from below, fires once on entry
      // completely separate from the scroll timeline
      gsap.set(videoOverlay, {
        y: 120,
        opacity: 0,
        transformOrigin: "center center",
        willChange: "transform, opacity, border-radius",
      });
      if (tvFrame) {
        gsap.set(tvFrame, { y: 120, opacity: 0, willChange: "transform, opacity" });
      }
      setMaskEnabled(true);

      ScrollTrigger.create({
        trigger: section,
        scroller: scroller.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(videoOverlay, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.7)", // spring overshoot
          });
          if (tvFrame) {
            gsap.to(tvFrame, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "back.out(1.7)",
            });
          }
        },
      });

      // Phase 2 — scroll drives video expansion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scroller: scroller.current,
          start: "top top",
          end: "+=75%",
          scrub: 0.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 2,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          onUpdate: (self) => {
            // Keep the video clipped to the TV at first, then let it break out.
            setMaskEnabled(self.progress < 0.32);
          },
        },
      });

      tl.fromTo(
        videoOverlay,
        {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
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
          ease: "none",
          duration: 0.7,
        }
      );

      tl.fromTo(
        content,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "none", duration: 0.3 },
        "-=0.08"
      );

    }, section);

    return () => ctx.revert();
  }, [scroller]);

  return { sectionRef, videoOverlayRef, maskLayerRef, tvFrameRef, contentRef };
}