"use client";

import { CaseStudyHero } from "@/components/CaseStudy";

export default function UFAdmissionsHero() {
  return (
    <section className="w-full h-[1080px] relative overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 w-full h-full opacity-30">
        <img src="/assets/UF-Admissions/herobg.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[rgba(14,5,51,0.2)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111B61] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111B61] via-transparent to-[#111B61] opacity-80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <CaseStudyHero
          caseStudyId="ufAdmissions"
          clientLogoSrc="/assets/UF-Admissions/UF_white.png"
          clientLogoAlt="University of Florida Logo"
          subtitle="The Admissions Website Redesign"
          showCaseStudyTag={true}
          containerClassName="relative z-10 w-full max-w-[1600px] mx-auto"
          logoClassName="gap-2 md:gap-3 lg:gap-4 mt-6 mb-4"
          clientLogoClassName="w-[120px] md:w-[150px] lg:w-[190px] h-auto object-contain object-left"
          agencyLogoClassName="w-[320px] md:w-[400px] lg:w-[500px] h-auto object-contain object-left"
          lineClassName="h-1 mt-8 mb-8 origin-left w-full"
          subtitleClassName="text-4xl md:text-5xl lg:text-6xl text-[#F37021] font-semibold"
        />
      </div>
    </section>
  );
}
