import { CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";
import { motion } from "framer-motion";

export default function OpportunitySection() {
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
    <div className="relative flex h-full flex-col overflow-hidden px-6 md:px-12 lg:px-20 py-10 md:py-14">
      <img
        src="/assets/Seagrams/seagramgold.png"
        alt=""
        className="pointer-events-none absolute bottom-[min(7vh,4rem)] right-0 z-0 max-h-[min(100vh,1550px)] w-auto max-w-[min(100vw,1250px)] -translate-y-[4%] translate-x-[4%] opacity-50 object-contain object-bottom object-right md:max-w-[90vw] md:-translate-y-[5%] lg:max-w-[78vw] lg:bottom-[min(5vh,3.25rem)] xl:max-w-[72vw] 2xl:-translate-y-[6%]"
      />
      {/*Case Study rectangle */}
      <div className="relative z-10 max-w-none flex flex-col gap-6 lg:gap-18">
        <CaseStudyHeader preTitle="The" title="Opportunity" caseStudyId="seagrams" />
        <div className="flex max-w-4xl flex-col gap-6 md:max-w-5xl">
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <CaseStudyText weight="light">
              As a sugar-sweetened soft drink (SSD) company, Seagram's
              competes among drink giants. Whether it be Coca-Cola or Canada
              Dry, the beverage market is oversaturated with multi-billion
              dollar organizations.
            </CaseStudyText>
          </motion.div>

          <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <CaseStudyText weight="light">
              As a result, it has been difficult for Seagram's to distinguish
              itself to consumers. Although it had a basic grasp of its existing
              customers, it was missing a clear brand and campaign strategy.
              The company came to us to help bring the brand into the
              limelight of the highly contested industry.
            </CaseStudyText>
          </motion.div>

          <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <CaseStudyText weight="light">
              We needed to uncover the most effective strategy for making
              Seagram's a more relevant ginger ale option by upgrading its brand image.
            </CaseStudyText>
          </motion.div>
        </div>
      </div>
    </div>

  );
}
