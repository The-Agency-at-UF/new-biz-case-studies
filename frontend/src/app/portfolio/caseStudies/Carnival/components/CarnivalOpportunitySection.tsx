import Image from "next/image";
import opportunityPhoto from "../assets/Opportunity-Photo.png";

export default function CarnivalOpportunitySection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-0 md:py-14">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="py-6">
          <h2 className="text-6xl font-extrabold md:text-7xl">THE</h2>
          <h2 className="text-6xl font-extrabold text-[#EF3340] md:text-7xl">
            OPPORTUNITY
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="w-full max-w-3xl">
            <p className="text-base md:text-2xl">
              2021 was an adjustment period for consumers and brands alike.
              Consumers needed to discover exciting ways to connect with their
              loved ones. Brands needed to find strategies that fit the shared
              sentiments of their target audiences.
            </p>
            <br />
            <p className="text-base md:text-2xl">
              Carnival Cruise decided it was time to lean into its reputation
              for fun with a campaign introducing the Funderstruck feeling.
            </p>
            <br />
            <p className="text-base md:text-2xl">
              The Funderstruck campaign showed potential cruise vacationers that
              the fun they&apos;re searching for is best experienced on a Carnival
              Cruise ship. Carnival needed The Agency to identify how people
              wanted to travel after a year of quarantine. Our researchers set
              sail on a digital exploration using Talkwalker, native social
              searches on TikTok and Instagram, and Enterprise Research tools to
              determine if travelers were ready to feel Funderstruck.
            </p>
          </div>

          <div className="relative mx-auto -mt-6 aspect-[4/5] w-[22rem] overflow-hidden sm:w-[28rem] lg:ml-auto lg:mr-[-8rem] lg:mt-[-3rem] lg:w-[34rem]">
            <Image
              src={opportunityPhoto}
              alt="Carnival opportunity photo"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
