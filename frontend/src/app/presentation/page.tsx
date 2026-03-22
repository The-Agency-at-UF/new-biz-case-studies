"use client";

import dynamic from "next/dynamic";
import { AdventureProvider, useAdventure } from "./context/AdventureContext";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import MainHero from "./components/MainHero";
import WhatIsAgency from "./components/WhatIsAgency";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// Dynamically import ChooseYourAdventure with no SSR
// This isolates Spline's DOM from React's reconciler
const ChooseYourAdventure = dynamic(
  () => import("./components/ChooseYourAdventure"),
  { ssr: false }
);

const SECTION_MAP = {
  whatIsAgency: WhatIsAgency,
  services: Services,
  caseStudies: CaseStudies,
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
          <div
            key={key}
            ref={index === 0 ? firstSectionRef : undefined}
          >
            <Section />
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
      <MainHero />
      <ChooseYourAdventure />
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