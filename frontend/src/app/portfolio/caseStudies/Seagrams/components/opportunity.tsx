import { gentonaBook, gentonaMedium } from "@/app/fonts";

export default function OpportunitySection() {
  return (
      <div className="relative flex h-full flex-col overflow-hidden px-15 pt-[38rem] pb-40 md:px-30 md:pt-[48rem] lg:px-40 lg:pt-[62rem] xl:pt-[72rem] 2xl:pt-[88rem]">
        <img
          src="/assets/Seagrams/seagramgold.png"
          alt=""
          className="pointer-events-none absolute bottom-[min(8vh,4.5rem)] right-0 z-0 max-h-[min(96vh,1400px)] w-auto max-w-[min(100vw,1100px)] -translate-y-[3%] translate-x-[5%] opacity-50 object-contain object-bottom object-right md:max-w-[85vw] md:-translate-y-[4%] lg:max-w-[72vw] lg:bottom-[min(6vh,3.5rem)] xl:max-w-[65vw] 2xl:-translate-y-[5%]"
        />
        {/*Case Study rectangle */}
        <div className="relative z-10 max-w-none flex flex-col gap-6 lg:gap-18">
        <h2 className={`${gentonaMedium.className} text-[2.25rem] md:text-6xl lg:text-[6rem] xl:text-[7rem] font-black leading-[0.85] tracking-normal`}>
          <span className="block uppercase text-white">The</span>
          <span className="block text-[#D9A04D]">THIRST FOR DISTINCTION</span>
        </h2>
        <div className={`${gentonaBook.className} flex max-w-4xl flex-col gap-6 text-sm font-light leading-tight tracking-wide text-white md:max-w-5xl lg:gap-8 lg:text-2xl xl:text-4xl`}>
          <p>
            Seagram&apos;s competes in a ginger ale and mixer aisle dominated by
            deeply entrenched players. Canada Dry owns shelf fluency and
            habitual pickup; Coca-Cola&apos;s system strength resets shopper
            expectations around availability, price, and promotional noise.
          </p>
          <p>
            For Seagram&apos;s, breaking through meant more than a packaging
            refresh. It required clarifying why the brand still matters—how real
            ginger cues, classic mixer rituals, and on-premise credibility could
            win back moments the portfolio had been losing to safer defaults.
          </p>
          <p>
            The opportunity was to define a sharper brand strategy and creative
            language that could convert curiosity into preference: standing out
            in a segment where tradition is table stakes and distinction is the
            real fight.
          </p>
        </div>
        </div>
      </div>
    
  );
}
