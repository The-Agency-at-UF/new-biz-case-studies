//import Image from "next/image"; // use Next.js Image component for any images
import GatorUnidosHero from "./components/newHero";
import CampaignSection from "./components/campaign";

export default function GatorUnidosPage() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <GatorUnidosHero />
      <CampaignSection />
    </div>
  );
}