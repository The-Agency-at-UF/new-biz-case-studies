import Image from "next/image";
import cokeBackdrop from "./assets/CokeBackdrop.jpg";
import cokeZero from "./assets/CokeZeroWhite.png";
import cokeAsset5 from "./assets/CokeAsset5.png";
import agencyLogo from "./assets/AgencyLogoFull.png";
import NavBar from "../../../../components/NavBar";

import { gentona } from "@/app/layout";


export default function CokeZeroPage() {
  return (
    <>
      <NavBar />
      <div className={`mx-20 ${gentona.className}`}>

        <section
          id="coke-landing"
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cokeBackdrop.src})` }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b 
                          from-black/40 
                          via-black/70 
                          to-[#0E0E0E]" />

          {/* Content */}
          <div className="relative z-10 text-white w-full max-w-6xl px-8">
            <p className="inline-block font-bold outline outline-[3px] outline-[#ED1C24] px-3 py-1">
              Case Study
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Image
                src={cokeZero}
                alt="Coca Cola Zero Sugar"
                className="w-60 h-auto pr-2"
              />

              <p className="font-bold text-lg">X</p>

              <Image
                src={agencyLogo}
                alt="The Agency at the University of Florida"
                className="w-80 h-auto pl-2"
              />
            </div>

            <div className="w-200 h-[3px] bg-[#ED1C24] mt-6" />

            <h3 className="text-3xl font-bold mt-6">
              Developing Digital Solutions to Punt the Pandemic
            </h3>
          </div>
        </section>
        <div className="flex flex-col gap-4">
          <div className="w-50 h-[3px] bg-[#ED1C24] ml-auto" />
          <div className="w-20 h-[3px] bg-[#ED1C24] ml-auto" />
          <div className="w-200 h-[3px] bg-[#ED1C24] ml-auto" />
          <div className="w-100 h-[3px] bg-[#ED1C24] ml-auto" />
          <div className="w-20 h-[3px] bg-[#ED1C24] ml-auto" />
        </div>
        
        <section className="relative min-h-screen items-center overflow-hidden ml-2 ">
          <div className="py-6">
            <h1 className="text-6xl font-extrabold">THE</h1>
            <h1 className="text-6xl text-[#DA2028] font-extrabold">OPPORTUNITY</h1>
          </div>
          
          <div className="flex">
            <div className="w-150">
              <p className="text-lg">In 2020, the possibility of a safe and normal college football season was 
              intercepted by the COVID-19 pandemic. Fans watched their favorite players test
              positive, their favorite teams pull out and anticipated games get cancelled
              indefinitely. Many had to say goodbye to their game-day favorites, namely rowdy
              crowds and over-the-top tailgates.
              </p>
              <br></br>
              <p className="text-lg">
                Like the rest of us, Coca-Cola did not anticipate a pandemic, much less one that would 
                leave an impact for years to come. Coke's internal marketing agency, KO:OP, had planned
                various in-person activations inside college football stadiums for the 2020 season and 
                beyond. These needed to be adjusted. Given in-person restrictions and emerging health 
                concerns, Coke’s team was on a mission to find the best ways to nuance its means of 
                refreshing football fanatics in 2021.
              </p>
            </div>
            <div className="relative w-130 h-130 rounded-full overflow-hidden">
              <Image
                src={cokeAsset5}
                alt="Game day coke advertisement"
                fill
                className="object-cover object-[20%_50%]"
              />
            </div>
            
          </div>
          

        
        </section>
      </div>
    </>
  );
}
