"use client";

import { AdventureProvider, useAdventure } from "./context/AdventureContext";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import MainHero from "./components/MainHero";
import ChooseYourAdventure from "./components/ChooseYourAdventure";
import WhatIsAgency from "./components/WhatIsAgency";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import LogoShowcase from "./components/LogoShowcase";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function WorkShowcaseSection() {
  return (
    <section id="case-studies" className="w-full bg-black">
      <div className="h-16 bg-gradient-to-b from-black/0 via-black/50 to-black" />
      <LogoShowcase />
      <CaseStudies />
    </section>
  );
}

const SECTION_MAP = {
  whatIsAgency: WhatIsAgency,
  services: Services,
  caseStudies: WorkShowcaseSection,
};

// Sections live in their own component so their re-renders
// never touch the Spline component above them
function AdventureSections() {
  const { sectionOrder, firstSectionRef } = useAdventure();

  if (!sectionOrder.length) return null;

  return (
    <>
      {sectionOrder.map((key, index) => {
        const Section = SECTION_MAP[key];
        return (
          <div key={key}>
            <div ref={index === 0 ? firstSectionRef : undefined}>
              <Section />
            </div>
          </div>
        );
      })}
      <ContactUs />
    </>
  );
}

function PresentationContent() {
  return (
    <SmoothScrollWrapper>
      <NavBar />
      {/* MainHero is a 200dvh sticky-background stage. The first viewport
          shows only the Spline scene; the second viewport overlays the
          choose-your-adventure buttons on top of the same scene. */}
      <MainHero>
        <ChooseYourAdventure />
      </MainHero>
      <div>
        <AdventureSections />
      </div>
      <Footer />
    </SmoothScrollWrapper>
  );
}

export default function PresentationPage() {
  return (
    <AdventureProvider>
      <PresentationContent />
    </AdventureProvider>
  );
}
