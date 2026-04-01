import NavBar from "../../../../components/NavBar";
import UberHero from "./components/hero"; 
import OpportunitySection from "./components/opportunity";
import UberBlackSection from "./components/uberblacksection";
import PrivateHireBadge from "./components/privatehirebadge";
import UberEatsSection from "./components/ubereatssection";
import UberEatsScrollStrip from "./components/ubereatsscrollstrip";
import UberExecutionSection from "./components/uberexecutionsection";
import UberBannerSection from "./components/uberbannersection";
import UberFooter from "./components/uberfooter";

export default function UberPage() {
  return (
    <div className="min-h-screen w-full text-foreground bg-[#142328]">
      <NavBar />
      <UberHero />
      <OpportunitySection />
      <UberBlackSection />
      <PrivateHireBadge />
      <UberEatsSection />
      <UberEatsScrollStrip />
      <UberExecutionSection />
      <UberBannerSection />
      <UberFooter />
    </div>
  );
}