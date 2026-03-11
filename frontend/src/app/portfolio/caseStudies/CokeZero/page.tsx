import NavBar from "@/components/NavBar";
import { gentona } from "@/app/layout";
import cokeBackground from "./assets/Coke-Background.svg";
import CokeAccentLines from "./components/CokeAccentLines";
import CokeLandingSection from "./components/CokeLandingSection";
import CokeOpportunitySection from "./components/CokeOpportunitySection";
import CokeSolutionSection from "./components/CokeSolutionSection";

export default function CokeZeroPage() {
  return (
    <>
      <NavBar />
      <div
        className={`${gentona.className} text-white overflow-x-hidden`}
        style={{
          backgroundColor: "#121212",
          backgroundImage: `url(${cokeBackground.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
          minHeight: "max(100vh, calc(100vw * 5783 / 1920))",
        }}
      >
        <div className="relative">
          <CokeLandingSection />
          <div className="relative z-10 mt-28 md:mt-36">
            <CokeAccentLines />
          </div>
          
        </div>
        <div className="relative z-10 mt-28 md:mt-46">
          <CokeOpportunitySection />
        </div>
        <div className="relative z-10 mt-16 md:mt-24">
          <CokeSolutionSection />
        </div>
      </div>
    </>
  );
}
