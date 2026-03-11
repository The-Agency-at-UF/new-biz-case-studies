import Image from "next/image";
import cokeZero from "../assets/CokeZeroWhite.png";
import agencyLogo from "../assets/AgencyLogoFull.png";

export default function CokeLandingSection() {
  return (
    <section
      id="coke-landing"
      className="relative min-h-screen flex items-center overflow-visible"
    >
      <div className="relative z-35 text-white w-full max-w-6xl pl-20 pr-8 md:pl-25">
        <p className="inline-flex h-[50px] w-[140px] items-center justify-center bg-black/50 text-xl font-bold text-white outline outline-[4px] outline-[#ED1C24]">
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
