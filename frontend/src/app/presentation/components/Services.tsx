"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceRotator from "./ServiceRotator";
import PhoneModel from "./PhoneModel";
import SeeOurWork from "./AnimatedArrow";

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.2, 0.6, 1, 0.6, 0.2]
  );

  return (
    <section ref={sectionRef} className="relative w-full h-dvh overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#9E8FED] from-35% to-[#000] to-65%"
        style={{ opacity: gradientOpacity }}
      />

      <div
        style={{
          float: "right",
          position: "relative",
          width: "55%",
          height: "100%",
          shapeOutside: "polygon(40% 0%, 104% 100%, 0% 52%)",
          shapeMargin: "5px",
          marginTop: "5%",
          marginRight: "-8%",
          cursor: "pointer",
        }}
        onMouseEnter={() => setPhoneHovered(true)}
        onMouseLeave={() => setPhoneHovered(false)}
        onClick={() => {
          document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <PhoneModel />
      </div>

      <div
        className="relative z-10 h-full flex items-center"
        style={{ paddingLeft: "3rem" }}
      >
        <h1
          className="text-white font-normal leading-relaxed m-0"
          style={{ 
            fontSize: "clamp(16px, 4vw, 96px)",
            fontFamily: "'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif",
            fontWeight: 300
          }}
        >
          The Agency is the gathering of the world&apos;s boldest and brightest new talent in{" "}
          <ServiceRotator />{" "}
          for Marketing and Communications.
        </h1>

        {/* Arrow sits below the text, bottom left */}
        <div className="absolute translate-x-[600%] translate-y-[350%]">
          <SeeOurWork phoneHovered={phoneHovered} />
        </div>
      </div>
    </section>
  );
}