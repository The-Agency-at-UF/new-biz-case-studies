import NavBar from "../../components/NavBar";
import MainHero from "@/app/presentation/components/MainHero";
import Choose from "@/app/presentation/components/ChooseYourAdventure";
import WhatIsAgency from "@/app/presentation/components/WhatisAgency";
import OurServices from "@/app/presentation/components/Services";
import Contact from "@/app/presentation/components/ContactUs";
import Logos from "@/app/presentation/components/Logos";
import CaseStudiesGrid from "@/app/presentation/components/CaseStudiesGrid";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <NavBar />
      <MainHero />
      <Choose />
      <WhatIsAgency />
      <OurServices />
      <Contact />
      <Logos />
      <CaseStudiesGrid />
    </div>
  );
}
