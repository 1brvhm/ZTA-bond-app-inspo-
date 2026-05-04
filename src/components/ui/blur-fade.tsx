"use client";

import { motion } from "motion/react";
import React from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
}

export function BlurFade({
  children,
  delay = 0,
  yOffset = 24,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.1, margin: inViewMargin as any }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
