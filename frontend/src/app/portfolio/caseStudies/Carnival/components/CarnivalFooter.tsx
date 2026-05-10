"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import agencyLogo from "../../CokeZero/assets/AgencyLogoFull.png";

export default function CarnivalFooter() {
  return (
    <div className="flex justify-center px-6 pb-16 pt-8 md:px-12 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col items-center justify-center gap-5 text-white lg:flex-row lg:gap-6"
      >
        <Image
          src="/assets/Carnival/carnival-Logo.svg"
          alt="Carnival"
          width={300}
          height={150}
          className="h-auto w-full max-w-[280px] sm:max-w-[360px]"
        />

        <p className="text-3xl font-bold lg:text-4xl">X</p>

        <Image
          src={agencyLogo}
          alt="The Agency at the University of Florida"
          className="h-auto w-full max-w-[320px] sm:max-w-[420px]"
        />
      </motion.div>
    </div>
  );
}
