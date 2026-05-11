"use client";

import { CaseStudyHero } from "@/components/CaseStudy";

export default function MichelobUltra_Hero() {
  return (
    <div className="relative">
      <img src="/assets/MichelobUltra/ultrabg.jpg" className="w-full h-auto" />
      <div className="absolute flex flex-col h-full w-full inset-0 bg-gradient-to-t from-[#00346D] from-20% via-[#A4D1D9]/3 via-80% to-transparent">
        <div className="w-full px-6 md:px-12 lg:px-20 h-full z-10 flex flex-col justify-center py-10">
          <CaseStudyHero
            caseStudyId="michelobUltra"
            clientLogoSrc="/logos/Logo_Michelob.png"
            clientLogoAlt="Michelob Ultra Logo"
            subtitle="Team Agency Assists Team Ultra's Joy Wins Campaign"
            showCaseStudyTag={true}
          />
        </div>
      </div>
    </div>
  );
}
