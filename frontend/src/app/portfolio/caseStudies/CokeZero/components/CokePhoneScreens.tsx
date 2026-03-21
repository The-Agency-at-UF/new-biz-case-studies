import Image from "next/image";
import phone1 from "../assets/Coke-Phone1.svg";
import phone2 from "../assets/Coke-Phone2.svg";
import phone3 from "../assets/Coke-Phone3.svg";

export default function CokePhoneScreens() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-end sm:gap-10 lg:gap-14">
      <Image
        src={phone1}
        alt="Coke Zero mobile screen one"
        className="h-auto w-[14rem] sm:w-[16rem] lg:w-[18rem]"
        priority={false}
      />
      <Image
        src={phone2}
        alt="Coke Zero mobile screen two"
        className="h-auto w-[14rem] sm:w-[16rem] lg:w-[18rem]"
        priority={false}
      />
      <Image
        src={phone3}
        alt="Coke Zero mobile screen three"
        className="h-auto w-[14rem] sm:w-[16rem] lg:w-[18rem]"
        priority={false}
      />
    </div>
  );
}
