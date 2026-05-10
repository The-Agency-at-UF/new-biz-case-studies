import { gentona } from "@/app/fonts";
import NavBar from "@/components/NavBar";
import BackButton from "@/components/BackButton";

import CarnivalHeadlinesSection from "./components/CarnivalHeadlinesSection";
import CarnivalLandingSection from "./components/CarnivalLandingSection";
import CarnivalMeaningSection from "./components/CarnivalMeaningSection";
import CarnivalOpportunitySection from "./components/CarnivalOpportunitySection";
import CarnivalStatsSection from "./components/CarnivalStatsSection";
import CarnivalSolutionSection from "./components/CarnivalSolutionSection";

export default function CarnivalPage() {
  return (
    <>
      <BackButton />
      <NavBar />

      <main
        className={`${gentona.className} min-h-screen overflow-x-hidden bg-[#004E8E] text-white`}
        style={{
          backgroundColor: "#004E8E",
          backgroundImage: 'url(/assets/Carnival/Carnival-Background.png)',
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
        }}
      >
        <CarnivalLandingSection />

        <div className="relative z-10 mt-12 md:mt-22">
          <CarnivalOpportunitySection />
        </div>

        <div className="relative z-10 mt-8 md:mt-18">
          <CarnivalSolutionSection />
        </div>

        <div className="relative z-10 mt-8 md:mt-18">
          <CarnivalMeaningSection />
        </div>

        <div className="relative z-10">
          <CarnivalStatsSection />
        </div>

        <div className="relative z-10 mt-4 md:mt-8">
          <CarnivalHeadlinesSection />
        </div>
      </main>
    </>
  );
}
