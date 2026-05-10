"use client";

import { motion } from "framer-motion";
import { CaseStudyId, CASE_STUDY_COLORS } from "@/config/caseStudies";
import { CaseStudyHeroLogo } from "./CaseStudyHeroLogo";

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
  clientLogoSrc: string;
  clientLogoAlt: string;
  subtitle: string;
  className?: string;
  containerClassName?: string;
  showCaseStudyTag?: boolean;
  caseStudyTagClassName?: string;
  logoClassName?: string;
  clientLogoClassName?: string;
  agencyLogoClassName?: string;
  xClassName?: string;
  lineClassName?: string;
  subtitleClassName?: string;
  lineDelayOffset?: number;
  renderLogo?: boolean;
}

export function CaseStudyHero({
  caseStudyId,
  clientLogoSrc,
  clientLogoAlt,
  subtitle,
  className = "",
  containerClassName = "relative z-10 w-full max-w-[1600px] mx-auto",
  showCaseStudyTag = true,
  caseStudyTagClassName = "inline-flex h-[50px] w-[160px] items-center justify-center bg-black/40 text-xl font-bold text-white outline outline-[4px] mb-6",
  logoClassName = "",
  clientLogoClassName = "max-w-[150px] md:max-w-[200px] lg:max-w-[280px] max-h-[80px] lg:max-h-[120px] object-contain object-left",
  agencyLogoClassName = "max-w-[150px] md:max-w-[200px] lg:max-w-[280px] max-h-[80px] lg:max-h-[120px] object-contain object-left",
  xClassName = "font-bold text-2xl md:text-3xl lg:text-4xl text-white",
  lineClassName = "h-1 mt-6 mb-6 origin-left w-full",
  subtitleClassName = "block max-w-full text-xl lg:text-4xl text-white font-semibold",
  lineDelayOffset = 0.15,
  renderLogo = true,
}: CaseStudyHeroProps) {
  const lineColor = CASE_STUDY_COLORS[caseStudyId].line;

  return (
    <section className={className}>
      <div className={containerClassName}>
        {/* 1. Case Study Tag */}
        {showCaseStudyTag && (
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={caseStudyTagClassName}
            style={{ outlineColor: lineColor }}
          >
            Case Study
          </motion.p>
        )}

        {/* 2. Hero Logo with Agency Logo */}
        {renderLogo && (
          <CaseStudyHeroLogo
            clientLogoSrc={clientLogoSrc}
            clientLogoAlt={clientLogoAlt}
            className={logoClassName}
            clientLogoClassName={clientLogoClassName}
            agencyLogoClassName={agencyLogoClassName}
            xClassName={xClassName}
          />
        )}

        <div className="inline-block max-w-full align-top">
          {/* 3. Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: lineDelayOffset, ease: "circOut" }}
            className={lineClassName}
            style={{ backgroundColor: lineColor }}
          />

          {/* 4. Subtitle */}
          <motion.h3
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={subtitleClassName}
          >
            {subtitle}
          </motion.h3>
        </div>
      </div>
    </section>
  );
}
