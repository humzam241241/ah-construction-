export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export type ServiceCategory =
  | "Core Construction"
  | "Concrete & Structural"
  | "Renovation & Interior"
  | "Site & Management"
  | "Repair & Maintenance";

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  processSteps: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
}
