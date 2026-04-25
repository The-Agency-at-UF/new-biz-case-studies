'use client';

import type { ReactNode } from 'react';

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
    return (
        <section
            className="relative w-full"
            style={{ height: '200dvh' }}
        >
            {/* Sticky Spline background: stays pinned to viewport top for the
                full 200dvh the section occupies, so the scene is the visual
                constant behind both the hero and the adventure overlay. */}
            <div className="sticky top-0 h-dvh w-full overflow-hidden z-0">
                <iframe
                    src="https://my.spline.design/agencyhero-xv9O7XL7bl23jPVERpxy3aCB/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        border: 'none',
                    }}
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
                <div className="h-dvh pointer-events-auto">
                    {children}
                </div>
            </div>
        </section>
    );
}
