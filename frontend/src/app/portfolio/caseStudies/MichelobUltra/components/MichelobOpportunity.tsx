import localFont from "next/font/local";
const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});

const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf",
  display: "swap",
});
import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

export default function MichelobUltra_Opportunity() {
  return (
    <div className="flex-1">
      <CaseStudyContent className="bg-[url('/assets/MichelobUltra/red_chevron.png')] bg-cover bg-center bg-top bg-no-repeat h-full overflow-x-hidden">
        <div className="relative z-13 mt-20 mb-20">
          <CaseStudyHeader preTitle="The" title="Opportunity" caseStudyId="michelobUltra" />
          <div className="flex flex-col mt-2 lg:mt-15 gap-2 md:gap-5 lg:gap-10">
            <h2 className={`${gentonaMedium.className} text-sm md:text-lg lg:text-4xl font-medium text-white uppercase`}>
              Before every sprint...
            </h2>
            <CaseStudyText weight="light" className="lg:max-w-[50rem]">
              Before every championship game, before every moment of greatness, there needs to be a plan for success. Athletes crave it, fans fuel it, but what’s the spark that ignites the flame?
            </CaseStudyText>
            <CaseStudyText weight="medium">
              Joy. Joy sparks success.
            </CaseStudyText>
            <CaseStudyText weight="light">
              In a sea of tired marketing plans, a bold light beer company
              realized the joy to success pipeline could satisfy a thirst that
              athletes didn’t even know they had. Michelob ULTRA knew it could
              be the beer for every athlete, because the company knew it had an undeniable recipe for success. It was only a matter of finding the right team to pull its marketing strategy to the finish line.
            </CaseStudyText>
            <CaseStudyText weight="medium">
              Enter The Agency.
            </CaseStudyText>
            <CaseStudyText weight="light">
              Our team of graphic designers created a stunning narrative through the punched up photos that required no copy for communication.
            </CaseStudyText>
          </div>
        </div>
      </CaseStudyContent>
    </div>
  );
}