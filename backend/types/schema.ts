export interface CaseStudy {
  id: string;
  title: string; 
  description?: string;
  category?: string; 
  imageUrls?: string[];
  createdAt: string;
}

export interface Company {
  id: string; 
  name: string;
  industry?: string;
  website?: string;
  logoUrl?: string; 
  description?: string; 
  caseStudies?: CaseStudy[];
  createdAt: string;
}
