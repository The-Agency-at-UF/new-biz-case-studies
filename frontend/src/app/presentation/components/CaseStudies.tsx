"use client"

import CaseStudyCard from "./CaseStudyCard"
import { useState } from "react"

const caseStudies = [
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/portfolio/caseStudies/Bliss"
  },
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/portfolio/caseStudies/Bliss"
  },
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/portfolio/caseStudies/Bliss"
  },
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/portfolio/caseStudies/Bliss"
  },
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/portfolio/caseStudies/Bliss"
  },
  {
    title: "BLISS 6",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/portfolio/caseStudies/Bliss"
  },
  {
    title: "BLISS 7",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/portfolio/caseStudies/Bliss"
  }
];

export default function CaseStudiesGrid() {
  const [startIndex, setStartIndex] = useState(0);
  
  // You can adjust this to show more or fewer cards at once
  const visibleCount = 5;

  const handleNext = () => {
    if (startIndex + 1 <= caseStudies.length - visibleCount) {
      setStartIndex((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((s) => s - 1);
    }
  };

  return (
    <section className="relative w-full h-[80vh] bg-black flex overflow-hidden">
      {caseStudies.map((study, index) => {
        const isVisible = index >= startIndex && index < startIndex + visibleCount;
        return (
          <div
            key={index}
            className={`group relative overflow-hidden transition-all duration-700 ease-in-out border-white ${
              isVisible
                ? "flex-1 hover:flex-[2.5] opacity-100 border-r last:border-r-0"
                : "flex-[0_0_0px] opacity-0 border-0"
            }`}
          >
            <CaseStudyCard {...study} />
          </div>
        );
      })}

      {/* Left Navigation Overlay */}
      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-0 bottom-0 px-4 flex items-center justify-center text-white/50 hover:text-white transition-colors bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"
        >
          <span className="text-4xl leading-none">&lsaquo;</span>
        </button>
      )}

      {/* Right Navigation Overlay */}
      {startIndex < caseStudies.length - visibleCount && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-0 bottom-0 px-4 flex items-center justify-center text-white/50 hover:text-white transition-colors bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10"
        >
          <span className="text-4xl leading-none">&rsaquo;</span>
        </button>
      )}
    </section>
  );
}