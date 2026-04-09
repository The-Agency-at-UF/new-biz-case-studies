import { gentonaMedium, workSans } from "@/app/fonts";

export default function SeagramsHero() {
  return (
    <div className="relative">
        <img src="/assets/Seagrams/seagramsbg.png" className="bg-[url('/assets/Seagrams/seagramsbg.png')] bg-cover bg-no-repeat w-full h-auto"></img>
        {/*Case Study rectangle */}
        <div className="absolute flex h-full flex-col px-15 md:px-30 lg:px-40 inset-0 bg-gradient-to-t from-black from-20% via-[#000]/3 via-90% to-transparent">
            <div className="h-full z-10 flex flex-col justify-start pt-16 md:pt-24 lg:pt-32 xl:pt-40">
                <p className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-[#C8D7A0] px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#C8D7A0]/30 backdrop-blur-sm w-fit mb-8 sm:mb-2 text-white`}>
                case study</p>
                <div className="flex w-full flex-row flex-wrap items-end gap-4 md:gap-8">
                  <img
                    src="/assets/Seagrams/seagrams.png"
                    alt="Seagram&apos;s"
                    className="h-auto max-h-24 w-auto object-contain md:max-h-32"
                  />
                  <span
                    className={`${workSans.className} -translate-y-2 self-end pb-0.5 select-none text-[2.25rem] font-semibold leading-none tracking-tight text-white md:-translate-y-2.5 md:pb-1 md:text-[3.25rem] lg:-translate-y-3 lg:pb-1.5 lg:text-[4.25rem] xl:-translate-y-3.5 xl:text-[4.75rem]`}
                    aria-hidden
                  >
                    ×
                  </span>
                  <img
                    src="/assets/Seagrams/the_agency_white_logo.png"
                    alt="The Agency at the University of Florida"
                    className="h-auto max-h-28 w-auto object-contain object-left md:max-h-36"
                  />
                </div>
                <hr className="border-[#C8D7A0] border-t-2 my-4 w-full"></hr>
                <p className={`${gentonaMedium.className} text-xl lg:text-5xl text-white`}>Fighting for the Limelight: Distinguishing and Growing Seagram&apos;s Brand Among Competitors</p>
            </div>
        </div>
      </div>
  );
}
