"use client";

"use client";

import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";
import { motion } from "framer-motion";

export default function OpportunitySection() {
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
    <div className="relative flex flex-col h-full px-15 md:px-30 lg:px-40 pt-20 lg:pt-40 md:-mt-56 lg:-mt-80">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-none flex flex-col gap-6 lg:gap-18"
      >
        <h2 className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
          <span className="block text-white">The</span>
          <span className="block text-[#5FCAF4]">Opportunity</span>
        </h2>
        <p
          className={`${gentonaBook.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide`}
        >
          People love to discover that Amazon Alexa knows about their favorite
          game, anime or TV show. To make this kind of experience possible, Alexa
          must be able to answer questions about the most popular aspects of
          today’s culture. It should be carefully crafted to withstand the
          culture’s complex, ever-changing nature.
          <br />
          <br />
          In light of this challenge, the{" "}
          <span className={`${gentonaBold.className}`}>
            Amazon Alexa Personality Team
          </span>{" "}
          had an important task for us: surprise and delight Alexa users from
          around the globe while staying true to Alexa’s personality. We were
          ready to research and write.
        </p>
      </motion.div>
    </div>
  );
}