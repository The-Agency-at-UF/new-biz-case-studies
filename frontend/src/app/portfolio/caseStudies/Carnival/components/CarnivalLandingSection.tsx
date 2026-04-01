import Image from "next/image";
import agencyLogo from "../../CokeZero/assets/AgencyLogoFull.png";

export default function CarnivalLandingSection() {
  return (
    <section
      id="carnival-landing"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        
      />

      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 84% 22%, rgba(255,106,107,0.34) 0%, transparent 28%), radial-gradient(circle at 76% 70%, rgba(64,205,255,0.24) 0%, transparent 26%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl px-6 pt-28 pb-12 text-white sm:px-10 md:px-14 lg:px-20">
        <p className="mb-5 inline-flex h-[50px] w-[160px] items-center justify-center border-4 border-[#EF3340] bg-[#0d1c46]/50 text-xl font-bold text-white">
          Case Study
        </p>

        <div className="mb-4 flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-6">
          <div className="text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/70">
              Carnival
            </p>
            <h1 className="mt-2 text-5xl font-extrabold uppercase leading-none sm:text-6xl lg:text-7xl">
              Carnival
            </h1>
          </div>

          <p className="text-3xl font-bold lg:text-4xl">X</p>

          <Image
            src={agencyLogo}
            alt="The Agency at the University of Florida"
            className="h-auto w-full max-w-[440px]"
            priority
          />
        </div>

        <div className="mt-6 h-[3px] w-full max-w-[22rem] bg-[#EF3340] sm:max-w-[28rem] lg:max-w-[38rem]" />

        <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          The Agency Helps Carnival Navigate the Sentiments of Travelers Post-2021
        </h2>
      </div>
    </section>
  );
}
