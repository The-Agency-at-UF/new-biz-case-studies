"use client";

import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf", 
  display: "swap",
});

export default function OpportunitySection() {
  return (
    <section className="py-24">
      <div className="max-w-none lg:pl-10"> 
        <h2 className={`${gentonaMedium.className} text-7xl lg:text-[10rem] font-black uppercase leading-[0.8] tracking-normal mb-20`}>
          <span className="block text-white">The</span>
          <span className="block text-[#76c893]">Opportunity</span>
        </h2>

        {/* 'max-w-none' ensures the container doesn't restrict the width.
            'whitespace-nowrap' forces the text to stay on one single line.
        */}
        <div className="space-y-1 max-w-none">
          <p className="text-xl lg:text-4xl font-light text-white leading-tight tracking-wide whitespace-nowrap">
            We saw the chance to help the tech giant connect with more audiences.
          </p>
          <p className="text-xl lg:text-4xl font-light text-white leading-tight tracking-wide whitespace-nowrap">
            We <span className="font-bold">forecasted trends</span>, drew out a <span className="font-bold">monthly cultural pulse</span>, and <span className="font-bold">built bold assets.</span>
          </p>
        </div>
      </div>
    </section>
  );
}