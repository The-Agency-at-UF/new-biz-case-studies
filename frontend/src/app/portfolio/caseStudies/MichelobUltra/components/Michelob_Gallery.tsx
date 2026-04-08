    "use client";

    import { useEffect, useRef } from "react";
    import "../../../../../app/globals.css";

    const GALLERY_IMAGES = [
      "/assets/MichelobUltra/Michelob_Carousel_1.png",
      "/assets/MichelobUltra/Michelob_Carousel_2.png",
      "/assets/MichelobUltra/Michelob_Carousel_3.png",
      "/assets/MichelobUltra/Michelob_Carousel_4.png",
      "/assets/MichelobUltra/Michelob_Carousel_5.png",
      "/assets/MichelobUltra/Michelob_Carousel_6.png",
      "/assets/MichelobUltra/Michelob_Carousel_7.png",
    ];

    export default function MichelobUltra_PhotoGallery() {
      const trackRef = useRef<HTMLDivElement>(null);
      const rafRef = useRef<number>(0);
      const userPausedRef = useRef(false);
      const userInteractingRef = useRef(false);
      const isWrappingRef = useRef(false);
      const resumeTimerRef = useRef<number | null>(null);
      const lastFrameTimeRef = useRef<number | null>(null);
      const currentSpeedRef = useRef(0);

      useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const baseSpeedPxPerSecond = 24;
        const resumeDelay = 1200;

        const getLoopPoint = () => track.scrollWidth / 2;

        const queueResume = () => {
          if (resumeTimerRef.current !== null) {
            window.clearTimeout(resumeTimerRef.current);
          }

          resumeTimerRef.current = window.setTimeout(() => {
            userInteractingRef.current = false;
            userPausedRef.current = false;
            resumeTimerRef.current = null;
          }, resumeDelay);
        };

        const pauseAutoplay = () => {
          userInteractingRef.current = true;
          userPausedRef.current = true;
          queueResume();
        };

        const wrapScrollPosition = () => {
          if (isWrappingRef.current) return;

          const loopPoint = getLoopPoint();
          if (!loopPoint) return;

          if (track.scrollLeft >= loopPoint) {
            isWrappingRef.current = true;
            track.scrollLeft -= loopPoint;
        requestAnimationFrame(() => {
          isWrappingRef.current = false;
        });
            return;
          }

          if (track.scrollLeft <= 0) {
            isWrappingRef.current = true;
            track.scrollLeft += loopPoint;
        requestAnimationFrame(() => {
          isWrappingRef.current = false;
        });
          }
        };

    const handleScroll = () => {
          if (userInteractingRef.current) {
            pauseAutoplay();
          }
          wrapScrollPosition();
        };

    const markUserInteracting = () => {
      pauseAutoplay();
    };

    const tick = (timestamp: number) => {
          if (lastFrameTimeRef.current === null) {
            lastFrameTimeRef.current = timestamp;
          }

          const deltaSeconds = (timestamp - lastFrameTimeRef.current) / 1000;
          lastFrameTimeRef.current = timestamp;

          const targetSpeed = userPausedRef.current ? 0 : baseSpeedPxPerSecond;
          currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * 0.08;

          if (Math.abs(currentSpeedRef.current) < 0.01 && targetSpeed === 0) {
            currentSpeedRef.current = 0;
          }

          if (currentSpeedRef.current > 0) {
            track.scrollLeft += currentSpeedRef.current * deltaSeconds;
            wrapScrollPosition();
          }

          if (userPausedRef.current) {
        lastFrameTimeRef.current = null;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const initialPositionFrame = requestAnimationFrame(() => {
      track.scrollLeft = getLoopPoint();
    });

    rafRef.current = requestAnimationFrame(tick);
    track.addEventListener("scroll", handleScroll);
    track.addEventListener("wheel", markUserInteracting, { passive: true });
    track.addEventListener("touchstart", markUserInteracting, { passive: true });
    track.addEventListener("touchmove", markUserInteracting, { passive: true });
    track.addEventListener("pointerdown", markUserInteracting);
    track.addEventListener("pointermove", markUserInteracting, { passive: true });
    track.addEventListener("keydown", markUserInteracting);

    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }

      cancelAnimationFrame(initialPositionFrame);
      cancelAnimationFrame(rafRef.current);
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener("wheel", markUserInteracting);
      track.removeEventListener("touchstart", markUserInteracting);
      track.removeEventListener("touchmove", markUserInteracting);
      track.removeEventListener("pointerdown", markUserInteracting);
      track.removeEventListener("pointermove", markUserInteracting);
      track.removeEventListener("keydown", markUserInteracting);
    };
  }, []);

      return (
        <div className="relative mt-[-6%] mb-[15%]">
          <div
            ref={trackRef}
            className="relative scrollHide flex flex-nowrap w-full overflow-x-scroll grid-rows-1 h-[22rem] sm:h-[26rem] md:h-[34rem] lg:h-[40rem] gap-10"
          >
            {GALLERY_IMAGES.concat(GALLERY_IMAGES).map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                className="w-full h-auto z-2"
                alt={`Michelob Ultra carousel ${((index % GALLERY_IMAGES.length) + 1)}`}
              />
            ))}
          </div>
          <img
            src="/assets/MichelobUltra/dotted_chevron.png"
            alt="Dotted chevron"
            className="absolute bottom-[-20%] flex w-screen object-cover justify-center items-center z-1"
          />
        </div>
      );
    }