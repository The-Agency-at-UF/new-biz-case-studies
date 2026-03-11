
import NavBar from "../../../../components/NavBar";
import UberHero from "./components/hero"; 
import OpportunitySection from "./components/opportunity";
import UberBlackSection from "./components/uberblacksection";
import PrivateHireBadge from "./components/privatehirebadge";
import UberEatsSection from "./components/ubereatssection";

export default function UberPage() {
  return (
    <div className="min-h-screen w-full bg-[#142328]">
      {/* NavBar usually stays full width, but internal links align to the container */}
      <NavBar />
      <UberHero />
      <OpportunitySection />
      <UberBlackSection />
      <PrivateHireBadge />
      <UberEatsSection />
    </div>
  );
}