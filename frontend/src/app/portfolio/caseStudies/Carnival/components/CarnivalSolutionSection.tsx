"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CarnivalSolutionSection() {
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
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="relative z-10 px-6 md:px-12 lg:pl-20 lg:pr-0">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_32rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_32rem]">
          <div className="max-w-3xl">
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="-ml-8 block max-w-xl bg-white px-8 py-1 md:-ml-14 md:px-14 md:py-2 lg:-ml-22 lg:px-20 lg:py-4"
            >
              <h2 className="text-6xl font-extrabold leading-none text-[#004E8E] md:text-7xl lg:text-8xl">
                THE
              </h2>
              <h2 className="text-6xl font-extrabold leading-none text-[#EF3340] md:text-7xl lg:text-8xl">
                SOLUTION
              </h2>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              className="-ml-6 mt-6 h-[4px] w-full max-w-[36rem] bg-[#EF3340] origin-left md:-ml-12 lg:-ml-20"
            />

            <div className="mt-8 space-y-8 text-white">
              <motion.p
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="max-w-3xl text-base leading-tight md:text-3xl"
              >
                Analyzing global conversations from 21.3 million results led us
                to two types of travelers:{" "}
                <strong>the cautious traveler</strong> and{" "}
                <strong>the prospective traveler.</strong>
              </motion.p>

              <motion.p
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="max-w-4xl text-base leading-tight md:text-3xl"
              >
                We provided Carnival with a more in-depth understanding of
                post-quarantine travel sentiments by defining priorities for
                travelers.
              </motion.p>

              <motion.p
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="max-w-4xl text-base leading-tight md:text-3xl"
              >
                Carnival used our traveler profiles to create a compelling
                Funderstruck campaign that appeals to both cautious and
                prospective travelers.
              </motion.p>
            </div>
          </div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative mx-auto w-full max-w-[36rem] lg:ml-auto lg:mr-0 lg:-mt-12 lg:w-[36rem] lg:max-w-[36rem]"
          >
            <div className="relative">
              <Image
                src="/assets/Carnival/SolutionPhoto.png"
                alt="Carnival solution photo"
                width={550}
                height={610}
                priority
                loading="eager"
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
