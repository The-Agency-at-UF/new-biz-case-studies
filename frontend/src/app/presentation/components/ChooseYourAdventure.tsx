"use client";

import { useState } from "react";
import { useAdventure } from "../context/AdventureContext";

/**
 * ChooseYourAdventure now renders ONLY the three clickable choices.
 * The Spline scene it used to load has moved up into <MainHero /> and
 * shows through this component because MainHero renders it as a child
 * inside its sticky-background stage.
 */
export default function ChooseYourAdventure() {
  const { selectBlob } = useAdventure();
  const [blobSelected, setBlobSelected] = useState(false);

  function handleBlobClick(blobNumber: 1 | 2 | 3) {
    if (blobSelected) return;

    setBlobSelected(true);

    // Defer the context update one frame so the click state settles before
    // the adventure context triggers a scroll to the first dynamic section.
    requestAnimationFrame(() => {
      selectBlob(blobNumber);
    });
  }

  return (
    <div className="w-full h-full flex flex-row items-center justify-around px-[clamp(1rem,5vw,3rem)]">
      {/* 
      <p
        onClick={() => handleBlobClick(1)}
        className="text-white text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase tracking-wide text-center cursor-pointer hover:opacity-70 transition-opacity"
      >
        What is the Agency?
      </p>
      <p
        onClick={() => handleBlobClick(2)}
        className="text-white text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase tracking-wide text-center cursor-pointer hover:opacity-70 transition-opacity"
      >
        Our Services
      </p>
      <p
        onClick={() => handleBlobClick(3)}
        className="text-white text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase tracking-wide text-center cursor-pointer hover:opacity-70 transition-opacity"
      >
        See our Work
      </p>
      */}
    </div>
  );
}
