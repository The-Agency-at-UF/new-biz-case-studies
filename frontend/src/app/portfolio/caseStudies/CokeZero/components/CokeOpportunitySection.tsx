"use client";

import { motion } from "framer-motion";

export default function CokeOpportunitySection() {
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
    <section className="relative min-h-screen overflow-hidden py-10 md:py-14">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-6"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold">THE</h1>
          <h1 className="text-6xl md:text-7xl text-[#DA2028] font-extrabold">
            OPPORTUNITY
          </h1>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12"
        >
          <div className="w-full max-w-3xl">
            <p className="text-base md:text-2xl">
            In 2020, the possibility of a safe and normal college football season was
            intercepted by the COVID-19 pandemic. Fans watched their favorite players test
            positive, their favorite teams pull out and anticipated games get cancelled
            indefinitely. Many had to say goodbye to their game-day favorites, namely rowdy
            crowds and over-the-top tailgates.
            </p>
            <br />
            <p className="text-base md:text-2xl">
            Like the rest of us, Coca-Cola did not anticipate a pandemic, much less one that
            would leave an impact for years to come. Coke&apos;s internal marketing agency, KO:OP,
            had planned various in-person activations inside college football stadiums for the
            2020 season and beyond. These needed to be adjusted. Given in-person restrictions
            and emerging health concerns, Coke&apos;s team was on a mission to find the best ways to
            nuance its means of refreshing football fanatics in 2021.
            </p>
          </div>
          <div className="relative mx-auto -mt-14 aspect-square w-[24rem] overflow-hidden rounded-full sm:w-[30rem] lg:ml-auto lg:mr-[-12rem] lg:w-[34rem]">
            <img
              src="/assets/CokeZero/CokeAsset5.png"
              alt="Game day coke advertisement"
              className="relative w-full h-full object-cover object-[40%_50%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

