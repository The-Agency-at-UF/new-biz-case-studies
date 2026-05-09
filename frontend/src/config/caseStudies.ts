export const CASE_STUDY_COLORS = {
  amazonAlexa: { primary: '#5FCAF4', line: '#2AADCD' },
  bliss: { primary: '#FFC627', line: '#FFC627' },
  carnival: { primary: '#EF3340', line: '#EF3340' },
  cokeZero: { primary: '#DA2028', line: '#ED1C24' },
  michelobUltra: { primary: '#00346D', line: '#00346D' },
  seagrams: { primary: '#EBA842', line: '#C8D7A0' },
  smirnoff: { primary: '#ED1C24', line: '#ED1C24' },
  theBartram: { primary: '#8C7A6B', line: '#8C7A6B' },
  uber: { primary: '#76c893', line: '#76c893' },
  ufAdmissions: { primary: '#F37021', line: '#F37021' },
} as const;

export type CaseStudyId = keyof typeof CASE_STUDY_COLORS;
