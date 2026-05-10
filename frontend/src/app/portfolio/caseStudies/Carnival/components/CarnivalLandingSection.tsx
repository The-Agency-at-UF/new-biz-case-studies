"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import agencyLogo from "../../CokeZero/assets/AgencyLogoFull.png";
import carnivalLogo from "../assets/carnival-Logo.svg";

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

export default function CarnivalLandingSection() {
  const lineColor = "#EF3340";

  return (
    <section
      id="carnival-landing"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl px-6 pt-28 pb-12 text-white sm:px-10 md:px-14 lg:px-20">
        {/* 1. Case Study Tag */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-6 inline-flex h-[50px] w-[160px] items-center justify-center border-4 text-xl font-bold text-white bg-[#0d1c46]/50"
          style={{ borderColor: lineColor }}
        >
          Case Study
        </motion.p>

        {/* 2. Logo */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6"
        >
          <Image
            src={carnivalLogo}
            alt="Carnival"
            className="h-auto w-full max-w-[300px] sm:max-w-[400px]"
            priority
          />

          <p className="text-3xl font-bold lg:text-4xl">X</p>

          <Image
            src={agencyLogo}
            alt="The Agency at the University of Florida"
            className="h-auto mt-8 w-full max-w-[400px]"
            priority
          />
        </motion.div>

        <div className="mt-30 inline-block max-w-full align-top sm:max-w-[28rem] lg:max-w-[56rem]">
          {/* 3. Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: "circOut" }}
            className="mb-6 h-[4px] w-full origin-left"
            style={{ backgroundColor: lineColor }}
          />

          {/* 4. Subtitle */}
          <motion.h2
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            The Agency Helps Carnival Navigate the Sentiments of Travelers Post-2021
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
