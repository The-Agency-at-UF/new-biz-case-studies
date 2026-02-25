import Image from "next/image";
import cokeBackdrop from "../assets/CokeBackdrop.jpg";
import cokeZero from "../assets/CokeZeroWhite.png";
import agencyLogo from "../assets/AgencyLogoFull.png";

export default function CokeLandingSection() {
  return (
    <section
      id="coke-landing"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cokeBackdrop.src})` }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-b
        from-black/40
        via-black/70
        to-[#0E0E0E]"
      />

      <div className="relative z-10 text-white w-full max-w-6xl px-8">
        <p className="inline-block font-bold outline outline-[3px] outline-[#ED1C24] px-3 py-1">
          Case Study
        </p>

        <div className="flex items-center gap-4 mt-6">
          <Image
            src={cokeZero}
            alt="Coca Cola Zero Sugar"
            className="w-60 h-auto pr-2"
          />

          <p className="font-bold text-lg">X</p>

          <Image
            src={agencyLogo}
            alt="The Agency at the University of Florida"
            className="w-80 h-auto pl-2"
          />
        </div>

        <div className="w-200 h-[3px] bg-[#ED1C24] mt-6" />

        <h3 className="text-3xl font-bold mt-6">
          Developing Digital Solutions to Punt the Pandemic
        </h3>
      </div>
    </section>
  );
}
