import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: "sm" | "md" | "lg";
  hasGridBg?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className,
  containerClassName,
  size = "md",
  hasGridBg = false,
  ...props
}) => {
  const pyMap = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        pyMap[size],
        hasGridBg && "bg-ambient-grid",
        className
      )}
      {...props}
    >
      <div className={cn("container-custom relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
