"use client";

import Image from "next/image";
import phone1 from "../assets/Coke-Phone1.svg";
import phone2 from "../assets/Coke-Phone2.svg";
import phone3 from "../assets/Coke-Phone3.svg";
import { motion } from "framer-motion";

export default function CokePhoneScreens() {
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
    <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-end sm:gap-10 lg:gap-14">
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Image
          src={phone1}
          alt="Coke Zero mobile screen one"
          className="h-auto w-[14rem] sm:w-[16rem] lg:w-[18rem]"
          priority={false}
        />
      </motion.div>
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Image
          src={phone2}
          alt="Coke Zero mobile screen two"
          className="h-auto w-[14rem] sm:w-[16rem] lg:w-[18rem]"
          priority={false}
        />
      </motion.div>
      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Image
          src={phone3}
          alt="Coke Zero mobile screen three"
          className="h-auto w-[14rem] sm:w-[16rem] lg:w-[18rem]"
          priority={false}
        />
      </motion.div>
    </div>
  );
}
