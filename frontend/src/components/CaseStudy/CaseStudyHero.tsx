"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { CaseStudyId, CASE_STUDY_COLORS } from "@/config/caseStudies";
import agencyLogo from "@/app/portfolio/caseStudies/CokeZero/assets/AgencyLogoFull.png";

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

interface CaseStudyHeroProps {
  caseStudyId: CaseStudyId;
  clientLogo: StaticImageData | string;
  clientLogoAlt: string;
  subtitle: string;
  className?: string;
}

export function CaseStudyHero({ caseStudyId, clientLogo, clientLogoAlt, subtitle, className = "" }: CaseStudyHeroProps) {
  const lineColor = CASE_STUDY_COLORS[caseStudyId].line;

  return (
    <div className={`relative z-35 text-white w-full max-w-6xl px-6 md:px-12 lg:px-20 ${className}`}>
      <motion.p
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="inline-flex h-[50px] w-[160px] items-center justify-center bg-black/40 text-xl font-bold text-white outline outline-[4px] mb-5"
        style={{ outlineColor: lineColor }}
      >
        Case Study
      </motion.p>

      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="flex items-center gap-4 mt-6 mb-4"
      >
        <Image
          src={clientLogo}
          alt={clientLogoAlt}
          className="w-75 h-auto pr-2"
        />

        <p className="font-bold text-4xl">X</p>

        <Image
          src={agencyLogo}
          alt="The Agency at the University of Florida"
          className="w-110 h-auto pl-2"
        />
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.15, ease: "circOut" }}
        className="w-250 h-[3px] mt-6 origin-left"
        style={{ backgroundColor: lineColor }}
      />

      <motion.h3
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mt-6 w-250 max-w-full text-4xl font-bold leading-tight"
      >
        {subtitle}
      </motion.h3>
    </div>
  );
}
