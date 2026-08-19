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

  const CardWrapper = project.link ? "a" : "div";
  const linkProps = project.link
    ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      {...linkProps}
      className={cn(
        "glass-card rounded-2xl overflow-hidden group border border-white/10 flex flex-col justify-between transition-all duration-300 relative text-left no-underline hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1",
        project.link && "cursor-pointer",
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
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-950/80 !text-white backdrop-blur-md border border-white/10">
            {project.category}
          </span>
          {project.embedUrl ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              3D Walkthrough
            </span>
          ) : project.link ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Site
            </span>
          ) : (
            <PlaceholderBadge status={project.status} />
          )}
        </div>
      </div>

      {/* Project Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <span className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
            {companyNameMap[project.companySlug] || project.companySlug}
          </span>
          <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors flex items-center justify-between gap-2">
            <span>{project.name}</span>
            {project.link && (
              <ArrowUpRight className="w-4 h-4 text-sky-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            )}
          </h4>
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono truncate max-w-[160px]">
            {project.link
              ? new URL(project.link).hostname.replace("www.", "")
              : "Case Study Ready"}
          </span>
          {project.embedUrl ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 group-hover:bg-emerald-500/20 text-xs font-semibold text-emerald-300 transition-all">
              Explore 3D Model
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          ) : project.link ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 group-hover:bg-sky-500/20 text-xs font-semibold text-sky-300 transition-all">
              Visit Project
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:border-sky-400/40 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};
