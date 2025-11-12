export interface SubmitFormRequest {
  title: string;
  company: string;
  tags: string[];
  caseStudies: string[];
  blocks: Record<string, unknown>;
}

export interface SubmitFormResponse {
  companyID: string;
  templateID: string;
}

export interface Company {
  id: string;
  name: string;
  industry?: string;
  logoUrl?: string;
  caseStudies: string[];
  createdAt?: string;
}

export interface CaseStudy {
  id: string;
  companyId: string;
  title?: string;
  summary?: string;
  tags?: string[];
  blocks: Record<string, unknown>;
  animation?: Animation;
  createdAt?: string;
}