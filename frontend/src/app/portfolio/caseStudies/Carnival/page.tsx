import { gentona } from "@/app/fonts";
import NavBar from "@/components/NavBar";
import carnivalBackground from "./assets/Carnival-Background.png";
import CarnivalHeadlinesSection from "./components/CarnivalHeadlinesSection";
import CarnivalLandingSection from "./components/CarnivalLandingSection";
import CarnivalMeaningSection from "./components/CarnivalMeaningSection";
import CarnivalOpportunitySection from "./components/CarnivalOpportunitySection";
import CarnivalStatsSection from "./components/CarnivalStatsSection";
import CarnivalSolutionSection from "./components/CarnivalSolutionSection";

export default function CarnivalPage() {
  return (
    <>
      <NavBar />
      <main
        className={`${gentona.className} overflow-x-hidden text-white`}
        style={{
          backgroundColor: "#071533",
          backgroundImage: `url(${carnivalBackground.src})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          minHeight: "max(100vh, calc(100vw * 7911 / 1920))",
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
        <div className="relative z-10 mt-[1rem] md:mt-[3rem]">
          <CarnivalStatsSection />
        </div>
        <div className="relative z-10 mt-4 md:mt-8">
          <CarnivalHeadlinesSection />
        </div>
      </main>
    </>
  );
}
