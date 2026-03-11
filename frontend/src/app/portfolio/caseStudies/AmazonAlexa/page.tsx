import NavBar from "../../../../components/NavBar";
import NewHero from "./components/newHero";
import OpportunitySection from "./components/Opportunity";

export default function AmazonAlexaPage() {
  return (
    <main className="min-h-screen bg-[#1D3B57]">
      <NavBar />
      <NewHero />
      <OpportunitySection />
    </main>
  );
}