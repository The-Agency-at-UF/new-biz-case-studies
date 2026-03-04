import Image from "next/image"

export default function BlissHero() {
  return (
    <section className="relative w-full aspect-[16/9] overflow-hidden">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Bliss/backgroundImage.png"
          alt="Bliss Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F55096] via-[#F55096]/80 to-transparent" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        <div className="pl-[7%]">

          {/* Badge */}
          <div className="inline-flex bg-[#F75296] border-[clamp(2px,0.5vw,4px)] border-[#75CFE5] px-[1.8vw] py-[0.1vw] text-center font-bold text-[clamp(12px,2vw,45px)]">
            Case Study
          </div>

          {/* Logo */}
          <div className="relative w-[clamp(60%,10vw,100%)] h-[8vw] mt-[1rem]">
            <Image
              src="/assets/Bliss/blissAgencyLogo.png"
              alt="Bliss Agency Logo"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Line */}
          <div className="w-[clamp(50%,10vw,100%)] border-t-[clamp(2px,0.2vw,3px)] border-[#75CFE5] mt-[1rem]" />

          {/* Headline */}
          <div className="text-white font-bold text-[clamp(16px,2vw,60px)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] mt-[1.5rem]">
            Helping Bliss Get Skin in the Gen Z Game
          </div>

        </div>
      </div>

    </section>
  )
}