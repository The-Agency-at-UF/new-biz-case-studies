"use client";

import { motion } from "framer-motion";

export default function BlissImages() {
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
    hidden: { opacity: 0, x: -80 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: custom * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  const floatInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: custom * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section className="relative w-full overflow-visible bg-[#F55096] px-8 py-[clamp(4rem,8vw,8rem)] md:px-10 lg:px-12">
      <div className="relative flex min-h-[clamp(460px,56vw,820px)] items-center justify-center overflow-visible">
        {/* Left decorative group - intentionally spills off page */}
        <div className="relative min-h-[clamp(420px,52vw,760px)] flex-1 overflow-visible">
          <motion.img
            src="/assets/Bliss/cream.png"
            alt="Cream"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={floatInLeft}
            className="absolute left-[-45%] top-1/2 z-0 w-[clamp(420px,62vw,980px)] -translate-y-1/2 scale-140"
          />

          <motion.img
            src="/assets/Bliss/grapefruit_with_shadow.png"
            alt="Grapefruit"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="absolute left-[-28%] top-1/2 z-10 w-[clamp(340px,50vw,820px)] -translate-y-1/2 rotate-[30deg]"
          />
        </div>

        {/* Right TikTok mockup */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatInRight}
          className="relative flex flex-1 items-center justify-center"
        >
          <img
            src="/assets/Bliss/Bliss_Ticktok_Video.png"
            alt="TikTok mockup"
            className="w-[clamp(180px,22vw,320px)] translate-x-[10%] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}