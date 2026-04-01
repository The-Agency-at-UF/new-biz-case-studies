export default function BlissFooter() {
  return (
      <div className="relative bg-gradient-to-t from-white from-1% via-[#F55096]/3 via-30% to-[#F55096] overflow-hidden">
        <div className="flex items-center justify-center px-15 md:px-30 lg:px-40 py-15">
          <img src="/assets/Bliss/blissAgencyLogo.png" className="relative w-2/3 lg:w-1/2 h-auto"></img>
          <img src="/assets/Bliss/cream_swipe.png" className="absolute scale-90 translate-x-[-60%] rotate-60 overflow-visible"></img>
          <img src="/assets/Bliss/hydrationSalvation.png" className="absolute scale-70 rotate-20 translate-x-[-40%] translate-y-[5%] overflow-visible"></img>
          <img src="/assets/Bliss/polka_dots.png" className="absolute justify-end overflow-visible"></img>
        </div>
      </div>
    );
}