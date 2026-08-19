"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FULL_QUOTE = `“We are not building businesses for today. We are building companies, products, and people for the future.”`;

export const CeoFloatingQuoteCard: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setIsTyping(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= FULL_QUOTE.length) {
        setDisplayedText(FULL_QUOTE.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <div
      ref={cardRef}
      style={{
        background: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.25)",
      }}
      className="rounded-[14px] p-6 md:px-[28px] md:py-[24px] max-w-[360px] w-full text-left transition-all duration-300 relative z-30 select-none overflow-hidden animate-float-card"
    >
      {/* Continuous Shiny Glass Sheen Reflection */}
      <div className="glass-sheen-overlay" />

      {/* Quote Container */}
      <div className="min-h-[96px] mb-4 flex flex-col justify-start relative z-10">
        <p className="font-serif italic text-[15px] md:text-[16px] leading-[1.6] text-white">
          {displayedText}
          {isTyping && <span className="typing-cursor font-sans">|</span>}
        </p>
      </div>

      {/* Immediate Attribution Block */}
      <div className="pt-3 border-t border-white/20 flex items-center gap-3 relative z-10">
        <div className="relative w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
          <Image
            src="/CEO Photos.jpeg"
            alt="R. Farhan"
            fill
            className="object-cover object-top"
            sizes="36px"
          />
        </div>

        <div className="flex flex-col space-y-0.5">
          <span className="text-[12px] font-bold text-white leading-tight">
            R. Farhan
          </span>
          <span className="text-[10px] md:text-[11px] font-medium text-black/70 leading-tight">
            Founder & CEO
          </span>
        </div>
      </div>
    </div>
  );
};
