"use client";

import { motion } from "framer-motion";

export default function BlissFooter() {
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

  const floatInLeft = {
    hidden: { opacity: 0, x: -60, rotate: 50 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 60,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-t from-white from-1% via-[#F55096]/30 via-35% to-[#F55096]">
      <div className="relative min-h-[clamp(240px,32vw,460px)] px-[clamp(1.5rem,6vw,10rem)] py-[clamp(2.5rem,6vw,6rem)]">
        {/* Background dots */}
        <motion.img
          src="/assets/Bliss/polka_dots.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[clamp(240px,45vw,760px)] object-cover object-right"
        />

        {/* Shift whole composition left */}
        <div className="relative z-10 flex min-h-[clamp(180px,24vw,340px)] items-center justify-center -translate-x-[10%]">
          {/* Cream swipe - farther off the left side */}
          <motion.img
            src="/assets/Bliss/cream_swipe.png"
            alt=""
            aria-hidden="true"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={floatInLeft}
            className="absolute left-[-20%] top-1/2 z-10 w-[clamp(220px,38vw,560px)] -translate-y-1/2"
          />

          {/* Bigger bottle - much farther left */}
          <motion.img
            src="/assets/Bliss/hydrationSalvation.png"
            alt="Hydration Salvation"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="absolute left-[-8%] top-[56%] z-20 w-[clamp(180px,28vw,420px)] -translate-y-1/2 rotate-[20deg]"
          />

          {/* Main logo */}
          <motion.img
            src="/assets/Bliss/blissAgencyLogo.png"
            alt="The Agency logo"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative z-30 h-auto w-[clamp(260px,52vw,760px)]"
          />
        </div>
      </div>
    </footer>
  );
}