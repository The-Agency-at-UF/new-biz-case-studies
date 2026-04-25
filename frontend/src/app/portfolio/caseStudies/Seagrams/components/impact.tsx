import { gentonaBook, gentonaMedium } from "@/app/fonts";

export default function SeagramsImpactSection() {
  return (
    <section className="relative bg-black px-15 py-14 md:px-30 md:py-18 lg:px-40 lg:py-24">
      <img
        src="/assets/Seagrams/seagrams_mockup.png"
        alt="Seagram's ginger ale mockup"
        className="pointer-events-none absolute right-6 top-8 z-0 h-auto w-[min(42vw,24rem)] object-contain opacity-95 md:right-10 md:top-10 md:w-[min(36vw,28rem)] lg:right-16 lg:top-10 lg:w-[min(33vw,30rem)] xl:right-20 xl:w-[min(31vw,32rem)]"
      />
      <div className="relative z-10 max-w-5xl">
        <h2
          className={`${gentonaMedium.className} text-[2.25rem] font-black uppercase leading-[0.85] tracking-normal md:text-6xl lg:text-[6rem] xl:text-[7rem]`}
        >
          <span className="block text-white">The</span>
          <span className="block text-[#D9A04D]">Impact</span>
        </h2>
        <div
          className={`${gentonaBook.className} mt-6 flex max-w-5xl flex-col gap-6 text-sm font-light leading-tight tracking-wide text-white lg:mt-8 lg:gap-8 lg:text-2xl xl:text-3xl`}
        >
          <p>
            To gather intel about the drink market, we sent our team on a mission
            to the front lines - virtually and physically. Our initial stage of
            our research included analyzing competitors&apos; social media pages and
            advertisements.
          </p>
          <p>
            However, the investigation extended beyond digital spaces to achieve
            a more comprehensive analysis. We visited multiple grocery stores
            across the country to take photos of Seagram&apos;s shelving placement
            next to competitors. Once we finished gathering intelligence, we
            were ready to implement our findings.
          </p>
          <p>
            Through our research, we discovered a Catch-22 with the market:
            Seagram&apos;s wasn&apos;t being noticed at the store but needed more
            bottling to garner attention. To solve the issue, we helped
            Seagram&apos;s prepare a pitch to bottlers. The goal of the presentation
            was to convince manufacturers to buy into Seagram&apos;s future market
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}
