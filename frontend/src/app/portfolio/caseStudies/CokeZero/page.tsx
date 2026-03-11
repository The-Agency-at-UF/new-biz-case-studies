import NavBar from "@/components/NavBar";
import { gentona } from "@/app/layout";
import CokeAccentLines from "./components/CokeAccentLines";
import CokeLandingSection from "./components/CokeLandingSection";
import CokeOpportunitySection from "./components/CokeOpportunitySection";
import CokeSolutionSection from "./components/CokeSolutionSection";

export default function CokeZeroPage() {
  return (
    <>
      <NavBar />
      <div className={`${gentona.className} text-white overflow-x-hidden`}>
        <div className="relative">
          <CokeLandingSection />
          <CokeAccentLines />
        </div>
        <div className="relative z-10 -mt-6">
          <CokeOpportunitySection />
        </div>
        <div className="relative z-10">
          <CokeSolutionSection />
        </div>
      </div>
    </>
  );
}
