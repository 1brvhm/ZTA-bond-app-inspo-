"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EyebrowRule } from "@/components/ui/eyebrow-rule";

const LOGOS_LEFT = [
  { name: "Gmail",           src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg",          y: 60  },
  { name: "Slack",           src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/slack.svg",          y: 200 },
  { name: "Google Calendar", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlecalendar.svg", y: 340 },
];

const LOGOS_RIGHT = [
  { name: "Notion", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg",  y: 60  },
  { name: "Linear", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linear.svg",  y: 200 },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",  y: 340 },
];

const DOT_DURATION = 2.5;

// Glow keyframe: idle → idle → PULSE → fade
const glowKeyframes = [
  "0 0 0px 0px rgba(245,197,66,0)",
  "0 0 0px 0px rgba(245,197,66,0)",
  "0 0 22px 5px rgba(245,197,66,0.75), 0 0 0 2px rgba(245,197,66,0.55)",
  "0 0 0px 0px rgba(245,197,66,0)",
];
const glowTimes = [0, 0.82, 0.92, 1.0];

function LogoNode({
  logo,
  side,
  index,
  isInView,
}: {
  logo: { name: string; src: string; y: number };
  side: "left" | "right";
  index: number;
  isInView: boolean;
}) {
  const dotDelay = side === "left" ? index * 0.8 : index * 0.8 + 0.5;
  const posClass =
    side === "left"
      ? "absolute left-0 -translate-x-1/2"
      : "absolute right-0 translate-x-1/2";

  return (
    <motion.div
      key={logo.name}
      className={`${posClass} flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-xl bg-[var(--color-surface)] border border-border z-10`}
      style={{ top: `${logo.y}px` }}
      animate={
        isInView
          ? {
              boxShadow: glowKeyframes,
              borderColor: [
                "oklch(21% 0.02 96)",
                "oklch(21% 0.02 96)",
                "rgba(245,197,66,0.7)",
                "oklch(21% 0.02 96)",
              ],
            }
          : { boxShadow: glowKeyframes[0] }
      }
      transition={{
        duration: DOT_DURATION,
        repeat: Infinity,
        delay: dotDelay,
        times: glowTimes,
        ease: "easeOut",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.name}
        className="h-9 w-9 opacity-90"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </motion.div>
  );
}

export function AnimatedIntegrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <section id="integrations" className="px-[clamp(16px,3vw,32px)] pt-24 pb-12 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        <EyebrowRule center>Seamless Integrations. Zero Disruption.</EyebrowRule>
        <h2 className="font-heading mt-5 text-[clamp(32px,3.6vw,48px)] leading-[1.02] font-normal tracking-[-0.025em] text-[var(--color-text)]">
          No new apps. <span className="text-[var(--color-accent)]">No new tabs.</span>
        </h2>

        <div ref={containerRef} className="relative mx-auto mt-16 h-[400px] w-full max-w-[800px]">
          {/* SVG paths + dots */}
          <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 h-full w-full pointer-events-none"
            style={{ overflow: "visible" }}
            preserveAspectRatio="xMidYMid meet"
          >
            {LOGOS_LEFT.map((logo, i) => {
              const path = `M 400 200 L 320 200 C 250 200 250 ${logo.y} 180 ${logo.y} L 40 ${logo.y}`;
              return (
                <g key={`left-${i}`}>
                  <path d={path} fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
                  <motion.path
                    d={path} fill="none" stroke="var(--color-accent)" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                  />
                  {isInView && (
                    <motion.circle
                      r="4" fill="var(--color-accent)"
                      style={{ filter: "drop-shadow(0 0 6px var(--color-accent))", offsetPath: `path("${path}")` } as React.CSSProperties}
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                      transition={{ duration: DOT_DURATION, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
                    />
                  )}
                </g>
              );
            })}

            {LOGOS_RIGHT.map((logo, i) => {
              const path = `M 400 200 L 480 200 C 550 200 550 ${logo.y} 620 ${logo.y} L 760 ${logo.y}`;
              return (
                <g key={`right-${i}`}>
                  <path d={path} fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
                  <motion.path
                    d={path} fill="none" stroke="var(--color-accent)" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                  />
                  {isInView && (
                    <motion.circle
                      r="4" fill="var(--color-accent)"
                      style={{ filter: "drop-shadow(0 0 6px var(--color-accent))", offsetPath: `path("${path}")` } as React.CSSProperties}
                      initial={{ offsetDistance: "0%", opacity: 0 }}
                      animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                      transition={{ duration: DOT_DURATION, repeat: Infinity, ease: "linear", delay: i * 0.8 + 0.5 }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Center — gold orb matching the nav brand */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-28 w-28 items-center justify-center rounded-2xl border border-[color-mix(in_oklch,var(--color-accent)_28%,var(--color-border))]"
            style={{ background: "oklch(12.5% 0.018 96)", boxShadow: "0 0 50px rgba(229,199,0,0.25), 0 0 0 1px color-mix(in oklch, var(--color-accent) 15%, transparent) inset" }}>
            <div
              style={{
                width: 60, height: 60,
                borderRadius: "50%",
                background: "radial-gradient(circle at 32% 28%, rgba(255,224,102,0.95) 0%, rgba(245,197,66,0.85) 30%, rgba(184,134,11,0.8) 60%, rgba(107,79,0,0.92) 100%)",
                boxShadow: "0 0 18px 4px rgba(245,197,66,0.45), inset 0 -3px 6px rgba(0,0,0,0.4), inset 0 3px 5px rgba(255,240,180,0.3)",
                display: "grid",
                placeItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Specular highlight */}
              <div style={{ position: "absolute", top: "10%", left: "15%", width: "38%", height: "28%", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(255,255,240,0.65) 0%, transparent 70%)", pointerEvents: "none" }} />
              <svg viewBox="0 0 288 288" width={34} height={34} fill="white" style={{ position: "relative", zIndex: 1 }}>
                <g transform="translate(144 144) scale(1.13 0.78) rotate(90) translate(-144 -144)">
                  <path d="M227.8,112.9c0-0.9-0.3-1.9-0.8-2.6c-11.5-16.8-22.9-23.2-30.1-25.7c-3-1-6.2,1.2-6.2,4.4v65.9 c-0.5,5.3-4.4,6.4-6,6.6c-8.9-1.6-15.9-9.6-21.4-23.1c-1.3-3.1-2.8-6-4.2-9c-9.7-19.9-21.6-34.7-36.4-41.3c-1.3-0.6-2.5-1-3.8-1.4 c-0.2-0.1-0.3-0.1-0.5-0.1c-3.1-0.7-8.3-1.7-13.6-2.2c-2.9-0.3-5.5,2-5.5,4.9v30.7c0,0.2-0.1,0.3-0.1,0.5c-1.2,7.2-9.4,7.1-9.4,7.1 s0,0,0,0c-8.3,0-16.6,0-24.9,0c-2.6,0-4.7,2.1-4.7,4.7v43.1c0,0.9,0.3,1.9,0.8,2.6c11.5,16.8,22.9,23.2,30.1,25.7 c3,1,6.2-1.2,6.2-4.4v-67c1.4-6,7.7-4.3,7.7-4.3l0-0.1c6.4,3.3,17,10.6,25.4,25.7c13.1,23.3,9.4,33.9,29.8,44.1 c0,0,11.3,5.7,25.3,5.5c0.2,0,0.3,0,0.4,0c2.8,0.1,5.1-2.1,5.1-4.9v-30.3c0,0,0,0,0,0c2-6.1,7.9-7,8.9-7.2c7.7,0,15.5,0,23.2,0 c2.6,0,4.7-2.1,4.7-4.7V112.9z" />
                </g>
              </svg>
            </div>
          </div>

          {/* Left icon nodes */}
          {LOGOS_LEFT.map((logo, i) => (
            <LogoNode key={logo.name} logo={logo} side="left" index={i} isInView={isInView} />
          ))}

          {/* Right icon nodes */}
          {LOGOS_RIGHT.map((logo, i) => (
            <LogoNode key={logo.name} logo={logo} side="right" index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
