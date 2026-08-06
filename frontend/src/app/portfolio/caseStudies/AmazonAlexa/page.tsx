import NavBar from "../../../../components/NavBar";
import BackButton from "../../../../components/BackButton";

import NewHero from "./components/newHero";
import OpportunitySection from "./components/Opportunity";
import EchoPlusImage from "./components/EchoPlusImage";
import SolutionSection from "./components/Solution";
import ImpactSection from "./components/Impact";
import Footer from "./components/Footer";
import SharedFooter from "../../../../components/Footer";

export default function AmazonAlexaPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#1D3B57]">
      <BackButton currentStudy="AmazonAlexa" />

      <NavBar />
      <NewHero />

      {/* Decorative echo image */}
      <EchoPlusImage />

      <OpportunitySection />
      <SolutionSection />
      <ImpactSection />
      <Footer />
      <SharedFooter />
    </main>
  );
}