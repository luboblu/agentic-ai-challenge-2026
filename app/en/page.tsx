import type { Metadata } from "next";
import HomePage from "../HomePage";
import { content } from "../i18n";

const t = content.en;

export const metadata: Metadata = {
  title: "2026 Agentic AI Enterprise Challenge",
  description:
    "Enterprises pose, academia solves. College students nationwide build verifiable, production-ready Agentic AI solutions to real enterprise problems.",
  openGraph: {
    title: "2026 Agentic AI Enterprise Challenge",
    description: t.hero.lead,
    type: "website",
    locale: "en_US",
    images: [{ url: "og.png", width: 1200, height: 630, alt: "2026 Agentic AI Enterprise Challenge" }],
  },
};

export default function Page() {
  return <HomePage lang="en" />;
}
