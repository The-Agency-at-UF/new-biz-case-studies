import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";

export default function BlissImages() {
  return (
    <div className="w-full h-full bg-[#F55096] flex items-center justify-center px-8 md:px-10 lg:px-12 py-20 overflow-hidden">
      <div className="relative flex-1 flex items-center justify-center overflow-visible">
      {/* Cream (behind) */}
        <img
          src="/assets/Bliss/cream.png"
          alt="Cream"
          className="absolute z-0 translate-x-[-35%] translate-y-[-50%] top-[50%] scale-250  md: scale-275 lg:scale-300 overflow-visible"
        />
      {/* Grapefruit (front) */}
        <img
          src="/assets/Bliss/grapefruit_with_shadow.png"
          alt="Grapefruit"
          className="relative w-full z-10 scale-175  translate-x-[-15%] overflow-visible rotate-30"
        />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/assets/Bliss/Bliss_Ticktok_Video.png"
          alt="TikTok mockup"
          className="w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-2xl translate-x-[15%]"
        />
      </div>
    </div>
  );
}