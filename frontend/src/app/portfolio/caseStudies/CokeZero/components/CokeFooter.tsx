import Image from "next/image";
import cokeZero from "../assets/CokeZeroWhite.png";
import agencyLogo from "../assets/AgencyLogoFull.png";

export default function CokeFooter() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center gap-4 mt-6 mb-4">
          <Image
            src={cokeZero}
            alt="Coca Cola Zero Sugar"
            className="w-70 h-auto pr-2"
          />

          <p className="font-bold text-4xl">X</p>

          <Image
            src={agencyLogo}
            alt="The Agency at the University of Florida"
            className="w-110 h-auto pl-2"
          />
        </div>
    </div>
  );
}
