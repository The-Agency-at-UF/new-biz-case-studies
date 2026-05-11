"use client";

import { CaseStudyHero } from "@/components/CaseStudy";

export default function Bartram_Hero() {
  return (
    <div className="relative">
      <img src="/assets/TheBartram/background.png" className="w-full h-auto" />
      <div className="absolute flex flex-col h-full w-full px-6 md:px-12 lg:px-20 inset-0 bg-gradient-to-t from-[#A4D1D9] from-20% via-[#A4D1D9]/3 via-80% to-transparent">
        <div className="h-full z-10 flex flex-col justify-center py-10">
          <CaseStudyHero
            caseStudyId="theBartram"
            clientLogoSrc="/logos/bartram-logo.png"
            clientLogoAlt="The Bartram Logo"
            subtitle="Distinguishing a local, luxury apartment complex from competitors in a saturated market"
            logoClassName="gap-2 md:gap-3 lg:gap-4 mt-6 mb-4"
            clientLogoClassName="w-[170px] md:w-[220px] lg:w-[280px] h-auto object-contain object-left"
            agencyLogoClassName="w-[260px] md:w-[340px] lg:w-[430px] h-auto object-contain object-left"
            lineClassName="h-1 mt-6 mb-6 origin-left w-full"
            subtitleClassName="text-sm md:text-lg lg:text-4xl text-white"
          />
        </div>
      </div>
    </div>
  );
}
