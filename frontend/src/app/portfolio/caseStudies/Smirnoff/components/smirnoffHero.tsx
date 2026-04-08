import localFont from "next/font/local";

const gentonaMedium = localFont({
  src: "../../../../../../public/fonts/Gentona Medium.otf",
  display: "swap",
});

const gentonaBook = localFont({
  src: "../../../../../../public/fonts/Gentona Book.otf",
  display: "swap",
});

const HERO_BG = "/assets/Smirnoff/image%2049.png";

export default function Smirnoff_Hero() {
  return (
    <div className="relative z-20">
      <img
        src={HERO_BG}
        alt=""
        className="min-h-[40vh] w-full object-cover md:min-h-[50vh] h-auto"
      />
      <div
        className="absolute inset-0 flex flex-col px-15 md:px-30 lg:px-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(145, 32, 38,0.1) 0%, rgba(145, 32, 38,0.36) 30%, rgba(145, 32, 38,0.72) 58%, rgba(145, 32, 38,0.92) 78%, rgba(145, 32, 38,1) 100%)",
        }}
      >
        <div className="z-10 flex h-full flex-col justify-end pb-10 pt-10 md:pb-12 md:pt-12">
          <p
            className={`${gentonaMedium.className} border-[2px] md:border-[3px] border-white px-2 md:px-6 py-1 md:max-2xl:py-2 rounded-none text-xs lg:text-lg font-bold tracking-wider uppercase bg-[#C8102E]/30 backdrop-blur-sm w-fit text-white`}
          >
            case study
          </p>
          <img
            src="/assets/Smirnoff/heroLogoDiv.png"
            alt="Smirnoff × The Agency at the University of Florida"
            className="w-full max-w-5xl h-auto"
          />
          <p
            className={`${gentonaBook.className} mt-6 md:mt-10 mb-4 md:mb-6 text-xl md:text-2xl lg:text-6xl text-white max-w-6xl leading-snug`}
          >
            Serving up Key Insights Until Last Call
          </p>
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-0 right-0 -bottom-16 h-20 -translate-y-[10px] md:-bottom-2 md:h-24 lg:h-28"
        style={{
          background:
            "linear-gradient(180deg, rgba(145, 32, 38, 0) 0%, rgba(145, 32, 38,0.75) 55%, rgba(145, 32, 38,1) 100%)",
        }}
      />
    </div>
  );
}
