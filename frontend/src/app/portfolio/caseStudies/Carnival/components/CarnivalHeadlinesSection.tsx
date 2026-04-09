import Image from "next/image";
import agencyLogo from "../../CokeZero/assets/AgencyLogoFull.png";
import carnivalLogo from "../assets/carnival-Logo.svg";
import dottedRedCircle from "../assets/dotted-redCircle.svg";
import photo1Col1 from "../assets/photo1Col1.png";
import photo1Col2 from "../assets/photo1Col2.png";
import photo1Col3 from "../assets/photo1Col3.png";
import photo2Col1 from "../assets/photo2Col1.png";
import photo2Col2 from "../assets/photo2Col2.png";
import photo3Col2 from "../assets/photo3Col2.png";



export default function CarnivalHeadlinesSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-2 md:pb-24">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="grid gap-4 md:grid-cols-[1.24fr_0.62fr] lg:h-[26rem] xl:h-[29rem]">
              <div className="grid h-full gap-4 [grid-template-rows:234fr_384fr]">
                <div className="relative overflow-hidden">
                  <Image
                    src={photo1Col1}
                    alt="CruiseHive article headline"
                    fill
                    sizes="(min-width: 1280px) 24rem, (min-width: 1024px) 22rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={photo2Col1}
                    alt="Carnival newsroom article"
                    fill
                    sizes="(min-width: 1280px) 24rem, (min-width: 1024px) 22rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid h-full gap-5 [grid-template-rows:170fr_213fr_158fr]">
                <div className="relative overflow-hidden">
                  <Image
                    src={photo1Col2}
                    alt="University of Florida article headline"
                    fill
                    sizes="(min-width: 1280px) 12rem, (min-width: 1024px) 11rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={photo2Col2}
                    alt="Study findings article excerpt"
                    fill
                    sizes="(min-width: 1280px) 12rem, (min-width: 1024px) 11rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={photo3Col2}
                    alt="Traveler preference article headline"
                    fill
                    sizes="(min-width: 1280px) 12rem, (min-width: 1024px) 11rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[18rem] lg:mx-0 lg:h-[26rem] lg:max-w-[18rem] xl:h-[29rem] xl:max-w-[20rem]">
              <Image
                src={photo1Col3}
                alt="Travel enthusiasm infographic"
                fill
                sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, 100vw"
                className="object-contain"
              />
              
            </div>
          </div>

          <div className="relative mt-14 flex justify-center px-6 pb-2 pt-6 md:mt-18">
            <div className="absolute left-0 top-10 h-4 w-4 rounded-full bg-[#D3362D] md:h-5 md:w-5" />
            <div className="absolute -left-10 bottom-2 h-12 w-12 rounded-full bg-[#D3362D] md:h-16 md:w-16" />
            <div className="absolute right-10 top-8 h-4 w-4 rounded-full bg-white md:h-5 md:w-5" />
            <div className="absolute right-0 bottom-1 h-16 w-16 rounded-full bg-white md:h-20 md:w-20" />
          

            <div className="relative z-10 flex flex-col items-center justify-center gap-5 text-white lg:flex-row lg:gap-6">
              <Image
                src={carnivalLogo}
                alt="Carnival"
                className="h-auto w-full max-w-[250px] sm:max-w-[320px]"
              />

              <p className="text-3xl font-bold lg:text-4xl">X</p>

              <Image
                src={agencyLogo}
                alt="The Agency at the University of Florida"
                className="h-auto w-full max-w-[280px] sm:max-w-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
