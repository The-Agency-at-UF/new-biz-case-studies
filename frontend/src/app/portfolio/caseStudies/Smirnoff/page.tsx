import NavBar from "../../../../components/NavBar";
import BackButton from "../../../../components/BackButton";
import CaseStudyDial from "../../../../components/CaseStudyDial";

import SmirnoffFooter from "./components/smirnoffFooter";
import SmirnoffHero from "./components/smirnoffHero";
import SmirnoffImpact from "./components/smirnoffImpact";
import SmirnoffSolution from "./components/smirnoffSolution";
import SharedFooter from "../../../../components/Footer";

export default function SmirnoffPage() {
  return (
    <div className="relative min-h-min text-foreground bg-black">
      <CaseStudyDial currentStudy="Smirnoff" />
      <BackButton currentStudy="Smirnoff" />

      <NavBar />
      <SmirnoffHero />

      <div className="space-y-0">
        <SmirnoffSolution />
        <SmirnoffImpact />
        <SmirnoffFooter />
        <SharedFooter />
      </div>
    </div>
  );
}