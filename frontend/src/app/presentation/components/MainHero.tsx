'use client';

import type { ReactNode } from 'react';
import Script from 'next/script';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
 * to the viewport as the user scrolls through two screens of content:
 *   - Viewport 1: pure hero (just the Spline scene visible)
 *   - Viewport 2: overlay content (e.g. the choose-your-adventure buttons)
 *
 * The Spline scene is a single iframe, shared across both viewports, so the
 * background is visually continuous.
 */
export default function MainHero({ children }: MainHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !logoRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(logoRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "center top", // this represents 100vh down (half of 200dvh)
                    scrub: true,
                },
                opacity: 0,
                scale: 1.5,
                ease: "power2.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full"
            style={{ height: '200dvh' }}
        >
            {/* Sticky Spline background: stays pinned to viewport top for the
                full 200dvh the section occupies, so the scene is the visual
                constant behind both the hero and the adventure overlay. */}
            <div className="sticky top-0 h-dvh w-full overflow-hidden z-0 bg-black">
                <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.88/build/spline-viewer.js" strategy="lazyOnload" />
                {/* @ts-ignore */}
                <spline-viewer 
                    loading-anim-type="spinner-small-dark" 
                    url="https://prod.spline.design/hwzfhJT6iymGJQU9/scene.splinecode"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                ></spline-viewer>

                {/* Overlay Logo that fades out on scroll */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <img 
                        ref={logoRef}
                        src="/Agency_logo_2.png" 
                        alt="The Agency Logo" 
                        className="w-auto h-[100px] md:h-[160px] lg:h-[200px] object-contain"
                    />
                </div>
            </div>

            {/* Content overlay, absolutely positioned over the full 200dvh
                section. pointer-events:none so Spline stays interactive in
                "empty" regions; individual overlay blocks re-enable events
                where they need them. */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Viewport 1: empty -- lets the Spline scene speak for itself */}
                <div className="h-dvh" />

                {/* Viewport 2: adventure overlay slot */}
                <div className="h-dvh pointer-events-auto">
                    {children}
                </div>
            </div>
        </section>
    );
}
