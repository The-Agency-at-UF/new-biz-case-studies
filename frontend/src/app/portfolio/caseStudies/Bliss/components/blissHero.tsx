"use client";

import { motion } from "framer-motion";
import { gentonaMedium } from "@/app/fonts";
import { CaseStudyHeroLogo } from "@/components/CaseStudy";

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
    <section className="relative h-screen w-full overflow-hidden bg-[#F55096]">
      <img
        src="/assets/Bliss/backgroundImage.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Pink gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F55096] from-20% via-[#F55096]/3 via-80% to-transparent">
        <div className="w-full px-6 md:px-12 lg:px-20 h-full z-10 flex flex-col justify-center py-10">
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${gentonaMedium.className} w-fit rounded-none border-[2px] border-[#75CFE5] bg-[#F55096]/50 text-white px-2 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-sm md:border-[3px] md:px-6 md:max-2xl:py-2 lg:text-lg mb-8 sm:mb-2`}
          >
            case study
          </motion.p>

          <CaseStudyHeroLogo
            clientLogoSrc="/logos/bliss.png"
            clientLogoAlt="Bliss Logo"
          />

          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: "circOut" }}
            className="my-4 w-full origin-left border-t-2 border-[#75CFE5]"
          />

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${gentonaMedium.className} text-xl lg:text-5xl text-white`}
          >
            Helping Bliss Get Skin in the Gen Z Game
          </motion.p>
        </div>
      </div>
    </section>
  );
}