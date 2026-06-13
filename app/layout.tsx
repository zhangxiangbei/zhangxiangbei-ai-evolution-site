import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  publisher: site.name,
  alternates: {
    canonical: site.url,
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: "张向北AI进化论 RSS" },
        { url: "/research/feed.xml", title: "张向北研究文章 RSS" },
        { url: "/notes/feed.xml", title: "AI观察笔记 RSS" }
      ]
    }
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.tagline}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage]
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#0b0d0b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
