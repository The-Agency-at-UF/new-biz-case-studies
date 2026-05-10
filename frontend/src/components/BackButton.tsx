"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getNextCaseStudyRouteId } from "@/config/caseStudyRoutes";

type BackButtonProps = {
  currentStudy?: string;
};

const toCamelCase = (name: string) =>
  name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

export default function BackButton({ currentStudy }: BackButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const activeStudy =
    currentStudy ?? (pathname.startsWith("/portfolio/caseStudies/") ? pathname.split("/").pop() ?? null : null);

  const [company, setCompany] = useState<string | null>(null);
  const [companyStudyIds, setCompanyStudyIds] = useState<string[] | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URL(window.location.href).searchParams;
    setCompany(params.get("company"));
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!company) {
      setCompanyStudyIds(null);
      return;
    }

    const controller = new AbortController();

    (async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
        const res = await fetch(`${baseUrl}/api/company/${company}/casestudies`, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) {
          setCompanyStudyIds(null);
          return;
        }

        const ids = data.map((s: any) => toCamelCase(s.Name));
        if (mounted) setCompanyStudyIds(ids);
      } catch (err) {
        if ((err as any)?.name !== "AbortError") console.error("Failed to load company case studies:", err);
        if (mounted) setCompanyStudyIds(null);
      }
    })();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [company]);

  const computeNextForCompany = (active: string | null) => {
    if (!companyStudyIds || companyStudyIds.length === 0 || !active) return null;
    const idx = companyStudyIds.indexOf(active);
    if (idx === -1) return null;
    const nextIdx = (idx + 1) % companyStudyIds.length;
    return companyStudyIds[nextIdx];
  };

  const nextForCompany = computeNextForCompany(activeStudy ?? null);
  const fallbackNext = getNextCaseStudyRouteId(activeStudy);
  const nextStudy = nextForCompany ?? fallbackNext;

  const handleNext = () => {
    if (!nextStudy) return;

    // preserve company query param when navigating between case studies
    const companyQuery = company ? `?company=${encodeURIComponent(company)}` : "";

    if (pathname === "/portfolio") {
      router.push(`/portfolio?study=${nextStudy}` + (company ? `&company=${encodeURIComponent(company)}` : ""));
      return;
    }

    router.push(`/portfolio/caseStudies/${nextStudy}${companyQuery}`);
  };

  return (
    <button
      type="button"
      onClick={handleNext}
      className="
        fixed bottom-[2rem] right-[2rem] z-[1000]
        rounded-full px-6 py-3
        bg-gradient-to-r from-[#f34d4e] via-[#f6b530] to-[#b053bc]
        text-white text-lg font-bold uppercase tracking-widest
        shadow-[0_0_20px_rgba(246,181,48,0.45)]
        hover:shadow-[0_0_28px_rgba(176,83,188,0.65)]
        hover:scale-105 active:scale-95
        transition-all duration-200
        "
    >
      Next
    </button>
  );
}