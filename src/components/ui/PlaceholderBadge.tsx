import React from "react";
import { ContentStatus } from "@/types";
import { cn } from "@/lib/utils";

interface PlaceholderBadgeProps {
  status: ContentStatus;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  status,
  className,
}) => {
  if (status === "approved") return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase border backdrop-blur-md shadow-sm",
        status === "placeholder" &&
          "bg-amber-500/10 text-amber-300 border-amber-500/30",
        status === "draft" &&
          "bg-sky-500/10 text-sky-300 border-sky-500/30",
        className
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full animate-pulse",
          status === "placeholder" && "bg-amber-400",
          status === "draft" && "bg-sky-400"
        )}
      />
      {status === "placeholder" ? "Coming Soon / Placeholder" : "Draft Spec"}
    </span>
  );
};
