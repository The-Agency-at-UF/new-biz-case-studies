"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EchoMiniImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
      transition={{
        duration: 1,
        delay: 0.25,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="absolute z-20"
      style={{
        width: "60%",
        aspectRatio: "1 / 1",
        left: "-12%",
        top: "0%",
      }}
    >
      <Image
        src="/assets/AmazonAlexa/amazon-echo-mini.svg"
        alt="Amazon Echo Mini"
        fill
        className="object-contain"
      />
    </motion.div>
  );
}