import SmoothScrollWrapper from "./SmoothScrollWrapper";
import MainHero from "./components/MainHero";
import WhatisAgency from "./components/WhatisAgency";
import Services from "./components/Services";
import CaseStudiesGrid from "./components/CaseStudiesGrid";
import ChooseYourAdventure from "./components/ChooseYourAdventure";
import ContactUs from "./components/ContactUs";
import NavBar from "../../components/NavBar";

export default function PresentationPage() {
  return (
    <>
      <NavBar />
      <SmoothScrollWrapper>
        <MainHero />
        <WhatisAgency />
        <Services />
        <CaseStudiesGrid />
        <ChooseYourAdventure />
        <ContactUs />
      </SmoothScrollWrapper>
    </>
  );
}