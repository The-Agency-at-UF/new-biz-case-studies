"use client";

import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";
import Image from "next/image";
import EchoMiniImage from "./EchoMiniImage";
import { motion } from "framer-motion";

export default function ImpactSection() {
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
    <div className="relative flex flex-col h-full pb-20 lg:pb-40 -mt-12 lg:-mt-32">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative w-full"
        style={{
          aspectRatio: "1120 / 1096",
        }}
      >
        <EchoMiniImage />
        <Image
          src="/assets/AmazonAlexa/pop-culture-alexa.svg"
          alt="Pop culture references on Alexa"
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
        className="max-w-none flex flex-col gap-6 lg:gap-18 px-15 md:px-30 lg:px-40 mt-8 lg:mt-16"
      >
        <h2 className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
          <span className="block text-white">The</span>
          <span className="block text-[#5FCAF4]">Impact</span>
        </h2>
        <p
          className={`${gentonaBook.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide`}
        >
          Generated insights on topics such as video games, music, anime and TV shows 
          to be used by the Amazon Alexa Personality Team for years to come.
          <br />
          <br />
          Wrote <span className={`${gentonaBold.className}`}>over 250 approved responses, </span>
            which can be heard by millions around the world in <span className={`${gentonaBold.className}`}>
                8 languages</span> and <span className={`${gentonaBold.className}`}>42 countries</span>.
        </p>
      </motion.div>
    </div>
  );
}