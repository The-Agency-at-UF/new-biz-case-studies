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

const floatInRight = {
  hidden: { opacity: 0, x: 60 },
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

export default function UFAdmissionsOpportunity() {
  return (
    <section className="w-full relative overflow-hidden flex flex-col justify-center py-32">
      <div className="absolute inset-0 opacity-40">
        <img src="/assets/UF-Admissions/gatorScales.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[rgba(14,5,51,0.41)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111B61] via-transparent to-[#111B61] pointer-events-none" />

      <CaseStudyContent>
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 max-w-[1600px] mx-auto w-full gap-16">
          <div className="w-full lg:w-[50%] shrink-0">
            <CaseStudyHeader preTitle="The" title="Opportunity" caseStudyId="ufAdmissions" />
            
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <CaseStudyText weight="light" className="mt-8">
                The University of Florida recognized the need to redesign its admissions site, as it lacked both emotion and modernization. Over the span of two and a half weeks, our team successfully designed a functional, intuitive website that aims to make the process of applying the University of Florida less overwhelming for prospective students.
              </CaseStudyText>
            </motion.div>
          </div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={floatInRight}
            className="w-full lg:w-[50%] flex justify-end"
          >
            <img src="/assets/UF-Admissions/opportunity.png" alt="Wireframe Mockup" className="w-full max-h-[800px] object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
      </CaseStudyContent>
    </section>
  );
}
