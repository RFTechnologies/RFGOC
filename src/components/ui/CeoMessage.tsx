"use client";

import React from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Quote } from "lucide-react";

export const CeoMessage: React.FC = () => {
  return (
    <SectionWrapper
      size="lg"
      className="bg-[#0B0F19]/90 border-y border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center relative z-10">
        {/* Left Column: Eyebrow, Quote Accent & Quote Body */}
        <div className="lg:col-span-8 space-y-6">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400">
            <Quote className="w-3.5 h-3.5" />
            <span>A MESSAGE FROM THE CEO</span>
          </div>

          {/* Quotation Pull-in Block */}
          <div className="relative pl-6 md:pl-8 border-l-2 border-sky-400/40 space-y-4">
            {/* Decorative Large Quotation Mark */}
            <div className="absolute -top-4 left-3 md:left-4 -translate-x-full text-sky-400/20 text-5xl sm:text-6xl font-serif select-none pointer-events-none leading-none">
              “
            </div>

            <p className="text-slate-200 text-base sm:text-lg md:text-xl font-medium leading-relaxed italic">
              RF Group of Companies was built with a simple belief: great businesses are created by people who are willing to think beyond today.
            </p>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Across technology, media, architecture, and the ventures we continue to build, our goal is to create companies that deliver real value, develop talented people, and grow for the long term.
            </p>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
              We are still building, learning, and expanding, and every company within the group is part of that journey.
            </p>
          </div>
        </div>

        {/* Right Column: CEO Attribution Block */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12">
          <div className="flex flex-row lg:flex-col items-center gap-5 text-left lg:text-center glass-card p-6 md:p-8 rounded-2xl border border-white/10 w-full max-w-sm">
            {/* Circular Photo */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-sky-500/40 bg-slate-900 flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/20 group overflow-hidden">
              <Image
                src="/CEO Photos.jpeg"
                alt="R. Farhan - Founder & CEO"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 80px, 96px"
              />
            </div>

            {/* Name & Title */}
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                R. Farhan
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">
                Founder & CEO, RF Group of Companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
