import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { footerNavConfig } from "@/config/navigation";
import { Shield, ArrowUpRight, ArrowRight, Mail, MapPin, Globe, PhoneCall, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-[#040609] border-t border-gray-200 dark:border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/5 blur-3xl pointer-events-none" />

      {/* Background Big Logo Watermark on Footer */}
      <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden flex items-center justify-center md:justify-center pr-0 md:pr-10 opacity-10 dark:opacity-15">
        <img
          src="/RFGOC Hollow.svg"
          alt="RF Group Background Logo"
          className="w-[320px] sm:w-[480px] md:w-[650px] max-w-full max-h-[90%] object-contain pointer-events-none transition-opacity"
        />
      </div>

      {/* §12 Hero-Echoing Compact CTA Banner */}
      <div className="border-b border-gray-200 dark:border-white/10 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-white/[0.02] py-10 md:py-12">
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              RF Group Governance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              Ready to Partner With Our Operating Companies?
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Explore specialized capabilities in Technology, Media Productions, and Architectural Design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/companies"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0029B4] to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-900/30 transition-all text-center flex items-center justify-center gap-2 hover:scale-[1.02]"
            >
              Explore Our Companies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full glass-panel border border-gray-200 dark:border-transparent hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-slate-200 font-semibold text-xs uppercase tracking-wider transition-colors text-center"
            >
              Contact Executive Board
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links - Compact 4-Column Grid */}
      <div className="container-custom pt-10 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <Image
                src={siteConfig.logoDark}
                alt={`${siteConfig.name} Logo`}
                width={170}
                height={48}
                style={{ width: "auto", height: "auto" }}
                className="max-h-10 max-w-[170px] object-contain group-hover:opacity-90 transition-opacity dark:block hidden"
              />
              <Image
                src={siteConfig.logoLight}
                alt={`${siteConfig.name} Logo`}
                width={170}
                height={48}
                style={{ width: "auto", height: "auto" }}
                className="max-h-10 max-w-[170px] object-contain group-hover:opacity-90 transition-opacity dark:hidden block"
              />
            </Link>
            <p className="text-gray-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-gray-600 dark:text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              RF Group Headquarters — Operating Internationally
            </div>
          </div>

          {/* Col 2: Group Directory */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Group Directory
            </h4>
            <ul className="space-y-2.5">
              {footerNavConfig.group.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Subsidiary Companies (Glassy Cards) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Group Subsidiaries
            </h4>
            <ul className="space-y-2.5">
              {footerNavConfig.subsidiaries.map((sub) => {
                const isExternal = Boolean(sub.isExternal || sub.href.startsWith("http"));
                const CardContent = (
                  <>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {sub.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 dark:text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                );

                return (
                  <li key={sub.href}>
                    {isExternal ? (
                      <a
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-gray-50 dark:hover:bg-white/[0.09] border border-gray-200 dark:border-white/10 hover:border-sky-400/40 shadow-sm transition-all group flex items-center justify-between hover:scale-[1.01]"
                      >
                        {CardContent}
                      </a>
                    ) : (
                      <Link
                        href={sub.href}
                        className="p-3 rounded-xl bg-white dark:bg-white/[0.04] hover:bg-gray-50 dark:hover:bg-white/[0.09] border border-gray-200 dark:border-white/10 hover:border-sky-400/40 shadow-sm transition-all group flex items-center justify-between hover:scale-[1.01]"
                      >
                        {CardContent}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Executive Contact Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Executive Office
            </h4>
            <div className="space-y-2.5 text-xs text-gray-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 shadow-sm">
                <Mail className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 block">
                    Group Triage Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-xs font-semibold text-gray-900 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 shadow-sm">
                <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s+/g, "")}`}
                    className="text-xs font-semibold text-gray-900 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-300 transition-colors block"
                  >
                    {siteConfig.contactPhone}
                  </a>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <MessageSquare className="w-3 h-3" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 shadow-sm">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 block">
                    Headquarters Address
                  </span>
                  <span className="text-[11px] font-semibold text-gray-900 dark:text-slate-200 leading-relaxed block">
                    {siteConfig.mainOffice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Legal Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-slate-400">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-6">
            {footerNavConfig.legal.map((legal) => (
              <Link
                key={legal.label}
                href={legal.href}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {legal.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};