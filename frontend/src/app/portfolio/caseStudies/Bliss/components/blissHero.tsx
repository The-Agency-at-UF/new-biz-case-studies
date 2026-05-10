"use client";

import { CaseStudyHero } from "@/components/CaseStudy";

export default function BlissHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F55096]">
      <img
        src="/assets/Bliss/backgroundImage.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#F55096] from-20% via-[#F55096]/3 via-80% to-transparent">
        <div className="w-full px-6 md:px-12 lg:px-20 h-full z-10 flex flex-col justify-center py-10">
          <CaseStudyHero
            caseStudyId="bliss"
            clientLogoSrc="/logos/bliss.png"
            clientLogoAlt="Bliss Logo"
            subtitle="Helping Bliss Get Skin in the Gen Z Game"
            showCaseStudyTag={true}
          />
        </div>
      </div>
    </section>
  );
}