"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroller } from "../../SmoothScrollWrapper";

gsap.registerPlugin(ScrollTrigger);

export function useContactReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scroller = useScroller();

  useEffect(() => {
    const section = sectionRef.current;
    const mask = maskRef.current;
    const content = contentRef.current;
    if (!section || !mask || !content || !scroller.current) return;

    const ctx = gsap.context(() => {
      gsap.set(mask, {
        webkitMaskSize: "5%",
        maskSize: "5%",
        webkitMaskPosition: "center",
        maskPosition: "center",
      });

      gsap.set(content, { y: "100%", opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          scroller: scroller.current,
          start: "top 85%",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
          onRefreshInit: () => {
            gsap.set(mask, {
              webkitMaskSize: "5%",
              maskSize: "5%",
              webkitMaskPosition: "center",
              maskPosition: "center",
            });
            gsap.set(content, { y: "100%", opacity: 0 });
          },
        },
      });

      // Phase 1 — mask starts tiny, scales up via maskSize
      // starts at a small centered size, grows to fill
      tl.fromTo(
        mask,
        {
          webkitMaskSize: "5%",
          maskSize: "5%",
          webkitMaskPosition: "center",
          maskPosition: "center",
        },
        {
          webkitMaskSize: "100%",
          maskSize: "100%",
          ease: "power2.inOut",
          duration: 0.6,
        }
      );

      // Phase 2 — push maskSize way beyond 100% to force
      // the organic shape edges to deform past the screen boundary
      tl.to(mask, {
        webkitMaskSize: "250%",
        maskSize: "250%",
        ease: "power3.in",
        duration: 0.4,
      });

      // Phase 3 — content wipes up from below
      tl.fromTo(
        content,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, ease: "power3.out", duration: 0.4 },
        "-=0.1"
      );
    }, section);

    return () => ctx.revert();
  }, [scroller]);

  return { sectionRef, maskRef, contentRef };
}