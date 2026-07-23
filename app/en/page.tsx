import type { Metadata } from "next";
import HomePage from "../HomePage";
import { content } from "../i18n";

const t = content.en;

export const metadata: Metadata = {
  title: "NAPAI Agentic AI Campus Innovation Challenge × TAAI 2026",
  description:
    "University students nationwide build and live-demo deployable Agentic AI applications for real campus and industry needs.",
  openGraph: {
    title: "NAPAI Agentic AI Campus Innovation Challenge × TAAI 2026",
    description: t.hero.lead,
    type: "website",
    locale: "en_US",
  },
};

export default function Page() {
  return <HomePage lang="en" />;
}
