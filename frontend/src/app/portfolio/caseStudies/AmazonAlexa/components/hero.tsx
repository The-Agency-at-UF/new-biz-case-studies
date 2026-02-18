"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AmazonAlexaHero() {
  // Animation Variant: Clean Fade Up
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: custom * 0.15, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }
    })
  };

  return (
    <section className="relative w-full aspect-[1920/1321] overflow-hidden bg-black font-sans">
      
      {/* 1. Background Layers */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: 'linear-gradient(to bottom, #1D3B56 0%, #3F81BC00 100%)' }} 
      />

      <div className="absolute inset-0 z-10 opacity-40">
        <Image src="/assets/AmazonAlexa/bg-gradient.png" alt="" fill priority className="object-cover" />
      </div>

      {/* 2. Echo Photo - Now strictly 1920x1321 proportional */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-10"
      >
        <Image
          src="/assets/AmazonAlexa/amazon-echo.png"
          alt="Amazon Echo"
          fill
          priority
          className="object-contain object-top" 
          style={{ top: '-4%' }}
        />
      </motion.div>

      {/* 3. Transition Floor Gradient */}
      <div 
        className="absolute inset-0 z-[15] pointer-events-none" 
        style={{ background: 'linear-gradient(to bottom, #1D3B5600 0%, #1D3B57 85%)' }} 
      />

      {/* 4. Foreground Content - Shifted UP to maintain relative positioning */}
      
      {/* Case Study Logo - Shifted from 42% -> 38% */}
      <motion.div 
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="absolute z-30" 
        style={{ left: '7.135%', top: '38%', width: '17.7vw', aspectRatio: '340/105' }}
      >
        <Image src="/assets/AmazonAlexa/case-study-logo.png" alt="Case Study" fill className="object-contain object-left" />
      </motion.div>

      {/* Alexa Logo - Shifted from 55% -> 50% */}
      <motion.div 
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="absolute z-30" 
        style={{ left: '7.135%', top: '51%', width: '15.72vw', aspectRatio: '301.9/191.3' }}
      >
        <Image src="/assets/AmazonAlexa/alexa-logo.png" alt="Alexa" fill className="object-contain object-left" />
      </motion.div>

      {/* The "x" - Shifted to match Alexa logo */}
      <motion.span 
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="absolute z-30 text-white font-semibold flex items-center justify-center"
        style={{ 
          left: '27.135%', top: '56%', width: '2.4vw', 
          fontSize: '3.125vw', fontFamily: 'var(--font-work-sans)' 
        }}
      >
        x
      </motion.span>

      {/* The Agency Logo - Shifted from 59% -> 53% */}
      <motion.div 
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="absolute z-30" 
        style={{ left: '32.656%', top: '53%', width: '36.66vw', aspectRatio: '704/165' }}
      >
        <Image src="/assets/AmazonAlexa/agency-white-logo.png" alt="The Agency" fill className="object-contain object-left" />
      </motion.div>

      {/* Divider Line - Shifted from 74% -> 68% */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
        className="absolute z-30 origin-left"
        style={{ 
          left: '7.135%', top: '68%', width: '62.18vw', height: '0px',
          borderTop: '5px solid #2AADCD',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' 
        }}
      />

      {/* Subtitle Text - Shifted from 78% -> 72% */}
      <motion.p 
        custom={6}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="absolute z-30 text-white"
        style={{ 
          left: '7.135%', top: '72%', width: '61.4vw', 
          fontFamily: 'var(--font-gentona), sans-serif',
          fontWeight: 500, fontSize: '3.125vw', lineHeight: '3.385vw', 
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        Showcasing Alexa&apos;s Personality, One Gen Z Answer at a Time
      </motion.p>

    </section>
  );
}