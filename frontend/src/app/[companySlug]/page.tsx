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

function AdventureSections({ companySlug, skipInitialScroll }: { companySlug: string; skipInitialScroll?: boolean }) {
  const { sectionOrder, firstSectionRef } = useAdventure();

  React.useLayoutEffect(() => {
    if (!sectionOrder.length || skipInitialScroll) return;

    let firstScroll = 0;
    let secondScroll = 0;

    firstScroll = requestAnimationFrame(() => {
      secondScroll = requestAnimationFrame(() => {
        firstSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    return () => {
      cancelAnimationFrame(firstScroll);
      cancelAnimationFrame(secondScroll);
    };
  }, [sectionOrder, firstSectionRef, skipInitialScroll]);

  // Add IntersectionObserver to update URL hash based on visible section
  React.useEffect(() => {
    if (!sectionOrder.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update the URL without causing a scroll jump
            window.history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      // Trigger when the element intersects the middle 40% of the screen
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 } 
    );

    // Observe all sections
    const sections = document.querySelectorAll('div[data-section="true"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionOrder]);

  if (!sectionOrder.length) return null;

  return (
    <>
      {sectionOrder.map((key, index) => {
        const ref = index === 0 ? firstSectionRef : undefined;

        if (key === "caseStudies") {
          return (
            <div key={key} ref={ref} id="case-studies" data-section="true">
              <LogoShowcase />
              <DynamicCaseStudiesGrid companySlug={companySlug} />
            </div>
          );
        }

        const Section = SECTION_MAP[key as keyof typeof SECTION_MAP];
        if (!Section) return null;

        return (
          <div key={key} ref={ref} id={key} data-section="true">
            <Section />
          </div>
        );
      })}
      <div id="contact-us" data-section="true">
        <ContactUs />
      </div>
    </>
  );
}

function CompanyPageContent({ companySlug }: { companySlug: string }) {
  const { sectionOrder } = useAdventure();

  return (
    <SmoothScrollWrapper>
      <NavBar />
      <div id="hero" data-section="true">
        <MainHero />
        <ChooseYourAdventure />
      </div>
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