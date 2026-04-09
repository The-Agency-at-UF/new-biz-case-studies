import localFont from "next/font/local";
const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf", 
  display: "swap",
});

const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf", 
  display: "swap",
});

export default function MichelobUltra_Opportunity() {
  return (
    <div className="flex-1">
      <div className="relative flex-1 flex-col bg-[url('/assets/MichelobUltra/red_chevron.png')] bg-cover bg-center bg-top py-40 lg:py-50 bg-no-repeat h-full
      px-15 md:px-30 lg:px-40 overflow-x-hidden">
        {/* <div className="absolute flex flex-col h-full px-15 md:px-30 lg:px-40 inset-0"> */}
        <div className="relative z-13 mt-10 mb-20">
          <h2 className={`${gentonaMedium.className} text-4xl lg:text-[6rem] font-black uppercase leading-[0.8] tracking-normal`}>
            <span className="block text-white">The</span>
            <span className="block text-[#00346D]">Opportunity</span>
          </h2>
          <div className="flex flex-col mt-2 lg:mt-15 gap-2 md:gap-5 lg:gap-10">
            <h2 className={`${gentonaMedium.className} text-sm md:text-lg lg:text-4xl font-medium text-white uppercase`}>
              Before every sprint...
            </h2>
            <p className={`${gentonaBook.className} lg:w-[50rem] text-sm lg:text-4xl font-light text-white leading-tight tracking-wide`}>
              Before every championship game, before every moment of greatness, there needs to be a plan for success. Athletes crave it, fans fuel it, but what’s the spark that ignites the flame?
            </p>
            <p className={`${gentonaMedium.className} text-sm lg:text-4xl font-thin text-white leading-tight tracking-wide`}>
              Joy. Joy sparks success.
            </p>
            <p className={`${gentonaBook.className} text-sm lg:text-4xl font-thin text-white leading-tight tracking-wide`}>
              In a sea of tired marketing plans, a bold light beer company
              realized the joy to success pipeline could satisfy a thirst that
              athletes didn’t even know they had. Michelob ULTRA knew it could
              be the beer for every athlete, because the company knew it had an undeniable recipe for success. It was only a matter of finding the right team to pull its marketing strategy to the finish line.
            </p>
            <p className={`${gentonaMedium.className} text-sm lg:text-4xl font-thin text-white leading-tight tracking-wide`}>
              Enter The Agency. 
            </p>
            <p className={`${gentonaBook.className} text-sm lg:text-4xl font-thin text-white leading-tight tracking-wide`}>
              Our team of graphic designers created a stunning narrative through the punched up photos that required no copy for communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}