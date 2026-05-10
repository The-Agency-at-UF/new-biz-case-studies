"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import agencyLogo from "../../CokeZero/assets/AgencyLogoFull.png";

export default function CarnivalHeadlinesSection() {
  const colsRef = useRef(null);
  const colsInView = useInView(colsRef, { once: true, amount: 0 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-6 md:pt-10 md:pb-24">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_24rem] xl:grid-cols-[minmax(0,1fr)_26rem]">
            {/* Stagger container: col1 then col2 */}
            <motion.div
              ref={colsRef}
              initial="hidden"
              animate={colsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-4 md:grid-cols-[1.24fr_0.62fr] lg:h-[26rem] xl:h-[29rem]"
            >
              <motion.div
                variants={fadeInUp}
                className="grid h-full gap-6 [grid-template-rows:220fr_360fr]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/Carnival/photo1Col1.png"
                    alt="CruiseHive article headline"
                    fill
                    sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/Carnival/photo2Col1.png"
                    alt="Carnival newsroom article"
                    fill
                    sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, 100vw"
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid h-full gap-5 [grid-template-rows:170fr_213fr_158fr]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/Carnival/photo1Col2.png"
                    alt="University of Florida article headline"
                    fill
                    sizes="(min-width: 1280px) 12rem, (min-width: 1024px) 11rem, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/Carnival/photo2Col2.png"
                    alt="Study findings article excerpt"
                    fill
                    sizes="(min-width: 1280px) 12rem, (min-width: 1024px) 11rem, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/assets/Carnival/photo3Col2.png"
                    alt="Traveler preference article headline"
                    fill
                    sizes="(min-width: 1280px) 12rem, (min-width: 1024px) 11rem, 100vw"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* col3 — delayed to follow after col1+col2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.46, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative mx-auto w-full max-w-[24rem] lg:mx-0 lg:h-[26rem] lg:max-w-[24rem] xl:h-[29rem] xl:max-w-[26rem]"
            >
              <Image
                src="/assets/Carnival/photo3Col2.png"
                alt="Travel enthusiasm infographic"
                fill
                sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 24rem, 100vw"
                className="object-contain"
              />
            </motion.div>
          </div>

          <div className="relative mt-20 flex justify-center bg-[#004E8E] px-6 pb-16 pt-8 md:mt-24 md:pb-24">
            <div className="absolute left-0 top-10 h-4 w-4 rounded-full bg-[#D3362D] md:h-5 md:w-5" />
            <div className="absolute -left-10 bottom-2 h-12 w-12 rounded-full bg-[#D3362D] md:h-16 md:w-16" />
            <div className="absolute right-10 top-8 h-4 w-4 rounded-full bg-white md:h-5 md:w-5" />
            <div className="absolute right-0 bottom-1 h-16 w-16 rounded-full bg-white md:h-20 md:w-20" />

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative z-10 flex flex-col items-center justify-center gap-5 text-white lg:flex-row lg:gap-6"
            >
              <Image
                src="/assets/Carnival/carnival-Logo.svg"
                alt="Carnival"
                width={300}
                height={150}
                className="h-auto w-full max-w-[250px] sm:max-w-[320px]"
              />

              <p className="text-3xl font-bold lg:text-4xl">X</p>

              <Image
                src={agencyLogo}
                alt="The Agency at the University of Florida"
                className="h-auto w-full max-w-[280px] sm:max-w-[380px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
