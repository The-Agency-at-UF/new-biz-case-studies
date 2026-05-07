"use client";

import { motion } from "framer-motion";
import { gentonaMedium, gentonaBold } from "../../../../fonts";

export default function BlissHero() {
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
    <section className="relative overflow-hidden bg-[#F55096]">
      <img
        src="/assets/Bliss/backgroundImage.png"
        alt=""
        aria-hidden="true"
        className="block w-full h-auto"
      />

      {/* Pink gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F55096] from-20% via-[#F55096]/3 via-80% to-transparent">
        <div className="relative z-10 flex h-full max-w-[800px] flex-col justify-center px-8 md:px-10 lg:px-12">
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${gentonaMedium.className} w-fit rounded-none border-[2px] border-[#75CFE5] bg-[#F55096]/50 px-2 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-sm md:border-[3px] md:px-6 md:max-2xl:py-2 lg:text-lg`}
          >
            case study
          </motion.p>

          <motion.img
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/assets/Bliss/blissAgencyLogo.png"
            alt="Bliss"
            className="h-auto w-full"
          />

          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: "circOut" }}
            className="my-4 w-full origin-left border-t-4 border-[#75CFE5]"
          />

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${gentonaBold.className} text-xl text-white md:text-2xl lg:text-4xl`}
          >
            Helping Bliss Get Skin in the Gen Z Game
          </motion.p>
        </div>
      </div>
    </section>
  );
}