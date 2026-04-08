import NavBar from "../../../../components/NavBar";
import SmirnoffFooter from "./components/smirnoffFooter";
import Smirnoff_Hero from "./components/smirnoffHero";
import SmirnoffImpact from "./components/smirnoffImpact";
import SmirnoffSolution from "./components/smirnoffSolution";

export default function SmirnoffPage() {
  return (
    <div className="min-h-screen text-foreground bg-black">
      <NavBar />
      <Smirnoff_Hero />
      <div className="space-y-0">
        <SmirnoffSolution />
        <SmirnoffImpact />
        <SmirnoffFooter />
      </div>
    </div>
  );
}
