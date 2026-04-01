import NavBar from "../../../../components/NavBar";
import Smirnoff_Hero from "./components/smirnoffHero";

export default function SmirnoffPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <NavBar />
      <Smirnoff_Hero />
    </div>
  );
}