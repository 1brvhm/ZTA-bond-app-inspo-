import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Zero to Agent — From zero, to agent.",
  description:
    "Toronto-based agentic engineers acting like your embedded AI champion: find the right wins, build the systems, and make the change stick.",
};

export default function LandingPageV2Layout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
