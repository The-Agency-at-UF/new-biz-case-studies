"use client";

import { useEffect, useRef, createContext, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext<React.RefObject<HTMLDivElement | null>>({ current: null });

export const useScroller = () => useContext(ScrollContext);

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.defaults({
        scroller: containerRef.current,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <ScrollContext.Provider value={containerRef}>
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll"
        style={{ scrollBehavior: "auto" }}
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
}