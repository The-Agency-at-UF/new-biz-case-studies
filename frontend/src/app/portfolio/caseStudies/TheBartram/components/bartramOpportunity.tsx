"use client";

import { motion } from "framer-motion";
import { gentonaBold } from "@/app/fonts";
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

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

export default function BartramOpportunity() {
  return (
    <CaseStudyContent className="bg-[#A4D1D9]">
      <div className="max-w-none flex flex-col gap-6 lg:gap-18">
        <CaseStudyHeader preTitle="The" title="Opportunity" caseStudyId="theBartram" />

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <CaseStudyText weight="light" className="text-sm lg:text-4xl text-white leading-tight tracking-wide">
            It can be difficult for apartment complexes to stand out in college towns, where there is one on every corner.
            Without a consistent <span className={gentonaBold.className}>brand identity</span>, Gainesville luxury apartment complex,
            <span className={gentonaBold.className}> The Bartram</span> struggled to create <span className={gentonaBold.className}>meaningful interactions</span> with its target audiences on social media and beyond.
          </CaseStudyText>
        </motion.div>
      </div>
    </CaseStudyContent>
  );
}