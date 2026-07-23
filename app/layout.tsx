import type { Metadata } from "next";
import "./globals.css";

const title = "NAPAI Agentic AI 校園落地創新應用競賽 × TAAI 2026";
const description = "全國大專校院學生以 Agentic AI 回應校園與產業真實需求，打造可自主規劃、串接系統並接受實機 Demo 驗證的落地應用。";
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
  },
  twitter: { card: "summary", title, description },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
