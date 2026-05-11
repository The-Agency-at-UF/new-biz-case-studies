import NavBar from "../../../../components/NavBar";
import BackButton from "../../../../components/BackButton";
import CaseStudyDial from "../../../../components/CaseStudyDial";

import SeagramsHero from "./components/hero";
import OpportunitySection from "./components/opportunity";
import SeagramsPackageStrip from "./components/packagestrip";
import HowWeQuenchedItSection from "./components/solution";
import SeagramsImpactSection from "./components/impact";
import SeagramsFooter from "./components/footer";
import SharedFooter from "../../../../components/Footer";

export default function SeagramsPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-foreground">
      <CaseStudyDial currentStudy="Seagrams" />
      <BackButton currentStudy="Seagrams" />

      <NavBar />
      <SeagramsHero />
      <OpportunitySection />
      <SeagramsPackageStrip />
      <HowWeQuenchedItSection />
      <SeagramsImpactSection />
      <SeagramsFooter />
      <SharedFooter />
    </div>
  );
}
