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

export default function UFAdmissionsImpact() {
  const impactPoints = [
    {
      
      description: "Using drop-down sections and expendable boxes, our team was able to segment content and ensure easier navigation of the website."
    },
    {
      description: "We went beyond the status quo of an apathetic, sterile feel to showcase a memorable design, pushing the client outside of their comfort zone to amplify impact through a mix of typefaces, color blocking and arrows."
    },
    {
      description: "Information was condensed by using external links, removing repetitive information and streamlining it in a more engaging way."
    }
  ];

  return (
    <section className="w-full relative overflow-hidden flex flex-col justify-center py-32">
      <div className="absolute inset-0 bg-[rgba(14,5,51,0.41)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111B61] via-transparent to-[#111B61] pointer-events-none" />

      <CaseStudyContent>
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 max-w-[1600px] mx-auto w-full gap-16">
          <div className="w-full lg:w-[50%] shrink-0">
            <CaseStudyHeader preTitle="The" title="Impact" caseStudyId="ufAdmissions" />
            
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-10 mt-8"
            >
              {impactPoints.map((point, index) => (
                <div key={index}>
                  <CaseStudyText weight="light" className="text-base md:text-xl">
                    {point.description}
                  </CaseStudyText>
                </div>
              ))}
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
            <img src="/assets/UF-Admissions/impact.png" alt="Poster Mockup" className="w-full max-h-[800px] object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
      </CaseStudyContent>
    </section>
  );
}
