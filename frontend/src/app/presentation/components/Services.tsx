"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ServiceRotator from "./ServiceRotator";
import PhoneModel from "./PhoneModel";
import SeeOurWork from "./AnimatedArrow";

export default function OurServices() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#9E8FED] from-35% to-[#000] to-65%"
        animate={{ opacity: hovered ? 1 : 0.4 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
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
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <PhoneModel />
      </div>

      <div
        className="relative z-10 h-full flex items-center"
        style={{ paddingLeft: "6rem" }}
      >
        <h1
          className="text-white font-normal leading-relaxed m-0"
          style={{ fontSize: "clamp(16px, 4vw, 96px)" }}
        >
          The Agency is the gathering of the world&apos;s boldest and brightest new talent in{" "}
          <ServiceRotator />{" "}
          for Marketing and Communications.
        </h1>

        {/* Arrow sits below the text, bottom left */}
        <div className="absolute translate-x-[600%] translate-y-[350%]">
          <SeeOurWork phoneHovered={hovered} />
        </div>
      </div>
    </section>
  );
}