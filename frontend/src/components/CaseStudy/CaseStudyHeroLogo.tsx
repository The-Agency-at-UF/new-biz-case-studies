"use client";

import Image from "next/image";
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

interface CaseStudyHeroLogoProps {
  clientLogoSrc: string;
  clientLogoAlt: string;
  className?: string;
  clientLogoClassName?: string;
  agencyLogoClassName?: string;
  xClassName?: string;
  agencyLogoSrc?: string | null;
  agencyLogoAlt?: string;
}

export function CaseStudyHeroLogo({
  clientLogoSrc,
  clientLogoAlt,
  className = "",
  clientLogoClassName = "max-w-[150px] md:max-w-[200px] lg:max-w-[280px] max-h-[80px] lg:max-h-[120px] object-contain object-left",
  agencyLogoClassName = "max-w-[150px] md:max-w-[200px] lg:max-w-[280px] max-h-[80px] lg:max-h-[120px] object-contain object-left",
  xClassName = "font-bold text-2xl md:text-3xl lg:text-4xl text-white",
  agencyLogoSrc = "/logos/Agency_logo_2.png",
  agencyLogoAlt = "The Agency at the University of Florida",
}: CaseStudyHeroLogoProps) {
  return (
    <motion.div
      custom={2}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className={`flex items-center gap-4 md:gap-6 lg:gap-8 mt-6 mb-4 ${className}`}
    >
      <Image
        src={clientLogoSrc}
        alt={clientLogoAlt}
        width={300}
        height={150}
        className={clientLogoClassName}
      />

      {agencyLogoSrc && <p className={xClassName}>X</p>}

      {agencyLogoSrc && (
        <Image
          src={agencyLogoSrc}
          alt={agencyLogoAlt}
          width={300}
          height={150}
          className={agencyLogoClassName}
        />
      )}
    </motion.div>
  );
}
