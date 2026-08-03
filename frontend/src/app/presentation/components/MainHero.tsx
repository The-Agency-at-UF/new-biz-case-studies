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

// Scroll-progress milestones across the 200dvh stage (0 = top, 1 = bottom bottom).
// The transition is a NARROW band so the logo and the finished menu each occupy a
// wide, stable plateau — wherever you stop, you land on a clean state, and the page
// never scrolls on its own. Logo plateau: 0–0.15. Transition: ~0.15–0.35. Menu
// plateau: 0.35–1.0 (footer stays off-screen until you scroll past the stage).
const LOGO_HOLD_END = 0.15;    // logo fully visible up to here
const LOGO_EXIT_END = 0.32;    // logo fully gone by here
const MENU_ENTER_START = 0.18; // menu starts fading in (slight overlap = leave-behind)
const MENU_FULL_AT = 0.35;     // menu fully visible; plateaus from here to 1.0

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
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    function handleBlobClick(blob: 1 | 2 | 3) {
        selectBlob(blob);
    }

    // Respect the OS "reduce motion" setting — we keep the opacity cross-dissolve
    // (a fade is not vestibular motion) but suppress the translate/scale movement.
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setPrefersReducedMotion(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        if (!sectionRef.current) return;

        // No scroll snapping: the plateaus (see milestone constants) guarantee a
        // clean resting state without ever moving the page for the user.
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
    // State 1 holds visible through LOGO_HOLD_END, then exits over a short band so
    // it feels left behind. Outside that band it's a stable plateau (fully in / out).
    const state1Progress = Math.max(0, Math.min(1, (scrollProgress - LOGO_HOLD_END) / (LOGO_EXIT_END - LOGO_HOLD_END)));
    const state1Opacity = Math.max(0, 1 - Math.pow(state1Progress, 2.5));

    // State 2 fades in over the same narrow band and reaches full opacity at
    // MENU_FULL_AT, then plateaus all the way to the section end — so wherever you
    // stop past the transition, the menu is fully shown and the footer stays hidden.
    const state2Progress = Math.max(0, Math.min(1, (scrollProgress - MENU_ENTER_START) / (MENU_FULL_AT - MENU_ENTER_START)));
    const state2Opacity = Math.pow(state2Progress, 0.95);

    // Push/leave-behind movement — suppressed under reduced motion (the fades stay).
    const moveFactor = prefersReducedMotion ? 0 : 1;
    const state1TranslateY = -state1Progress * 16 * moveFactor; // vh (faster lift)
    const state1Scale = 1 - state1Progress * 0.12 * moveFactor;
    const state2TranslateY = (1 - state2Progress) * 6 * moveFactor; // vh (comes up into place)

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
                            onClick={() => handleBlobClick(1)}
                        >
                            What is the Agency?
                        </motion.button>

                        {/* Center Button */}
                        <motion.button
                            className={`absolute left-1/2 -translate-x-1/2 bottom-[18%] sm:bottom-[calc(18%+0.5rem)] md:bottom-[calc(18%+2rem)] w-[22vw] h-[22vw] max-w-[300px] max-h-[300px] flex items-center justify-center text-center pointer-events-auto text-white cursor-pointer bg-transparent border-none text-[clamp(0.9rem,2.5rem,2.5rem)] ${gentonaBook.className}`}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={() => handleBlobClick(2)}
                        >
                            Our Services
                        </motion.button>

                        {/* Right Button */}
                        <motion.button
                            className={`absolute left-[82%] sm:left-[81%] md:left-[76%] lg:left-[80%] -translate-x-1/2 bottom-[20%] sm:bottom-[18%] md:bottom-[calc(18%+2rem)] w-[22vw] h-[22vw] max-w-[300px] max-h-[300px] flex items-center justify-center text-center pointer-events-auto text-white cursor-pointer bg-transparent border-none text-[clamp(0.9rem,2.5rem,2.5rem)] ${gentonaBook.className}`}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={() => handleBlobClick(3)}
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
