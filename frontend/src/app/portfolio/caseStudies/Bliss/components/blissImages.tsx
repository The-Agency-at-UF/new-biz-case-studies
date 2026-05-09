"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CYCLING_IMAGES = [
  { src: "/assets/Bliss/grapefruit aloe lotion w shadow 1.png", alt: "Grapefruit Aloe lotion" },
  { src: "/assets/Bliss/lemon sage lotion w shadow 1.png", alt: "Lemon Sage lotion" },
  { src: "/assets/Bliss/orange pepper lotion w shadow 1.png", alt: "Orange Pepper lotion" },
];

export default function BlissImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CYCLING_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
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
    <section className="relative w-full overflow-hidden bg-[#F55096] py-[clamp(3rem,8vw,10rem)]">
      <div className="relative min-h-[clamp(280px,55vw,860px)] overflow-visible">
        {/* Background cream blob */}
        <motion.img
          src="/assets/Bliss/cream.png"
          alt=""
          aria-hidden="true"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatInLeft}
          className="absolute left-[clamp(-20%,-15vw,-10%)] top-[35%] z-0 h-[clamp(260px,55vw,920px)] w-auto -translate-y-1/2"
        />

        {/* Cycling product images — large, anchored left, clips off screen intentionally */}
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={CYCLING_IMAGES[activeIndex].src}
            alt={CYCLING_IMAGES[activeIndex].alt}
            initial={{ opacity: 0, x: -200, rotate: -18, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, x: 160, rotate: 12, scale: 0.9, transition: { duration: 0.35, ease: "easeIn" } }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
              mass: 1,
              opacity: { duration: 0.3 },
            }}
            className="absolute left-[clamp(-20%,-15vw,-10%)] top-[35%] z-10 h-[clamp(260px,55vw,920px)] w-auto object-contain -translate-y-1/2"
          />
        </AnimatePresence>

        {/* Right TikTok mockup */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={floatInRight}
          className="absolute right-[clamp(5%,10vw,12%)] bottom-0"
        >
          <img
            src="/assets/Bliss/Bliss_Ticktok_Video.png"
            alt="TikTok mockup"
            className="w-[clamp(150px,30vw,560px)] max-h-[clamp(280px,50vw,75vh)] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
