import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});
const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf",
  display: "swap",
});

const MAROON = "#832026";
const BODY_TEXT = "#852026";

export default function SmirnoffImpact() {
  return (
    <section className="relative">
      <div
        className="relative text-[#4a0a18] pt-0 md:pt-1 pb-16 md:pb-24"
        style={{
          backgroundColor: "#EDEDED",
          backgroundImage: "url(/assets/Smirnoff/impactTexture.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="absolute inset-0 bg-[#EDEDED]/85 pointer-events-none" aria-hidden />
        <div className="relative z-10 -mt-10 md:-mt-12 px-15 md:px-30 lg:px-40 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 xl:gap-28">
          <div className="flex-1 min-w-0 max-w-2xl">
            <h2
              className={`${gentonaMedium.className} text-[2rem] md:text-[4rem] lg:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tight mb-6 md:mb-10`}
              style={{ color: MAROON }}
            >
              The Impact
            </h2>
            <div
              className={`${gentonaBook.className} space-y-5 md:space-y-6 text-sm md:text-lg lg:text-2xl font-light leading-relaxed tracking-wide`}
              style={{ color: BODY_TEXT }}
            >
              <p>
              The data we pulled from social listening tactics allowed our team to discover the top flavors that entice consumers from a wide range of backgrounds. Smirnoff used our insights to elevate fall recipes from predictable pumpkin spice to alluring apple cider and punched up summer classics from broad fruit flavors to calculated mango deliciousness. 
              </p>
              <p>
              By creating distinctive recipes, Smirnoff was able to provide consumers with {" "}
              <span className="font-semibold">114 cocktail ideas</span> that would enhance experiences with friends and families. the
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end shrink-0 lg:w-[42%] lg:-mr-40">
            <img
              src="/assets/Smirnoff/shaker.png"
              alt="Cocktail shaker"
              className="w-full max-w-md xl:max-w-lg h-auto object-contain drop-shadow-lg lg:translate-x-[50%] xl:translate-x-[58%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
