"use client";

import React from "react";

export const CeoQuoteDivider: React.FC = () => {
  return (
    <section className="w-full bg-[#0B1F3A] py-24 md:py-28 px-6 text-center border-y border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-[750px] mx-auto space-y-5">
        <blockquote className="text-2xl sm:text-3xl md:text-[32px] font-medium leading-relaxed tracking-tight gold-shimmer-text">
          “We are not building businesses for today. We are building companies, products, and people for the future.”
        </blockquote>
        <p className="text-[14px] tracking-[0.04em] text-[#9fb0c9] font-medium pt-1">
          — R. Farhan, Founder & CEO
        </p>
      </div>
    </section>
  );
};
