"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const syncTheme = () => {
      const nextTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(nextTheme);
    };

    syncTheme();
    window.addEventListener("scroll", handleScroll);

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const logoSrc = theme === "dark" ? siteConfig.logoDark : siteConfig.logoLight;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-[#07090E]/85 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-3.5 shadow-sm dark:shadow-2xl"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Corporate Group Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0029B4] dark:focus:ring-sky-400 rounded-md"
        >
          <Image
            src={logoSrc}
            alt={`${siteConfig.name} Logo`}
            width={180}
            height={80}
            style={{ width: "auto", height: "auto" }}
            className="max-w-[180px] max-h-[80px] object-contain group-hover:scale-105 transition-transform duration-300"
            priority
            unoptimized
          />
        </Link>

        {/* Config-driven Desktop Navigation Links with Framer Motion Squeezing Pill */}
        <nav className="hidden md:flex items-center gap-1 glass-panel bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
          {mainNavConfig.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 select-none",
                  isActive
                    ? "text-white"
                    : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full shadow-md shadow-blue-900/20 z-0"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Controls (Theme Toggle + CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0029B4] to-blue-500 hover:bg-blue-800 text-white dark:bg-gradient-to-r dark:from-sky-400 dark:to-indigo-500 dark:text-slate-950 dark:hover:from-sky-300 dark:hover:to-indigo-400 transition-all shadow-md shadow-blue-900/10 dark:shadow-sky-400/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel bg-white dark:bg-[#07090E] border-b border-slate-200 dark:border-white/10 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {mainNavConfig.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-base font-semibold transition-colors",
                    isActive
                      ? "bg-[#0029B4]/10 text-[#0029B4] border border-[#0029B4]/20 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20"
                      : "text-slate-700 hover:text-[#0029B4] hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-slate-200 dark:border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#0029B4] hover:bg-blue-800 text-white dark:bg-gradient-to-r dark:from-sky-400 dark:to-indigo-500 dark:text-slate-950 shadow-md"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
