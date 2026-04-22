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
    <div className="flex justify-center">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex items-center justify-center gap-4 mt-6 mb-4"
      >
          <Image
            src={cokeZero}
            alt="Coca Cola Zero Sugar"
            className="w-70 h-auto pr-2"
          />

          <p className="font-bold text-4xl">X</p>

          <Image
            src={agencyLogo}
            alt="The Agency at the University of Florida"
            className="w-110 h-auto pl-2"
          />
        </motion.div>
    </div>
  );
}
