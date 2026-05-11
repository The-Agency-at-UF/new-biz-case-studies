"use client";

import { gentonaBook, gentonaMedium } from "@/app/fonts";
import { ReactNode } from "react";

interface CaseStudyTextProps {
  children: ReactNode;
  className?: string;
  weight?: "light" | "medium" | "bold";
}

export function CaseStudyText({ children, className = "", weight = "light" }: CaseStudyTextProps) {
  const fontClass = weight === "light" ? gentonaBook.className : gentonaMedium.className;
  
  return (
    <p className={`${fontClass} text-lg md:text-2xl lg:text-4xl leading-relaxed tracking-wide text-white ${className}`}>
      {children}
    </p>
  );
}
