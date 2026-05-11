//import Image from "next/image"; // use Next.js Image component for any images
import NavBar from "../../../../components/NavBar";
import BackButton from "../../../../components/BackButton";
import CaseStudyDial from "../../../../components/CaseStudyDial";

import MichelobUltra_Hero from "./components/hero";
import MichelobUltra_PhotoGallery from "./components/Michelob_Gallery";
import MichelobUltra_Solution from "./components/Michelob_Solution";
import MichelobUltra_Opportunity from "./components/MichelobOpportunity";
import MichelobUltra_Footer from "./components/MichelobUltra_Footer";
import SharedFooter from "../../../../components/Footer";

export default function MichelobUltraPage() {
  return (
    <div className="relative min-h-screen text-foreground bg-[#00346D] overflow-x-clip">
      <CaseStudyDial currentStudy="MichelobUltra" />
      <BackButton currentStudy="MichelobUltra" />

      <NavBar />
      <MichelobUltra_Hero />

      <div className="relative">
        <MichelobUltra_Opportunity />

        {/* player on the right */}
        <img
          src="/assets/MichelobUltra/player.png"
          alt="Basketball player"
          className="absolute right-[-5rem] sm:right-[-5rem] md:right-[-7rem] lg:right-[-15rem] top-[-70] sm:top-[-10rem] md:top-[-15rem] lg:top-[-15rem] w-3/4 h-auto z-[12] object-contain"
        />

        <MichelobUltra_PhotoGallery />
      </div>

      <MichelobUltra_Solution />
      <MichelobUltra_Footer />
      <SharedFooter />
    </div>
  );
}

//more spacing before phones images
//more lessen gutter space on left for responsiveness
//animation for phone scrolling (like Adora's)