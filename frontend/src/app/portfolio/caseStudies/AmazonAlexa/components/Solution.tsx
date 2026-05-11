"use client";

import { gentonaBold, gentonaBook } from "../../../../fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

export default function SolutionSection() {
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
    <section className="relative flex h-full flex-col gap-16 pt-8 pb-20 lg:gap-32 lg:pb-40">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
        className="relative mx-auto"
        style={{
          width: "58.33vw",
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

      <CaseStudyContent className="!py-0">
        <div className="flex max-w-none flex-col gap-6 lg:gap-18">
          <CaseStudyHeader preTitle="The" title="Solution" caseStudyId="amazonAlexa" />

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <CaseStudyText weight="light">
            After rounds of social listening and market research, members of our
            team would present concise research packages to the Amazon Alexa
            Personality Team on a wide range of culturally relevant, Gen Z-related
            topics.{" "}
            <span className={`${gentonaBold.className}`}>
              In simple terms, we told them what is hot and what is not, according
              to our research.
            </span>
            <br />
            <br />
            Using these insights, our copywriters collaborated with the
            personality team in a writers’ room setting. Together, we finalized
            over <span className={`${gentonaBold.className}`}>250</span> engaging
            and research-based responses for some of the most frequently asked
            questions among young audiences.
          </CaseStudyText>
        </motion.div>
        </div>
      </CaseStudyContent>
    </section>
  );
}