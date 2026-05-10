"use client";

import { motion } from "framer-motion";

export default function Bartram_Footer() {
  return (
    <div className="relative bg-[#A4D1D9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center w-full px-6 md:px-12 lg:px-20"
      >
        <img src="/assets/TheBartram/bottom_logo.png" alt="The Bartram and Agency logo" className="relative w-2/3 lg:w-1/2 h-auto" />
      </motion.div>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        src="/assets/TheBartram/bartram_footer.png"
        alt="Bartram footer collage"
        className="relative w-full h-auto"
      />

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        src="/assets/TheBartram/footer_dots circle.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-15 h-auto z-2"
      />
    </div>
  );
}