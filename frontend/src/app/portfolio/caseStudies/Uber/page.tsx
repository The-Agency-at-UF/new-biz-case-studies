"use client";

import Image from "next/image";
import NavBar from "../../../../components/NavBar";
import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});

export default function UberPage() {
  return (
    <div className={`min-h-screen text-white bg-[#1a2a2f] ${gentonaMedium.className}`}>
      <div className="bg-[#1a2a2f] w-full">
        <NavBar />
      </div>

      <div className="relative w-full h-[750px] mt-25 overflow-hidden"> 
        <Image
          src="/assets/Uber/uberbg.png" 
          alt="Uber Background Banner"
          fill
          className="object-cover scale-x-[-1] object-center" 
          priority
        />
        
        <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-[#1a2a2f] via-transparent to-transparent">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-end pb-12 pl-40 px-8">
            
            {/*Case Study rectangle */}
            <div className="mb-6">
                <span className="border-[3px] border-white px-6 py-2 rounded-none text-xl font-bold tracking-wider uppercase bg-[#68BF70]/51 backdrop-blur-sm">
                    Case Study
                </span>
            </div>

            {/* Logos */}
            <div className="flex items-end gap-10 mb-8">
                <div className="relative w-80 h-36">
                    <Image 
                        src="/assets/Uber/uber_logo.png" 
                        alt="Uber Logo" 
                        fill 
                        className="object-contain object-bottom"
                    />
                </div>
                
                {/* x separator */}
                <span className="text-5xl font-extralight text-white pb-4">×</span>

                <div className="relative w-[500px] h-36">
                    <Image 
                        src="/Agency_logo_2.png" 
                        alt="Agency Logo" 
                        fill 
                        className="object-contain object-bottom"
                    />
                </div>
            </div>
            
            {/* green line*/}
            <div className="w-full h-[3px] bg-[#68BF70] mb-8 max-w-5xl"></div>
            
            <p className="text-4xl md:text-5xl font-medium max-w-5xl leading-tight drop-shadow-2xl">
                Sharing a Ride with Uber on Its Road to Refined Research and Captivating Assets
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}