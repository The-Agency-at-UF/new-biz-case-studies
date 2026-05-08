'use client';

import type { ReactNode } from 'react';
import Script from 'next/script';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { useAdventure } from '../context/AdventureContext';

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
import Spline from '@splinetool/react-spline';

export default function MainHero({ children }: MainHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const { selectBlob } = useAdventure();

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Future GSAP animations for MainHero can go here
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

    const handleSplineLoad = (splineApp: any) => {
        console.log("🟢 Spline Application Successfully Loaded!", splineApp);

        // Spline requires an ACTION (like "Console" or "Set Variable") attached to the Event in the editor
        // in order for it to emit 3D events. We will listen to both mouseDown and mouseUp to be safe.

        const handleSplineClick = (e: any) => {
            console.log(`Raw Spline 3D Event (${e.type}):`, e);

            let currentObj = e.target;
            let objName = "";
            let pathNames = [];

            while (currentObj) {
                if (currentObj.name) {
                    pathNames.push(currentObj.name);
                    if (!objName) {
                        objName = currentObj.name.toLowerCase();
                    }
                }
                currentObj = currentObj.parent;
            }

            console.log("🖱️ Object Hierarchy Clicked:", pathNames.join("  -->  "));

            if (!objName) {
                console.warn("Spline object clicked, but it has no name.", e.target);
                return;
            }

            console.log(`Checking resolved object name: "${objName}" against keywords...`);

            if (objName.includes("agency") || objName.includes("1")) {
                console.log("✅ Matched Option 1: What is the Agency");
                selectBlob(1);
            } else if (objName.includes("service") || objName.includes("2")) {
                console.log("✅ Matched Option 2: Our Services");
                selectBlob(2);
            } else if (objName.includes("work") || objName.includes("3")) {
                console.log("✅ Matched Option 3: See our Work");
                selectBlob(3);
            } else {
                console.log("❌ No match found for this object name.");
            }
        };

        splineApp.addEventListener('mouseDown', handleSplineClick);
        splineApp.addEventListener('mouseUp', handleSplineClick);
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full"
            style={{ height: '200dvh' }}
        >
            <div className="sticky top-0 h-dvh w-full overflow-hidden z-0 bg-black">
                <Spline
                    scene="https://prod.spline.design/hwzfhJT6iymGJQU9/scene.splinecode"
                    onLoad={handleSplineLoad}
                />
            </div>

            {/* Content overlay, absolutely positioned over the full 200dvh
                section. pointer-events:none so Spline stays interactive in
                "empty" regions; individual overlay blocks re-enable events
                where they need them. */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Viewport 1: empty -- lets the Spline scene speak for itself */}
                <div className="h-dvh" />

                {/* Viewport 2: adventure overlay slot */}
                {/* Commenting out pointer-events-auto to let mouse events reach Spline */}
                {/* <div className="h-dvh pointer-events-auto"> */}
                <div className="h-dvh">
                    {children}
                </div>
            </div>
        </section>
    );
}
