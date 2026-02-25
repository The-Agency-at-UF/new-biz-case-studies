"use client";

import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf", 
  display: "swap",
});

export default function OpportunitySection() {
  return (
    <section className="py-24">
      <div className="max-w-none lg:pl-10 flex flex-col gap-6 lg:gap-18">
        <h2 className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}>
          <span className="block text-white">The</span>
          <span className="block text-[#76c893]">Opportunity</span>
        </h2>

        {/* Flex gap provides better spacing control.
            'lg:whitespace-nowrap' keeps text on one line on large screens only, allowing natural wrapping on mobile.
        */}
        <div className="space-y-1 max-w-none">
          <p className={`${gentonaMedium.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide lg:whitespace-nowrap`}>
            We saw the chance to help the tech giant connect with more audiences.
          </p>
          <p className={`${gentonaMedium.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide lg:whitespace-nowrap`}>
            We <span className="font-bold">forecasted trends</span>, drew out a <span className="font-bold">monthly cultural pulse</span>, and <span className="font-bold">built bold assets.</span>
          </p>
        </div>
      </div>
    </section>
  );
}