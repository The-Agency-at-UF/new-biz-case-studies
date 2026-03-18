"use client"

import CaseStudyCard from "./CaseStudyCard"
import { useRef, useLayoutEffect } from "react"

const caseStudies = [
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/case-studies/bliss"
  },
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/case-studies/bliss"
  },
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/case-studies/bliss"
  },
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/case-studies/bliss"
  },
  {
    title: "BLISS",
    description: "Helping Bliss Launch New Products, Engage Gen Z Audiences and Dive into TikTok",
    tags:"Research • Insights • Creative Concepting • Social Listening • Social Strategy • Influencer Strategy",
    image: "/assets/Bliss/MockUps.png",
    href: "/case-studies/bliss"
  }
];

export default function CaseStudiesGrid() {

  const scrollRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
  const el = scrollRef.current
  if (!el) return

  el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
}, [])

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -420, behavior: "smooth" })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 420, behavior: "smooth" })
  }

  return (
    <section className="w-full bg-black flex flex-col items-center">

        {/* card viewport */}
        <div className="w-full overflow-hidden">
            <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden scroll-smooth px-[20vw] ml-[-16vw]"
            >
            {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
            ))}
            </div>
        </div>

        {/* navigation */}
        <div className="flex w-full border-t border-white">
            <button
            onClick={scrollLeft}
            className="flex-1 py-6 border-r border-white text-white hover:bg-zinc-900"
            >
            ←
            </button>

            <button
            onClick={scrollRight}
            className="flex-1 py-6 text-white hover:bg-zinc-900"
            >
            →
            </button>
        </div>

    </section>
  )
}