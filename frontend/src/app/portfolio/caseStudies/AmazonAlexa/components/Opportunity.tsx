"use client";

import { gentonaBold, gentonaBook } from "../../../../fonts";
import { motion } from "framer-motion";
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

export default function OpportunitySection() {
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
    <CaseStudyContent className="pt-20 md:-mt-56 lg:-mt-80 lg:pt-40">
      <div className="flex max-w-none flex-col gap-6 lg:gap-18">
        <CaseStudyHeader preTitle="The" title="Opportunity" caseStudyId="amazonAlexa" />

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <CaseStudyText weight="light">
            People love to discover that Amazon Alexa knows about their favorite
            game, anime or TV show. To make this kind of experience possible,
            Alexa must be able to answer questions about the most popular aspects
            of today’s culture. It should be carefully crafted to withstand the
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
          </CaseStudyText>
        </motion.div>
      </div>
    </CaseStudyContent>
  );
}