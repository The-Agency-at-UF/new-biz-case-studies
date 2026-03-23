"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const ARROW_PATH = "M3.84046 67.001C0.702863 59.3453 0.0715569 48.8403 2.41296 37.0653C5.07924 23.6565 18.4963 10.501 27.9999 10.501C31.7877 10.501 34.5945 10.8712 39.918 13.0189C52.8927 18.2536 54.7014 30.4925 56.4445 38.4324C57.3243 42.44 55.3609 45.883 52.6992 48.038C50.1616 50.0924 45.6373 50.452 41.2465 50.0958C39.2979 49.9378 38.0995 49.0273 36.9924 47.8293C31.2985 41.668 35.2351 32.0179 38.9993 24.6968C42.5259 17.8378 51.8371 14.2601 60.6515 12.4397C73.121 9.86448 81.6865 16.3755 86.7415 20.2177C91.3347 23.709 95.2168 28.8376 99.7725 33.885C101.894 36.2356 104.639 38.4504 108.243 40.0082C111.266 41.315 114.692 41.0982 117.981 40.7421C125.72 39.9039 129.137 33.4425 132.599 27.5712C135.734 22.2559 138.239 15.2387 139.831 8.86013C140.472 6.2927 141.715 3.935 141.409 2.7298C140.903 0.737723 136.392 6.07197 134.974 6.79868C133.075 7.77194 138.248 2.49596 141.225 1.05333C142.648 0.797902 143.892 1.51023 144.843 2.47078C145.795 3.43134 146.417 4.61854 148 8.71982";

export default function SeeOurWork({ phoneHovered }: { phoneHovered: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
    tl.to(path, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" })
      .to(path, { strokeDashoffset: -length, duration: 1.2, ease: "power2.inOut", delay: 0.3 });
    return () => tl.kill();
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Animated arrow */}
      <svg
        width="149"
        height="68"
        viewBox="0 0 149 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d={ARROW_PATH}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* "See our work" text — positioned relative to the arrow */}
      <motion.p
        style={{
            position: "absolute",
            top: "135%",
            left: "-50%",
            marginTop: "4px",
            fontSize: "14px",
            color: "white",
            whiteSpace: "nowrap",
            letterSpacing: "0.05em",
            transformOrigin: "center",
        }}
        animate={phoneHovered ? {
            scale: [1, 1.15, 1.1],           // pop out then settle slightly large
            x: [-4, 4, -4, 4, -3, 3, 0],    // wider side to side
            rotate: [-4, 4, -4, 4, -2, 2, 0], // larger rotation angles
        } : {
            scale: 1,
            x: 0,
            rotate: 0,
        }}
        transition={phoneHovered ? {
            duration: 0.75,          
            ease: "easeInOut",
            repeat: 0,
        } : {
            duration: 0.3,
        }}
        >
        See our work
        </motion.p>
    </div>
  );
}