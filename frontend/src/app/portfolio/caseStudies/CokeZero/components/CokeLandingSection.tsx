"use client";

import Image from "next/image";
import cokeZero from "../assets/CokeZeroWhite.png";
import agencyLogo from "../assets/AgencyLogoFull.png";
import cokeSpilling from "../assets/CokeSpilling.png";
import { motion } from "framer-motion";

export default function CokeLandingSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section
      id="coke-landing"
      className="relative min-h-screen flex items-center overflow-visible"
    >

      {/* Coke spill image: above background/gradients and splashing over headline text */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute inset-0 z-38 pointer-events-none overflow-visible"
      >
        <Image
          src={cokeSpilling}
          alt=""
          className="absolute -left-[16%] top-[40%] w-[860px] h-auto rotate-[43deg]"
        />
      </motion.div>

      <div className="relative z-35 text-white w-full max-w-6xl pl-20 pr-8 md:pl-25">
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-flex h-[50px] w-[160px] items-center justify-center bg-black/40 text-xl font-bold text-white outline outline-[4px] outline-[#ED1C24] mb-5"
        >
          Case Study
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex items-center gap-4 mt-6 mb-4"
        >
          <Image
            src={cokeZero}
            alt="Coca Cola Zero Sugar"
            className="w-75 h-auto pr-2"
          />

          <p className="font-bold text-4xl">X</p>

          <Image
            src={agencyLogo}
            alt="The Agency at the University of Florida"
            className="w-110 h-auto pl-2"
          />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "circOut" }}
          className="w-250 h-[3px] bg-[#ED1C24] mt-6 origin-left"
        />

        <motion.h3
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-6 w-250 max-w-full text-4xl font-bold leading-tight"
        >
          Developing Digital Solutions to Punt the Pandemic
        </motion.h3>
      </div>
    </section>
  );
}
