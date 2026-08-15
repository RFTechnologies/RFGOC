"use client";

import React from "react";
import Image from "next/image";
import { PortfolioProject } from "@/types";
import { PlaceholderBadge } from "./PlaceholderBadge";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  project: PortfolioProject;
  className?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  project,
  className,
}) => {
  const companyNameMap: Record<string, string> = {
    technologies: "RF Technologies",
    "media-productions": "RF Media Productions",
    architects: "RF Architects",
  };

  return (
    <div
      className={cn(
        "glass-card rounded-2xl overflow-hidden group border border-white/10 flex flex-col justify-between transition-all duration-300",
        className
      )}
    >
      {/* Image / Thumbnail Container */}
      <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-950/80 text-sky-300 backdrop-blur-md border border-white/10">
            {project.category}
          </span>
          <PlaceholderBadge status={project.status} />
        </div>
      </div>

      {/* Project Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
            {companyNameMap[project.companySlug] || project.companySlug}
          </span>
          <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
            {project.name}
          </h4>
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">
            {project.status === "approved" ? "Case Study Ready" : "Unapproved Spec"}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:border-sky-400/40 transition-colors">
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
