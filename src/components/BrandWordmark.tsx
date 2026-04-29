"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type BrandWordmarkProps = {
  className?: string;
  textClassName?: string;
  markerClassName?: string;
  style?: CSSProperties;
  label?: string;
  orbOnly?: boolean;
};

export function BrandWordmark({
  className = "",
  textClassName = "",
  markerClassName = "",
  style,
  label = "Zero to Agent",
  orbOnly = false,
}: BrandWordmarkProps) {
  const orbRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!orbRef.current || !glowRef.current) return;

    const glowTl = gsap.timeline({ repeat: -1, yoyo: true });
    glowTl.to(orbRef.current, {
      boxShadow: `
        0 0 16px 3px rgba(245, 197, 66, 0.4),
        inset 0 -3px 6px rgba(0, 0, 0, 0.35),
        inset 0 3px 5px rgba(255, 240, 180, 0.3)
      `,
      duration: 2.5,
      ease: "sine.inOut",
    });

    const highlightTl = gsap.timeline({ repeat: -1, yoyo: true });
    highlightTl.to(glowRef.current, {
      x: 2,
      y: -1.5,
      opacity: 0.75,
      duration: 3,
      ease: "sine.inOut",
    }).to(glowRef.current, {
      x: -1.5,
      y: 1.5,
      opacity: 0.5,
      duration: 3,
      ease: "sine.inOut",
    });

    return () => {
      glowTl.kill();
      highlightTl.kill();
    };
  }, []);

  return (
    <span
      aria-label={label}
      className={`inline-flex items-center gap-[0.35em] ${className}`.trim()}
      style={{ color: "var(--brand-wordmark-color, var(--color-text))", ...style }}
    >
      <span
        ref={orbRef}
        aria-hidden="true"
        className={`relative inline-flex shrink-0 items-center justify-center ${markerClassName}`.trim()}
        style={{
          height: "1.8em",
          width: "1.8em",
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 32% 28%,
              rgba(255, 224, 102, 0.95) 0%,
              rgba(245, 197, 66, 0.85) 30%,
              rgba(184, 134, 11, 0.8) 60%,
              rgba(107, 79, 0, 0.92) 100%
            )
          `,
          boxShadow: `
            0 0 10px 2px rgba(245, 197, 66, 0.25),
            inset 0 -3px 6px rgba(0, 0, 0, 0.35),
            inset 0 3px 5px rgba(255, 240, 180, 0.2)
          `,
          overflow: "hidden",
        }}
      >
        {/* Specular highlight */}
        <span
          ref={glowRef}
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "38%",
            height: "28%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255, 255, 240, 0.65) 0%, transparent 70%)",
            pointerEvents: "none",
            opacity: 0.6,
          }}
        />
        <svg
          viewBox="0 0 288 288"
          fill="white"
          style={{
            height: "100%",
            width: "100%",
            filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
            position: "relative",
            zIndex: 1,
          }}
        >
          <g transform="translate(144 144) scale(1.13 0.78) rotate(90) translate(-144 -144)">
            <path d="M227.8,112.9c0-0.9-0.3-1.9-0.8-2.6c-11.5-16.8-22.9-23.2-30.1-25.7c-3-1-6.2,1.2-6.2,4.4v65.9 c-0.5,5.3-4.4,6.4-6,6.6c-8.9-1.6-15.9-9.6-21.4-23.1c-1.3-3.1-2.8-6-4.2-9c-9.7-19.9-21.6-34.7-36.4-41.3c-1.3-0.6-2.5-1-3.8-1.4 c-0.2-0.1-0.3-0.1-0.5-0.1c-3.1-0.7-8.3-1.7-13.6-2.2c-2.9-0.3-5.5,2-5.5,4.9v30.7c0,0.2-0.1,0.3-0.1,0.5c-1.2,7.2-9.4,7.1-9.4,7.1 s0,0,0,0c-8.3,0-16.6,0-24.9,0c-2.6,0-4.7,2.1-4.7,4.7v43.1c0,0.9,0.3,1.9,0.8,2.6c11.5,16.8,22.9,23.2,30.1,25.7 c3,1,6.2-1.2,6.2-4.4v-67c1.4-6,7.7-4.3,7.7-4.3l0-0.1c6.4,3.3,17,10.6,25.4,25.7c13.1,23.3,9.4,33.9,29.8,44.1 c0,0,11.3,5.7,25.3,5.5c0.2,0,0.3,0,0.4,0c2.8,0.1,5.1-2.1,5.1-4.9v-30.3c0,0,0,0,0,0c2-6.1,7.9-7,8.9-7.2c7.7,0,15.5,0,23.2,0 c2.6,0,4.7-2.1,4.7-4.7V112.9z" />
          </g>
        </svg>
      </span>
      {!orbOnly && (
        <span className={`font-heading text-[18px] leading-none tracking-tight ${textClassName}`.trim()}>
          Zero to Agent
        </span>
      )}
    </span>
  );
}
