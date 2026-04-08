import { gentonaBook, gentonaMedium } from "@/app/fonts";

export default function HowWeQuenchedItSection() {
  return (
    <section className="bg-black px-15 py-14 md:px-30 md:py-18 lg:px-40 lg:py-24">
      <div className="max-w-6xl">
        <h2
          className={`${gentonaMedium.className} text-[2.25rem] font-black uppercase leading-[0.85] tracking-normal md:text-6xl lg:text-[6rem] xl:text-[7rem]`}
        >
          <span className="block text-white">How We</span>
          <span className="block text-[#D9A04D]">Quenched It</span>
        </h2>
        <div
          className={`${gentonaBook.className} mt-6 flex max-w-5xl flex-col gap-6 text-sm font-light leading-tight tracking-wide text-white lg:mt-8 lg:gap-8 lg:text-2xl xl:text-3xl`}
        >
          <p>
            To differentiate Seagram&apos;s from competitors, we executed a
            multi-pronged research, insights, and strategy plan. We developed
            campaign directions and messaging territory rooted in Seagram&apos;s real
            ginger credentials and mixer relevance.
          </p>
          <p>
            Based on these findings, we tested concepts with target consumers
            and refined a visual system that modernized the brand while keeping
            recognizability high across social, shelf, and promotional moments.
          </p>
        </div>
      </div>
    </section>
  );
}
