import Image from "next/image";
import NavBar from "../../../../components/NavBar";
import uberBanner from "./uber_assets/uber_banner.png";

export default function UberPage() {
  return (
    // background color
    <div className="min-h-screen text-white bg-[#1a2a2f]">
        
        <div className="bg-[#1a2a2f]">
          <NavBar />
        </div>
        
        

        <div className="p-8">
            <h1 className="text-4xl font-bold">Coming Soon!</h1>
        </div>
    </div>
  );
}