"use client";

import { motion } from "framer-motion";

export default function CarnivalStatsSection() {
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
    <section className="relative py-8 md:py-12">
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-white md:px-10 md:py-7">
          <motion.p
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-extrabold uppercase leading-none md:text-6xl"
          >
            8 Published Trade Articles
          </motion.p>
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-2 text-4xl font-extrabold uppercase leading-none md:text-6xl"
          >
            230,000+ Impressions
          </motion.p>
        </div>
      </div>
    </section>
  );
}
