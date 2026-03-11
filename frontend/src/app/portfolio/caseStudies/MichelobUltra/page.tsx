//import Image from "next/image"; // use Next.js Image component for any images
import NavBar from "../../../../components/NavBar";
import MichelobUltra_Hero from "./components/hero";

export default function MichelobUltraPage() {
  return (
    <div className="min-h-screen text-foreground bg-[#00346D]">
      {/* <NavBar /> */}
      <MichelobUltra_Hero />
                    <img src="/assets/MichelobUltra/red_chevron (1).png" className="bg-cover bg-no-repeat"></img>

    </div>
  );
}