"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BlurFade } from "@/components/ui/blur-fade";
import { Features } from "@/components/blocks/features-11";
import { AnimatedIntegrations } from "@/components/blocks/animated-integrations";
import { EyebrowRule } from "@/components/ui/eyebrow-rule";
import { BrandWordmark } from "@/components/BrandWordmark";

const landingPrimaryBtn = cn(
  "h-auto rounded-[10px] px-6 py-3.5 text-[15px] font-semibold tracking-tight shadow-[0_0_0_1px_color-mix(in_oklch,var(--color-accent)_38%,transparent),0_0_40px_color-mix(in_oklch,var(--color-accent)_22%,transparent)] transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px",
);

const landingPrimaryBtnSm = cn(
  "h-auto rounded-[10px] px-[18px] py-2 text-[13px] font-semibold tracking-tight shadow-[0_0_0_1px_color-mix(in_oklch,var(--color-accent)_38%,transparent),0_0_40px_color-mix(in_oklch,var(--color-accent)_22%,transparent)] transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px",
);

const landingOutlineBtn = cn(
  "h-auto rounded-[10px] border border-[var(--color-border-strong)] bg-transparent px-6 py-3.5 text-[15px] font-semibold tracking-tight text-foreground transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-muted/40",
);

/* ═══════════════════════════════════════════════════════════════
   ATOMS
   ═══════════════════════════════════════════════════════════════ */

function BrandOrb({ size = 56, glow = false }: { size?: number; glow?: boolean }) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full",
        glow
          ? "shadow-[0_0_18px_4px_rgba(245,197,66,0.45),inset_0_-3px_6px_rgba(0,0,0,0.4),inset_0_3px_5px_rgba(255,240,180,0.3)]"
          : "shadow-[inset_0_-3px_6px_rgba(0,0,0,0.4),inset_0_3px_5px_rgba(255,240,180,0.3)]",
      )}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 32% 28%, rgba(255,224,102,0.95) 0%, rgba(245,197,66,0.85) 30%, rgba(184,134,11,0.8) 60%, rgba(107,79,0,0.92) 100%)",
      }}
    >
      <div
        className="absolute top-[10%] left-[15%] h-[28%] w-[38%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,240,0.65) 0%, transparent 70%)",
        }}
      />
      <svg viewBox="0 0 288 288" className="relative size-full">
        <g transform="translate(144 144) scale(1.13 0.78) rotate(90) translate(-144 -144)">
          <path
            fill="white"
            d="M227.8,112.9c0-0.9-0.3-1.9-0.8-2.6c-11.5-16.8-22.9-23.2-30.1-25.7c-3-1-6.2,1.2-6.2,4.4v65.9 c-0.5,5.3-4.4,6.4-6,6.6c-8.9-1.6-15.9-9.6-21.4-23.1c-1.3-3.1-2.8-6-4.2-9c-9.7-19.9-21.6-34.7-36.4-41.3c-1.3-0.6-2.5-1-3.8-1.4 c-0.2-0.1-0.3-0.1-0.5-0.1c-3.1-0.7-8.3-1.7-13.6-2.2c-2.9-0.3-5.5,2-5.5,4.9v30.7c0,0.2-0.1,0.3-0.1,0.5c-1.2,7.2-9.4,7.1-9.4,7.1 s0,0,0,0c-8.3,0-16.6,0-24.9,0c-2.6,0-4.7,2.1-4.7,4.7v43.1c0,0.9,0.3,1.9,0.8,2.6c11.5,16.8,22.9,23.2,30.1,25.7 c3,1,6.2-1.2,6.2-4.4v-67c1.4-6,7.7-4.3,7.7-4.3l0-0.1c6.4,3.3,17,10.6,25.4,25.7c13.1,23.3,9.4,33.9,29.8,44.1 c0,0,11.3,5.7,25.3,5.5c0.2,0,0.3,0,0.4,0c2.8,0.1,5.1-2.1,5.1-4.9v-30.3c0,0,0,0,0,0c2-6.1,7.9-7,8.9-7.2c7.7,0,15.5,0,23.2,0 c2.6,0,4.7-2.1,4.7-4.7V112.9z"
          />
        </g>
      </svg>
    </div>
  );
}

function LandingWordmark({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <BrandWordmark
      className="gap-3 text-[var(--color-text)]"
      textClassName={cn(
        "font-heading leading-none tracking-tight",
        size === "sm" ? "text-lg" : "text-[22px]",
      )}
      markerClassName={size === "sm" ? "scale-90" : ""}
    />
  );
}

function Eyebrow({
  children,
  accent,
  className,
}: {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "m-0 font-mono text-[11px] font-medium tracking-[0.18em] uppercase",
        accent ? "text-[var(--color-accent)]" : "text-[var(--color-text-faint)]",
        className,
      )}
    >
      {children}
    </p>
  );
}


type CornerSvgProps = {
  tint: string;
  pos: React.CSSProperties;
  t: string;
};

function CornerSvg({ tint, pos, t }: CornerSvgProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      className="absolute opacity-[0.55]"
      style={{ ...pos, transform: t || undefined }}
      aria-hidden
    >
      <path
        d="M2 2H10M2 2V10"
        stroke={tint}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CornerOrnaments({ accent, inset = 10 }: { accent?: boolean; inset?: number }) {
  const tint = accent
    ? "color-mix(in oklch, var(--color-accent) 70%, var(--color-text-faint))"
    : "var(--color-text-faint)";
  return (
    <>
      <CornerSvg tint={tint} pos={{ top: inset, left: inset }} t="" />
      <CornerSvg tint={tint} pos={{ top: inset, right: inset }} t="scaleX(-1)" />
      <CornerSvg tint={tint} pos={{ bottom: inset, left: inset }} t="scaleY(-1)" />
      <CornerSvg tint={tint} pos={{ bottom: inset, right: inset }} t="scale(-1, -1)" />
    </>
  );
}

function StatusBadge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "live";
}) {
  if (variant === "live") {
    return (
      <Badge
        variant="outline"
        className="h-auto gap-2 rounded-full border-[color-mix(in_oklch,var(--color-accent)_38%,transparent)] bg-[color-mix(in_oklch,var(--color-accent)_12%,var(--color-surface))] px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-nowrap uppercase text-[var(--color-accent)]"
      >
        {children}
      </Badge>
    );
  }
  return (
    <Badge
      variant="outline"
      className="h-auto gap-2 rounded-full border-border bg-[var(--color-surface)] px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-nowrap uppercase text-muted-foreground"
    >
      {children}
    </Badge>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════════════════════════ */

function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Why", "How it works", "Outcomes", "Pricing"];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-[240ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-border bg-[color-mix(in_oklch,var(--color-bg-900)_88%,transparent)]"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-7 px-[clamp(16px,3vw,32px)] py-3.5">
        <a href="#top" className="no-underline">
          <LandingWordmark />
        </a>
        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-body text-[13px] font-medium tracking-tight text-muted-foreground no-underline transition-colors duration-150 hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <Button className={cn(landingPrimaryBtnSm, "gap-2.5")}>Reserve your seat →</Button>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-[12%] left-[6%] size-[520px] rounded-full blur-[50px] [animation:z2a-drift_26s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--color-accent) 14%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -top-[6%] right-[4%] size-[460px] rounded-full blur-[48px] [animation:z2a-drift-slow_32s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--color-accent) 10%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-7xl px-[clamp(16px,3vw,28px)] text-center"
      >
        <div className="mb-7 flex flex-wrap justify-center gap-2.5">
          <StatusBadge variant="live">
            <span className="size-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
            Applications open
          </StatusBadge>
        </div>

        <h1 className="font-heading m-0 text-[clamp(48px,7.4vw,96px)] leading-[0.96] font-normal tracking-[-0.035em] text-[var(--color-text)]">
          AI workflows <span className="text-[var(--color-accent)]">you can run.</span>{" "}
          <span className="text-muted-foreground">From Monday.</span>
        </h1>

        <p className="font-body mx-auto mt-6 max-w-[640px] text-[19px] leading-[1.55] text-muted-foreground">
          We find the one task that eats your week, build the agent that handles it, and make sure it
          runs reliably on Monday morning — without you.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button className={cn(landingPrimaryBtn, "gap-2.5")}>
            Reserve your seat
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
          <Button variant="outline" className={cn(landingOutlineBtn, "gap-2.5")}>
            Book a call
          </Button>
        </div>

        <p className="font-mono mt-3.5 text-[11px] tracking-[0.16em] text-[var(--color-text-faint)] uppercase">
          $500 deposit · 100% refund if you aren&apos;t satisfied · 50 seats
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto mt-[72px] max-w-7xl px-[clamp(16px,3vw,32px)]">
        <SplitShowcase />
      </div>
    </section>
  );
}

function SplitShowcase() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 gap-[18px] lg:grid-cols-[1fr_1.25fr]"
    >
      <div
        className="relative min-h-[480px] overflow-hidden rounded-[18px] border border-border p-7"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, color-mix(in oklch, var(--color-accent) 5%, oklch(3.5% 0.008 96)) 0%, oklch(3.5% 0.008 96) 70%)",
        }}
      >
        <CornerOrnaments />
        <Eyebrow className="mb-2">Before</Eyebrow>
        <h3 className="font-heading m-0 text-[38px] font-normal tracking-[-0.03em] text-[rgb(247,247,247)]">
          Chaos.
        </h3>
        <ChaosStack />
      </div>

      <div
        className="relative min-h-[480px] overflow-hidden rounded-[18px] border border-[color-mix(in_oklch,var(--color-accent)_28%,var(--color-border))] p-7 shadow-[0_0_0_1px_color-mix(in_oklch,var(--color-accent)_18%,transparent),0_30px_80px_rgba(229,199,0,0.10)]"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 0%, color-mix(in oklch, var(--color-accent) 11%, oklch(10.5% 0.016 96)) 0%, oklch(8.5% 0.012 96) 70%)",
        }}
      >
        <CornerOrnaments accent />
        <Eyebrow accent className="mb-2">
          After
        </Eyebrow>
        <h3 className="font-heading m-0 text-[38px] font-normal tracking-[-0.03em] text-[var(--color-accent)]">
          Handled.
        </h3>
        <BriefDashboard />
      </div>
    </motion.div>
  );
}

function ChaosStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -60]);

  const items = [
    {
      app: "GCal · 4 conflicts",
      img: "/images/chaos-gcal.png",
      objectPosition: "40% 60%",
      top: 0,
      w: 260,
      h: 130,
      z: 10,
      y: y1,
    },
    {
      app: "Gmail · Inbox 99+",
      img: "/images/chaos-gmail.png",
      objectPosition: "25% 35%",
      top: 90,
      w: 280,
      h: 140,
      z: 20,
      y: y2,
    },
    {
      app: "Slack · #general",
      img: "/images/chaos-slack.png",
      objectPosition: "85% 78%",
      top: 190,
      w: 300,
      h: 150,
      z: 30,
      y: y3,
    },
  ];

  return (
    <div ref={containerRef} style={{ position: "relative", height: 460, marginTop: 16, display: "flex", justifyContent: "center" }}>
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: it.top,
            width: it.w,
            zIndex: it.z,
            y: it.y,
            background: "oklch(12.5% 0.018 96)",
            border: "1px solid oklch(21% 0.02 96)",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow:
              "0 24px 50px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.06) inset",
          }}
        >
          {/* window chrome strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 12px",
              background: "oklch(10.5% 0.016 96)",
              borderBottom: "1px solid oklch(21% 0.02 96)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#ff5f57",
              }}
            />
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#febc2e",
              }}
            />
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#28c840",
              }}
            />
            <span
              style={{
                marginLeft: 10,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-text-faint)",
              }}
            >
              {it.app}
            </span>
          </div>
          {/* cropped screenshot */}
          <div style={{ position: "relative", height: it.h, background: "#000" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={it.img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: it.objectPosition,
                filter: "saturate(0.85) brightness(0.92)",
                display: "block",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
                pointerEvents: "none",
              }}
            />
          </div>
        </motion.div>
      ))}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 40,
          background:
            "linear-gradient(180deg, transparent 60%, oklch(3.5% 0.008 96) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRIEF DASHBOARD
   ═══════════════════════════════════════════════════════════════ */

function BriefDashboard() {
  return (
    <div
      style={{
        marginTop: 22,
        background: "oklch(10.5% 0.016 96)",
        border: "1px solid oklch(21% 0.02 96)",
        borderRadius: 14,
        padding: 14,
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 30px rgba(0,0,0,0.45)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <Eyebrow>Today&apos;s brief · 7:30 AM</Eyebrow>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--color-accent)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--color-accent)",
              boxShadow: "0 0 8px var(--color-accent)",
            }}
          />
          live
        </span>
      </div>

      <NeedsAttentionModule />
      <TasksModule />
      <ProposalsModule />
    </div>
  );
}

function ModuleCard({
  label,
  count,
  children,
}: {
  label: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "oklch(12.5% 0.018 96)",
        border: "1px solid oklch(21% 0.02 96)",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 8,
        }}
      >
        <Eyebrow>{label}</Eyebrow>
        {count != null && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              padding: "1px 6px",
              background: "oklch(15.5% 0.022 96)",
              borderRadius: 4,
              color: "var(--color-text-muted)",
            }}
          >
            {count}
          </span>
        )}
      </div>
      {children}
    </motion.div>
  );
}

function NeedsAttentionModule() {
  const items = [
    {
      who: "Investor",
      what: "Q3 numbers",
      when: "4h",
      avatar: "IN",
      color: "#ff7a59",
    },
    {
      who: "Sara M.",
      what: "Approve hire — Eng",
      when: "1d",
      avatar: "SM",
      color: "#e5c700",
    },
  ];
  return (
    <ModuleCard label="Needs your attention" count={items.length}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {items.map((p, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 8px",
              background: "oklch(10.5% 0.016 96)",
              borderRadius: 6,
              border: "1px solid color-mix(in oklch, var(--color-accent) 35%, oklch(21% 0.02 96))",
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: p.color,
                color: "#000",
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--font-body)",
                fontSize: 10,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {p.avatar}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--color-text)",
                  fontWeight: 600,
                }}
              >
                {p.who}
              </p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {p.what}
              </p>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--color-text-faint)",
              }}
            >
              {p.when}
            </span>
          </div>
        ))}
      </div>
    </ModuleCard>
  );
}

function TasksModule() {
  const tasks = [
    { label: "Drafted reply to investor email", meta: "awaiting sign-off", done: false },
    { label: "Rescheduled 4 conflicts for Tuesday", meta: "done", done: true },
    {
      label: "Pulled Q3 numbers for board deck",
      meta: "done · slide 7–9",
      done: true,
    },
  ];
  return (
    <ModuleCard label="Tasks" count={tasks.length}>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {tasks.map((t, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span
              style={{
                marginTop: 3,
                width: 14,
                height: 14,
                borderRadius: 4,
                background: t.done ? "var(--color-accent)" : "transparent",
                border:
                  "1.5px solid " +
                  (t.done ? "var(--color-accent)" : "var(--color-border-strong)"),
                display: "grid",
                placeItems: "center",
                flexShrink: 0,
              }}
            >
              {t.done && (
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="var(--color-accent-ink)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--color-text)",
                }}
              >
                {t.label}
              </p>
              <p
                style={{
                  margin: "1px 0 0",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                {t.meta}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </ModuleCard>
  );
}

function ProposalsModule() {
  const props = [
    { title: "Auto-triage repeat customer questions", impact: "+6h/wk" },
    { title: "Weekly metrics digest from Linear + GA", impact: "+2h/wk" },
  ];
  return (
    <ModuleCard label="Proposals" count={props.length}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {props.map((p, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 10px",
              background: "oklch(10.5% 0.016 96)",
              border: "1px dashed color-mix(in oklch, var(--color-accent) 30%, oklch(21% 0.02 96))",
              borderRadius: 6,
            }}
          >
            <span
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
                fontSize: 14,
              }}
            >
              +
            </span>
            <span
              style={{
                flex: 1,
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "var(--color-text)",
              }}
            >
              {p.title}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--color-accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {p.impact}
            </span>
          </div>
        ))}
      </div>
    </ModuleCard>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTEGRATIONS ROW
   ═══════════════════════════════════════════════════════════════ */

function IntegrationsRow() {
  const logos = [
    {
      name: "Gmail",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg",
    },
    {
      name: "Slack",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/slack.svg",
    },
    {
      name: "Notion",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg",
    },
    {
      name: "Linear",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linear.svg",
    },
    {
      name: "Google Calendar",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlecalendar.svg",
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",
    },
  ];

  const LogoItem = ({ logo }: { logo: (typeof logos)[number] }) => (
    <div className="flex w-32 shrink-0 items-center justify-center px-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.name}
        className="h-7 w-auto opacity-70 grayscale transition-opacity duration-200 hover:opacity-100 hover:grayscale-0"
        style={{ filter: "brightness(0) invert(1)" }}
        loading="lazy"
      />
    </div>
  );

  return (
    <section className="px-[clamp(16px,3vw,32px)] pt-16 pb-6">
      <div className="mx-auto max-w-7xl text-center">
        <EyebrowRule center>Connects to the tools you already use</EyebrowRule>

        <div className="relative mx-auto mt-[26px] h-[72px] max-w-3xl overflow-hidden">
          <InfiniteSlider
            className="flex h-full items-center"
            duration={30}
            gap={0}
          >
            {logos.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </InfiniteSlider>

          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[120px]"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[120px]"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURES SECTION
   ═══════════════════════════════════════════════════════════════ */

function FeaturesSection() {
  return (
    <div id="why">
      <div className="mx-auto max-w-7xl px-[clamp(16px,3vw,32px)] pb-4 pt-20 text-center">
        <EyebrowRule center>What changes</EyebrowRule>
        <h2 className="font-heading mt-5 text-[clamp(36px,3.6vw,54px)] leading-[1.02] font-normal tracking-[-0.025em] text-[var(--color-text)]">
          Morning brief. No new tools.{" "}
          <span className="text-[var(--color-accent)]">One keystroke away.</span>
        </h2>
      </div>
      <Features />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OUTCOMES
   ═══════════════════════════════════════════════════════════════ */

function Outcomes() {
  const pillars = [
    {
      eyebrow: "Strategy",
      title: "Find the right wins",
      description:
        "The one workflow that compounds — the task your team repeats 50 times a week, not the one that looks impressive in a deck.",
      img: "/images/tenex-brain-statue.webp",
      icon: "/images/icon-brain.png",
    },
    {
      eyebrow: "Reach",
      title: "Build the systems",
      description:
        "Agents that reach into the tools you already pay for — Notion, Slack, Gmail, Drive, your CRM — without copy-paste theater.",
      img: "/images/tenex-globe-statue.webp",
      icon: "/images/icon-globe.png",
    },
    {
      eyebrow: "Execution",
      title: "Make it stick",
      description:
        "Not a demo. Not a hackathon. A working first version on Monday, with a clear way to run it and a check that keeps it reliable.",
      img: "/images/tenex-hammer-statue.webp",
      icon: "/images/icon-hammer.png",
    },
  ];
  return (
    <section id="outcomes" className="px-[clamp(16px,3vw,32px)] py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-[720px]">
          <EyebrowRule>Three pillars</EyebrowRule>
          <h2 className="font-heading mt-5 text-[clamp(36px,4.4vw,56px)] leading-[1.02] font-normal tracking-[-0.025em] text-[var(--color-text)]">
            Ancient craft. <span className="text-[var(--color-accent)]">New speed.</span>
          </h2>
          <p className="font-body mt-[18px] text-[17px] leading-[1.55] text-muted-foreground">
            We&apos;ve always found the right problem, built the right system, and made sure it sticks.
            We&apos;re just faster now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative overflow-hidden rounded-[18px] border border-border bg-[var(--color-surface)] shadow-[0_1px_2px_rgba(0,0,0,0.34)] transition-[transform,border-color] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[color-mix(in_oklch,var(--color-accent)_30%,var(--color-border))]"
            >
              <CornerOrnaments accent inset={12} />
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  background: "oklch(3.5% 0.008 96)",
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(0.25) contrast(1.05)",
                    mixBlendMode: "luminosity",
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 50%, color-mix(in oklch, var(--color-surface) 92%, transparent))",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 14,
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background:
                      "color-mix(in oklch, var(--color-surface) 88%, transparent)",
                    border:
                      "1px solid color-mix(in oklch, var(--color-accent) 32%, var(--color-border))",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.icon} alt="" style={{ width: 26, height: 26 }} />
                </div>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <Eyebrow>{p.eyebrow}</Eyebrow>
                <h3
                  style={{
                    marginTop: 8,
                    fontFamily: "var(--font-heading)",
                    fontSize: 26,
                    lineHeight: 1.1,
                    letterSpacing: "-0.015em",
                    color: "var(--color-text)",
                    margin: "8px 0 0",
                    fontWeight: 400,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    marginTop: 12,
                    fontFamily: "var(--font-body)",
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "var(--color-text-muted)",
                    margin: "12px 0 0",
                  }}
                >
                  {p.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   AGENT LOOP
   ═══════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════
   DATA TO WORK
   ═══════════════════════════════════════════════════════════════ */

function DataToWorkSection() {
  const promptChips = [
    [
      "What do I need to focus on today?",
      "Remind me about...",
      "Summarize everything I missed.",
      "Prepare me for my next meeting.",
    ],
    [
      "Turn this into actionable tasks.",
      "Show me every open thread.",
      "Plan my ideal week.",
      "Explain this to me.",
    ],
    [
      "What needs my attention right now?",
      "Draft the follow-up email.",
      "Give me good news",
      "What are the risks right now?",
    ],
  ];

  return (
    <section className="px-[clamp(16px,3vw,32px)] py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-heading text-[clamp(36px,4.4vw,56px)] leading-[1.02] font-normal tracking-[-0.025em] text-[var(--color-text)]">
          Put your data to{" "}
          <span className="text-[var(--color-accent)]">work</span>
        </h2>
        <p className="font-body mx-auto mt-4 max-w-[520px] text-[17px] leading-[1.55] text-muted-foreground">
          Your company already has all the data. Z2A makes sense of it.
        </p>

        <div className="relative mt-16">
          {/* Background chips — spread across full width in 3 rows; card overlays the middle */}
          <div
            aria-hidden="true"
            className="hidden md:flex flex-col gap-5 select-none pointer-events-none"
          >
            {promptChips.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={cn(
                  "flex justify-between gap-3",
                  rowIdx === 1 && "px-12",
                  rowIdx !== 1 && "px-2",
                )}
              >
                {row.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex shrink-0 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-muted)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile chip stack — render one rail without overlap */}
          <div className="flex flex-wrap justify-center gap-2.5 md:hidden">
            {[...promptChips[0], ...promptChips[2]].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs text-[var(--color-text-muted)]"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Central chatbot card — absolutely centered over chips on md+ */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex justify-center md:absolute md:inset-0 md:mt-0 md:items-center"
          >
            <div className="relative w-full max-w-[420px] rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45),0_0_0_1px_var(--color-border)]">
              <div className="flex flex-col items-center">
                <BrandOrb size={44} glow />
                <p className="font-heading mt-3 text-lg tracking-tight text-[var(--color-text)]">
                  Ask Z2A Anything...
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[oklch(10.5%_0.016_96)] px-4 py-3">
                <span className="flex-1 text-left text-sm text-[var(--color-text-muted)]">
                  Give me an update on the sales team
                </span>
                <button
                  type="button"
                  className="grid size-8 place-items-center rounded-lg bg-[var(--color-accent)] text-[var(--color-accent-ink)]"
                  aria-label="Send"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-[var(--color-text-faint)]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Add document
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Analyze", "Generate Content", "Research"].map((action) => (
                  <span
                    key={action}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[oklch(10.5%_0.016_96)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      {action === "Analyze" && (
                        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                      {action === "Generate Content" && (
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                      {action === "Research" && (
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                    {action}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════════════ */

function FinalCTA() {
  return (
    <section id="pricing" className="px-[clamp(16px,3vw,32px)] pb-24 pt-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[color-mix(in_oklch,var(--color-accent)_24%,var(--color-border))] px-8 py-[clamp(56px,7vw,96px)] text-center"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 0%, color-mix(in oklch, var(--color-accent) 12%, var(--color-bg-900)) 0%, var(--color-bg-900) 65%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, color-mix(in oklch, var(--color-accent) 18%, transparent) 0%, transparent 70%)",
          }}
        />
        <CornerOrnaments accent inset={20} />
        <div className="relative">
          <div className="mb-4 inline-flex justify-center">
            <BrandOrb size={48} glow />
          </div>
          <Eyebrow accent>Spring 2026 cohort</Eyebrow>
          <h2 className="font-heading mt-3.5 text-[clamp(40px,5.6vw,84px)] leading-[0.96] font-normal tracking-[-0.03em] text-[var(--color-text)]">
            From zero, <span className="text-[var(--color-accent)]">to agent.</span>
          </h2>
          <p className="font-body mx-auto mt-5 max-w-[560px] text-lg leading-[1.55] text-muted-foreground">
            One weekend in Toronto. One repeat task from your work. A workflow you can run on Monday — and
            a plan to keep it running.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button className={cn(landingPrimaryBtn, "gap-2.5")}>
              Reserve your seat
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button variant="outline" className={cn(landingOutlineBtn, "gap-2.5")}>
              Read the syllabus
            </Button>
          </div>
          <p className="font-mono mt-[18px] text-[11px] tracking-[0.16em] text-[var(--color-text-faint)] uppercase">
            $500 deposit · 7 of 50 seats remaining · 100% refund
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function LandingPageV2() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="z2a-landing dark">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent)] origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      <LandingNav />
      <main>
        <Hero />
        <BlurFade delay={0.2}>
          <AnimatedIntegrations />
        </BlurFade>
        <BlurFade delay={0.2}>
          <FeaturesSection />
        </BlurFade>
        <BlurFade delay={0.2}>
          <DataToWorkSection />
        </BlurFade>
        <BlurFade delay={0.2}>
          <FinalCTA />
        </BlurFade>
      </main>
    </div>
  );
}
