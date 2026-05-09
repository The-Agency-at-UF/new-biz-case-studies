"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const viewportSettings = {
    once: true,
    amount: 0.25,
    margin: "0px 0px -120px 0px",
  } as const;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <footer className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
        className="relative z-10 flex translate-y-32 items-center justify-center px-15 md:px-30"
      >
        <img
          src="/assets/AmazonAlexa/alexa_logos.png"
          alt="Alexa x The Agency"
          className="h-auto w-2/3 lg:w-1/2"
        />
      </motion.div>

      <img
        src="/assets/AmazonAlexa/alexa-footer.svg"
        alt=""
        aria-hidden="true"
        className="relative h-auto w-full -mt-16 md:-mt-32 lg:-mt-64"
      />
    </footer>
  );
}