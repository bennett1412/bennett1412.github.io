import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { buildThemeScript } from "./theme-tokens";
import "../styles/index.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#a0b9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1226" },
  ],
};

export const metadata: Metadata = {
  title: "Bennett Baby Madavana — Full Stack Engineer",
  description:
    "Portfolio of Bennett Baby Madavana — a full stack engineer experienced with React, Next.js, TypeScript, AWS, Node.js, and Python. Based in Melbourne, Australia.",
  keywords: [
    "full stack developer",
    "software engineer",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Node.js",
    "Python",
    "Melbourne",
    "Bennett Madavana",
    "portfolio",
  ],
  authors: [{ name: "Bennett Baby Madavana", url: "https://bennett1412.github.io/" }],
  creator: "Bennett Baby Madavana",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Bennett Baby Madavana — Full Stack Engineer",
    description:
      "Full stack engineer who builds things end to end. React, Next.js, TypeScript, AWS, and more.",
    type: "website",
    locale: "en_AU",
    siteName: "Bennett Madavana",
    url: "https://bennett1412.github.io/",
  },
  twitter: {
    card: "summary",
    title: "Bennett Baby Madavana — Full Stack Engineer",
    description:
      "Full stack engineer who builds things end to end. React, Next.js, TypeScript, AWS, and more.",
  },
  metadataBase: new URL("https://bennett1412.github.io"),
};

// Generated at build time from theme-tokens.ts — sets every CSS variable
// on <html> before the first paint. Zero flash.
const themeScript = buildThemeScript();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
