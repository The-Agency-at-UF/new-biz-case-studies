import Image from "next/image";
import cautiousTraveler from "../assets/CautiousTraveler.png";
import opportunityPhoto from "../assets/Opportunity-Photo.png";
import prospectiveTraveler from "../assets/ProspectiveTraveler.png";

export default function CarnivalOpportunitySection() {
  return (
    <section className="relative  py-0 md:py-14">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        {/* Title + text + image all in one row so image starts at the top */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex-1">
            <div className="py-6 -mt-30">
              <h2 className="text-7xl font-extrabold md:text-8xl">THE</h2>
              <h2 className="text-7xl font-extrabold text-[#EF3340] md:text-8xl">
                OPPORTUNITY
              </h2>
            </div>
            <div className="max-w-[48rem] mt-6">
              <p className="text-base md:text-3xl">
                <strong>
                  2021 was an adjustment period for consumers and brands alike.
                </strong>{" "}
                Consumers needed to discover exciting ways to connect with their
                loved ones. Brands needed to find strategies that fit the shared
                sentiments of their target audiences.
              </p>
              <br />
              <p className="text-base md:text-3xl">
                Carnival Cruise decided it was time to lean into its reputation
                for fun with a campaign introducing the Funderstruck feeling.
              </p>
              <br />
              <p className="text-base md:text-3xl">
                The Funderstruck campaign showed potential cruise vacationers that{" "}
                <strong>
                  the fun they&apos;re searching for is best experienced on a
                  Carnival Cruise ship.
                </strong>{" "}
                Carnival needed The Agency to identify how people wanted to travel
                after a year of quarantine. Our researchers set sail on a digital
                exploration using Talkwalker, native social searches on TikTok and
                Instagram, and Enterprise Research tools to determine if travelers
                were ready to feel Funderstruck.
              </p>
            </div>
            <div className="mt-14 h-[4px] w-full max-w-[42rem] bg-[#EF3340]" />
          </div>

          <div className="relative w-full shrink-0 overflow-hidden lg:w-[38%] mt-6">
            <Image
              src={opportunityPhoto}
              alt="Carnival Funderstruck opportunity photo"
              width={800}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Stat + traveler cards */}
        <div className="mt-10">
          <p className="mb-8 text-base md:text-3xl max-w-[68rem]">
            After refining our search, we pulled{" "}
            <span className="font-extrabold">21.3 MILLION</span> results to find
            the following: There are <strong>two</strong> types of people that
            want to travel in 2022.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Cautious Traveler */}
            <div className="relative overflow-hidden">
              <Image
                src={cautiousTraveler}
                alt="The cautious traveler"
                width={700}
                height={460}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start p-6 text-left">
                <h3 className="px-2 py-9 text-left text-2xl font-extrabold text-[#004E8E] md:text-5xl">
                  THE CAUTIOUS
                  <br />
                  TRAVELER
                </h3>
                <div className="my-2 ml-2 mt-2 h-[4px] w-25 bg-[#EF3340]" />
                <p className="max-w-[24rem] px-2 py-2 text-left text-lg text-[#004E8E] md:text-3xl">
                  Concerned about Restrictions, current events, flight
                  cancellations, etc.
                </p>
              </div>
            </div>

            {/* Prospective Traveler */}
            <div className="relative overflow-hidden">
              <Image
                src={prospectiveTraveler}
                alt="The prospective traveler"
                width={700}
                height={460}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start p-6 text-left">
                <h3 className="text-left text-2xl font-extrabold text-[#004E8E] md:text-5xl py-9 px-2 ">
                  THE PROSPECTIVE TRAVELER
                </h3>
                <div className="my-2 h-[4px] w-25 bg-[#EF3340] ml-2 mt-2" />
                <p className="text-left text-lg max-w-[24rem] text-[#004E8E] md:text-3xl py-2 px-2 ">
                  Overwhelmed with travel options, wanting to do a lot with
                  little time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
