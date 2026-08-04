"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type BlobSelection = 1 | 2 | 3;
type SectionKey = "whatIsAgency" | "services" | "caseStudies";

const BLOB_ORDER: Record<BlobSelection, SectionKey[]> = {
  1: ["whatIsAgency", "services", "caseStudies"],
  2: ["services", "whatIsAgency", "caseStudies"],
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
  // Bumped on every selection — even re-picking the same blob — so the scroll
  // effect below always re-fires. The user is never "locked into" their first pick.
  const [selectionNonce, setSelectionNonce] = useState(0);
  const firstSectionRef = useRef<HTMLDivElement>(null);

  function selectBlob(blob: BlobSelection) {
    setSelectedBlob(blob);
    setSectionOrder(BLOB_ORDER[blob]);
    setSelectionNonce((n) => n + 1);
  }

  // After a selection re-renders the section list, drag the user down to the
  // first section of their chosen order.
  useEffect(() => {
    if (selectionNonce === 0) return; // nothing selected yet

    // Split across two frames. On the FIRST selection the sections are mounting
    // for the first time: their pinned ScrollTriggers insert pin-spacers and the
    // refresh() adjusts scroll to preserve position — all in the same frame. If we
    // scroll in that frame it gets stepped on. So frame 1 refreshes and lets layout
    // settle; frame 2 does the scroll as the last action, once positions are final.
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      // Re-pick may also have reordered pinned sections; recompute trigger
      // positions so we land on the correct spot.
      ScrollTrigger.refresh();
      raf2 = requestAnimationFrame(() => {
        firstSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [selectionNonce]);

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