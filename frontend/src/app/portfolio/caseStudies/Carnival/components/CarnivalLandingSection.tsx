import Image from "next/image";
import agencyLogo from "../../CokeZero/assets/AgencyLogoFull.png";
import carnivalLogo from "../assets/carnival-Logo.svg";

export default function CarnivalLandingSection() {
  return (
    <section
      id="carnival-landing"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl px-6 pt-28 pb-12 text-white sm:px-10 md:px-14 lg:px-20">
        <p className="mb-5 inline-flex h-[50px] w-[160px] items-center justify-center border-4 border-[#EF3340] bg-[#0d1c46]/50 text-xl font-bold text-white">
          Case Study
        </p>

        <div className="mb-4 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
          <Image
            src={carnivalLogo}
            alt="Carnival"
            className="h-auto w-full max-w-[300px] sm:max-w-[400px]"
            priority
          />

          <p className="text-3xl font-bold lg:text-4xl">X</p>

          <Image
            src={agencyLogo}
            alt="The Agency at the University of Florida"
            className="h-auto mt-8 w-full max-w-[400px]"
            priority
          />
        </div>

        <div className="mt-6 h-[4px] w-full max-w-[48rem] bg-[#EF3340] sm:max-w-[28rem] lg:max-w-[56rem]" />

        <h2 className="mt-30 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          The Agency Helps Carnival Navigate the Sentiments of Travelers Post-2021
        </h2>
      </div>
    </section>
  );
}
