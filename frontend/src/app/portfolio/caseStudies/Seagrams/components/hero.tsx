import { gentonaMedium, workSans } from "@/app/fonts";

export default function SeagramsHero() {
  return (
    <div className="relative min-h-[min(92vh,960px)] overflow-visible">
        {/*Case Study rectangle */}
        <div className="absolute inset-0 flex h-full flex-col px-15 md:px-30 lg:px-40">
            <div className="z-10 flex h-full flex-col items-start justify-end pt-12 pb-8 md:pb-6 lg:pb-4 lg:translate-y-10 xl:pb-2 xl:translate-y-24 2xl:pb-2 2xl:translate-y-32">
                <p className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-[#C8D7A0] px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#C8D7A0]/30 backdrop-blur-sm w-fit mb-8 sm:mb-2 text-white`}>
                case study</p>
                <div className="flex w-full flex-row flex-wrap items-end gap-4 md:gap-8">
                  <img
                    src="/assets/Seagrams/seagrams.png"
                    alt="Seagram&apos;s"
                    className="h-auto max-h-24 w-auto object-contain md:max-h-32"
                  />
                  <span
                    className={`${workSans.className} self-end pb-0.5 select-none text-[1.75rem] font-semibold leading-none tracking-tight text-white md:pb-1.5 md:text-[2.5rem] lg:pb-2 lg:text-[3.25rem]`}
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
