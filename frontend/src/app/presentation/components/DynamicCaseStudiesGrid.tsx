"use client";

import { useEffect, useState } from "react";
import { useRef, useLayoutEffect } from "react";
import CaseStudyCard from "./CaseStudyCard";

type Props = {
  companySlug: string;
};

const toCamelCase = (name: string) =>
  name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");

const camelCase = (name: string) =>
  name.split(" ").map((word, i) =>
    i === 0
      ? word.charAt(0).toLowerCase() + word.slice(1)
      : word.charAt(0).toUpperCase() + word.slice(1)
  ).join("");

const getImageExtension = (name: string) => {
  const jpgNames = ["TheBartram", "MichelobUltra"];
  return jpgNames.includes(toCamelCase(name)) ? ".jpg" : ".png";
};

export default function DynamicCaseStudiesGrid({ companySlug }: Props) {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/company/${companySlug}/casestudies`);
        const data = await res.json();
        setCaseStudies(data);
      } catch (err) {
        console.error("Failed to fetch case studies:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [companySlug]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, [caseStudies]);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 420, behavior: "smooth" });

  if (loading) return null;
  if (caseStudies.length === 0) return null;

  return (
    <section className="w-full bg-black flex flex-col items-center">
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden scroll-smooth px-[20vw] ml-[-16vw] scrollHide"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.Name}
              description={study.Name}
              tags={(study.Tags || []).join(" • ")}
              image={`https://new-biz-case-studies-bucket.s3.amazonaws.com/case-studies/${camelCase(study.Name)}${getImageExtension(study.Name)}`}
              href={`/portfolio/caseStudies/${toCamelCase(study.Name)}`}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full border-t border-white">
        <button onClick={scrollLeft} className="flex-1 py-6 border-r border-white text-white hover:bg-zinc-900">←</button>
        <button onClick={scrollRight} className="flex-1 py-6 text-white hover:bg-zinc-900">→</button>
      </div>
    </section>
  );
}