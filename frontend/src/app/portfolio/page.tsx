import { CASE_STUDY_ROUTE_IDS, isCaseStudyRouteId } from "@/config/caseStudyRoutes";

import AmazonAlexaPage from "./caseStudies/AmazonAlexa/page";
import BlissPage from "./caseStudies/Bliss/page";
import CarnivalPage from "./caseStudies/Carnival/page";
import CokeZeroPage from "./caseStudies/CokeZero/page";
import MichelobUltraPage from "./caseStudies/MichelobUltra/page";
import SeagramsPage from "./caseStudies/Seagrams/page";
import SmirnoffPage from "./caseStudies/Smirnoff/page";
import TheBartramPage from "./caseStudies/TheBartram/page";
import UberPage from "./caseStudies/Uber/page";
import UFAdmissionsPage from "./caseStudies/UFAdmissions/page";

type PortfolioPageProps = {
  searchParams: Promise<{ study?: string }>;
};

const CASE_STUDY_COMPONENTS = {
  AmazonAlexa: AmazonAlexaPage,
  Bliss: BlissPage,
  Carnival: CarnivalPage,
  CokeZero: CokeZeroPage,
  MichelobUltra: MichelobUltraPage,
  Seagrams: SeagramsPage,
  Smirnoff: SmirnoffPage,
  TheBartram: TheBartramPage,
  Uber: UberPage,
  UFAdmissions: UFAdmissionsPage,
} as const;

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const { study } = await searchParams;
  const selectedStudy = isCaseStudyRouteId(study) ? study : CASE_STUDY_ROUTE_IDS[0];
  const SelectedCaseStudy = CASE_STUDY_COMPONENTS[selectedStudy];

  return <SelectedCaseStudy />;
}
