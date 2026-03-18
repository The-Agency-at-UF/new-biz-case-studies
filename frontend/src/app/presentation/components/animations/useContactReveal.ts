"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useContactReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mask = maskRef.current;
    const content = contentRef.current;
    if (!section || !mask || !content) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "top top",
        scrub: 1.2,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.fromTo(
      mask,
      { scale: 0.15, borderRadius: "50%" },
      { scale: 1, borderRadius: "0%", ease: "power2.inOut", duration: 1 }
    );

    tl.fromTo(
      content,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, ease: "power3.out", duration: 0.6 },
      "-=0.1"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return { sectionRef, maskRef, contentRef };
}