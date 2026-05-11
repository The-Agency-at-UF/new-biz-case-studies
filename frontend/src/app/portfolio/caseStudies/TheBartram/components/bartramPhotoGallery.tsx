"use client";

import "../../../../../app/globals.css";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

const galleryImages = [
  "/assets/TheBartram/photo_gallery_1.png",
  "/assets/TheBartram/photo_gallery_2.png",
  "/assets/TheBartram/photo_gallery_3.png",
  "/assets/TheBartram/photo_gallery_4.png",
  "/assets/TheBartram/photo_gallery_5.png",
  "/assets/TheBartram/photo_gallery_6.png",
];

export default function BartramPhotoGallery() {
  return (
    <div className="relative">
      <div className="scrollHide relative bg-[#A4D1D9] flex flex-nowrap overflow-x-scroll w-full h-70 inset-0 gap-10 sm:gap-20">
        {galleryImages.map((src, index) => (
          <motion.img
            key={src}
            custom={index + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            src={src}
            alt={`Bartram gallery image ${index + 1}`}
            className="relative w-full h-auto"
          />
        ))}
      </div>

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        src="/assets/TheBartram/dots_circle_green.png"
        alt=""
        aria-hidden="true"
        className="absolute left-30 top-50 w-15 lg:w-30 h-auto z-2"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.35 }}
        src="/assets/TheBartram/dots_rectangle_green.png"
        alt=""
        aria-hidden="true"
        className="absolute right-10 bottom-60 w-15 lg:w-30 h-auto z-3"
      />
    </div>
  );
}