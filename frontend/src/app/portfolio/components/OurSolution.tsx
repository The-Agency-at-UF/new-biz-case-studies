// This component is part of the "Our Solution" section of the portfolio page. 
// I reccomend you copy this component into your section of your Case Study page and customize the content as needed.
// The styling is designed to be consistent with the rest of the site
"use client";

import { gentonaMedium, gentonaBold, gentonaBook } from "@/app/fonts";

export default function OpportunitySection() {
  return (
    <div className="relative bg-[#A4D1D9] flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0">
        {/* <img src="/assets/TheBartram/background.png" className="bg-[url('/assets/TheBartram/background.png')] bg-cover bg-no-repeat w-full h-auto"></img> */}
        {/*Case Study rectangle */}
        <div className="max-w-none flex flex-col gap-6 lg:gap-18">
        <h2 className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
          <span className="block text-white">The</span>
          <span className="block text-[#84AE6B]">Opportunity</span>
        </h2>
            <p className={`${gentonaBook.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide`}>
                It can be difficult for apartment complexes to stand out in college towns, where there’s one on every corner. 
                Without a consistent <span className={`${gentonaBold.className}`}>brand identity</span>, Gainesville luxury apartment complex, 
                <b>The Bartram</b> struggled to create <b>meaningful interactions</b> with its target audiences on social media and beyond.
            </p>
        </div>
      </div>
  );
}