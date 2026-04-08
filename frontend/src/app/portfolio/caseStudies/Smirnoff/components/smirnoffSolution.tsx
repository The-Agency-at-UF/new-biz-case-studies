import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});
const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf",
  display: "swap",
});

const OPPORTUNITY_TOP_GRADIENT =
  "linear-gradient(180deg, rgba(145, 32, 38,0.88) 0%, rgba(145, 32, 38,0.44) 56%, rgba(109,0,24,0) 100%)";
const SOLUTION_SECTION_BG =
  "linear-gradient(180deg, rgba(145,32,38,0.70) 0%, rgba(133,31,36,0.66) 8%, rgba(115,26,32,0.62) 16%, rgba(92,0,18,0.58) 28%, rgba(58,10,18,0.62) 42%, rgba(58,10,18,0.76) 58%, rgba(133,31,36,0.88) 100%)";
const SOLUTION_TOP_BLEND =
  "linear-gradient(180deg, rgba(145,32,38,0.92) 0%, rgba(145,32,38,0.55) 30%, rgba(145,32,38,0.0) 100%)";
const SECTION_SEAM_BRIDGE =
  "linear-gradient(180deg, rgba(145,32,38,0.92) 0%, rgba(145,32,38,1) 30%, rgba(145,32,38,0.0) 100%)";

const LAYOUT = {
  opportunityWrapper: "relative isolate z-[120]",
  limeWrapper:
    "pointer-events-none absolute right-0 top-[-100px] z-[10] md:top-[-160px] lg:top-[-300px]",
  redCircle:
    "absolute right-0 top-70 z-20 h-auto w-72 opacity-100 md:w-96 xl:w-[62rem]",
  limes: "relative z-10 h-auto w-64 md:w-80 xl:w-[40rem]",
  opportunitySection:
    "relative overflow-hidden bg-[#912026] text-white -mt-10 md:-mt-12 lg:-mt-14",
  bottle:
    "h-[1500px] w-auto object-contain object-bottom drop-shadow-2xl md:h-[1500px] lg:h-[min(160vh,130rem)] xl:h-[min(160vh,140rem)]",
  opportunityContent:
    "relative z-20 mx-auto flex max-w-6xl flex-col items-start px-6 pb-12 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-0 lg:pt-20",
  mapLayer:
    "relative left-1/2 z-[130] mt-[-320px] flex w-screen -translate-x-1/2 justify-center px-6 md:px-10 lg:px-16",
  mapImage:
    "relative z-[130] h-auto w-[150vw] max-w-none mix-blend-screen md:w-[140vw] lg:w-[200vw]",
  solutionSection:
    "relative z-[300] -mt-24 -translate-y-px overflow-hidden text-white md:-mt-32 lg:-mt-40",
} as const;

export default function SmirnoffOpportunitySolution() {
  return (
    <>
      {/* OPPORTUNITY SECTION */}
      <div className={LAYOUT.opportunityWrapper}>
        {/* Lime is outside the clipped section so it can overflow upward */}
        <div className={LAYOUT.limeWrapper}>
          <div className="relative">
            <img
              src="/assets/Smirnoff/redCircleGradient.png"
              alt=""
              className={LAYOUT.redCircle}
            />
            <img
              src="/assets/Smirnoff/limes.png"
              alt=""
              className={LAYOUT.limes}
            />
          </div>
        </div>

        <section className={LAYOUT.opportunitySection}>
          <div
            className="pointer-events-none absolute top-0 left-0 right-0 z-[1] h-20 md:h-24 lg:h-28"
            style={{ background: OPPORTUNITY_TOP_GRADIENT }}
          />
          <img
            src="/assets/Smirnoff/opprotunityGradientBackground.png"
            alt=""
            className="absolute inset-0 z-[2] h-full w-full object-cover object-top opacity-90"
          />
          <img
            src="/assets/Smirnoff/opprounityTexture.png"
            alt=""
            className="pointer-events-none absolute inset-0 z-[3] h-full w-full object-cover object-top opacity-40 mix-blend-overlay"
          />
          {/* Bottle absolute left */}
          <div className="absolute left-0 top-0 z-20 flex items-start bottom-0">
            <img
              src="/assets/Smirnoff/smirnoffBottle.png"
              alt="Smirnoff No. 21 Vodka bottle"
              className={LAYOUT.bottle}
            />
          </div>
          <div className={LAYOUT.opportunityContent}>
            <h2
              className={`${gentonaMedium.className} relative z-30 mb-6 text-[2.5rem] font-black uppercase leading-[0.95] tracking-wide text-white md:mb-8 md:text-[4rem] lg:mb-10 lg:text-[7rem]`}
            >
              The <br />Opportunity
            </h2>
            <div
              className={`${gentonaBook.className} space-y-5 md:space-y-6 text-lg md:text-xl lg:text-4xl font-light leading-tight tracking-wide text-white/95`}
            >
              <p>
                Following the pandemic and other gradual lifestyle changes, adults around the world experienced a shift in the way they think about cocktails. The three-month long shutdown of bars and restaurants in 2020 prompted most cocktail enthusiasts to rely on social media for easy recipes that require little to no experience.
              </p>
              <p>
                Smirnoff asked our partner, AnalogFolk, to curate two cocktail recipes that would entice people to buy Smirnoff vodka for their at-home bartending. AnalogFolk reached out to The Agency to conduct research on how adults&apos; relationship with vodka has changed over the past few years while also researching the search behavior of people looking for cocktail recipes.
              </p>
            </div>
          </div>
          {/* Map layer: above red gradient and limes, but inside red section to avoid black backdrop */}
          <div className={LAYOUT.mapLayer}>
            <img
              src="/assets/Smirnoff/smirnoffMap.png"
              alt="Social listening map of trending cocktail conversations"
              className={LAYOUT.mapImage}
            />
          </div>
        </section>
      </div>

      <section
        className={LAYOUT.solutionSection}
        style={{
          backgroundImage: `url('/assets/Smirnoff/solutionBackgroundImage.png'), ${SOLUTION_SECTION_BG}`,
          backgroundSize: "100% auto, cover",
          backgroundPosition: "100% -30%, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        {/* Bridge gradient on Opportunity/Solution seam to soften hard line */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-[4.5rem] z-[4] h-36 md:-top-20 md:h-44 lg:-top-8 lg:h-52"
          style={{ background: SECTION_SEAM_BRIDGE, filter: "blur(2px)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 md:h-56"
          style={{ background: SOLUTION_TOP_BLEND }}
          aria-hidden
        />

        {/* Background image layers */}
        <img
          src="/assets/Smirnoff/solutionTitleBackground.png"
          alt=""
          className="pointer-events-none absolute left-0 top-0 z-[2] w-[28rem] opacity-45 md:w-[40rem]"
          aria-hidden
        />

        <div className="relative z-[10] px-15 md:px-30 lg:px-40 pt-2 pb-16 md:pt-4 md:pb-24 lg:pt-6 lg:pb-32">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:gap-24">
            <div className="relative z-20 -mt-6 md:-mt-10 lg:-mt-14 ml-4 md:ml-8 lg:ml-16 flex-1 min-w-0 order-2 lg:order-1">
              <h2
                className={`${gentonaMedium.className} relative text-[2.5rem] md:text-[4rem] lg:text-[7rem] font-black uppercase leading-[0.95] tracking-wide text-white mb-6 md:mb-10`}
              >
                The <br />Solution
              </h2>
              <div
                className={`${gentonaBook.className} relative z-20 max-w-5xl space-y-5 md:space-y-6 text-lg md:text-xl lg:text-4xl font-light leading-tight tracking-wide text-white/95`}
              >
                <p>
                With the help of Sprinklr enterprise, a cutting-edge social listening platform, our research team surveyed and analyzed content to create tangible insights that could be used for cocktail recipes. We started by taking a close look at each holiday season to uncover the flavors people desired the most during the fall, winter and summer. 
                </p>
                <p>
                Our team used Sprinklr to go beyond the basic results and find new ways for Smirnoff consumers to spice up their homemade cocktails. Their analysis elevated fall recipes from predictable pumpkin spice to alluring apple cider and punched up summer classics from broad fruit flavors to calculated mango deliciousness.
                </p>
              </div>
              <img
                src="/assets/Smirnoff/shotGlass.png"
                alt=""
                className="absolute left-[calc(50%-50vw-2rem)] top-[9rem] z-0 h-auto w-56 opacity-90 md:left-[calc(50%-50vw-2.5rem)] md:top-[-2.5rem] md:w-72 lg:left-[calc(50%-50vw-3rem)] lg:top-[8rem] lg:w-96 lg:opacity-95 [mask-image:linear-gradient(10deg,black_55%,transparent_100%)] [-webkit-mask-image:linear-gradient(10deg,black_55%,transparent_100%)]"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 z-[12] h-5 md:h-6 lg:h-7 bg-[#DA2028]"
          aria-hidden
        />
      </section>
    </>
  );
}
