"use client";

import Image from "next/image";
import { gentonaMedium } from "@/app/fonts";

export default function UberHero() {
  return (
    <div className="relative">
        <img src="/assets/Uber/uberbg.png" className="bg-[url('/assets/Uber/uberbg.png')] bg-cover bg-no-repeat w-full h-auto"></img>
        {/*Case Study rectangle */}
        <div className="absolute flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0 bg-gradient-to-t from-[#142328] from-20% via-[#000]/3 via-90% to-transparent">
            <div className="h-full z-10 flex flex-col justify-center py-10">
                <p className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-white px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#68BF70]/30 backdrop-blur-sm w-fit mb-8 sm: mb-2`}>
                case study</p>
                <img src="/assets/Uber/uber_logos.png" className="w-full h-auto"></img>
                <hr className="border-[#68BF70] border-t-2 my-4 w-full"></hr>
                <p className={`${gentonaMedium.className} text-xl lg:text-4xl text-white`}>Distinguishing a local, luxury apartment complex from competitors in a saturated market</p>
            </div>
        </div>
      </div>
  );
}
