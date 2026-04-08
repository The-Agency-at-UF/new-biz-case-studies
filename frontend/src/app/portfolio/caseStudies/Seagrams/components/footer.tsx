import { workSans } from "@/app/fonts";

export default function SeagramsFooter() {
  return (
    <footer className="relative -mt-10 bg-black pt-14 md:-mt-14 md:pt-18 lg:-mt-16 lg:pt-24">
      <div className="relative z-20 px-15 md:px-30 lg:px-40">
        <div className="mx-auto mt-6 flex w-full max-w-5xl translate-y-24 items-end justify-center gap-4 md:mt-8 md:translate-y-28 md:gap-8 lg:mt-10 lg:translate-y-32">
          <img
            src="/assets/Seagrams/seagrams.png"
            alt="Seagram's"
            className="h-auto max-h-16 w-auto object-contain md:max-h-24"
          />
          <span
            aria-hidden
            className={`${workSans.className} translate-y-[-0.15rem] text-3xl font-semibold text-white md:text-5xl`}
          >
            ×
          </span>
          <img
            src="/assets/Seagrams/the_agency_white_logo.png"
            alt="The Agency at the University of Florida"
            className="h-auto max-h-16 w-auto object-contain md:max-h-24"
          />
        </div>
      </div>

      <div className="relative mt-2 lg:mt-3">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-black to-transparent md:h-20" />
        <img
          src="/assets/Seagrams/tea.png"
          alt="Tea ingredients footer collage"
          className="h-auto w-full object-cover"
        />
      </div>
    </footer>
  );
}
