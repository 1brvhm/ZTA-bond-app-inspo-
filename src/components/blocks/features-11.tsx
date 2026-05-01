"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";

const LOGOS = [
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg", alt: "Gmail" },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linear.svg", alt: "Linear" },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg", alt: "Notion" },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/slack.svg", alt: "Slack" },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlecalendar.svg", alt: "Google Calendar" },
  { src: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg", alt: "GitHub" },
];

const card =
  "relative overflow-hidden rounded-[18px] bg-[oklch(8.5%_0.012_96)] shadow-[0_1px_2px_rgba(0,0,0,0.5)]";

const accentBorder =
  "border border-[color-mix(in_oklch,var(--color-accent)_22%,oklch(21%_0.02_96))]";

const mutedBorder = "border border-[oklch(21%_0.02_96)]";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-accent)]">
      {children}
    </p>
  );
}

export function Features() {
  return (
    <section className="bg-[oklch(3.5%_0.008_96)] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto grid gap-3 sm:grid-cols-5">

          {/* ── Card 1: Mail screenshot ── */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`${card} ${accentBorder} sm:col-span-3`}
          >
            <div className="p-7 md:p-8">
              <Eyebrow>Morning brief</Eyebrow>
              <h3
                className="font-heading mt-3 text-[22px] leading-[1.15] tracking-[-0.02em]"
                style={{ color: "var(--color-text)" }}
              >
                The brief lands at 7:30 AM.
              </h3>
              <p
                className="font-body mt-2 max-w-sm text-sm leading-[1.6]"
                style={{ color: "var(--color-text-muted)" }}
              >
                Your agent runs overnight — reads Slack, Gmail, and Linear, then ranks what actually
                needs you. Open it. Act. Done.
              </p>
            </div>

            <div className="relative h-fit pl-6 md:pl-10">
              <div
                className="pointer-events-none absolute -inset-6"
                style={{
                  background:
                    "radial-gradient(75% 95% at 50% 0%, transparent, oklch(8.5% 0.012 96) 100%)",
                }}
              />
              <div className="overflow-hidden rounded-tl-lg">
                <img
                  src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                  alt="AI brief dashboard"
                  width={1207}
                  height={929}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Card 2: Calendar screenshot ── */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`${card} ${mutedBorder} sm:col-span-2`}
          >
            <div className="p-7 md:p-8">
              <Eyebrow>Instant answers</Eyebrow>
              <h3
                className="font-heading mt-3 text-[22px] leading-[1.15] tracking-[-0.02em]"
                style={{ color: "var(--color-text)" }}
              >
                Ask once. Get answers from everywhere you work.
              </h3>
            </div>

            <div className="relative px-4 pb-4">
              <div
                className="pointer-events-none absolute -inset-6"
                style={{
                  background:
                    "radial-gradient(50% 75% at 75% 50%, transparent, oklch(8.5% 0.012 96) 100%)",
                }}
              />
              <div className="overflow-hidden rounded-xl">
                <img
                  src="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&w=3840&q=75"
                  alt="Calendar view"
                  width={1207}
                  height={929}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Card 3: Hotkey ── */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`${card} ${mutedBorder} sm:col-span-2 flex flex-col items-center justify-center gap-10 p-8 md:p-12`}
          >
            <div className="text-center">
              <Eyebrow>Hotkey access</Eyebrow>
              <h3
                className="font-heading mt-3 text-[22px] leading-[1.2] tracking-[-0.02em]"
                style={{ color: "var(--color-text)" }}
              >
                Always one keystroke away.
              </h3>
            </div>

            <div className="flex gap-4">
              {[
                {
                  label: <><span className="absolute right-2 top-1.5 font-mono text-[10px] tracking-widest" style={{ color: "var(--color-text-faint)" }}>fn</span><Globe className="mt-auto size-4" style={{ color: "var(--color-text-muted)" } as React.CSSProperties} /></>,
                },
                {
                  label: <span className="font-heading text-xl" style={{ color: "var(--color-text)" }}>K</span>,
                },
              ].map((key, i) => (
                <div
                  key={i}
                  className="relative flex aspect-square size-16 items-center justify-center rounded-[10px] p-3"
                  style={{
                    background: "oklch(12.5% 0.018 96)",
                    boxShadow:
                      "0 0 0 1px color-mix(in oklch, var(--color-accent) 18%, oklch(21% 0.02 96)), 0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  {key.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 4: Logo grid ── */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`${card} ${accentBorder} sm:col-span-3 p-7 md:p-10`}
          >
            <Eyebrow>Integrations</Eyebrow>
            <h3
              className="font-heading mt-3 text-[22px] leading-[1.15] tracking-[-0.02em]"
              style={{ color: "var(--color-text)" }}
            >
              No new apps. No new tabs.
            </h3>
            <p
              className="font-body mt-2 max-w-sm text-sm leading-[1.6]"
              style={{ color: "var(--color-text-muted)" }}
            >
              Gmail, Slack, Notion, Linear, GitHub. Same tools. Zero migration.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
              {LOGOS.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex aspect-square items-center justify-center rounded-[12px] p-4"
                  style={{
                    background: "oklch(12.5% 0.018 96)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.4)",
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={28}
                    height={28}
                    className="size-7 opacity-80"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
