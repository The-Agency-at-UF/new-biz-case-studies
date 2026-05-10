"use client";

import localFont from "next/font/local";
import { motion } from "framer-motion";

const gentonaMedium = localFont({
  src: "../../../../../../src/app/fonts/gentona/Gentona Medium.otf",
  display: "swap",
});

const gentonaBook = localFont({
  src: "../../../../../../src/app/fonts/gentona/Gentona Book.otf",
  display: "swap",
});

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

const HERO_BG = "/assets/Smirnoff/image%2049.png";
const LOGO_ACCENT = "#DA042C";
const LOGO_LINE_SHADOW = "0 2px 4px rgba(0, 0, 0, 0.25)";

export default function SmirnoffHero() {
  return (
    <div className="relative z-20">
      <img
        src={HERO_BG}
        className="min-h-[40vh] w-full object-cover md:min-h-[50vh] h-auto"
      />
      <div
        className="absolute inset-0 flex flex-col px-6 md:px-12 lg:px-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(145, 32, 38,0.1) 0%, rgba(145, 32, 38,0.36) 30%, rgba(145, 32, 38,0.72) 58%, rgba(145, 32, 38,0.92) 78%, rgba(145, 32, 38,1) 100%)",
        }}
      >
        <div className="z-10 flex h-full flex-col justify-end pb-10 pt-10 md:pb-12 md:pt-12">
          {/* 1. Case Study Tag */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-white px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#C8102E]/30 backdrop-blur-sm w-fit text-white mb-6`}
          >
            case study
          </motion.p>
          
          <div className="w-full max-w-3xl">
            {/* 2. Logo */}
            <motion.img
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              src="/assets/Smirnoff/HeroLogo.svg"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-3 inline-block max-w-full align-top md:mt-4">
            {/* 3. Divider Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: "circOut" }}
              className="mb-4 h-1 w-full origin-left md:h-1 md:mb-6"
              style={{
                backgroundColor: LOGO_ACCENT,
                boxShadow: LOGO_LINE_SHADOW,
              }}
              aria-hidden
            />

            {/* 4. Subtitle */}
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className={`${gentonaBook.className} text-xl md:text-1xl lg:text-4xl text-white leading-snug`}
            >
              Serving up Key Insights Until Last Call
            </motion.p>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-0 right-0 -bottom-16 h-20 -translate-y-[10px] md:-bottom-2 md:h-24 lg:h-28"
        style={{
          background:
            "linear-gradient(180deg, rgba(145, 32, 38, 0) 0%, rgba(145, 32, 38,0.75) 55%, rgba(145, 32, 38,1) 100%)",
        }}
      />
    </div>
  );
}
