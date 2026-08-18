import React from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Globe, Shield, PhoneCall, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Routed Inquiries",
  description:
    "Direct contact channel for RF Group of Companies, RF Technologies, RF Media Productions, and RF Architects.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col space-y-0">
      <SectionWrapper size="lg" hasGridBg className="pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Information Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                Executive Desk
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Group Contact & Inquiry Routing
              </h1>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Connect directly with RF Group leadership or direct your request to a specialized division team.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="glass-card bg-white dark:bg-[#161e2b] rounded-xl p-5 border border-slate-200 dark:border-white/10 flex items-start gap-4 shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-lg bg-[#0029B4]/10 border border-[#0029B4]/20 text-[#0029B4] dark:bg-sky-500/10 dark:border-sky-500/20 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Group Email Triage
                  </span>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-[#0029B4] dark:hover:text-sky-300 transition-colors"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="glass-card bg-white dark:bg-[#161e2b] rounded-xl p-5 border border-slate-200 dark:border-white/10 flex items-start gap-4 shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Contact Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-[#0029B4] dark:hover:text-sky-300 transition-colors block"
                  >
                    {siteConfig.contactPhone}
                  </a>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="glass-card bg-white dark:bg-[#161e2b] rounded-xl p-5 border border-slate-200 dark:border-white/10 flex items-start gap-4 shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Headquarters Office Address
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white leading-relaxed block">
                    {siteConfig.mainOffice}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm defaultCompany="general" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
