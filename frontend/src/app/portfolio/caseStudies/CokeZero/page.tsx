import NavBar from "@/components/NavBar";
import { gentona } from "@/app/layout";
import CokeAccentLines from "./components/CokeAccentLines";
import CokeLandingSection from "./components/CokeLandingSection";
import CokeOpportunitySection from "./components/CokeOpportunitySection";

export default function CokeZeroPage() {
  return (
    <>
      <NavBar />
      <div className={`mx-20 ${gentona.className}`}>
        <CokeLandingSection />
        <CokeAccentLines />
        <CokeOpportunitySection />
      </div>
    </>
  );
}
