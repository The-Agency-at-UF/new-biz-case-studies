"use client";

import Image from "next/image";
import cokeZero from "../assets/CokeZeroWhite.png";
import agencyLogo from "../assets/AgencyLogoFull.png";
import { motion } from "framer-motion";

export default function CokeFooter() {
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
    <div className="flex justify-center bg-[#EC1C24] px-6 pb-16 pt-8 md:px-12 md:pb-24">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col items-center justify-center gap-5 text-white lg:flex-row lg:gap-6"
      >
        <Image
          src={cokeZero}
          alt="Coca Cola Zero Sugar"
          className="h-auto w-full max-w-[280px] sm:max-w-[360px]"
        />

        <p className="text-3xl font-bold lg:text-4xl">X</p>

        <Image
          src={agencyLogo}
          alt="The Agency at the University of Florida"
          className="h-auto w-full max-w-[320px] sm:max-w-[460px]"
        />
      </motion.div>
    </div>
  );
}