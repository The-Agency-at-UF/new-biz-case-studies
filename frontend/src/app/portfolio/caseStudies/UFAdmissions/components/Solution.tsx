"use client";

import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";
import { motion } from "framer-motion";

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

const floatInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: custom * 0.15,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function UFAdmissionsSolution() {
  return (
    <section className="w-full relative overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32">
      <div className="absolute right-0 top-0 bottom-0 w-3/4 opacity-30 rounded-l-[500px] overflow-hidden">
        <img src="/assets/UF-Admissions/gatorScales.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111B61] via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="absolute inset-0 bg-[rgba(14,5,51,0.41)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111B61] via-transparent to-[#111B61] pointer-events-none" />

      <CaseStudyContent>
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 max-w-[1600px] mx-auto w-full gap-16">
          <div className="w-full lg:w-[50%] shrink-0">
            <CaseStudyHeader preTitle="The" title="Solution" caseStudyId="ufAdmissions" />
            
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <CaseStudyText weight="light" className="mt-8">
                Quantitative interviews revealed that users were missing important information due to excessive content. To address this, a competitive analysis was conducted, showing that other admissions sites used external links to declutter their content.
              </CaseStudyText>
            </motion.div>
          </div>

          {/* Mobile image, hidden on desktop */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:hidden flex justify-center"
          >
            <img src="/assets/UF-Admissions/solution.png" alt="iPhone Mockup" className="w-full max-h-[500px] object-contain" />
          </motion.div>
        </div>
      </CaseStudyContent>

      {/* Desktop image, positioned absolutely on the right */}
      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={floatInLeft}
        className="hidden lg:flex absolute right-0 top-0 bottom-0 w-full max-w-[calc(55%-75px)] justify-end items-center z-20 pointer-events-none"
      >
        <img src="/assets/UF-Admissions/solution.png" alt="iPhone Mockup" className="h-[800px] xl:h-[900px] w-auto max-w-full object-contain object-right drop-shadow-2xl" />
      </motion.div>
    </section>
  );
}
