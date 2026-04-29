import NavBar from "../../../../components/NavBar";
import SmirnoffFooter from "./components/smirnoffFooter";
import SmirnoffHero from "./components/smirnoffHero";
import SmirnoffImpact from "./components/smirnoffImpact";
import SmirnoffSolution from "./components/smirnoffSolution";

export default function SmirnoffPage() {
  return (
    <div className="min-h-min text-foreground bg-black">
      <NavBar />
      <SmirnoffHero />
      <div className="space-y-0">
        <SmirnoffSolution />
        <SmirnoffImpact />
        <SmirnoffFooter />
      </div>
    </div>
  );
}
