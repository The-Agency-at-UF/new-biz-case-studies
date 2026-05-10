"use client";

import { CaseStudyHero } from "@/components/CaseStudy";

export default function AmazonAlexaHero() {
  return (
    <div className="relative">
      <img
        src="/assets/AmazonAlexa/amazon-echo.png"
        alt=""
        className="w-full h-auto md:-translate-y-35 lg:-translate-y-40"
      />
      <div className="absolute flex flex-col h-full w-full inset-0 bg-gradient-to-t from-[#1D3B56] from-40% via-[#1D3B57]/3 via-80% to-transparent">
        <div className="w-full px-6 md:px-12 lg:px-20 h-full z-10 flex flex-col justify-center py-10">
          <CaseStudyHero
            caseStudyId="amazonAlexa"
            clientLogoSrc="/logos/alexa-logo.png"
            clientLogoAlt="Amazon Alexa Logo"
            subtitle="Showcasing Alexa's Personality, One Gen Z Answer at a Time"
            showCaseStudyTag={true}
          />
        </div>
      </div>
    </div>
  );
}