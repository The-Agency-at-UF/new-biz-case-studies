"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EchoPlusImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      className="absolute z-20"
      style={{
        width: "54.53vw", // 1047px on a 1920px screen
        height: "70.16vw", // 1347px on a 1920px screen
        right: "-10vw", // (1020.5px - 1047px/2) on a 1920px screen
        top: "31.29vw", // 600.7px on a 1920px screen
      }}
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
