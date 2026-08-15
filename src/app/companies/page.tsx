import React from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CompanyCard } from "@/components/ui/CompanyCard";
import { companies } from "@/data/companies";
import { Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Companies & Divisions",
  description:
    "Explore RF Group's subsidiary companies: RF Technologies, RF Media Productions, and RF Architects.",
};

export default function CompaniesOverviewPage() {
  return (
    <div className="w-full flex flex-col space-y-0">
      <SectionWrapper size="lg" hasGridBg className="pt-24 pb-20">
        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              Corporate Portfolio Overview
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Companies & Operating Divisions
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              RF Group of Companies operates three core subsidiary divisions. Each business unit maintains specialized domain leadership while adhering to group-wide excellence standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {companies.map((company, idx) => (
              <CompanyCard key={company.slug} company={company} index={idx} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
