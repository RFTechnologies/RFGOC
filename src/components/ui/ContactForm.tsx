"use client";

import React, { useState } from "react";
import { ContactInquiry } from "@/types";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  defaultCompany?: "technologies" | "media-productions" | "architects" | "general";
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultCompany = "general",
  className,
}) => {
  const [formData, setFormData] = useState<ContactInquiry>({
    interestedIn: defaultCompany,
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit inquiry");
      }

      setStatus("success");
      setFormData({
        interestedIn: defaultCompany,
        name: "",
        email: "",
        companyName: "",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <div className={cn("glass-panel rounded-2xl p-8 border border-white/10 relative", className)}>
      <div className="mb-6 space-y-1">
        <h3 className="text-xl font-bold text-white tracking-tight">
          Direct Group Inquiry
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed">
          Route your request directly to our executive management or specialized subsidiary leadership.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-300">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h4 className="text-lg font-bold text-white">Inquiry Transmitted Successfully</h4>
          <p className="text-slate-300 text-xs max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out to RF Group of Companies. Our triage team will process your inquiry and route it to the appropriate division lead.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Subsidiary Target Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
              Inquiry Target / Division <span className="text-sky-400">*</span>
            </label>
            <select
              value={formData.interestedIn}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  interestedIn: e.target.value as ContactInquiry["interestedIn"],
                })
              }
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors"
              required
            >
              <option value="general">General Group Partnership & Inquiry</option>
              <option value="technologies">RF Technologies — Technology Solutions</option>
              <option value="media-productions">RF Media Productions — Media & Creative</option>
              <option value="architects">RF Architects — Architecture & Interiors</option>
            </select>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
                Full Name <span className="text-sky-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Alexander Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
                Work Email <span className="text-sky-400">*</span>
              </label>
              <input
                type="email"
                placeholder="alexander@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600"
                required
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
              Organization / Company
            </label>
            <input
              type="text"
              placeholder="e.g. Vance Global Enterprises"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-300">
              Message / Scope Summary <span className="text-sky-400">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Provide a brief summary of your inquiry or project requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600 resize-none"
              required
            />
          </div>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-sky-400/20 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Transmitting...
              </>
            ) : (
              <>
                Submit Inquiry
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
