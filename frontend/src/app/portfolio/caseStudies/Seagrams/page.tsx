import NavBar from "../../../../components/NavBar";
import SeagramsHero from "./components/hero";
import OpportunitySection from "./components/opportunity";

export default function SeagramsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-foreground">
      <NavBar />
      <SeagramsHero />
      <OpportunitySection />
    </div>
  );
}
