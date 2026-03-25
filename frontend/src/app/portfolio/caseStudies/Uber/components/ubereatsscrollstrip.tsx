"use client";

import { useRef, useEffect } from "react";

const PHONE_SLIDES = [
  { src: "/assets/Uber/Uber_Mockup_1.svg", label: "Uber mockup 1" },
  { src: "/assets/Uber/Uber_Mockup_2.svg", label: "Uber mockup 2" },
  { src: "/assets/Uber/Uber_Mockup_4.svg", label: "Uber mockup 4" },
  { src: "/assets/Uber/Uber_Mockup_3.svg", label: "Uber mockup 3" },
];

export default function UberEatsScrollStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += speed;

        // Reset after scrolling through the FIRST set of slides
        // scrollWidth = 4 copies, so one copy = scrollWidth / 4
        const oneSetWidth = track.scrollWidth / 4;
        if (posRef.current >= oneSetWidth) {
          posRef.current = 0;
        }

        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const pause = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(rafRef.current);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  // 4 copies ensures there's always content filling the screen during reset
  const slides = [...PHONE_SLIDES, ...PHONE_SLIDES, ...PHONE_SLIDES, ...PHONE_SLIDES];

  return (
    <div className="relative w-full overflow-hidden bg-[#142328] mt-10">
      {/* Left + right fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-48 z-10 bg-gradient-to-r from-[#142328] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-48 z-10 bg-gradient-to-l from-[#142328] to-transparent" />

      <div
        ref={trackRef}
        className="flex gap-4 w-max will-change-transform pl-15 md:pl-30 lg:pl-40"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[44vw] min-w-[320px] max-w-[500px]"
          >
            <div className="relative rounded-[2.4rem] border-[2.5px] border-white/20 overflow-hidden shadow-2xl aspect-[9/19.5] bg-black">
              <img
                src={slide.src}
                alt={slide.label}
                className="w-full h-full object-cover object-top"
              />
              {/* Dynamic island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[28%] h-3 bg-black rounded-full z-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}