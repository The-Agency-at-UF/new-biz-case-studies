"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type BlobSelection = 1 | 2 | 3;
type SectionKey = "whatIsAgency" | "services" | "caseStudies";

const BLOB_ORDER: Record<BlobSelection, SectionKey[]> = {
  1: ["whatIsAgency", "services", "caseStudies"],
  2: ["services", "caseStudies", "whatIsAgency"],
  3: ["caseStudies", "whatIsAgency", "services"],
};

type AdventureContextType = {
  selectedBlob: BlobSelection | null;
  sectionOrder: SectionKey[];
  selectBlob: (blob: BlobSelection) => void;
  firstSectionRef: React.RefObject<HTMLDivElement | null>;
};

const AdventureContext = createContext<AdventureContextType | null>(null);

export function AdventureProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [selectedBlob, setSelectedBlob] = useState<BlobSelection | null>(null);
  const [sectionOrder, setSectionOrder] = useState<SectionKey[]>([]);
  const firstSectionRef = useRef<HTMLDivElement>(null);

  function selectBlob(blob: BlobSelection) {
    setSelectedBlob(blob);
    setSectionOrder(BLOB_ORDER[blob]);
  }

  useEffect(() => {
    if (!sectionOrder.length) return;

    requestAnimationFrame(() => {
      firstSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [sectionOrder]);

  return (
    <AdventureContext.Provider value={{ selectedBlob, sectionOrder, selectBlob, firstSectionRef }}>
      {children}
    </AdventureContext.Provider>
  );
}

export function useAdventure() {
  const ctx = useContext(AdventureContext);
  if (!ctx) throw new Error("useAdventure must be used inside AdventureProvider");
  return ctx;
}