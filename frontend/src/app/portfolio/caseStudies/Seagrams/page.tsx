import NavBar from "../../../../components/NavBar";
import BackButton from "../../../../components/BackButton";

import SeagramsHero from "./components/hero";
import OpportunitySection from "./components/opportunity";
import SeagramsPackageStrip from "./components/packagestrip";
import HowWeQuenchedItSection from "./components/quenched";
import SeagramsImpactSection from "./components/impact";
import SeagramsFooter from "./components/footer";

export default function SeagramsPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-foreground">
      <BackButton />

      <NavBar />
      <SeagramsHero />
      <OpportunitySection />
      <SeagramsPackageStrip />
      <HowWeQuenchedItSection />
      <SeagramsImpactSection />
      <SeagramsFooter />
    </div>
  );
}
