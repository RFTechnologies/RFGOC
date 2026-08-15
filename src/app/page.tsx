import React from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { ContactForm } from "@/components/ui/ContactForm";
import { companies } from "@/data/companies";
import { portfolioProjects } from "@/data/portfolio";
import {
  ArrowRight,
  Shield,
  Layers,
  Globe2,
  ArrowUpRight,
  Sparkles,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const selectedPortfolio = portfolioProjects.slice(0, 6);

  return (
    <div className="w-full flex flex-col space-y-0">
      {/* 1. HERO SECTION (Brief §3: Parent Group Identity) */}
      <SectionWrapper size="lg" hasGridBg className="pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Corporate Group Identity Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-sky-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>RF GROUP OF COMPANIES</span>
          </div>

          {/* Group Tagline Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-3xl">
            A Modern Group Building Businesses Across{" "}
            <span className="text-gradient-accent">Technology, Media & Design</span>
          </h1>

          {/* Group Story Placeholder Subtitle */}
          <p className="text-slate-300 text-base md:text-xl max-w-2xl font-normal leading-relaxed">
            [PLACEHOLDER: RF Group of Companies provides strategic leadership, governance, and capital to domain-focused operating companies driving innovation in software, visual media, and architecture.]
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link
              href="#companies"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              Explore Our Companies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-slate-200 font-semibold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              Group Vision & Story
            </Link>
          </div>

          {/* Corporate Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 w-full max-w-2xl mt-8">
            <div className="space-y-1">
              <span className="text-2xl md:text-3xl font-black text-white font-mono">03</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Operating Companies
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-2xl md:text-3xl font-black text-sky-400 font-mono">Multi-Sector</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Domain Expertise
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1 space-y-1">
              <span className="text-2xl md:text-3xl font-black text-indigo-400 font-mono">Scalable</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                Group Identity
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 2. ABOUT THE GROUP (Brief §3: Short Intro & Philosophy) */}
      <SectionWrapper size="md" className="bg-[#0B0F19]/80 border-y border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400">
              <Shield className="w-4 h-4" />
              <span>About RF Group</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Building Sustainable Businesses & Quality Solutions
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              [PLACEHOLDER: RF Group of Companies unites specialized operating businesses under a shared commitment to quality and execution. We focus on establishing long-term value, backing autonomous domain teams, and building scalable platforms across Technology, Media Productions, and Architectural Design.]
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
              >
                Learn More About Group Philosophy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <Layers className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-white">Autonomous Domain Leadership</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Each subsidiary company operates with dedicated specialists focused entirely on their core domain.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-base font-bold text-white">Long-Term Value Creation</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We prioritize sustainable business models, resilient technical architecture, and timeless design over short-term trends.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. OUR COMPANIES (Brief §3: Major Section with Company Cards) */}
      <SectionWrapper id="companies" size="lg" hasGridBg>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Group Subsidiaries
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Our Companies
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              RF Group operates three core operating companies. Discover our specialized divisions in Technology, Media Productions, and Architecture.
            </p>
          </div>

          {/* Elegant Modular Company Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <CompanyCard key={company.slug} company={company} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. GROUP VISION / PHILOSOPHY (Brief §3: Group Vision & Values) */}
      <SectionWrapper size="md" className="bg-[#0B0F19]/90 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Group Vision & Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Building Companies, Products & Long-Term Value Through Technology, Creativity & Execution
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            [PLACEHOLDER: At RF Group of Companies, we believe that durable success is built through disciplined execution and technical precision. We invest in high-performing teams, foster innovation across digital products and physical environments, and maintain corporate governance standards that support continuous growth.]
          </p>
        </div>
      </SectionWrapper>

      {/* 5. SELECTED WORK / PORTFOLIO PREVIEW (Brief §3: Selected Group Work) */}
      <SectionWrapper size="lg" hasGridBg>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Group Work Preview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Selected Work & Products
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
            >
              Explore Full Group Portfolio
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Flagship Group Projects Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedPortfolio.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. CONTACT / GROUP INQUIRY (Brief §3: Group Inquiry Funnel) */}
      <SectionWrapper id="contact" size="lg" className="bg-[#0B0F19]/80 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Group Inquiry
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Connect With RF Group & Operating Companies
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Submit your project details or strategic inquiry directly. You can select the specific subsidiary company or contact the group board for general partnerships.
            </p>
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                Corporate Routing
              </span>
              <p className="text-slate-400 text-xs leading-relaxed">
                Inquiries are automatically routed to designated division heads at RF Technologies, RF Media Productions, RF Architects, or the group executive office.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm defaultCompany="general" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

