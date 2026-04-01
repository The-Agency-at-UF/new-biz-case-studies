import { gentonaBook, gentonaMedium } from "@/app/fonts";

export default function OpportunitySection() {
  return (
      <div className="relative flex h-full flex-col overflow-hidden px-15 pt-72 pb-28 md:px-30 md:pt-96 lg:px-40 lg:pt-[28rem] xl:pt-[34rem] 2xl:pt-[44rem]">
        <img
          src="/assets/Seagrams/seagramgold.png"
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 z-0 max-h-[min(70vh,900px)] w-auto max-w-[85vw] translate-x-[8%] translate-y-[12%] opacity-50 object-contain object-bottom object-right md:max-w-[65vw] lg:max-w-[50vw]"
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
