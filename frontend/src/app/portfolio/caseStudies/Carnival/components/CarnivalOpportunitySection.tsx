"use client";

import Image from "next/image";
import cautiousTraveler from "../assets/CautiousTraveler.png";
import dottedRedCircle from "../assets/dotted-redCircle.svg";
import opportunityPhoto from "../assets/Opportunity-Photo.png";
import prospectiveTraveler from "../assets/ProspectiveTraveler.png";
import { motion } from "framer-motion";

export default function CarnivalOpportunitySection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section className="relative  py-0 md:py-14">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        {/* Title + text + image all in one row so image starts at the top */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
        >
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

          <div className="relative mt-6 w-full shrink-0 overflow-hidden lg:mr-[-5rem] lg:w-[46%] xl:w-[48%]">
            <Image
              src={opportunityPhoto}
              alt="Carnival Funderstruck opportunity photo"
              width={980}
              height={860}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Stat + traveler cards */}
        <div className="">
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8 text-base md:text-3xl max-w-[68rem]"
          >
            After refining our search, we pulled{" "}
            <span className="font-extrabold">21.3 MILLION</span> results to find
            the following: There are <strong>two</strong> types of people that
            want to travel in 2022.
          </motion.p>

          <div className="mx-auto grid max-w-[72rem] grid-cols-1 gap-15 md:grid-cols-2 md:gap-20">
            {/* Cautious Traveler */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative overflow-visible"
            >
              <Image
                src={cautiousTraveler}
                alt="The cautious traveler"
                width={620}
                height={410}
                className="h-auto w-full object-cover"
              />
              <Image
                src={dottedRedCircle}
                alt=""
                aria-hidden
                width={120}
                height={120}
                className="absolute -left-23 -top-7 z-0 h-32 w-32 md:h-35 md:w-35"
              />
              <div className="absolute inset-0 z-10 flex flex-col items-start justify-start p-5 text-left md:p-6">
                <h3 className="px-2 py-6 text-left text-2xl font-extrabold text-[#004E8E] md:text-4xl">
                  THE CAUTIOUS
                  <br />
                  TRAVELER
                </h3>
                <div className="my-2 ml-2 mt-2 h-[4px] w-25 bg-[#EF3340]" />
                <p className="max-w-[22rem] px-2 py-2 text-left text-lg text-[#004E8E] md:text-[1.7rem]">
                  Concerned about Restrictions, current events, flight
                  cancellations, etc.
                </p>
              </div>
            </motion.div>

            {/* Prospective Traveler */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative overflow-hidden"
            >
              <Image
                src={prospectiveTraveler}
                alt="The prospective traveler"
                width={620}
                height={410}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start p-5 text-left md:p-6">
                <h3 className="px-2 py-6 text-left text-2xl font-extrabold text-[#004E8E] md:text-4xl">
                  THE PROSPECTIVE <br /> TRAVELER
                </h3>
                <div className="my-2 h-[4px] w-25 bg-[#EF3340] ml-2 mt-2" />
                <p className="max-w-[22rem] px-2 py-2 text-left text-lg text-[#004E8E] md:text-[1.7rem]">
                  Overwhelmed with travel options, wanting to do a lot with
                  little time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
