"use client";

import { useSearchParams } from "next/navigation";

import CaseStudyDial from "@/components/CaseStudyDial";
import { CASE_STUDY_ROUTE_IDS, isCaseStudyRouteId } from "@/config/caseStudyRoutes";

// Lives in the /portfolio layout rather than inside each case study page, so
// switching studies (which only changes the ?study= param) keeps the same dial
// instance mounted — its scroll offset and company list survive the transition.
export default function PortfolioDial() {
  const study = useSearchParams().get("study");
  const currentStudy = isCaseStudyRouteId(study) ? study : CASE_STUDY_ROUTE_IDS[0];

  return <CaseStudyDial currentStudy={currentStudy} />;
}
