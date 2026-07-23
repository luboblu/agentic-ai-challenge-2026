import type { Metadata } from "next";
import "./globals.css";

const title = "2026 Agentic AI 智慧代理人企業挑戰賽";
const description = "企業出題、學界解題。全國大專校院學生運用 Agentic AI 挑戰企業真實問題，打造可驗證、可落地的智慧代理人解決方案。";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const metadataBase = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "zh_TW",
    images: [{ url: "og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
