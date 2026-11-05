export type ServiceType = 
  | 'sites'
  | 'videos'
  | 'redes'
  | 'identidade'
  | 'ia'
  | 'outros';

export interface ServiceItem {
  id: ServiceType;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  icon: string;
  whatsappMessage: string;
}

export type ProjectCategory = 
  | 'todos'
  | 'sites'
  | 'videos'
  | 'redes'
  | 'identidade'
  | 'design'
  | 'ia';

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  coverImage: string;
  gallery: string[];
  summary: string;
  serviceType: string;
  objective: string;
  solutions: string[];
  resultsOrDelivery: string;
  clientSegment: string;
  isDemonstration: boolean;
  featured?: boolean;
  externalUrl?: string;
  instagramUrl?: string;
  isRealClient?: boolean;
}

export interface ClientSegmentItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  recommendedSolutions: string[];
  idealFor: string;
  whatsappPrompt: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  companyName: string;
  whatsapp: string;
  email: string;
  segment: string;
  service: string;
  projectDescription: string;
  createdAt: string;
}
