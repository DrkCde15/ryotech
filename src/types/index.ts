export interface ProjectTechnology {
  name: string;
}

export interface ProjectResult {
  label: string;
  value: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectArchitecture {
  title: string;
  description: string;
  steps: string[];
}

export interface ProjectPipeline {
  title: string;
  steps: PipelineStep[];
}

export interface PipelineStep {
  name: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  image?: string;
  architecture?: ProjectArchitecture;
  challenges?: ProjectChallenge[];
  results?: ProjectResult[];
  pipeline?: ProjectPipeline;
  implementation?: string;
}

export interface ExperienceRole {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export interface Experience {
  id: string;
  role: ExperienceRole;
}

export interface SkillCategory {
  name: string;
  icon?: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export type ProjectCategory = "All" | "Data Engineering" | "Data Warehouse" | "ETL" | "Data Analysis" | "Big Data" | "Cloud" | "Scraping" | "API" | "Dashboard" | "Financial Data";
