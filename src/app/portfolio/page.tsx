"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { portfolioProjects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Group Projects" },
    { id: "technologies", label: "RF Technologies" },
    { id: "media-productions", label: "RF Media Productions" },
    { id: "architects", label: "RF Architects" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.companySlug === activeTab);

  return (
    <div className="w-full flex flex-col space-y-0">
      {/* Header Banner */}
      <SectionWrapper size="md" hasGridBg className="pt-24 pb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Group Portfolio Directory
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Group Portfolio
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Discover live products, SaaS platforms, original media series, and architectural designs delivered by our operating companies.
          </p>
        </div>

        {/* Company Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-8 border-b border-white/10 pb-6 mt-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer",
                activeTab === tab.id
                  ? "bg-sky-400 text-slate-950 shadow-md shadow-sky-400/20"
                  : "glass-panel text-slate-300 hover:text-white hover:bg-white/10"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* Grid List */}
      <SectionWrapper size="lg" className="pt-8 pb-24">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="p-16 rounded-2xl glass-panel text-center text-slate-400 text-sm">
            No projects available for this category filter.
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
