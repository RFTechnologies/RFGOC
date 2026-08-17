import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { siteConfig } from "@/config/site";
import { Shield, Target, Compass, ArrowRight, ArrowUpRight, Layers, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Group",
  description:
    "Learn about RF Group of Companies — corporate structure, philosophy, governance, and our specialized subsidiaries.",
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col space-y-0">
      {/* Hero Banner */}
      <SectionWrapper size="lg" hasGridBg className="pt-24 pb-16">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            Group Narrative & Identity
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Architecting Sustainable Value Across Industries
          </h1>
          <p className="text-slate-300 text-base md:text-xl font-normal leading-relaxed max-w-3xl">
            RF Group of Companies unites specialized enterprise capabilities under a unified parent corporation. We provide strategic stewardship, technical infrastructure, and capital to empower our operating subsidiaries across Technology, Media Productions, and Architecture.
          </p>
        </div>
      </SectionWrapper>

      {/* Corporate Philosophy */}
      <SectionWrapper size="lg" className="bg-[#0B0F19]/80 border-y border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Core Mission</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              To pioneer high-impact solutions across technology platforms, cinematic media productions, and visionary commercial architecture through disciplined execution and continuous innovation.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Compass className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Strategic Governance</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Providing executive leadership and shared group resources while ensuring subsidiary management teams maintain operational autonomy in their respective industries.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Award className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Operational Excellence</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Maintaining rigorous performance benchmarks, transparent reporting, and international quality standards across all subsidiary projects and client deliverables.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Subsidiary Structure Breakdown */}
      <SectionWrapper size="lg" hasGridBg>
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Corporate Holdings
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Group Subsidiaries & Divisions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 shrink-0">
                  <Image
                    src="/Rf Technologies Logo.png"
                    alt="RF Technologies Logo"
                    width={48}
                    height={48}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-12 max-w-12 object-contain"
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                    Division 01 — Technology Solutions
                  </span>
                  <h3 className="text-2xl font-bold text-white">RF Technologies</h3>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
                    Enterprise cloud infrastructure, bespoke software development, AI automation, and technical strategy consulting.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
                <Link
                  href="/technologies"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  View Division <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://rftechnologies.com.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-sky-400/40 hover:bg-sky-400/10 text-sky-300 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  Visit Site <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 shrink-0">
                  <Image
                    src="/Rf Media Production Logo.png"
                    alt="RF Media Productions Logo"
                    width={48}
                    height={48}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-12 max-w-12 object-contain"
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                    Division 02 — Media & Content
                  </span>
                  <h3 className="text-2xl font-bold text-white">RF Media Productions</h3>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
                    Cinematic brand storytelling, broadcast commercials, post-production VFX, and digital media strategy.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
                <Link
                  href="/media-productions"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  View Division <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://rfmediaproductions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-indigo-400/40 hover:bg-indigo-400/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  Visit Site <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 shrink-0">
                  <Image
                    src="/Rf Architects white-logo.png"
                    alt="RF Architects Logo"
                    width={48}
                    height={48}
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-12 max-w-12 object-contain"
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    Division 03 — Architecture & Interiors
                  </span>
                  <h3 className="text-2xl font-bold text-white">RF Architects</h3>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
                    Sustainable commercial architecture, urban master planning, executive interior design, and biophilic space creation.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
                <Link
                  href="/architects"
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  View Division <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://rf-architects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-emerald-400/40 hover:bg-emerald-400/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  Visit Site <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
