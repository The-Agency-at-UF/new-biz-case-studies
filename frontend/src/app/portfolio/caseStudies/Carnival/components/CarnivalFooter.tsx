import Image from "next/image";
import agencyLogo from "../../CokeZero/assets/AgencyLogoFull.png";
import carnivalLogo from "../assets/carnival-Logo.svg";

export default function CarnivalFooter() {
  return (
    <div className="flex justify-center px-6 pb-16 pt-8 md:px-12 md:pb-24">
      <div className="flex flex-col items-center justify-center gap-5 text-white lg:flex-row lg:gap-6">
        <Image
          src={carnivalLogo}
          alt="Carnival"
          className="h-auto w-full max-w-[280px] sm:max-w-[360px]"
        />

        <p className="text-3xl font-bold lg:text-4xl">X</p>

        <Image
          src={agencyLogo}
          alt="The Agency at the University of Florida"
          className="h-auto w-full max-w-[320px] sm:max-w-[420px]"
        />
      </div>
    </div>
  );
}
