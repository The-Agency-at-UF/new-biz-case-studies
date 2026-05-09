import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";
import { motion } from "framer-motion";

export default function HowWeQuenchedItSection() {
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

  return (
    <CaseStudyContent className="bg-black">
      <div className="w-full">
        <CaseStudyHeader preTitle="The" title="Solution" caseStudyId="seagrams" />
        <div className="mt-6 flex flex-col gap-6 lg:mt-8">
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <CaseStudyText weight="light">
              To differentiate Seagram&apos;s from competitors, we executed a
              multi-pronged research, insights, and strategy plan. We started by
              developing Talkwalker Boolean to form a deep analysis of the ginger
              ale landscape in the beverage industry.
            </CaseStudyText>
          </motion.div>
          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <CaseStudyText weight="light">
              Based on our research findings, we produced questions for a focus
              group consisting of the typical soft drink consumer. We surveyed
              seven people in our focus group to gain a better understanding of
              what influences the beverage buying habits of everyday consumers.
            </CaseStudyText>
          </motion.div>
        </div>
      </div>
    </CaseStudyContent>
  );
}