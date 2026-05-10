"use client";

import localFont from "next/font/local";
import { CaseStudyHero } from "@/components/CaseStudy";

const gentonaMedium = localFont({
  src: "../../../../../../src/app/fonts/gentona/Gentona Medium.otf",
  display: "swap",
});

const gentonaBook = localFont({
  src: "../../../../../../src/app/fonts/gentona/Gentona Book.otf",
  display: "swap",
});

const HERO_BG = "/assets/Smirnoff/image%2049.png";

export default function SmirnoffHero() {
  return (
    <div className="relative z-20 h-screen overflow-hidden">
      <img
        src={HERO_BG}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 flex flex-col px-6 md:px-12 lg:px-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(145, 32, 38,0.1) 0%, rgba(145, 32, 38,0.36) 30%, rgba(145, 32, 38,0.72) 58%, rgba(145, 32, 38,0.92) 78%, rgba(145, 32, 38,1) 100%)",
        }}
      >
        <CaseStudyHero
          caseStudyId="smirnoff"
          clientLogoSrc="/assets/Smirnoff/HeroLogo.svg"
          clientLogoAlt="Smirnoff Logo"
          subtitle="Serving up Key Insights Until Last Call"
          className="h-full w-full"
          containerClassName="relative z-10 flex h-full flex-col justify-end px-0 pb-10 pt-10 md:pb-12 md:pt-12"
          showCaseStudyTag={true}
          caseStudyTagClassName={`${gentonaMedium.className} border-[2px] md:border-[3px] border-white px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#C8102E]/30 backdrop-blur-sm w-fit text-white mb-6`}
          logoClassName="w-full max-w-3xl"
          clientLogoClassName="h-auto w-full max-w-[22rem] md:max-w-[34rem] lg:max-w-[42rem]"
          agencyLogoSrc={null}
          lineClassName="mb-4 h-1 w-full origin-left md:mb-6"
          subtitleClassName={`${gentonaBook.className} text-xl md:text-1xl lg:text-4xl text-white leading-snug`}
        />
      </div>
      <div
        className="pointer-events-none absolute left-0 right-0 -bottom-16 h-20 -translate-y-[10px] md:-bottom-2 md:h-24 lg:h-28"
        style={{
          background:
            "linear-gradient(180deg, rgba(145, 32, 38, 0) 0%, rgba(145, 32, 38,0.75) 55%, rgba(145, 32, 38,1) 100%)",
        }}
      />
    </div>
  );
}
