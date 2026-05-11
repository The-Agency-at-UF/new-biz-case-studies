"use client";

import { motion } from "framer-motion";
import { gentonaBold } from "../../../../fonts";
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

export default function BlissOpportunity() {
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

  return (
    <CaseStudyContent className="bg-[#F55096]">
      <div className="relative z-10 flex h-full flex-row justify-center">
        <div className="flex min-w-0 flex-[1_1_65%] flex-col gap-6 lg:gap-12">
          <CaseStudyHeader preTitle="The" title="Opportunity" caseStudyId="bliss" colorOverride="#5FCAF4" />

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <CaseStudyText weight="light">
              Healthy skin isn’t a luxury –{" "}
              <span className={`${gentonaBold.className}`}>
                it’s a necessity.
              </span>{" "}
              Bliss knew this fact long before it was a trend, championing
              skincare as self-care beginning in the 1990s. Despite its
              decades-old ingenuity,{" "}
              <span className={`${gentonaBold.className}`}>
                Bliss struggled to gain the interest of younger generations.
              </span>
              <br />
              <br />
              Bliss, alongside Chicago-based agency Movers+Shakers, came to us{" "}
              <span className={`${gentonaBold.className}`}>
                to reach Gen Z and millennial audiences.
              </span>
              <br />
              <br />
              Together, we determined content recommendations for Bliss’ Instagram
              and TikTok while discovering new ways to build brand loyalty.
            </CaseStudyText>
          </motion.div>
        </div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatInRight}
          className="flex min-w-0 flex-[1_1_35%] items-end justify-end"
        >
          <img
            src="/assets/Bliss/might_marshmallow_tower.png"
            alt="Mighty Marshmallow product tower"
            className="w-full"
          />
        </motion.div>
      </div>
    </CaseStudyContent>
  );
}