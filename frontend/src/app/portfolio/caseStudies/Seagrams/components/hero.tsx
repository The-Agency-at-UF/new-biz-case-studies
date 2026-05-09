"use client";

import { gentonaMedium, workSans } from "@/app/fonts";
import { CaseStudyHeroLogo } from "@/components/CaseStudy";
import { motion } from "framer-motion";

export default function SeagramsHero() {
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
    <div className="relative h-screen w-full overflow-hidden">
        <img src="/assets/Seagrams/seagramsbg.png" className="absolute inset-0 w-full h-full object-cover object-center"></img>
        {/*Case Study rectangle */}
        <div className="absolute flex h-full w-full flex-col inset-0 bg-gradient-to-t from-black from-20% via-[#000]/3 via-90% to-transparent">
            <div className="w-full px-6 md:px-12 lg:px-20 h-full z-10 flex flex-col justify-end pb-16 md:pb-24 lg:pb-32 pt-32">
                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-[#C8D7A0] px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#C8D7A0]/30 backdrop-blur-sm w-fit mb-8 sm:mb-2 text-white`}
                >
                case study</motion.p>
                <CaseStudyHeroLogo
                  clientLogoSrc="/logos/seagrams-logo.png"
                  clientLogoAlt="Seagram's Logo"
                />
                <motion.hr
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.15, ease: "circOut" }}
                  className="border-[#C8D7A0] border-t-2 my-4 w-full origin-left"
                />
                <motion.p
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className={`${gentonaMedium.className} text-xl lg:text-5xl text-white`}
                >
                  Fighting for the Limelight: Distinguishing and Growing Seagram&apos;s Brand Among Competitors
                </motion.p>
            </div>
        </div>
      </div>
  );
}
