"use client";

import { motion } from "framer-motion";
import { gentonaMedium, gentonaBold, gentonaBook } from "../../../../fonts";

export default function BlissImpact() {
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

  const floatInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: custom * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    }),
  };

  return (
    <section className="relative w-full overflow-visible bg-[#F55096]">
      <div className="relative z-10 flex h-full flex-row justify-center px-8 md:px-10 lg:px-12">
        <div className="max-w-2xl flex min-w-0 flex-[1_1_65%] flex-col gap-6 lg:gap-12">
          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`${gentonaMedium.className} text-4xl font-black uppercase leading-[0.8] tracking-normal md:text-6xl lg:text-[6rem]`}
          >
            <span className="block text-white">The</span>
            <span className="block text-[#5FCAF4]">Impact</span>
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`${gentonaBook.className} text-sm font-light leading-tight tracking-wide text-white md:text-2xl lg:text-3xl`}
          >
            Now, Bliss' TikTok glows because of our insights and suggestions.
            Organically engaging with community-based content allowed Bliss to
            gain clout among younger audiences. One of Bliss' comments, which we
            wrote, garnered more than 20k likes.
            <br />
            <br />
            With a following{" "}
            <span className={`${gentonaBold.className}`}>
              increase from 380k in March 2021 to 404K in August 2022
            </span>
            , the brand now holds the{" "}
            <span className={`${gentonaBold.className}`}>7th</span> highest
            TikTok following among direct competitors.
          </motion.p>
        </div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={floatInRight}
          className="flex min-w-0 flex-[1_1_40%] items-center justify-center"
        >
          <img
            src="/assets/Bliss/Bliss_TickTok.png"
            alt="Bliss TikTok"
            className="w-[200px] md:w-[250px] lg:w-[300px]"
          />
        </motion.div>
      </div>
    </section>
  );
}