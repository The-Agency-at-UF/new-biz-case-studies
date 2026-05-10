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

export default function BartramSolution() {
  return (
    <CaseStudyContent className="bg-[#A4D1D9]">
      <div className="max-w-none flex flex-col gap-6 lg:gap-18">
        <CaseStudyHeader preTitle="The" title="Solution" caseStudyId="theBartram" />

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <CaseStudyText weight="light" className="text-sm lg:text-4xl text-white leading-tight tracking-wide">
            To combat this challenge, we devised a cohesive, purpose-driven strategy that expanded
            <span className={gentonaBold.className}> The Bartram</span> beyond the normal confines of an apartment complex.
            Using our research on the industry and young professionals who are interested in apartment living, we determined the best ways for this client to connect with all relevant audiences.
            These ways included creating <span className={gentonaBold.className}>partnerships</span> with local businesses, highlighting <span className={gentonaBold.className}>amenities</span> through upscale <span className={gentonaBold.className}>production shoots</span> and reinforcing a <span className={gentonaBold.className}>sense of community</span> through resident and staff highlights.
            We even created content surrounding wellness and local finds.
          </CaseStudyText>
        </motion.div>
      </div>
    </CaseStudyContent>
  );
}