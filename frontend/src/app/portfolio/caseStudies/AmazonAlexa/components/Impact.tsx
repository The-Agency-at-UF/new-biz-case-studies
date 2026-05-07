"use client";

import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";
import Image from "next/image";
import EchoMiniImage from "./EchoMiniImage";
import { motion } from "framer-motion";

export default function ImpactSection() {
  const viewportSettings = {
    once: true,
    amount: 0.25,
    margin: "0px 0px -120px 0px",
  } as const;

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
    <section className="relative flex h-full flex-col pb-20 -mt-12 lg:-mt-32 lg:pb-40">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
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

      <div className="mt-8 flex max-w-none flex-col gap-6 px-15 md:px-30 lg:mt-16 lg:gap-18 lg:px-40">
        <motion.h2
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className={`${gentonaMedium.className} text-4xl font-black uppercase leading-[0.8] tracking-normal lg:text-[8rem]`}
        >
          <span className="block text-white">The</span>
          <span className="block text-[#5FCAF4]">Impact</span>
        </motion.h2>

        <motion.p
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className={`${gentonaBook.className} text-sm font-light leading-tight tracking-wide text-white lg:text-4xl`}
        >
          Generated insights on topics such as video games, music, anime and TV
          shows to be used by the Amazon Alexa Personality Team for years to
          come.
          <br />
          <br />
          Wrote{" "}
          <span className={`${gentonaBold.className}`}>
            over 250 approved responses,
          </span>{" "}
          which can be heard by millions around the world in{" "}
          <span className={`${gentonaBold.className}`}>8 languages</span> and{" "}
          <span className={`${gentonaBold.className}`}>42 countries</span>.
        </motion.p>
      </div>
    </section>
  );
}