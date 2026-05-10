"use client";

import { motion } from "framer-motion";

export default function UFAdmissionsFooter() {
  return (
    <div className="w-full relative shrink-0 flex flex-col bg-[#111B61]">
      {/* Logos container with margins */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="relative z-20 flex items-center justify-center gap-8 md:gap-12 max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20 my-16 md:my-20"
      >
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          src="/assets/UF-Admissions/UF_white.png"
          alt="UF Logo"
          className="h-20 md:h-24 lg:h-32 object-contain"
        />
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-white"
        >
          X
        </motion.p>
        <motion.img
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          src="/logos/Agency_logo_2.png"
          alt="The Agency Logo"
          className="h-16 md:h-20 lg:h-24 object-contain"
        />
      </motion.div>

      {/* Albert absolutely positioned */}
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="/assets/UF-Admissions/albert.png"
        alt="Albert the Alligator"
        className="absolute -left-32 md:-left-40 lg:-left-44 bottom-[400px] md:bottom-[500px] lg:bottom-[600px] mb-8 translate-y-1/2 h-[350px] md:h-[400px] lg:h-[500px] object-contain z-10 pointer-events-none"
      />

      {/* Image Footer Section */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative shrink-0 z-0">
        <img src="/assets/UF-Admissions/campusAerial.png" alt="UF Campus Aerial View" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(14,5,51,0.2)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111B61] via-transparent to-[#111B61] pointer-events-none" />
      </div>
    </div>
  );
}
