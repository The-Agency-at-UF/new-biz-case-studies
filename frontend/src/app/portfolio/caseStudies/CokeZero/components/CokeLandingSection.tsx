import Image from "next/image";
import cokeBackdrop from "../assets/CokeBackdrop.jpg";
import cokeZero from "../assets/CokeZeroWhite.png";
import agencyLogo from "../assets/AgencyLogoFull.png";
import cokeSpilling from "../assets/CokeSpilling.png";

export default function CokeLandingSection() {
  return (
    <section
      id="coke-landing"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cokeBackdrop.src})` }}
      />

      <div
        // Global dark wash over the backdrop image.
        className="absolute inset-0 z-10 bg-gradient-to-b
        from-black/40
        via-black/70
        to-[#0E0E0E]"
      />

      {/* Extra bottom fade to blend into the next section. */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-56 bg-gradient-to-b from-transparent to-black" />

      <div aria-hidden className="absolute inset-0 z-20 pointer-events-none">
        {/* Blob A (top-left): red glow */}
        <div className="absolute -top-24 left-15 h-200 w-70 rounded-full bg-[#ED1C24]/25 blur-[130px] -rotate-10" />
        {/* TO TEST <div className="absolute -top-24 -left-12 h-72 w-72 rounded-full bg-[#ED1C24]/45 blur-3xl" /> */}


        {/* Blob B (upper-mid): deep maroon glow */}
        <div className="absolute top-12 left-1/3 h-80 w-80 rounded-full bg-[#4A0F26]/40 blur-3xl" />
        {/* Blob C (bottom-right): cool blue glow */}
        <div className="absolute -bottom-8 right-8 h-64 w-64 rounded-full bg-[#1F254F]/35 blur-3xl" />

        <div className="absolute bottom-100 -right-25 h-80 w-74 rounded-full bg-[#1F254F]/45 blur-[90px]" />
      </div>

      {/* Coke spill image: above background/gradients and splashing over headline text */}
      <div aria-hidden className="absolute inset-0 z-38 pointer-events-none overflow-visible">
        <Image
          src={cokeSpilling}
          alt=""
          className="absolute -left-[15%] top-[30%] w-[740px] h-auto rotate-[45deg]"
        />
      </div>

      <div className="relative z-30 text-white w-full max-w-6xl pl-20 pr-8 md:pl-25">
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
