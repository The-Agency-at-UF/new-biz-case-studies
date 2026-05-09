"use client";

import { motion } from "framer-motion";
import { CaseStudyId, CASE_STUDY_COLORS } from "@/config/caseStudies";

export const fadeInUp = {
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

interface CaseStudyHeaderProps {
  preTitle?: string;
  title: string;
  caseStudyId: CaseStudyId;
  className?: string;
  colorOverride?: string;
}

export function CaseStudyHeader({ preTitle, title, caseStudyId, className = "", colorOverride }: CaseStudyHeaderProps) {
  const color = colorOverride || CASE_STUDY_COLORS[caseStudyId].primary;

  return (
    <motion.div
      custom={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={`py-6 ${className}`}
    >
      {preTitle && <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase">{preTitle}</h2>}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase" style={{ color }}>
        {title}
      </h2>
    </motion.div>
  );
}
