"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EchoPlusImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
      transition={{
        duration: 1,
        delay: 0.25,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="absolute z-20"
      style={{
        width: "54.53vw",
        height: "70.16vw",
        right: "-10vw",
        top: "28vw",
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