import Image from "next/image";
import solutionPhoto from "../assets/SolutionPhoto.png";

export default function CarnivalSolutionSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="relative z-10 px-6 md:px-12 lg:pl-20 lg:pr-0">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_32rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_32rem]">
          <div className="max-w-3xl">
            <div className="-ml-8 block max-w-xl bg-white px-8 py-1 md:-ml-14 md:px-14 md:py-2 lg:-ml-22 lg:px-20 lg:py-4">
              <h2 className="text-6xl font-extrabold leading-none text-[#004E8E] md:text-7xl lg:text-8xl">
                THE
              </h2>
              <h2 className="text-6xl font-extrabold leading-none text-[#EF3340] md:text-7xl lg:text-8xl">
                SOLUTION
              </h2>
            </div>

            <div className="-ml-6 mt-6 h-[4px] w-full max-w-[36rem] bg-[#EF3340] md:-ml-12 lg:-ml-20" />

            <div className="mt-8 space-y-8 text-white">
              <p className="max-w-3xl text-base leading-tight md:text-3xl">
                Analyzing global conversations from 21.3 million results led us
                to two types of travelers:{" "}
                <strong>the cautious traveler</strong> and{" "}
                <strong>the prospective traveler.</strong>
              </p>

              <p className="max-w-4xl text-base leading-tight md:text-3xl">
                We provided Carnival with a more in-depth understanding of
                post-quarantine travel sentiments by defining priorities for
                travelers.
              </p>

              <p className="max-w-4xl text-base leading-tight md:text-3xl">
                Carnival used our traveler profiles to create a compelling
                Funderstruck campaign that appeals to both cautious and
                prospective travelers.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[32rem] lg:ml-auto lg:mr-0 lg:-mt-12 lg:w-[32rem] lg:max-w-[32rem]">
            <div className="relative">
              <Image
                src={solutionPhoto}
                alt="Carnival solution photo"
                width={500}
                height={560}
                className="h-auto w-full object-contain"
              />
            </div>


            
          </div>
        </div>
      </div>
    </section>
  );
}
