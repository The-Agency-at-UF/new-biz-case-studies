import NavBar from "../../../../components/NavBar";
import NewHero from "./components/newHero";
import OpportunitySection from "./components/Opportunity";
import EchoPlusImage from "./components/EchoPlusImage";
import SolutionSection from "./components/Solution";


export default function AmazonAlexaPage() {
  return (
    <main className="relative min-h-screen bg-[#1D3B57] overflow-x-hidden">
      <NavBar />
      <NewHero />
      <EchoPlusImage />
      <OpportunitySection />
      <SolutionSection />
    </main>
  );
}