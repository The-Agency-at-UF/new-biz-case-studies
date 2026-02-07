import Image from "next/image";
import cokeBackdrop from "./assets/CokeBackdrop.jpg";
import agencyLogo from "./assets/AgencyLogoFull.png";
import NavBar from "../../../../components/NavBar";

export default function CokeZeroPage() {
  return (
    <>
      <NavBar />

      <section
        id="coke-landing"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cokeBackdrop.src})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b 
                        from-black/40 
                        via-black/70 
                        to-[#0E0E0E]" />

        {/* Content */}
        <div className="relative z-10 text-white w-full max-w-6xl px-8">
          <p className="inline-block font-bold outline outline-[3px] outline-[#ED1C24] px-3 py-2">
            Case Study
          </p>

          <div className="flex items-center gap-4 mt-6">
            <p className="font-bold text-lg">X</p>

            <Image
              src={agencyLogo}
              alt="The Agency at the University of Florida"
              className="w-80 h-auto"
            />
          </div>

          <div className="w-200 h-[3px] bg-[#ED1C24] mt-6" />

          <h3 className="text-3xl font-bold mt-6">
            Developing Digital Solutions to Punt the Pandemic
          </h3>
        </div>
      </section>
      <section>
        <h1>The</h1>
        <h1>Opportunity</h1>
      </section>
    </>
  );
}
