"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EyebrowRule } from "@/components/ui/eyebrow-rule";

const LOGOS_LEFT = [
  { name: "Gmail", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg", y: 60 },
  { name: "Slack", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/slack.svg", y: 200 },
  { name: "Google Calendar", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlecalendar.svg", y: 340 },
];

const LOGOS_RIGHT = [
  { name: "Notion", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg", y: 60 },
  { name: "Linear", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linear.svg", y: 200 },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg", y: 340 },
];

export function AnimatedIntegrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <section className="px-[clamp(16px,3vw,32px)] pt-24 pb-12 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <EyebrowRule center>Connects to the tools you already use</EyebrowRule>
        <h2 className="font-heading mt-5 text-[clamp(32px,3.6vw,48px)] leading-[1.02] font-normal tracking-[-0.025em] text-[var(--color-text)]">
          No new apps. <span className="text-[var(--color-accent)]">Zero migration.</span>
        </h2>
        
        <div ref={containerRef} className="relative mx-auto mt-16 h-[400px] w-full max-w-[800px]">
          {/* SVG Canvas for paths */}
          <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 h-full w-full pointer-events-none"
            style={{ overflow: "visible" }}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Left paths */}
            {LOGOS_LEFT.map((logo, i) => {
              const pathId = `left-path-${i}`;
              const path = `M 400 200 L 320 200 C 250 200 250 ${logo.y} 180 ${logo.y} L 40 ${logo.y}`;
              return (
                <g key={pathId}>
                  <path d={path} fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                  />
                  {/* Flowing particle - CSS approach using offset-path */}
                  <path id={pathId} d={path} fill="none" className="hidden" />
                  {isInView && (
                    <motion.circle
                      r="4"
                      fill="var(--color-accent)"
                      style={{ filter: "drop-shadow(0 0 6px var(--color-accent))", offsetPath: `path("${path}")` } as any}
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.8,
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Right paths */}
            {LOGOS_RIGHT.map((logo, i) => {
              const pathId = `right-path-${i}`;
              const path = `M 400 200 L 480 200 C 550 200 550 ${logo.y} 620 ${logo.y} L 760 ${logo.y}`;
              return (
                <g key={pathId}>
                  <path d={path} fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                  />
                  {/* Flowing particle */}
                  <path id={pathId} d={path} fill="none" className="hidden" />
                  {isInView && (
                    <motion.circle
                      r="4"
                      fill="var(--color-accent)"
                      style={{ filter: "drop-shadow(0 0 6px var(--color-accent))", offsetPath: `path("${path}")` } as any}
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.8 + 0.5,
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Center Agent Node */}
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[var(--color-surface)] border border-[color-mix(in_oklch,var(--color-accent)_24%,var(--color-border))] shadow-[0_0_40px_rgba(229,199,0,0.15)] z-10">
             <div className="h-10 w-10 rounded-full bg-[var(--color-accent)] opacity-20 blur-xl absolute" />
             <span className="font-heading text-4xl text-[var(--color-text)] font-semibold z-10">Z</span>
          </div>

          {/* Left Logos */}
          {LOGOS_LEFT.map((logo) => (
            <div
              key={logo.name}
              className="absolute left-0 flex h-14 w-14 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-xl bg-[var(--color-surface)] border border-border shadow-sm z-10"
              style={{ top: `${logo.y}px` }}
            >
              <img src={logo.src} alt={logo.name} className="h-7 w-7 opacity-80" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          ))}

          {/* Right Logos */}
          {LOGOS_RIGHT.map((logo) => (
            <div
              key={logo.name}
              className="absolute right-0 flex h-14 w-14 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-xl bg-[var(--color-surface)] border border-border shadow-sm z-10"
              style={{ top: `${logo.y}px` }}
            >
              <img src={logo.src} alt={logo.name} className="h-7 w-7 opacity-80" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
