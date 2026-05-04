import React from "react";
import { cn } from "@/lib/utils";

export function EyebrowRule({
  children,
  accent,
  center,
}: {
  children: React.ReactNode;
  accent?: boolean;
  center?: boolean;
}) {
  const rule = "h-0.5 w-8 rounded-full bg-[var(--color-accent)] md:w-12";
  return (
    <div
      className={cn("flex items-center gap-3.5", center ? "justify-center" : "justify-start")}
    >
      <span className={cn(rule, center && "w-8")} />
      <span
        className={cn(
          "font-mono text-[11px] font-medium tracking-[0.18em] uppercase",
          accent ? "text-[var(--color-accent)]" : "text-[var(--color-text-faint)]",
        )}
      >
        {children}
      </span>
      {center && <span className="h-0.5 w-8 rounded-full bg-[var(--color-accent)]" />}
    </div>
  );
}
