// Mapping of case study IDs to their logo paths
export const CASE_STUDY_LOGOS = {
  AmazonAlexa: "/logos/alexa-logo.png",
  Bliss: "/assets/Presentation/Client Logos Normalized/Bliss logo.png",
  Carnival: "/assets/Presentation/Client Logos Normalized/Carnival Cruises logo.png",
  CokeZero: "/assets/CokeZero/CokeZeroWhite.png",
  MichelobUltra: "/assets/Presentation/Client Logos Normalized/Michelob-Ultra-LogoW.png",
  Seagrams: "/logos/seagrams-logo.png",
  Smirnoff: "/assets/Smirnoff/SmirnoffLogoIndividual.png",
  TheBartram: "/logos/bartram-logo.png",
  Uber: "/assets/Presentation/Client Logos Normalized/Uber logo.png",
  UFAdmissions: "/assets/UF-Admissions/UF_white.png",
} as const;

export type CaseStudyLogoId = keyof typeof CASE_STUDY_LOGOS;

export function getCaseStudyLogo(id: CaseStudyLogoId): string {
  return CASE_STUDY_LOGOS[id];
}
