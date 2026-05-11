"use client";

import { motion } from "framer-motion";
import { gentonaBold } from "../../../../fonts";
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

export default function BlissSolution() {
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
    hidden: { opacity: 0, x: 70 },
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
      <div className="relative z-10 flex h-full flex-row justify-center overflow-visible">
        <div className="flex min-w-0 flex-[1_1_65%] flex-col gap-6 lg:gap-12">
          <CaseStudyHeader preTitle="The" title="Solution" caseStudyId="bliss" colorOverride="#5FCAF4" />

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <CaseStudyText weight="light">
              During the campaign, we analyzed more than –{" "}
              <span className={`${gentonaBold.className}`}>
                312k social media posts
              </span>{" "}
              to guide our strategy. Our team consulted the Bliss' CMO, board of
              directors and marketing teams weekly and monthly to optimize our
              marketing strategy throughout the year.
              <br />
              <br />
              Our AI-generated{" "}
              <span className={`${gentonaBold.className}`}>"mind maps"</span>{" "}
              illustrate the conversations forming and evolving over time across
              online spaces: social, news, blogs, forums, eCommerce, reviews,
              comments, etc. The AI analyzes sentence structure, common keywords
              and upload time among multiple posts.
              <br />
              <br />
              The numbers don't lie:{" "}
              <span className={`${gentonaBold.className}`}>
                Purposeful community management is key to brand loyalty.
              </span>
            </CaseStudyText>
          </motion.div>
        </div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatInRight}
          className="flex min-w-0 flex-[1_1_35%] items-end justify-end overflow-visible"
        >
          <img
            src="/assets/Bliss/fixed_open_tub.png"
            alt="Bliss product tub"
            className="w-full scale-200 translate-x-[-20%] translate-y-[-20%] overflow-visible md:translate-y-[-5%]"
          />
        </motion.div>
      </div>
    </CaseStudyContent>
  );
}