import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../src/app/fonts/gentona/Gentona Medium.otf",
  display: "swap",
});
const gentonaBook = localFont({
  src: "../../../../../../src/app/fonts/gentona/Gentona Book.otf",
  display: "swap",
});

const OPPORTUNITY_TOP_GRADIENT =
  "linear-gradient(180deg, rgba(145, 32, 38,0.88) 0%, rgba(145, 32, 38,0.44) 56%, rgba(109,0,24,0) 100%)";
const OPPORTUNITY_BOTTOM_FADE =
  "linear-gradient(180deg, rgba(109,18,21,0) 0%, rgba(109,18,21,1) 52%, rgba(109,18,21,0.0) 100%)";
const SOLUTION_SECTION_BG =
  "linear-gradient(180deg, rgba(145,32,38,0.70) 0%, rgba(133,31,36,0.66) 8%, rgba(115,26,32,0.62) 16%, rgba(92,0,18,0.58) 28%, rgba(58,10,18,0.62) 42%, rgba(58,10,18,0.76) 58%, rgba(133,31,36,0.88) 100%)";
const SOLUTION_TOP_BLEND =
  "linear-gradient(180deg, rgba(109,18,21,0.98) 0%, rgba(109,18,21,0.85) 18%, rgba(123,25,32,0.55) 45%, rgba(105,20,28,0.22) 72%, rgba(90,15,24,0) 100%)";
const SECTION_PADDING = "px-6 md:px-12 lg:px-20";
const ASSETS = {
  redCircle: "/assets/Smirnoff/redCircleGradient.png",
  limes: "/assets/Smirnoff/limes.png",
  opportunityBg: "/assets/Smirnoff/opprotunityGradientBackground.png",
  opportunityTexture: "/assets/Smirnoff/opprounityTexture.png",
  bottle: "/assets/Smirnoff/smirnoffBottle.png",
  map: "/assets/Smirnoff/smirnoffMap.png",
  solutionBg: "/assets/Smirnoff/solutionBackgroundImage.png",
  solutionTitleBg: "/assets/Smirnoff/solutionTitleBackground.png",
  shotGlass: "/assets/Smirnoff/shotGlass.png",
} as const;

const LAYOUT = {
  opportunityWrapper: "relative",
  limeWrapper:
    "pointer-events-none absolute right-0 top-[-100px] z-[30] md:top-[-160px] lg:top-[-300px]",
  redCircle:
    "absolute right-0 top-70 z-20 h-auto w-72 opacity-100 md:w-96 xl:w-[62rem]",
  limes: "relative z-10 h-auto w-64 md:w-80 xl:w-[32rem] opacity-60",
  opportunitySection:
    "relative flex flex-col overflow-hidden bg-[#912026] text-white -mt-10 md:-mt-12 lg:-mt-14",
  bottle:
    "h-[1500px] w-auto object-contain object-bottom drop-shadow-2xl md:h-[1500px] lg:h-[min(160vh,130rem)] xl:h-[min(160vh,140rem)]",
  opportunityMain:
    "relative z-20 flex w-full min-h-[min(68svh,48rem)] shrink-0 items-center px-6 py-12 md:min-h-[min(72svh,52rem)] md:px-12 md:py-16 lg:min-h-[min(74svh,56rem)] lg:py-20",
  opportunityInner:
    "mx-auto flex w-full max-w-6xl flex-col items-start lg:pl-[max(0.25rem,6vw)] xl:pl-[max(0.75rem,8vw)]",
  opportunityTextColumn:
    "w-full max-w-full text-left lg:max-w-[min(80rem,90%)]",
  mapLayer:
    "relative left-1/2 z-[600] mt-[-310px] flex w-screen -translate-x-[52%] justify-center px-6 md:mt-[-330px] md:px-10 lg:mt-[-270px] lg:-translate-x-[55%] lg:px-16",
  mapImage:
    "relative z-[130] h-auto w-[90vw] max-w-none mix-blend-screen md:w-[82vw] lg:w-[94vw]",
  solutionSection:
    "relative z-[300] -mt-36 overflow-visible bg-[#6D1215] text-white md:-mt-44 lg:-mt-44",
  solutionSeamTitleBg:
    "pointer-events-none absolute inset-x-0 z-[4] -top-24 h-52 min-h-[13rem] md:-top-32 md:h-60 md:min-h-[15rem] lg:-top-40 lg:h-72 lg:min-h-[18rem]",
  solutionOpportunitySeamFade:
    "pointer-events-none absolute inset-x-0 z-[3] -top-16 h-32 md:-top-20 md:h-40 lg:-top-24 lg:h-48",
} as const;

export default function SmirnoffOpportunitySolution() {
  return (
    <>
      {/* OPPORTUNITY SECTION */}
      <div className={LAYOUT.opportunityWrapper}>
        <div className={LAYOUT.limeWrapper}>
          <div className="relative">
            <img
              src={ASSETS.redCircle}
              className={LAYOUT.redCircle}
              loading="lazy"
              decoding="async"
            />
            <img
              src={ASSETS.limes}
              className={LAYOUT.limes}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <section className={LAYOUT.opportunitySection}>
          <div
            className="pointer-events-none absolute top-0 left-0 right-0 z-[5] h-20 md:h-24 lg:h-28"
            style={{ background: OPPORTUNITY_TOP_GRADIENT }}
          />
          <img
            src={ASSETS.opportunityBg}
            className="absolute inset-0 z-[2] h-full w-full object-cover object-top opacity-90"
          />
          <img
            src={ASSETS.opportunityTexture}
            className="pointer-events-none absolute inset-0 z-[3] h-full w-full object-cover object-top opacity-40 mix-blend-overlay"
          />
          {/* Bottle absolute left */}
          <div className="absolute left-0 top-0 z-20 flex items-start bottom-0">
            <img
              src={ASSETS.bottle}
              className={LAYOUT.bottle}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={LAYOUT.opportunityMain}>
            <div className={LAYOUT.opportunityInner}>
              <div className={LAYOUT.opportunityTextColumn}>
                <h2
                  className={`${gentonaMedium.className} relative z-30 mb-4 text-left text-[2.2rem] font-black uppercase leading-[0.95] tracking-wide text-white md:mb-5 md:text-[3.5rem] lg:mb-6 lg:text-[6rem]`}
                >
                  The <br />
                  Opportunity
                </h2>
                <div
                  className={`${gentonaBook.className} flex flex-col gap-6 text-left text-base font-normal leading-tight tracking-normal text-white md:gap-8 md:text-lg lg:text-xl xl:text-2xl`}
                >
                  <p>Following the pandemic and other gradual lifestyle changes, adults around the world experienced a shift in the way they think about cocktails. The three-month long shutdown of bars and restaurants in 2020 prompted most cocktail enthusiasts to rely on social media for easy recipes that require little to no experience.</p>
                  <p>Smirnoff asked our partner, AnalogFolk, to curate two cocktail recipes that would entice people to buy Smirnoff vodka for their at-home bartending. AnalogFolk reached out to The Agency to conduct research on how adults&apos; relationship with vodka has changed over the past few years while also researching the search behavior of people looking for cocktail recipes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={LAYOUT.mapLayer}>
            <img
              src={ASSETS.map}
              className={LAYOUT.mapImage}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </div>

      <section
        className={LAYOUT.solutionSection}
        style={{
          backgroundImage: `url('${ASSETS.solutionBg}'), ${SOLUTION_SECTION_BG}`,
          backgroundSize: "100% auto, cover",
          backgroundPosition: "100% -30%, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 md:h-40 lg:h-48"
          style={{ background: SOLUTION_TOP_BLEND }}
          aria-hidden
        />

        <div
          className={LAYOUT.solutionOpportunitySeamFade}
          style={{ background: OPPORTUNITY_BOTTOM_FADE }}
          aria-hidden
        />

        <div className={LAYOUT.solutionSeamTitleBg} aria-hidden>
          <img
            src={ASSETS.solutionTitleBg}
            className="h-full w-full min-w-full object-cover object-[center_0%] opacity-80 md:opacity-85"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={`relative z-[10] ${SECTION_PADDING} pt-0 pb-16 md:pt-2 md:pb-24 lg:pt-4 lg:pb-32`}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:gap-24">
            <div className="relative z-20 mt-0 md:mt-2 lg:mt-4 ml-4 md:ml-8 lg:ml-16 flex-1 min-w-0 order-2 lg:order-1">
              <h2
                className={`${gentonaMedium.className} relative mb-4 text-[2.2rem] font-black uppercase leading-[0.95] tracking-wide text-white md:mb-5 md:text-[3.5rem] lg:mb-6 lg:text-[6rem]`}
              >
                The <br />Solution
              </h2>
              <div
                className={`${gentonaBook.className} relative z-20 max-w-2xl space-y-5 md:space-y-6 text-base font-normal leading-tight tracking-normal text-white md:text-lg lg:text-xl xl:text-2xl`}
              >
                <p>With the help of Sprinklr enterprise, a cutting-edge social listening platform, our research team surveyed and analyzed content to create tangible insights that could be used for cocktail recipes. We started by taking a close look at each holiday season to uncover the flavors people desired the most during the fall, winter and summer.</p>
                <p>Our team used Sprinklr to go beyond the basic results and find new ways for Smirnoff consumers to spice up their homemade cocktails. Their analysis elevated fall recipes from predictable pumpkin spice to alluring apple cider and punched up summer classics from broad fruit flavors to calculated mango deliciousness.</p>
              </div>
              <img
                src={ASSETS.shotGlass}
                className="absolute left-[calc(50%-50vw-2rem)] top-[4rem] z-0 h-auto w-44 opacity-75 md:left-[calc(50%-50vw-2.5rem)] md:top-[-3rem] md:w-56 lg:left-[calc(50%-50vw-3rem)] lg:top-[9rem] lg:w-72 lg:opacity-75 mix-blend-lighten"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 z-[12] h-5 md:h-6 lg:h-5 bg-[#DA2028]"
          aria-hidden
        />
      </section>
    </>
  );
}
