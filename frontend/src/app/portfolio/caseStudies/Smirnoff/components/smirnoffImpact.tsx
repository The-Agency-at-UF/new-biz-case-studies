import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});
const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf",
  display: "swap",
});

const MAROON = "#4a0a18";

export default function SmirnoffImpact() {
  return (
    <section className="relative">
      <div className="relative w-full leading-none -mb-px">
        <img
          src="/assets/Smirnoff/impactVector.svg"
          alt=""
          className="w-full h-auto block max-h-24 md:max-h-32 object-cover object-top"
          aria-hidden
        />
      </div>
      <div
        className="relative text-[#4a0a18] pt-6 pb-16 md:pb-24"
        style={{
          backgroundColor: "#EDEDED",
          backgroundImage: "url(/assets/Smirnoff/impactTexture.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="absolute inset-0 bg-[#EDEDED]/85 pointer-events-none" aria-hidden />
        <div className="relative z-10 px-15 md:px-30 lg:px-40 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 xl:gap-28">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2
              className={`${gentonaMedium.className} text-[2rem] md:text-[4rem] lg:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tight mb-6 md:mb-10`}
              style={{ color: MAROON }}
            >
              The Impact
            </h2>
            <div
              className={`${gentonaBook.className} space-y-5 md:space-y-6 text-sm md:text-lg lg:text-2xl font-light leading-relaxed tracking-wide`}
              style={{ color: MAROON }}
            >
              <p>
                Seasonal and flavor-forward signals came through clearly in the
                listening data—reinforcing where Smirnoff could lean into trends
                like apple cider in colder months and mango in warmer, social
                moments.
              </p>
              <p>
                The sprint translated that intelligence into{" "}
                <span className="font-semibold">114 cocktail ideas</span> the
                team could pressure-test, brief into creative, and use to keep
                serves feeling fresh from planning through last call.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end shrink-0 lg:w-[42%]">
            <img
              src="/assets/Smirnoff/shaker.png"
              alt="Cocktail shaker"
              className="w-full max-w-md xl:max-w-lg h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
