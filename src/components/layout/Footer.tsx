import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { footerNavConfig } from "@/config/navigation";
import { Shield, ArrowUpRight, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#040609] border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/5 blur-3xl pointer-events-none" />

      {/* §12 Hero-Echoing Large CTA Banner */}
      <div className="border-b border-white/10 bg-gradient-to-b from-transparent to-white/[0.02] py-16 md:py-20">
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              RF Group Governance
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Partner With Our Operating Companies?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Explore specialized capabilities in Technology, Media Productions, and Architectural Design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <Link
              href="/companies"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-400/20 transition-all text-center flex items-center justify-center gap-2"
            >
              Explore Our Companies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 font-semibold text-xs uppercase tracking-wider transition-colors text-center"
            >
              Contact Executive Board
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-custom pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                width={160}
                height={44}
                style={{ width: "auto", height: "auto" }}
                className="max-h-9 max-w-[160px] object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              RF Group Headquarters — Operating Internationally
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Group Directory
            </h4>
            <ul className="space-y-2.5">
              {footerNavConfig.group.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiary Companies Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Group Subsidiaries
            </h4>
            <ul className="space-y-3">
              {footerNavConfig.subsidiaries.map((sub) => {
                const isExternal = Boolean(sub.isExternal || sub.href.startsWith("http"));
                return (
                  <li key={sub.href}>
                    {isExternal ? (
                      <a
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-sky-500/30 transition-all group flex items-center justify-between"
                      >
                        <span className="text-sm font-medium text-slate-200 group-hover:text-sky-300">
                          {sub.label}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href={sub.href}
                        className="p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-sky-500/30 transition-all group flex items-center justify-between"
                      >
                        <span className="text-sm font-medium text-slate-200 group-hover:text-sky-300">
                          {sub.label}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-6">
            {footerNavConfig.legal.map((legal) => (
              <Link
                key={legal.label}
                href={legal.href}
                className="hover:text-slate-400 transition-colors"
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
