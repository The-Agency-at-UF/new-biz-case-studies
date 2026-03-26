"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EchoMiniImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
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