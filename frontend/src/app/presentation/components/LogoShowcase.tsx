"use client";

// horizontal showcase of logos with automatic scroll animation
// logos from assets/Presentation/Client Logos folder

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

// import your logos here — add as many as needed
const LOGOS = [
  "/assets/Presentation/Client Logos/ABC Liquor Logo.png",
  "/assets/Presentation/Client Logos/Bliss logo.png",
  "/assets/Presentation/Client Logos/Bayer Pharma.png",
  "/assets/Presentation/Client Logos/Atlas Lab Logo.png",
  "/assets/Presentation/Client Logos/Astraeus Logo.png",
  "/assets/Presentation/Client Logos/Associated_Press_logoW.png",
  "/assets/Presentation/Client Logos/Analog Folk Logo.png",
  "/assets/Presentation/Client Logos/amazon alexa logo.png",
  "/assets/Presentation/Client Logos/AICPA Logo.png",
  "/assets/Presentation/Client Logos/alma Logo.png",
  "/assets/Presentation/Client Logos/Crawford Logo.png",
  "/assets/Presentation/Client Logos/Carnival Cruises logo.png",
  "/assets/Presentation/Client Logos/Career@Disney_logo__wht.png",
  "/assets/Presentation/Client Logos/Campus USA logo.png",
  "/assets/Presentation/Client Logos/body kitchen Logo.png",
  "/assets/Presentation/Client Logos/Florida Department of Citrus Logo.png",
  "/assets/Presentation/Client Logos/Dole.png",
  "/assets/Presentation/Client Logos/Disney Ad Sales Logo.png",
  "/assets/Presentation/Client Logos/Gator Unidos_logo_white.png",
  "/assets/Presentation/Client Logos/Gallegos Logo.png",
  "/assets/Presentation/Client Logos/Infinite Energy Logo.png",
  "/assets/Presentation/Client Logos/LDWW logo.png",
  "/assets/Presentation/Client Logos/Michelob-Ultra-LogoW.png",
  "/assets/Presentation/Client Logos/Meridian Healthcare Logo.png",
  "/assets/Presentation/Client Logos/McDonalds Logo.png",
  "/assets/Presentation/Client Logos/MARS Logo.png",
  "/assets/Presentation/Client Logos/Lovers Not Haters Logo.png",
  "/assets/Presentation/Client Logos/Loss Prevention Research Council Logo.png",
  "/assets/Presentation/Client Logos/loreal.png",
  "/assets/Presentation/Client Logos/Naomi Whittel Brand Logo.png",
  "/assets/Presentation/Client Logos/MONDAY.com Logo.png",
  "/assets/Presentation/Client Logos/miralax.png",
  "/assets/Presentation/Client Logos/Microsoft Logo.png",
  "/assets/Presentation/Client Logos/NBCU Logo.png",
  "/assets/Presentation/Client Logos/national soccer league.png",
  "/assets/Presentation/Client Logos/Nemours Logo.png",
  "/assets/Presentation/Client Logos/Orange Theory Logo.png",
  "/assets/Presentation/Client Logos/New Leaders Logo.png",
  "/assets/Presentation/Client Logos/Netrush logo.png",
  "/assets/Presentation/Client Logos/Phoenix is Rising Logo.png",
  "/assets/Presentation/Client Logos/Peppercomm.png",
  "/assets/Presentation/Client Logos/Proctor and Gamble Logo.png",
  "/assets/Presentation/Client Logos/Recom-Icon-RGB_White.png",
  "/assets/Presentation/Client Logos/xcaret.png",
  "/assets/Presentation/Client Logos/Wunderman Thompson Logo.png",
  "/assets/Presentation/Client Logos/we are social logo.png",
  "/assets/Presentation/Client Logos/warren henry.png",
  "/assets/Presentation/Client Logos/VML Logo.png",
  "/assets/Presentation/Client Logos/visa.png",
  "/assets/Presentation/Client Logos/Uber logo.png",
  "/assets/Presentation/Client Logos/Tommy Hilfiger Logo.png",
  "/assets/Presentation/Client Logos/Telemundo_logo_w.png",
  "/assets/Presentation/Client Logos/showtime.png",
  "/assets/Presentation/Client Logos/Seimens logo.png",
].map((logoPath) =>
  logoPath.replace(
    "/assets/Presentation/Client Logos/",
    "/assets/Presentation/Client Logos Normalized/"
  )
);

// split logos into two rows
const ROW_ONE = LOGOS.slice(0, Math.ceil(LOGOS.length / 2));
const ROW_TWO = LOGOS.slice(Math.ceil(LOGOS.length / 2));

function LogoRow({ logos, speed = 30, reverse = false }: {
  logos: string[];
  speed?: number;
  reverse?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // duplicate logos so the scroll loops seamlessly
    const totalWidth = track.scrollWidth / 2;

    gsap.set(track, { x: reverse ? -totalWidth : 0 });

    const tween = gsap.to(track, {
      x: reverse ? 0 : -totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [speed, reverse]);

  // duplicate the logos array for seamless loop
  const doubled = [...logos, ...logos];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "48px",
          width: "max-content",
          alignItems: "center",
          padding: "12px 0",
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{
              width: "120px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src={src}
              alt={`client logo ${i}`}
              width={120}
              height={60}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                
                opacity: 0.8,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoScroll() {
  return (
    <section className="w-full py-16 bg-black overflow-hidden">
      {/* Header text */}
      <div className="px-12 mb-10">
        <p className="text-white/50 text-sm uppercase tracking-widest mb-2">
          Trusted by
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-wide">
          Our Clients
        </h2>
      </div>

      {/* Two row logo grid */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <LogoRow logos={ROW_ONE} speed={30} />
        <LogoRow logos={ROW_TWO} speed={30} reverse />
      </div>
    </section>
  );
}