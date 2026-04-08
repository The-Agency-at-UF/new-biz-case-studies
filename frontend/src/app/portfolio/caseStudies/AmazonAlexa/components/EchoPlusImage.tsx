"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EchoPlusImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      className="
    absolute z-0 pointer-events-none right-0 aspect-square    
    w-[80%] top-[-30%] translate-x-[50%]
    md:w-[80%] md:top-[-40%] md:translate-x-[40%]
    lg:w-[75%] lg:top-[-45%] lg:translate-x-[30%]
  "
      // style={{
      //   width: "54.53vw", // 1047px on a 1920px screen
      //   height: "70.16vw", // 1347px on a 1920px screen
      //   right: "-10vw", // (1020.5px - 1047px/2) on a 1920px screen
      //   top: "28vw", // 600.7px on a 1920px screen
      // }}
    >
      <Image
        src="/assets/AmazonAlexa/amazon-echo-plus.svg"
        alt="Amazon Echo Plus"
        fill
        className="object-contain"
      />
    </motion.div>
  );
}
