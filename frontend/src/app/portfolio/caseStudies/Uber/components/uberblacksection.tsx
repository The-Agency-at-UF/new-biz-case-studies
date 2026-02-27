"use client";

import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});

export default function UberBlackSection() {
  return (
<section className="py-24">
  <div className="relative flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0">
    <div className="max-w-none flex flex-row items-start items-center gap-6 lg:gap-18">
      <h2
        className={`${gentonaMedium.className} text-4xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-normal`}
      >
        <span className="block text-white">Uber</span>
        <span className="block text-[#76c893]">Black</span>
      </h2>
      <p
        className={`${gentonaMedium.className} text-sm lg:text-4xl font-light text-white leading-tight tracking-wide text`}
      >
        We created new and improved car labels for Uber Black, which are being{" "}
        <span className="font-bold">displayed overseas.</span>
      </p>

    </div>
  </div>
</section>
  );
}