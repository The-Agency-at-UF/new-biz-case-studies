import Image from "next/image";
import cokeAsset5 from "../assets/CokeAsset5.png";

export default function CokeOpportunitySection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-10 md:py-14">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-170 h-200 w-70 rounded-full bg-[#ED1C24]/25 blur-[130px] rotate-70" />
        <div className="absolute bottom-0 -left-25 h-120 w-74 rounded-full bg-[#1F254F]/45 blur-[60px]" />
      
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="py-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">THE</h1>
          <h1 className="text-5xl md:text-6xl text-[#DA2028] font-extrabold">
            OPPORTUNITY
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="w-full max-w-3xl">
            <p className="text-base md:text-xl">
            In 2020, the possibility of a safe and normal college football season was
            intercepted by the COVID-19 pandemic. Fans watched their favorite players test
            positive, their favorite teams pull out and anticipated games get cancelled
            indefinitely. Many had to say goodbye to their game-day favorites, namely rowdy
            crowds and over-the-top tailgates.
            </p>
            <br />
            <p className="text-base md:text-xl">
            Like the rest of us, Coca-Cola did not anticipate a pandemic, much less one that
            would leave an impact for years to come. Coke&apos;s internal marketing agency, KO:OP,
            had planned various in-person activations inside college football stadiums for the
            2020 season and beyond. These needed to be adjusted. Given in-person restrictions
            and emerging health concerns, Coke&apos;s team was on a mission to find the best ways to
            nuance its means of refreshing football fanatics in 2021.
            </p>
          </div>
          <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-full sm:h-80 sm:w-80 lg:mx-0 lg:-mt-6 lg:ml-8 lg:h-[32rem] lg:w-[32rem]">
            <Image
              src={cokeAsset5}
              alt="Game day coke advertisement"
              fill
              className="object-cover object-[20%_50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
