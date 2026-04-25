"use client";

import { createContext, useContext } from "react";

const ScrollContext = createContext<React.RefObject<HTMLDivElement | null>>({ current: null });

export const useScroller = () => useContext(ScrollContext);

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ScrollContext.Provider value={{ current: null }}>
      {children}
    </ScrollContext.Provider>
  );
}