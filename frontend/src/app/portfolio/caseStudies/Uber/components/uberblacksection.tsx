"use client";

import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});

export default function UberBlackSection() {
  return (
    <section className="py-24">
      <div className="max-w-none lg:pl-10 flex items-center gap-16">
        {/* Big title */}
        <h2 className={`${gentonaMedium.className} text-5xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal shrink-0`}>
          <span className="block text-white">Uber</span>
          <span className="block text-[#76c893]">Black</span>
        </h2>

        {/* Description — vertically centered beside the title */}
        <div className="space-y-1">
          <p className="text-xl lg:text-4xl font-light text-white leading-tight tracking-wide">
            We created new and improved car labels for Uber Black,
          </p>
          <p className="text-xl lg:text-4xl font-light text-white leading-tight tracking-wide">
            which are being <span className="font-bold">displayed overseas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}