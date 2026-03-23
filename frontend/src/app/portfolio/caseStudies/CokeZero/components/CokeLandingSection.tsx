import Image from "next/image";
import cokeZero from "../assets/CokeZeroWhite.png";
import agencyLogo from "../assets/AgencyLogoFull.png";
import cokeSpilling from "../assets/CokeSpilling.png";

export default function CokeLandingSection() {
  return (
    <section
      id="coke-landing"
      className="relative min-h-screen flex items-center overflow-visible"
    >
      
      {/* Coke spill image: above background/gradients and splashing over headline text */}
      <div aria-hidden className="absolute inset-0 z-38 pointer-events-none overflow-visible">
        <Image
          src={cokeSpilling}
          alt=""
          className="absolute -left-[16%] top-[40%] w-[860px] h-auto rotate-[43deg]"
        />
      </div>

      <div className="relative z-35 text-white w-full max-w-6xl pl-20 pr-8 md:pl-25">
        <p className="inline-flex h-[50px] w-[160px] items-center justify-center bg-black/40 text-xl font-bold text-white outline outline-[4px] outline-[#ED1C24] mb-5">
          Case Study
        </p>

        <div className="flex items-center gap-4 mt-6 mb-4">
          <Image
            src={cokeZero}
            alt="Coca Cola Zero Sugar"
            className="w-75 h-auto pr-2"
          />

          <p className="font-bold text-4xl">X</p>

          <Image
            src={agencyLogo}
            alt="The Agency at the University of Florida"
            className="w-110 h-auto pl-2"
          />
        </div>

        <div className="w-250 h-[3px] bg-[#ED1C24] mt-6" />

        <h3 className="mt-6 w-250 max-w-full text-4xl font-bold leading-tight">
          Developing Digital Solutions to Punt the Pandemic
        </h3>
      </div>
    </section>
  );
}
