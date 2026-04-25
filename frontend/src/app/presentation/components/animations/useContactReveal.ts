"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useContactReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLHeadingElement>(null);
  const textLeftRef = useRef<HTMLSpanElement>(null);
  const textRightRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mask = maskRef.current;
    const content = contentRef.current;
    const textContainer = textContainerRef.current;
    const textLeft = textLeftRef.current;
    const textRight = textRightRef.current;
    const card = cardRef.current;
    if (!section || !mask || !content || !textContainer || !textLeft || !textRight || !card) return;

    const ctx = gsap.context(() => {
      gsap.set(mask, {
        webkitMaskSize: "5%",
        maskSize: "5%",
        webkitMaskPosition: "center",
        maskPosition: "center",
      });

      gsap.set(content, { opacity: 0 });
      gsap.set(card, { opacity: 0, scale: 0.8, y: 150 });
      gsap.set(textContainer, { gap: "0.5rem" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top", // trigger when section top hits viewport top
          end: "bottom bottom", // trigger when section bottom hits viewport bottom
          scrub: 1, // smooth scrubbing
          invalidateOnRefresh: true,
          onRefreshInit: () => {
            gsap.set(mask, {
              webkitMaskSize: "5%",
              maskSize: "5%",
              webkitMaskPosition: "center",
              maskPosition: "center",
            });
            gsap.set(content, { opacity: 0 });
            gsap.set(card, { opacity: 0, scale: 0.8, y: 150 });
            gsap.set(textContainer, { gap: "0.5rem" });
          },
        },
      });

      // Phase 1 — mask starts tiny, scales up to 100%
      tl.to(mask, {
        webkitMaskSize: "100%",
        maskSize: "100%",
        ease: "power2.out",
        duration: 2,
      });

      // Phase 1.5 — mask expands to fill screen
      tl.to(mask, {
        webkitMaskSize: "1500%",
        maskSize: "1500%",
        ease: "power2.in",
        duration: 2,
      }, "expand");

      // Phase 2 — text container fades in while mask expands
      tl.to(content, { opacity: 1, duration: 1 }, "expand");

      // Give a little pause so user can read the text
      tl.to({}, { duration: 1 });

      // Phase 3 — card breaks text in 2
      // Gap size = card width (360px) + total padding (20rem for 10rem on each side)
      tl.to(textContainer, { gap: "calc(360px + 20rem)", ease: "power2.inOut", duration: 1.5 }, "split");
      tl.to(card, { opacity: 1, scale: 1, y: 0, ease: "power2.out", duration: 1.5 }, "split+=0.2");

    }, section);

    return () => ctx.revert();
  }, []);

  return { sectionRef, maskRef, contentRef, textContainerRef, textLeftRef, textRightRef, cardRef };
}