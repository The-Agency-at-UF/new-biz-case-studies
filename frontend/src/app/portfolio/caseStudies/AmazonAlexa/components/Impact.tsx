"use client";

import { gentonaBold, gentonaBook } from "../../../../fonts";
import Image from "next/image";
import EchoMiniImage from "./EchoMiniImage";
import { motion } from "framer-motion";
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

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

      <CaseStudyContent className="!py-0 mt-8 lg:mt-16">
        <div className="flex max-w-none flex-col gap-6 lg:gap-18">
          <CaseStudyHeader preTitle="The" title="Impact" caseStudyId="amazonAlexa" />

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <CaseStudyText weight="light">
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
          </CaseStudyText>
        </motion.div>
        </div>
      </CaseStudyContent>
    </section>
  );
}