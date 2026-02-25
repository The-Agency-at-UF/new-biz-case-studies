import Image from "next/image";
import cokeAsset5 from "../assets/CokeAsset5.png";

export default function CokeOpportunitySection() {
  return (
    <section className="relative min-h-screen items-center overflow-hidden ml-2">
      <div className="py-6">
        <h1 className="text-6xl font-extrabold">THE</h1>
        <h1 className="text-6xl text-[#DA2028] font-extrabold">OPPORTUNITY</h1>
      </div>

      <div className="flex">
        <div className="w-150">
          <p className="text-lg">
            In 2020, the possibility of a safe and normal college football season was
            intercepted by the COVID-19 pandemic. Fans watched their favorite players test
            positive, their favorite teams pull out and anticipated games get cancelled
            indefinitely. Many had to say goodbye to their game-day favorites, namely rowdy
            crowds and over-the-top tailgates.
          </p>
          <br />
          <p className="text-lg">
            Like the rest of us, Coca-Cola did not anticipate a pandemic, much less one that
            would leave an impact for years to come. Coke&apos;s internal marketing agency, KO:OP,
            had planned various in-person activations inside college football stadiums for the
            2020 season and beyond. These needed to be adjusted. Given in-person restrictions
            and emerging health concerns, Coke&apos;s team was on a mission to find the best ways to
            nuance its means of refreshing football fanatics in 2021.
          </p>
        </div>
        <div className="relative w-130 h-130 rounded-full overflow-hidden">
          <Image
            src={cokeAsset5}
            alt="Game day coke advertisement"
            fill
            className="object-cover object-[20%_50%]"
          />
        </div>
      </div>
    </section>
  );
}
