export const CASE_STUDY_ROUTE_IDS = [
  "AmazonAlexa",
  "Bliss",
  "Carnival",
  "CokeZero",
  "MichelobUltra",
  "Seagrams",
  "Smirnoff",
  "TheBartram",
  "Uber",
  "UFAdmissions",
] as const;

export type CaseStudyRouteId = (typeof CASE_STUDY_ROUTE_IDS)[number];

export function isCaseStudyRouteId(value: string | null | undefined): value is CaseStudyRouteId {
  return Boolean(value && CASE_STUDY_ROUTE_IDS.includes(value as CaseStudyRouteId));
}

export function getNextCaseStudyRouteId(currentId: string | null | undefined): CaseStudyRouteId {
  const currentIndex = currentId ? CASE_STUDY_ROUTE_IDS.indexOf(currentId as CaseStudyRouteId) : -1;

  if (currentIndex < 0) {
    return CASE_STUDY_ROUTE_IDS[0];
  }

  return CASE_STUDY_ROUTE_IDS[(currentIndex + 1) % CASE_STUDY_ROUTE_IDS.length];
}
