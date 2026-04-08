import localFont from "next/font/local";
const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});
const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf",
  display: "swap",
});

const gentonaBold = localFont({
  src: "../../../../../../public/fonts/Gentona Bold.otf",
  display: "swap",
});

export default function MichelobUltra_Solution() {
    return (
      //   <div className="relative flex-1 flex-col bg-[url('/assets/MichelobUltra/red_chevron.png')] bg-cover bg-center bg-top py-40 lg:py-50 bg-no-repeat h-full
      // px-15 md:px-30 lg:px-40 overflow-x-hidden">
      <div className="relative pl-15 md:pl-30 lg:pl-40 py-10 items-top">
          <h2 className={`${gentonaMedium.className} relative text-4xl lg:text-[6rem] font-black uppercase leading-[0.8] tracking-normal z-3`}>
            <span className="block text-white">The</span>
            <span className="block text-[#D22030]">Solution</span>
          </h2>
          <div className="flex flex-row w-full">
            <div className="flex flex-1 flex-col mt-2 lg:mt-15 gap-2 md:gap-5 lg:gap-10">
              <p className={`${gentonaBook.className} text-sm lg:text-4xl font-thin text-white leading-tight tracking-wide z-3`}>
                To help spread the word about Team ULTRA,our graphic designers provided materials that supplemented Michelob’s digital 
                and traditional marketing through social media posts, email graphics and signage.
              </p>
              <p className={`${gentonaBook.className} text-sm lg:text-4xl font-thin text-white leading-tight tracking-wide z-3`}>
                Our team edited photos of Team Ultra basketball players and competitive runners to visually 
                entice athletes in a way that couldn’t be achieved with photography alone. 
              </p>  
              <p className={`${gentonaBook.className} text-sm lg:text-4xl font-thin text-white leading-tight tracking-wide z-3`}>
                The ULTRA-certified photos were posted on Michelob’s Instagram and featured in promotional emails 
                with copy written by Agency copywriters to help push the Joy wins narrative.
              </p>
              <p className={`${gentonaBook.className} text-sm lg:text-4xl font-thin text-white leading-tight tracking-wide z-3`}>
                Beyond the digital marketing materials, our team of graphic designers also created signage used to 
                cheer on Team ULTRA basketball players at a Michelob-sponsored pickup game.
              </p>
            </div>
            <div className="relative flex flex-1 pr-0 z-1">
              <img
                src="/assets/MichelobUltra/blurred_background2.png" className="relative object-cover object-center mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00346D] to-transparent pointer-events-none" />
            </div>
          </div>
      </div>
    );
}

