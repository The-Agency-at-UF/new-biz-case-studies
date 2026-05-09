//import Image from "next/image"; // use Next.js Image component for any images
import NavBar from "../../../../components/NavBar";
import BackButton from "../../../../components/BackButton";

import BlissHero from "./components/blissHero";
import BlissOpportunity from "./components/blissOpportunity";
import BlissImages from "./components/blissImages";
import BlissSolution from "./components/blissSolution";
import BlissImpact from "./components/blissImpact";
import BlissFooter from "./components/blissFooter";

export default function BlissPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F55096] text-foreground">
      <BackButton />

      <NavBar />
      <BlissHero />

      <div className="overflow-visible">
        
        <BlissOpportunity />
        <BlissImages />
        <BlissSolution />
        <BlissImpact />
        <BlissFooter />
      </div>
    </div>
  );
}