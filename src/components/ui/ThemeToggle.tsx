"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("rf_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(savedTheme);
    } else {
      // Default to dark mode for corporate identity
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("rf_theme", nextTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(nextTheme);
  };

  if (!mounted) {
    return (
      <div className={cn("w-9 h-9 rounded-full glass-panel border border-white/10", className)} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 glass-panel border border-white/10 hover:scale-105 active:scale-95 cursor-pointer shadow-sm",
        theme === "dark"
          ? "bg-slate-900/80 text-amber-300 hover:text-amber-200 border-white/10"
          : "bg-white/90 text-sky-600 hover:text-sky-700 border-slate-200 shadow-md",
        className
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 stroke-[2.2] animate-in spin-in-90 duration-300" />
      ) : (
        <Moon className="w-4 h-4 stroke-[2.2] animate-in spin-in-90 duration-300" />
      )}
    </button>
  );
};
