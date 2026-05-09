import localFont from "next/font/local";
const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});
const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf",
  display: "swap",
});

const gentonaBold = localFont({
  src: "../../../../../../public/fonts/Gentona Bold.otf",
  display: "swap",
});

import { CaseStudyContent, CaseStudyHeader, CaseStudyText } from "@/components/CaseStudy";

export default function MichelobUltra_Solution() {
    return (
      <CaseStudyContent className="items-top">
          <CaseStudyHeader preTitle="The" title="Solution" caseStudyId="michelobUltra" colorOverride="#D22030" className="relative z-3" />
          <div className="flex flex-col lg:flex-row w-full relative z-3 gap-10 lg:gap-12">
            <div className="flex flex-1 flex-col mt-2 lg:mt-15 gap-4 md:gap-6 lg:gap-10">
              <CaseStudyText weight="light" className="z-3">
                To help spread the word about Team ULTRA,our graphic designers provided materials that supplemented Michelob’s digital 
                and traditional marketing through social media posts, email graphics and signage.
              </CaseStudyText>
              <CaseStudyText weight="light" className="z-3">
                Our team edited photos of Team Ultra basketball players and competitive runners to visually 
                entice athletes in a way that couldn’t be achieved with photography alone. 
              </CaseStudyText>  
              <CaseStudyText weight="light" className="z-3">
                The ULTRA-certified photos were posted on Michelob’s Instagram and featured in promotional emails 
                with copy written by Agency copywriters to help push the Joy wins narrative.
              </CaseStudyText>
              <CaseStudyText weight="light" className="z-3">
                Beyond the digital marketing materials, our team of graphic designers also created signage used to 
                cheer on Team ULTRA basketball players at a Michelob-sponsored pickup game.
              </CaseStudyText>
            </div>
            <div className="relative flex flex-1 w-full lg:w-auto lg:mr-[-5rem] z-1 mt-8 lg:mt-0">
              <img
                src="/assets/MichelobUltra/blurred_background2.png" className="relative object-cover object-center w-full h-auto max-h-[400px] lg:max-h-none mx-auto rounded-lg lg:rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00346D] to-transparent pointer-events-none" />
            </div>
          </div>
      </CaseStudyContent>
    );
}

