"use client";

import CaseStudyCard from "./CaseStudyCard";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CaseStudy = {
  CaseStudyID: string;
  Name: string;
  Tags?: string[];
  Description?: string;
};

const toCamelCase = (name: string) =>
  name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

const camelCase = (name: string) =>
  name
    .split(" ")
    .map((word, i) =>
      i === 0
        ? word.charAt(0).toLowerCase() + word.slice(1)
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

const getImageExtension = (name: string) => {
  const jpgNames = ["TheBartram", "MichelobUltra"];
  return jpgNames.includes(toCamelCase(name)) ? ".jpg" : ".png";
};

export default function CaseStudiesGrid() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 5;

  useEffect(() => {
    const controller = new AbortController();

    const loadCaseStudies = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
        const res = await fetch(`${baseUrl}/api/casestudies`, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setCaseStudies(data);

          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        } else {
          console.error("Expected array but got:", data);
          setCaseStudies([]);
        }
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Failed to fetch case studies:", err);
          setCaseStudies([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudies();

    return () => controller.abort();
  }, []);

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

  if (loading) return null;
  if (caseStudies.length === 0) return null;

  return (
    <section className="relative w-full h-[80vh] bg-black flex overflow-hidden">
      {caseStudies.map((study, index) => {
        const isVisible =
          index >= startIndex && index < startIndex + visibleCount;

        const formattedName = toCamelCase(study.Name);
        const imageName = camelCase(study.Name);
        const imageExtension = getImageExtension(study.Name);

        return (
          <div
            key={study.CaseStudyID || index}
            className={`group relative overflow-hidden transition-all duration-700 ease-in-out border-white ${
              isVisible
                ? "flex-1 hover:flex-[2.5] opacity-100 border-r last:border-r-0"
                : "flex-[0_0_0px] opacity-0 border-0"
            }`}
          >
            <CaseStudyCard
              title={study.Name}
              description={study.Description || study.Name}
              tags={(study.Tags || []).join(" • ")}
              image={`https://new-biz-case-studies-bucket.s3.amazonaws.com/case-studies/${imageName}${imageExtension}`}
              href={`/portfolio/caseStudies/${formattedName}`}
            />
          </div>
        );
      })}

      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-0 bottom-0 px-4 flex items-center justify-center text-white/50 hover:text-white transition-colors bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"
        >
          <span className="text-4xl leading-none">&lsaquo;</span>
        </button>
      )}

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