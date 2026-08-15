export type ContentStatus = "placeholder" | "draft" | "approved";

export type Service = {
  name: string;
  description: string;
  icon?: string;
};

export type PortfolioProject = {
  id: string;
  name: string;
  companySlug: "technologies" | "media-productions" | "architects" | string;
  summary: string;
  imageUrl: string;
  category: string;
  link?: string;
  status: ContentStatus;
};

export type CaseStudy = {
  id: string;
  title: string;
  companySlug: "technologies" | "media-productions" | "architects" | string;
  summary: string;
  body: string;
  status: ContentStatus;
};

export type Company = {
  slug: "technologies" | "media-productions" | "architects" | string;
  name: string;
  tagline: string;
  logoUrl?: string;
  websiteUrl?: string;
  cardDescription: string;
  heroDescription: string;
  services: Service[];
  selectedWork: PortfolioProject[];
  caseStudies: CaseStudy[];
  contactCtaLabel: string;
  status: ContentStatus;
  accentColor?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  companySlug?: string;
  imageUrl?: string;
};

export type Article = {
  title: string;
  slug: string;
  body: string;
  publishedAt: string;
};

export type ContactInquiry = {
  interestedIn: "technologies" | "media-productions" | "architects" | "general";
  name: string;
  email: string;
  companyName?: string;
  message: string;
};
