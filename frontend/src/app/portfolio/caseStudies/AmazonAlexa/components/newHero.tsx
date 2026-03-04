"use client";

import { gentonaMedium, gentonaBook } from "@/app/fonts";
import { motion } from "framer-motion";

export default function AmazonAlexaHero() {
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
      <div className="relative ">
        <motion.img
          src="/assets/AmazonAlexa/amazon-echo.png"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="bg-[url('/assets/AmazonAlexa/amazonbg.png')] bg-cover bg-no-repeat w-full h-auto md:-translate-y-35 lg:-translate-y-40"
        />
        {/*Case Study rectangle */}
        <div className="absolute flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0 bg-gradient-to-t from-[#1D3B56] from-40% via-[#1D3B57]/3 via-80% to-transparent">
            <div className="h-full z-10 flex flex-col justify-center items-start py-10">
                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-white px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#1E667D]/30 backdrop-blur-sm w-fit mb-4 lg:mb-8`}
                >
                case study</motion.p>
                <motion.img
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  src="/assets/AmazonAlexa/alexa_logos.png"
                  className="align-left max-h-[170px] w-auto object-contain "
                />
                <motion.hr
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.15, ease: "circOut" }}
                  className="border-[#2AADCD] border-t-4 my-4 w-full origin-left"
                />
                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className={`${gentonaBook.className} text-xl lg:text-4xl text-white`}
                >
                  Showcasing Alexa&apos;s Personality, One Gen Z Answer at a Time
                </motion.p>
            </div>
        </div>
      </div>
    );
}