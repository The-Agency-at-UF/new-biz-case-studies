import { ReactNode } from "react";

export function CaseStudyContent({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <section className={`relative py-10 md:py-14 ${className}`}>
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
}
