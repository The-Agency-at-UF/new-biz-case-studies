import type { CSSProperties } from "react";
import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../src/app/fonts/gentona/Gentona Medium.otf",
  display: "swap",
});
const gentonaBook = localFont({
  src: "../../../../../../src/app/fonts/gentona/Gentona Book.otf",
  display: "swap",
});

const MAROON = "#832026";
const BODY_TEXT = "#852026";
const FRAME_RED = "#AC0629";
const IMPACT_VECTOR_IMAGE = "url(/assets/Smirnoff/impactVector.svg)";
const IMPACT_TEXTURE_IMAGE = "url(/assets/Smirnoff/impactTextureWhite.png)";

/** Glow along the bottom / V — shows through SVG transparent areas; sits under vector, over black. */
const IMPACT_RED_UNDER_VECTOR: CSSProperties = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(90, 8, 22, 0.75) 0%, rgba(160, 22, 38, 0.28) 78%, transparent 100%)",
  backgroundSize: "100% 100%",
  backgroundPosition: "center bottom",
  backgroundRepeat: "no-repeat",
};

export default function SmirnoffImpact() {
  return (
    <section className="relative -mt-10 flex w-full flex-col items-center gap-10 overflow-hidden px-6 pb-16 md:-mt-12 md:px-12 md:pb-24 md:pt-1 lg:flex-row lg:items-center lg:gap-40 lg:px-20">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={IMPACT_RED_UNDER_VECTOR}
        aria-hidden
      />
      {/* Side frame — under white vector + texture (z-[2] / z-[3]) */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-1 md:w-4"
        style={{ backgroundColor: FRAME_RED }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-1 md:w-4"
        style={{ backgroundColor: FRAME_RED }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: IMPACT_VECTOR_IMAGE }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: IMPACT_TEXTURE_IMAGE }}
        aria-hidden
      />

      <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-2 lg:gap-8">
        <h2
          className={`${gentonaMedium.className} text-[2rem] font-black uppercase leading-[0.95] tracking-wide md:text-[4rem] lg:text-[5.5rem]`}
          style={{ color: MAROON }}
        >
          The <br/> Impact
        </h2>
        <div
          className={`${gentonaBook.className} w-full space-y-5 text-sm font-light leading-relaxed tracking-wide md:space-y-6 md:text-lg lg:w-[145%] lg:text-2xl`}
          style={{ color: BODY_TEXT }}
        >
          <p>
            The data we pulled from social listening tactics allowed our team to discover the top flavors that entice consumers from a wide range of backgrounds. Smirnoff used our insights to elevate fall recipes from predictable pumpkin spice to alluring apple cider and punched up summer classics from broad fruit flavors to calculated mango deliciousness.
          </p>
          <p>
            By creating distinctive recipes, Smirnoff was able to provide consumers with{" "}
            <span className="font-semibold">114 cocktail ideas</span> that would enhance experiences with friends and families.
          </p>
        </div>
      </div>
      <div className="relative z-10 flex w-full shrink-0 justify-center lg:w-[42%] lg:-mr-40 lg:justify-end">
        <img
          src="/assets/Smirnoff/shaker.png"
          className="h-auto w-full max-w-md object-contain drop-shadow-lg xl:max-w-lg xl:w-4/5 lg:translate-x-[50%] xl:translate-x-[3.5%]"
        />
      </div>
    </section>
  );
}
