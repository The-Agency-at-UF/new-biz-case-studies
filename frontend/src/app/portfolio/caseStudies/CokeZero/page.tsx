import NavBar from "@/components/NavBar";
import { gentona } from "@/app/layout";
import CokeAccentLines from "./components/CokeAccentLines";
import CokeLandingSection from "./components/CokeLandingSection";
import CokeOpportunitySection from "./components/CokeOpportunitySection";

export default function CokeZeroPage() {
  return (
    <>
      <NavBar />
      <div className={`${gentona.className} bg-black text-white overflow-x-hidden`}>
        <CokeLandingSection />
        <CokeAccentLines />
        <div className="mx-20">
          <CokeOpportunitySection />
        </div>
      </div>
    </>
  );
}
