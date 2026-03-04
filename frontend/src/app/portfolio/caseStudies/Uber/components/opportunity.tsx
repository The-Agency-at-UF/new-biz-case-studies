"use client";

import { gentonaMedium } from "@/app/fonts";


export default function OpportunitySection() {
  return (
          <div className="relativeflex flex-col h-full px-15 pb-48 md:px-30 lg:px-40 inset-0">
        {/* <img src="/assets/TheBartram/background.png" className="bg-[url('/assets/TheBartram/background.png')] bg-cover bg-no-repeat w-full h-auto"></img> */}
        {/*Case Study rectangle */}

        {/* Updated gap from gap-6 to gap-2 and lg:gap-18 to lg:gap-4 */}
        <div className="max-w-none flex flex-col gap-2 lg:gap-4"> 
          <h2 className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
            <span className="block text-white">The</span>
            <span className="block text-[#76c893]">Opportunity</span>
          </h2>
          
          <p className={`${gentonaMedium.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide`}>
            We saw the chance to help the tech giant connect with more audiences.<br />
            We <span className="font-bold">forecasted trends</span>, drew out a <span className="font-bold">monthly cultural pulse</span>, and <span className="font-bold">built bold assets.</span>
          </p>
        </div>
        
      </div>
    
  );
}
