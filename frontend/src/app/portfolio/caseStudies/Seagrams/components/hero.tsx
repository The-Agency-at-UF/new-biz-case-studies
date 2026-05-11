"use client";

import { CaseStudyHero } from "@/components/CaseStudy";

export default function SeagramsHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img src="/assets/Seagrams/seagramsbg.png" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute flex h-full w-full flex-col inset-0 bg-gradient-to-t from-black from-20% via-[#000]/3 via-90% to-transparent">
        <div className="w-full px-6 md:px-12 lg:px-20 h-full z-10 flex flex-col justify-end pb-16 md:pb-24 lg:pb-32 pt-32">
          <CaseStudyHero
            caseStudyId="seagrams"
            clientLogoSrc="/logos/seagrams-logo.png"
            clientLogoAlt="Seagram's Logo"
            subtitle="Fighting for the Limelight: Distinguishing and Growing Seagram's Brand Among Competitors"
            showCaseStudyTag={true}
          />
        </div>
      </div>
    </div>
  );
}
