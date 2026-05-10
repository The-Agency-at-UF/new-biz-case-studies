"use client";

import { CaseStudyHero } from "@/components/CaseStudy";

export default function CarnivalLandingSection() {
  return (
    <section id="carnival-landing" className="relative flex min-h-screen items-center overflow-hidden">
      <CaseStudyHero
        caseStudyId="carnival"
        clientLogoSrc="/assets/Carnival/carnival-Logo.svg"
        clientLogoAlt="Carnival Logo"
        subtitle="The Agency Helps Carnival Navigate the Sentiments of Travelers Post-2021"
        containerClassName="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-12 sm:px-10 md:px-14 lg:px-20"
        subtitleClassName="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
      />
    </section>
  );
}
