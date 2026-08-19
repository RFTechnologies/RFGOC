import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { ContactForm } from "@/components/ui/ContactForm";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { companies, getCompanyBySlug } from "@/data/companies";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Film,
  Building2,
  CheckCircle2,
  Shield,
  FileText,
  ShoppingBag,
  Cpu,
  Boxes,
  Sparkles,
  Compass,
} from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ companySlug: string }>;
}

export async function generateStaticParams() {
  return companies.map((company) => ({
    companySlug: company.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { companySlug } = await params;
  const company = getCompanyBySlug(companySlug);

  if (!company) {
    return { title: "Company Not Found" };
  }

  return {
    title: `${company.name} — ${company.tagline}`,
    description: company.heroDescription,
  };
}

export default async function CompanyPage({ params }: PageProps) {
  const { companySlug } = await params;
  const company = getCompanyBySlug(companySlug);

  if (!company) {
    notFound();
  }

  const iconMap: Record<string, React.ReactNode> = {
    technologies: <Code2 className="w-8 h-8 text-sky-400" />,
    "media-productions": <Film className="w-8 h-8 text-indigo-400" />,
    architects: <Building2 className="w-8 h-8 text-emerald-400" />,
  };

  // Specialized data arrays based on Brief §6, §8, §9
  const shopifySteps = [
    { title: "Build", desc: "Custom theme creation & store architecture" },
    { title: "Customize", desc: "Tailored liquid templates & frontend components" },
    { title: "Extend", desc: "Private Shopify app development & custom functions" },
    { title: "Integrate", desc: "ERP, CRM, WMS & inventory systems synchronization" },
    { title: "Automate", desc: "Flow automation, webhook listeners & back-office tasks" },
    { title: "Expand", desc: "Internationalization, multi-currency & localized checkout" },
    { title: "Optimize", desc: "Core Web Vitals, headless speed & conversion optimization" },
    { title: "Operate", desc: "Continuous monitoring, security patches & technical support" },
  ];

  const productLifecycle = [
    { step: "Discover", desc: "Requirements analysis, architecture design & prototyping" },
    { step: "Build", desc: "Agile full-stack engineering & API microservices" },
    { step: "Launch", desc: "CI/CD deployment, zero-downtime release & infrastructure setup" },
    { step: "Scale", desc: "Performance tuning, auto-scaling & global load balancing" },
    { step: "Partner", desc: "Managed technical partnership & long-term evolution" },
  ];

  const techCapabilities = [
    "SaaS Platform Development",
    "Custom Web Applications",
    "Mobile Applications (iOS/Android)",
    "APIs & Integration Infrastructure",
    "POS & Payment System Integrations",
    "AI & Workflow Automation",
    "UI/UX Interface Design",
    "Managed Technology Partnerships",
  ];

  return (
    <div className="w-full flex flex-col space-y-0">
      {/* 1. HERO INTRO SECTION */}
      <SectionWrapper size="lg" hasGridBg className="pt-28 pb-16">
        {/* Navigation Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-sky-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to RF Group Overview
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center p-3 shadow-lg">
                {company.logoUrl ? (
                  <Image
                    src={company.logoUrl}
                    alt={`${company.name} Logo`}
                    width={64}
                    height={64}
                    style={{ width: "auto", height: "auto" }}
                    className={cn(
                      "max-h-14 max-w-14 object-contain",
                      company.slug === "architects"
                    )}
                    priority
                    unoptimized
                  />
                ) : (
                  iconMap[company.slug] || <Code2 className="w-8 h-8 text-sky-400" />
                )}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
                  RF Group Subsidiary
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {company.name}
                </h1>
              </div>
            </div>

            <p className="text-lg md:text-xl font-medium text-sky-300/90 leading-snug">
              {company.tagline}
            </p>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
              {company.heroDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="#contact-division"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0029B4] to-blue-500 hover:bg-blue-800 text-white dark:bg-gradient-to-r dark:from-sky-400 dark:to-indigo-500 dark:text-slate-950 dark:hover:from-sky-300 dark:hover:to-indigo-400 font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-900/20 dark:shadow-sky-400/20 flex items-center gap-2"
              >
                {company.contactCtaLabel}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              {company.websiteUrl && (
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-[#0029B4]/50 hover:bg-[#0029B4]/10 text-[#0029B4] dark:text-sky-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  Visit Official Website
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <PlaceholderBadge status={company.status} />
            </div>
          </div>

          <div className="lg:col-span-4 glass-card rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider border-b border-white/10 pb-3">
              <Shield className="w-4 h-4 text-sky-400" />
              Division Profile
            </div>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Parent Entity:</span>
                <span className="font-semibold text-white">RF Group</span>
              </div>
              <div className="flex justify-between">
                <span>Operating Division:</span>
                <span className="font-semibold text-sky-400">Dedicated Subsidiary</span>
              </div>
              <div className="flex justify-between">
                <span>Positioning Flag:</span>
                <span className="font-semibold capitalize text-amber-300">{company.status}</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. SERVICES SECTION */}
      <SectionWrapper size="lg" className="bg-[#0B0F19]/80 border-y border-white/10">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Core Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Capabilities & Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.services.map((service, idx) => (
              <div
                key={service.name}
                className="glass-card rounded-2xl p-8 border border-white/10 space-y-4 hover:border-sky-500/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-mono text-xs font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SPECIALIZED SECTION FOR RF TECHNOLOGIES (Brief §6) */}
      {company.slug === "technologies" && (
        <>
          {/* Shopify Engineering Framework */}
          <SectionWrapper size="lg" hasGridBg>
            <div className="space-y-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shopify Engineering</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  High-Performance E-Commerce & Merchant Infrastructure
                </h2>
                <p className="text-slate-400 text-sm max-w-2xl">
                  Comprehensive Shopify engineering capabilities structured to build, extend, and operate enterprise-scale commerce systems.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {shopifySteps.map((step) => (
                  <div
                    key={step.title}
                    className="p-5 rounded-xl glass-card border border-white/10 space-y-2 hover:border-sky-500/40 transition-colors"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
                      {step.title}
                    </span>
                    <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* Custom Product Engineering Lifecycle */}
          <SectionWrapper size="md" className="bg-[#0B0F19]/90 border-y border-white/10">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
                  <Cpu className="w-4 h-4" />
                  <span>Custom Product Engineering</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  End-to-End Digital Product Lifecycle
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {productLifecycle.map((item, idx) => (
                  <div
                    key={item.step}
                    className="p-5 rounded-xl glass-card border border-white/10 space-y-2"
                  >
                    <span className="text-xs font-mono font-bold text-slate-400 block">
                      Phase 0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-white">{item.step}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Technical Capabilities Matrix */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Additional Capabilities & Tech Stack
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {techCapabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>
        </>
      )}

      {/* SPECIALIZED SECTION FOR RF MEDIA PRODUCTIONS (Brief §8) */}
      {company.slug === "media-productions" && (
        <SectionWrapper size="lg" hasGridBg>
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
                <Sparkles className="w-4 h-4" />
                <span>Media Production Spotlight</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Cinematic Visual Storytelling & Original Content
              </h2>
            </div>

            <div className="p-8 rounded-2xl glass-card border border-indigo-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
                  Featured Series Teaser
                </span>
                <h3 className="text-2xl font-bold text-white">Miles & Meals</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  An original travel and culinary content production series showcasing culinary cultures, destination storytelling, and high-impact visual cinematography.
                </p>
              </div>
              <div className="lg:col-span-5 p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 text-xs text-slate-400">
                <span className="font-semibold text-white block">Production Scope:</span>
                <p>Location Cinematography • Multi-Channel Digital Release • Brand Sponsorships • Post-Production Sound & Color</p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* SPECIALIZED SECTION FOR RF ARCHITECTS (Brief §9) */}
      {company.slug === "architects" && (
        <SectionWrapper size="lg" hasGridBg>
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                <Compass className="w-4 h-4" />
                <span>Spatial Architecture & Design Focus</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Physical Environments & Sustainable Master Planning
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-3">
                <h3 className="text-lg font-bold text-white">Commercial & Institutional</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  State-of-the-art office environments, tech campuses, and mixed-use urban commercial complexes.
                </p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-3">
                <h3 className="text-lg font-bold text-white">Interior Architecture</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Bespoke executive office interiors, biophilic workplace design, and custom spatial planning.
                </p>
              </div>
              <div className="p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-3">
                <h3 className="text-lg font-bold text-white">Net-Zero Sustainability</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  LEED/BREEAM aligned net-zero design, solar integration, and low-carbon structural engineering.
                </p>
              </div>
            </div>

            {/* Interactive 3D Architectural Models & Walkthroughs Grid */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Interactive 3D Architectural Models
                  </span>
                  <h3 className="text-xl font-bold text-white">Real-Time Spatial 3D Walkthroughs</h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  3d.rfarchitects.design
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="glass-card rounded-2xl p-4 border border-emerald-500/20 space-y-3">
                  <div className="w-full h-72 rounded-xl overflow-hidden bg-slate-950 border border-white/10 relative">
                    <iframe
                      src="https://3d.rfarchitects.design/embed/6a54f0dfe9d69e4a72411726"
                      title="RF Architects 3D Model 1"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Architectural Spatial Model 01</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Interactive 360° 3D spatial visualization featuring structural geometry and interior design.
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-4 border border-emerald-500/20 space-y-3">
                  <div className="w-full h-72 rounded-xl overflow-hidden bg-slate-950 border border-white/10 relative">
                    <iframe
                      src="https://3d.rfarchitects.design/embed/6a6b17c4b9d418259f8031f3"
                      title="RF Architects 3D Model 2"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Commercial & Interior 3D Concept</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      360° architectural walkthrough demonstrating spatial layout and biophilic planning.
                    </p>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-4 border border-emerald-500/20 space-y-3">
                  <div className="w-full h-72 rounded-xl overflow-hidden bg-slate-950 border border-white/10 relative">
                    <iframe
                      src="https://3d.rfarchitects.design/embed/6a54e27b3695efdb5a3efcb0"
                      title="RF Architects 3D Model 3"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Luxury Residence 3D Masterplan</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Immersive 3D architectural visualization with real-time spatial navigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 3. SELECTED WORK SECTION */}
      <SectionWrapper size="lg" className="bg-[#0B0F19]/80 border-t border-white/10">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Division Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Selected Work & Projects
              </h2>
            </div>
          </div>

          {company.selectedWork.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {company.selectedWork.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="p-12 rounded-2xl glass-card text-center text-slate-400 text-sm">
              No approved projects published yet for {company.name}.
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* 4. CASE STUDIES SECTION */}
      {company.caseStudies.length > 0 && (
        <SectionWrapper size="md" className="bg-[#0B0F19]/90 border-t border-white/10">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                Deep Dive
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Featured Case Studies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {company.caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="glass-card rounded-xl p-6 border border-white/10 flex flex-col justify-between space-y-4 group hover:border-sky-500/30 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <FileText className="w-5 h-5 text-indigo-400" />
                      <PlaceholderBadge status={cs.status} />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{cs.summary}</p>
                  </div>

                  {cs.link && (
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">
                        {new URL(cs.link).hostname.replace("www.", "")}
                      </span>
                      <a
                        href={cs.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20 text-xs font-semibold text-sky-300 transition-all group/link"
                      >
                        Visit Live Site
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 5. DIVISION CONTACT CTA */}
      <SectionWrapper id="contact-division" size="lg" className="bg-[#0B0F19]/80 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Direct Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Inquire With {company.name}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Submit your project details or service inquiry directly to the leadership team at {company.name}.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              defaultCompany={company.slug as "technologies" | "media-productions" | "architects"}
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

