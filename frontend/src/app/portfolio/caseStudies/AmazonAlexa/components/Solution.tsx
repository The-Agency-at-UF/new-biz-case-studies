"use client";

import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SolutionSection() {
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
    <div className="relative flex flex-col h-full pt-8 pb-20 lg:pb-40 gap-16 lg:gap-32">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative mx-auto"
        style={{
          width: "58.33vw", // 1120px on a 1920px screen
          aspectRatio: "1120 / 1096",
        }}
      >
        <Image
          src="/assets/AmazonAlexa/harry-styles-alexa.svg"
          alt="Harry Styles on Alexa"
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-none flex flex-col gap-6 lg:gap-18 px-15 md:px-30 lg:px-40"
      >
        <h2 className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
          <span className="block text-white">The</span>
          <span className="block text-[#5FCAF4]">Solution</span>
        </h2>
        <p
          className={`${gentonaBook.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide`}
        >
          After rounds of social listening and market research, members of our team would 
          present concise research packages to the Amazon Alexa Personality Team on a wide 
          range of culturally relevant, Gen Z-related topics.{" "}
          <span className={`${gentonaBold.className}`}>
            In simple terms, we told them what is hot and what is not,
            according to our research.
          </span>
          <br />
          <br />
          Using these insights, our copywriters collaborated with the personality team in a 
          writers’ room setting. Together, we finalized over <span className={`${gentonaBold.className}`}>250</span> engaging and research-based 
          responses for some of the most frequently asked questions among young audiences.
        </p>
      </motion.div>
    </div>
  );
}