"use client";
import { useContactReveal } from "./animations/useContactReveal";

export default function Contact() {
  const { sectionRef, maskRef, contentRef } = useContactReveal();

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Expanding mask — AgencyPolaroids.png is the background that gets revealed */}
      <div
        ref={maskRef}
        className="absolute inset-0 origin-center"
        style={{
          maskImage: "url('/assets/Presentation/contact_clipping_mask.png')",
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: "url('/assets/Presentation/contact_clipping_mask.png')",
          WebkitMaskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          backgroundImage: "url('/assets/Presentation/AgencyPolaroids.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 z-[1]" />

      {/* Content — fades in after mask fills section */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col gap-10 items-center justify-center z-10 opacity-0"
      >
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase tracking-wide text-white text-center">
          Built By Gen Z, For Everyone.
        </h1>
      </div>
    </section>
  );
}