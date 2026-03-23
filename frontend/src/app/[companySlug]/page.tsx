"use client";

import React from "react";
import dynamic from "next/dynamic";
import { AdventureProvider, useAdventure } from "../presentation/context/AdventureContext";
import SmoothScrollWrapper from "../presentation/SmoothScrollWrapper";
import MainHero from "@/app/presentation/components/MainHero";
import WhatIsAgency from "@/app/presentation/components/WhatIsAgency";
import Services from "@/app/presentation/components/Services";
import ContactUs from "@/app/presentation/components/ContactUs";
import LogoShowcase from "@/app/presentation/components/LogoShowcase";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import DynamicCaseStudiesGrid from "@/app/presentation/components/DynamicCaseStudiesGrid";

const ChooseYourAdventure = dynamic(
  () => import("@/app/presentation/components/ChooseYourAdventure"),
  { ssr: false }
);

type Props = {
  params: Promise<{ companySlug: string }>;
};

const SECTION_MAP = {
  whatIsAgency: WhatIsAgency,
  services: Services,
};

function AdventureSections({ companySlug }: { companySlug: string }) {
  const { sectionOrder, firstSectionRef } = useAdventure();

  if (!sectionOrder.length) return null;

  return (
    <>
      {sectionOrder.map((key, index) => {
        const ref = index === 0 ? firstSectionRef : undefined;

        if (key === "caseStudies") {
          return (
            <div key={key} ref={ref}>
              <LogoShowcase />
              <DynamicCaseStudiesGrid companySlug={companySlug} />
            </div>
          );
        }

        const Section = SECTION_MAP[key as keyof typeof SECTION_MAP];
        if (!Section) return null;

        return (
          <div key={key} ref={ref}>
            <Section />
          </div>
        );
      })}
      <ContactUs />
    </>
  );
}

function CompanyPageContent({ companySlug }: { companySlug: string }) {
  return (
    <SmoothScrollWrapper>
      <NavBar />
      <MainHero />
      <ChooseYourAdventure />
      <div>
        <AdventureSections companySlug={companySlug} />
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
}

export default function CompanyPage({ params }: Props) {
  const { companySlug } = React.use(params);

  return (
    <AdventureProvider>
      <CompanyPageContent companySlug={companySlug} />
    </AdventureProvider>
  );
}