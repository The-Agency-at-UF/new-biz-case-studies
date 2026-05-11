"use client";

import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";
import { motion } from "framer-motion";

export default function SeagramsImpactSection() {
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
    <CaseStudyContent className="bg-black">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.95, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        src="/assets/Seagrams/seagrams_mockup.png"
        alt="Seagram's ginger ale mockup"
        className="pointer-events-none absolute right-6 top-0 z-0 h-auto w-[min(42vw,18rem)] object-contain md:right-10 md:-top-10 md:w-[min(36vw,24rem)] lg:right-16 lg:-top-16 lg:w-[min(33vw,28rem)] xl:right-20 xl:w-[min(31vw,30rem)]"
      />
      <div className="relative z-10 w-full">
        <CaseStudyHeader preTitle="The" title="Impact" caseStudyId="seagrams" />
        <div className="mt-6 flex flex-col gap-6 lg:mt-8">
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-[55%] md:w-[60%] lg:w-[65%]">
            <CaseStudyText weight="light">
              To gather intel about the drink market, we sent our team on a mission
              to the front lines - virtually and physically. Our initial stage of
              our research included analyzing competitors&apos; social media pages and
              advertisements.
            </CaseStudyText>
          </motion.div>
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <CaseStudyText weight="light">
              However, the investigation extended beyond digital spaces to achieve
              a more comprehensive analysis. We visited multiple grocery stores
              across the country to take photos of Seagram&apos;s shelving placement
              next to competitors. Once we finished gathering intelligence, we
              were ready to implement our findings.
            </CaseStudyText>
          </motion.div>
          <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <CaseStudyText weight="light">
              Through our research, we discovered a Catch-22 with the market:
              Seagram&apos;s wasn&apos;t being noticed at the store but needed more
              bottling to garner attention. To solve the issue, we helped
              Seagram&apos;s prepare a pitch to bottlers. The goal of the presentation
              was to convince manufacturers to buy into Seagram&apos;s future market
              growth.
            </CaseStudyText>
          </motion.div>
        </div>
      </div>
    </CaseStudyContent>
  );
}
