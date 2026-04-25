"use client";
import { useContactReveal } from "./animations/useContactReveal";
import ContactCard from "./ContactCard";

export default function Contact() {
  const { sectionRef, maskRef, contentRef, textContainerRef, textLeftRef, textRightRef, cardRef } = useContactReveal();

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[300vh] bg-black"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Expanding mask — AgencyPolaroids.png is the background that gets revealed */}
        <div
      ref={maskRef}
      className="absolute inset-0 origin-center"
      style={{
        maskImage: "url('/assets/Presentation/contact_clipping_mask.png')",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: "url('/assets/Presentation/contact_clipping_mask.png')",
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
        className="absolute inset-0 z-10"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <h1 
            ref={textContainerRef}
            className="absolute tracking-wide text-white text-center whitespace-nowrap z-10 font-normal flex items-center justify-center"
            style={{
              fontSize: "36px",
              fontFamily: "'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif",
              fontWeight: 400
            }}
          >
            <span ref={textLeftRef}>Built By Gen Z,</span>
            <span ref={textRightRef}>For Everyone.</span>
          </h1>
          
          <div ref={cardRef} className="absolute z-20">
            <ContactCard />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}