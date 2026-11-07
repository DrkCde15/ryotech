export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: "ai" | "automation" | "data" | "web" | "mobile";
  features: ServiceFeature[];
  deliverables: string[];
  technologies: string[];
  highlighted?: boolean;
}

export interface CaseResult {
  label: string;
  value: string;
}

export interface CaseArchitecture {
  title: string;
  description: string;
  steps: string[];
}

export interface CasePipeline {
  title: string;
  steps: PipelineStep[];
}

export interface PipelineStep {
  name: string;
  description: string;
}

export interface CaseQuote {
  text: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  segment: string;
  title: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  categories: string[];
  featured: boolean;
  demo?: string;
  github?: string;
  results: CaseResult[];
  architecture?: CaseArchitecture;
  pipeline?: CasePipeline;
  quote?: CaseQuote;
}

export interface TechnologyCategory {
  name: string;
  description: string;
  items: string[];
}
