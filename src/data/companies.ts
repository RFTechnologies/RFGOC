import { Company } from "@/types";
import { portfolioProjects } from "./portfolio";
import { caseStudies } from "./caseStudies";

export const companies: Company[] = [
  {
    slug: "technologies",
    name: "RF Technologies",
    tagline: "Technology & Business Solutions",
    logoUrl: "/Rf Technologies Logo.png",
    websiteUrl: "https://rftechnologies.com.pk",
    cardDescription:
      "Delivering high-performance software engineering, enterprise cloud solutions, AI integration, and digital transformation strategy.",
    heroDescription:
      "RF Technologies builds modern digital products, resilient enterprise architectures, and intelligent automation systems that power market leaders forward.",
    services: [
      {
        name: "Enterprise Software Engineering",
        description: "Scalable full-stack application development, API integrations, and robust system architecture.",
        icon: "Code2",
      },
      {
        name: "Cloud & DevSecOps Infrastructure",
        description: "Multi-cloud migration, automated CI/CD pipelines, containerization, and zero-trust security.",
        icon: "Cloud",
      },
      {
        name: "Artificial Intelligence & Analytics",
        description: "Custom machine learning models, predictive data analytics, and operational automation workflow.",
        icon: "Cpu",
      },
      {
        name: "Digital Transformation Consulting",
        description: "Strategic technology roadmaps, legacy modernization, and technical advisory services.",
        icon: "Lightbulb",
      },
    ],
    selectedWork: portfolioProjects.filter((p) => p.companySlug === "technologies"),
    caseStudies: caseStudies.filter((c) => c.companySlug === "technologies"),
    contactCtaLabel: "Inquire About Technology Solutions",
    status: "approved",
    accentColor: "from-sky-400 to-blue-600",
  },
  {
    slug: "media-productions",
    name: "RF Media Productions",
    tagline: "Media & Content Production",
    logoUrl: "/Rf Media Production Logo.png",
    websiteUrl: "https://rfmediaproductions.com",
    cardDescription:
      "Crafting compelling visual stories, commercial cinematography, brand documentaries, and high-impact digital media production.",
    heroDescription:
      "RF Media Productions is a full-service creative production studio transforming brand visions into resonant cinematic films, commercial campaigns, and digital content.",
    services: [
      {
        name: "Commercial Cinematography",
        description: "High-end 4K/8K film production, broadcast commercials, and promotional video campaigns.",
        icon: "Film",
      },
      {
        name: "Post-Production & Sound Design",
        description: "Color grading, visual effects (VFX), precision audio engineering, and custom music composition.",
        icon: "Sliders",
      },
      {
        name: "Brand Documentaries & Narrative",
        description: "Long-form storytelling, executive profiles, and corporate origin films.",
        icon: "Video",
      },
      {
        name: "Digital Content & Creative Strategy",
        description: "Social-first video campaigns, multi-channel creative direction, and digital asset management.",
        icon: "Sparkles",
      },
    ],
    selectedWork: portfolioProjects.filter((p) => p.companySlug === "media-productions"),
    caseStudies: caseStudies.filter((c) => c.companySlug === "media-productions"),
    contactCtaLabel: "Inquire About Production Services",
    status: "approved",
    accentColor: "from-indigo-400 to-purple-600",
  },
  {
    slug: "architects",
    name: "RF Architects",
    tagline: "Architecture & Interior Design",
    logoUrl: "/Rf Architects dark-logo.png",
    logoDark: "/Rf Architects white-logo.png",
    logoLight: "/Rf Architects dark-logo.png",
    websiteUrl: "https://rfarchitects.design/",
    cardDescription:
      "Creating visionary spatial design, sustainable commercial architecture, master planning, and luxury interior environments.",
    heroDescription:
      "RF Architects merges structural innovation with timeless aesthetic design, delivering master-planned commercial complexes, luxury residential spaces, and interior environments.",
    services: [
      {
        name: "Commercial & Institutional Architecture",
        description: "State-of-the-art office towers, tech campuses, and mixed-use commercial developments.",
        icon: "Building2",
      },
      {
        name: "Interior Architecture & Spatial Design",
        description: "Bespoke executive interiors, biophilic workplace layouts, and custom furnishings.",
        icon: "Compass",
      },
      {
        name: "Urban Master Planning",
        description: "Large-scale land development, urban integration strategy, and environmental impact planning.",
        icon: "Map",
      },
      {
        name: "Sustainable Building Design",
        description: "LEED/BREEAM certified net-zero design, solar integration, and energy-efficient building envelopes.",
        icon: "Leaf",
      },
    ],
    selectedWork: portfolioProjects.filter((p) => p.companySlug === "architects"),
    caseStudies: caseStudies.filter((c) => c.companySlug === "architects"),
    contactCtaLabel: "Inquire About Architectural Design",
    status: "approved",
    accentColor: "from-emerald-400 to-teal-600",
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}
