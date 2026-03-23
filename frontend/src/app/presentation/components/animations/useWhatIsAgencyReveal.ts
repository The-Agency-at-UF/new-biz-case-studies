"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroller } from "../../SmoothScrollWrapper";

gsap.registerPlugin(ScrollTrigger);

export function useWhatIsAgencyReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const tvRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scroller = useScroller();

  useEffect(() => {
    const section = sectionRef.current;
    const tv = tvRef.current;
    const videoOverlay = videoOverlayRef.current;
    const content = contentRef.current;
    if (!section || !tv || !videoOverlay || !content || !scroller.current) return;

    const ctx = gsap.context(() => {

      // Phase 1 — TV pops in from below, fires once on entry
      // completely separate from the scroll timeline
      gsap.set(tv, { y: 120, scale: 0, opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        scroller: scroller.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(tv, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.7)", // spring overshoot
          });
        },
      });

      // Phase 2 — scroll drives video expansion
      // delayed so TV pop-in finishes before scroll trigger measures dimensions
      gsap.delayedCall(0.9, () => {
        const startWidth = videoOverlay.offsetWidth;
        const startHeight = videoOverlay.offsetHeight;
        const startTop = videoOverlay.offsetTop;
        const startLeft = videoOverlay.offsetLeft;

        gsap.set(videoOverlay, { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            scroller: scroller.current,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });

        tl.fromTo(
          videoOverlay,
          {
            width: startWidth,
            height: startHeight,
            top: startTop,
            left: startLeft,
            borderRadius: "8px",
          },
          {
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            borderRadius: "0px",
            ease: "power2.inOut",
            duration: 0.6,
          }
        );

        tl.fromTo(
          content,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power3.out", duration: 0.4 },
          "-=0.1"
        );
      });

    }, section);

    return () => ctx.revert();
  }, [scroller]);

  return { sectionRef, tvRef, videoOverlayRef, contentRef };
}