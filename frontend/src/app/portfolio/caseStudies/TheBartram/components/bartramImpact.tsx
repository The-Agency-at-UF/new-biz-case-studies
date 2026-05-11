"use client";

import { motion } from "framer-motion";
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

const impactPoints = [
  "Revitalized the apartment complex's image through production, storytelling and community involvement",
  "Presented The Bartram as a place where positive lifestyles and inspiration are easily obtained",
  "Increased reach, impressions and follower count on Instagram and Facebook",
];

export default function BartramImpact() {
  return (
    <CaseStudyContent className="bg-[#A4D1D9]">
    <div className="relative z-10 w-full h-full">
  
  <CaseStudyHeader preTitle="The" title="Impact" caseStudyId="theBartram" />

  {/* 2-col grid: left = bullet points, right = images */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-6 lg:mt-16">
    
    {/* Bullet points */}
    <motion.div
      custom={2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="space-y-4 lg:space-y-8"
    >
      {impactPoints.map((point) => (
        <CaseStudyText key={point} weight="light" className="text-sm lg:text-4xl text-white leading-tight">
          - {point}
        </CaseStudyText>
      ))}
    </motion.div>

    {/* Images — shared fixed height, bottoms aligned */}
<motion.div
  custom={3}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={floatInRight}
  className="flex gap-4 items-end h-[30dvh] lg:h-[45dvh]"
>
  {/* Phone — naturally taller, so constrain by height */}
  <img
    src="/assets/TheBartram/phone_mockup.png"
    alt="Phone mockup"
    className="h-full w-auto object-contain object-bottom"
  />
  {/* Laptop — naturally wider, so constrain by width */}
  <img
    src="/assets/TheBartram/computer_mockup.png"
    alt="Computer mockup"
    className="h-4/5 w-auto object-contain object-bottom"
  />
</motion.div>

  </div>
</div>
    </CaseStudyContent>
  );
}