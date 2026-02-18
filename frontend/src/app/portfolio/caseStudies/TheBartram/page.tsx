//import Image from "next/image"; // use Next.js Image component for any images
import NavBar from "../../../../components/NavBar";
import Bartram_Footer from "./components/bartramFooter";
import Bartram_Hero from "./components/bartramHero";
import BartramOpportunity from "./components/bartramOpportunity";
import BartramPhotoGallery from "./components/bartramPhotoGallery";
import BartramSolution from "./components/bartramSolution";

export default function TheBartramPage() {
  return (
    <div className="min-h-screen text-foreground bg-[#A4D1D9]">
        {/* <NavBar /> */}
        <Bartram_Hero />
        <div className="space-y-40">
          <BartramOpportunity />
          <BartramPhotoGallery />
          <BartramSolution />
          <Bartram_Footer />
        </div>
    </div>
  );
}