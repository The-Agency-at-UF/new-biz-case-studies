"use client";

import { gentonaBook } from "@/app/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CampaignSection() {
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
    <div className="relative bg-[#050430] overflow-x-clip pt-20 lg:pt-40 md:-mt-56 lg:-mt-80">
      <div className="relative mx-auto w-full max-w-[1920px] h-[600px] sm:h-[750px] md:h-[900px] lg:h-[1000px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute opacity-[0.26]
                     w-[150vw] left-[-50vw] top-[0px]
                     sm:w-[120vw] sm:left-[-40vw] sm:top-[100px]
                     md:w-[100vw] md:left-[-30vw] md:top-[200px]
                     lg:w-[1603px] lg:h-[902px] lg:left-[-494px] lg:top-[370px]"
        >
          <Image
            src="/assets/GatorsUnidos/sec-bevel-logo.svg"
            alt="SEC Bevel Logo"
            width={1603}
            height={902}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          viewport={{ once: true }}
          className="absolute h-1 bg-gradient-to-r from-[#105FB7] to-[#EB6220] origin-left
                     w-[90%] left-[5%] top-[200px]
                     sm:top-[300px]
                     md:top-[400px]
                     lg:w-[1263.01px] lg:left-[91px] lg:top-[551px]"
        />

        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className={`${gentonaBook.className} absolute text-white uppercase font-black whitespace-pre-line
                     w-[90%] left-[5%] top-[250px] text-xl
                     sm:top-[350px]
                     md:top-[450px]
                     lg:w-[1263.01px] lg:left-[91px] lg:top-[582px] lg:text-4xl`}
        >
          {`THE FIRST HISPANIC AND LATINO CELEBRATION 
          CAMPAIGN FOR ESPN, THE SEC NETWORK, AND 
THE UNIVERSITY OF FLORIDA.`}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
          viewport={{ once: true }}
          className="absolute h-1 bg-gradient-to-r from-[#105FB7] to-[#EB6220] origin-left w-[90%] left-[5%] top-[410px] sm:top-[510px] md:top-[610px] lg:w-[1263.01px] lg:left-[91px] lg:top-[773px]"
        />
      </div>
    </div>
  );
}