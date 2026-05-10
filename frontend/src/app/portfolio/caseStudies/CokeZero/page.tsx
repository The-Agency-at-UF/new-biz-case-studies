import NavBar from "@/components/NavBar";
import BackButton from "@/components/BackButton";

import cokeBackground from "./assets/Coke-Background.svg";
import CokeAccentLines from "./components/CokeAccentLines";
import CokeLandingSection from "./components/CokeLandingSection";
import CokePhoneScreens from "./components/CokePhoneScreens";
import CokeOpportunitySection from "./components/CokeOpportunitySection";
import CokeSolutionSection from "./components/CokeSolutionSection";
import CokeFooter from "./components/CokeFooter";
import SharedFooter from "../../../../components/Footer";

import localFont from "next/font/local";

const gentona = localFont({
  src: [
    {
      path: "../../../../../src/app/fonts/gentona/Gentona Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../../src/app/fonts/gentona/Gentona Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gentona",
});

export default function CokeZeroPage() {
  return (
    <>
      <BackButton currentStudy="CokeZero" />
      <NavBar />

      <div
        className={`${gentona.className} min-h-screen overflow-x-hidden bg-[#EC1C24] text-white`}
        style={{
          backgroundColor: "#EC1C24",
          backgroundImage: `url(${cokeBackground.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
        }}
      >
        <div className="relative">
          <CokeLandingSection />

          <div className="relative z-10 mt-28 md:mt-40">
            <CokeAccentLines />
          </div>
        </div>

        <div className="relative z-10 mt-35 md:mt-65">
          <CokeOpportunitySection />
        </div>

        <div className="relative z-10 mt-16 md:-mt-7">
          <CokeSolutionSection />
        </div>

        <div className="relative z-10 mt-18 md:mt-26 px-6 md:px-12 lg:px-20">
          <CokePhoneScreens />
        </div>

        <div className="relative z-10 mt-25 md:mt-45">
          <CokeFooter />
        </div>

        <SharedFooter />
      </div>
    </>
  );
}