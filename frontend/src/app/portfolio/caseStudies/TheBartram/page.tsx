//import Image from "next/image"; // use Next.js Image component for any images
import NavBar from "../../../../components/NavBar";
import BackButton from "../../../../components/BackButton";
import CaseStudyDial from "../../../../components/CaseStudyDial";

import Bartram_Footer from "./components/bartramFooter";
import Bartram_Hero from "./components/bartramHero";
import BartramImpact from "./components/bartramImpact";
import BartramOpportunity from "./components/bartramOpportunity";
import BartramPhotoGallery from "./components/bartramPhotoGallery";
import BartramSolution from "./components/bartramSolution";
import SharedFooter from "../../../../components/Footer";

export default function TheBartramPage() {
  return (
    <div className="relative min-h-screen text-foreground bg-[#A4D1D9]">
      <CaseStudyDial currentStudy="TheBartram" />
      <BackButton currentStudy="TheBartram" />

      <NavBar />
      <Bartram_Hero />

      <div className="space-y-0">
        <BartramOpportunity />
        <BartramPhotoGallery />
        <BartramSolution />
        <BartramImpact />
        <Bartram_Footer />
        <SharedFooter />
      </div>
    </div>
  );
}