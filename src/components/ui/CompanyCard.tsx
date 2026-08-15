"use client";

import React from "react";
import Link from "next/link";
import { Company } from "@/types";
import { PlaceholderBadge } from "./PlaceholderBadge";
import { ArrowUpRight, Code2, Film, Building2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyCardProps {
  company: Company;
  index: number;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company, index }) => {
  const iconMap: Record<string, React.ReactNode> = {
    technologies: <Code2 className="w-6 h-6 text-sky-400" />,
    "media-productions": <Film className="w-6 h-6 text-indigo-400" />,
    architects: <Building2 className="w-6 h-6 text-emerald-400" />,
  };

  const numberFormatted = String(index + 1).padStart(2, "0");

  return (
    <div className="glass-card rounded-2xl p-8 flex flex-col justify-between relative group overflow-hidden border border-white/10 hover:border-sky-500/30 transition-all duration-300">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -right-16 -top-16 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors duration-500 pointer-events-none" />

      <div>
        {/* Card Header: Numbered Index + Icon + Badge */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-slate-500/60 font-mono tracking-tighter group-hover:text-sky-400/80 transition-colors">
              {numberFormatted}
            </span>
            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
              {iconMap[company.slug] || <Code2 className="w-6 h-6 text-sky-400" />}
            </div>
          </div>
          <PlaceholderBadge status={company.status} />
        </div>

        {/* Company Title & Tagline */}
        <div className="space-y-2 mb-4">
          <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-sky-200 transition-colors">
            {company.name}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400/90">
            {company.tagline}
          </p>
        </div>

        {/* Card Short Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {company.cardDescription}
        </p>

        {/* Services List Teaser */}
        <div className="space-y-2 mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Core Capabilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {company.services.slice(0, 4).map((service) => (
              <div
                key={service.name}
                className="flex items-center gap-2 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400/80 shrink-0" />
                <span className="truncate">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore CTA Button */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
        <Link
          href={`/${company.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-sky-300 transition-colors"
        >
          Explore Subsidiary
          <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
        {company.websiteUrl ? (
          <a
            href={company.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-sky-400 hover:text-sky-300 underline font-mono flex items-center gap-1"
          >
            Visit Site
            <ArrowUpRight className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-xs text-slate-400 font-mono">
            RF-{company.slug.substring(0, 3).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
};
