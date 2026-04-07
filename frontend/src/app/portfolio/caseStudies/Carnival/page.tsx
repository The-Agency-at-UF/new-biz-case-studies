import { gentona } from "@/app/layout";
import NavBar from "@/components/NavBar";
import carnivalBackground from "./assets/Carnival-Background.png";
import CarnivalLandingSection from "./components/CarnivalLandingSection";
import CarnivalOpportunitySection from "./components/CarnivalOpportunitySection";
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
        <div className="relative z-10 mt-20 md:mt-32">
          <CarnivalOpportunitySection />
        </div>
        <div className="relative z-10 mt-12 md:mt-20">
          <CarnivalSolutionSection />
        </div>
      </main>
    </>
  );
}
