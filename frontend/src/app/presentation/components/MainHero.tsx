'use client';

import type { ReactNode } from 'react';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

import { useAdventure } from '../context/AdventureContext';
import { gentonaBook } from '../../fonts';

type MainHeroProps = {
    /**
     * Content rendered in the second viewport of the stage
     * (i.e. below the initial hero, still overlaying the sticky
     * Spline scene). Typically <ChooseYourAdventure />.
     */
    children?: ReactNode;
};

/**
 * MainHero acts as a 200dvh "stage" that pins the AgencyHero Spline scene
 * to the viewport as the user scrolls through two screens of content.
 * Interactive text elements are now overlaid in HTML to avoid Spline
 * metaball raycasting conflicts.
 */
export default function MainHero({ children }: MainHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const { selectBlob } = useAdventure();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    setScrollProgress(self.progress);
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Temporary keyboard listener for testing
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '1') {
                console.log("⌨️ Key 1 Pressed: What is the Agency");
                selectBlob(1);
            } else if (e.key === '2') {
                console.log("⌨️ Key 2 Pressed: Our Services");
                selectBlob(2);
            } else if (e.key === '3') {
                console.log("⌨️ Key 3 Pressed: See our Work");
                selectBlob(3);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectBlob]);

    // Opacity / transform calculations
    // Make State 1 exit earlier and faster so it feels like it's being left behind.
    const state1End = 0.45; // State1 fully exited by 45% progress
    const state1Progress = Math.max(0, Math.min(1, scrollProgress / state1End));
    const state1Opacity = Math.max(0, 1 - Math.pow(state1Progress, 2.5));

    // State 2 will begin slightly before state1 fully finishes so it can come
    // into place, but because state1 drops quickly it will feel left behind.
    const state2Start = 0.42;
    const state2Progress = Math.max(0, Math.min(1, (scrollProgress - state2Start) / (1 - state2Start)));
    const state2Opacity = Math.pow(state2Progress, 0.95);

    // Transforms for push/leave-behind effect
    const state1TranslateY = -state1Progress * 16; // vh (faster lift)
    const state1Scale = 1 - state1Progress * 0.12;
    const state2TranslateY = (1 - state2Progress) * 6; // vh (comes up into place)

    return (
        <section
            ref={sectionRef}
            className="relative w-full"
            style={{ height: '200dvh' }}
        >
            <div className="sticky top-0 h-dvh w-full overflow-hidden z-0 bg-black">
                {/* 
                  pointer-events-none prevents the Spline canvas from eating clicks
                  that should hit our HTML overlay or pass through to scroll logic.
                */}
                <div className="pointer-events-none w-full h-full">
                    <Spline
                        scene="https://prod.spline.design/hwzfhJT6iymGJQU9/scene.splinecode"
                    />
                </div>

                {/* --- STATE 1: Centered Logo & Arrow --- */}
                <div
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
                    style={{
                        display: 'flex',
                        opacity: state1Opacity,
                        transform: `translateY(${ state1TranslateY }vh) scale(${state1Scale})`,
                        visibility: state1Opacity === 0 ? 'hidden' : 'visible'
                    }}
                >
                    <div className="relative w-[clamp(18rem,60vw,55rem)] h-[clamp(14rem,60vh,34rem)] flex items-center justify-center">
                        <Image
                            src="/logos/Agency_logo_2.png"
                            alt="The Agency Logo"
                            fill
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 42rem"
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Arrow positioned at bottom of viewport */}
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
                    style={{
                        bottom: '5rem',
                        display: 'block',
                        opacity: state1Opacity,
                        transform: `translateY(${ state1TranslateY * 0.5 }vh)`,
                        visibility: state1Opacity === 0 ? 'hidden' : 'visible',
                        width: '8rem',
                        height: '8rem'
                    }}
                >
                    <Image
                        src="/assets/Presentation/down-arrow.svg"
                        alt="Scroll down arrow"
                        fill
                        sizes="8rem"
                        className="object-contain"
                    />
                </div>

                {/* --- STATE 2: Choose Your Adventure Menu --- */}
                <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        display: 'block',
                        opacity: state2Opacity,
                        transform: `translateY(${ state2TranslateY }vh)`,
                        visibility: state2Opacity === 0 ? 'hidden' : 'visible'
                    }}
                >
                    {/* Title */}
                    <h1
                        className="absolute top-[32%] w-full text-center text-white"
                        style={{
                            fontSize: 'clamp(24px, 4vw, 48px)',
                            fontFamily: '"Franklin Gothic", "ITC Franklin Gothic", Arial, sans-serif',
                            fontWeight: 700,
                            gap: '0.5rem'
                        }}
                    >
                        Choose Your Adventure
                    </h1>

                    {/* Blob Labels - Absolutely Positioned */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        {/* Left Button */}
                        <motion.button
                            className={`absolute left-[18%] sm:left-[20%] md:left-[20%] lg:left-[24%] -translate-x-1/2 bottom-[20%] sm:bottom-[18%] md:bottom-[calc(18%+2rem)] w-[22vw] h-[22vw] max-w-[300px] max-h-[300px] flex items-center justify-center text-center pointer-events-auto text-white cursor-pointer bg-transparent border-none text-[clamp(0.9rem,2.5rem,2.5rem)] ${gentonaBook.className}`}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={() => selectBlob(1)}
                        >
                            What is the Agency?
                        </motion.button>

                        {/* Center Button */}
                        <motion.button
                            className={`absolute left-1/2 -translate-x-1/2 bottom-[18%] sm:bottom-[calc(18%+0.5rem)] md:bottom-[calc(18%+2rem)] w-[22vw] h-[22vw] max-w-[300px] max-h-[300px] flex items-center justify-center text-center pointer-events-auto text-white cursor-pointer bg-transparent border-none text-[clamp(0.9rem,2.5rem,2.5rem)] ${gentonaBook.className}`}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={() => selectBlob(2)}
                        >
                            Our Services
                        </motion.button>

                        {/* Right Button */}
                        <motion.button
                            className={`absolute left-[82%] sm:left-[81%] md:left-[76%] lg:left-[80%] -translate-x-1/2 bottom-[20%] sm:bottom-[18%] md:bottom-[calc(18%+2rem)] w-[22vw] h-[22vw] max-w-[300px] max-h-[300px] flex items-center justify-center text-center pointer-events-auto text-white cursor-pointer bg-transparent border-none text-[clamp(0.9rem,2.5rem,2.5rem)] ${gentonaBook.className}`}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={() => selectBlob(3)}
                        >
                            See our work
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Content overlay below sticky hero */}
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end">
                <div className="h-dvh">
                    {children}
                </div>
            </div>
        </section>
    );
}
