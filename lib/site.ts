import type { Metadata } from "next";

export const site = {
  name: "张向北AI进化论",
  englishName: "Zhang Xiangbei AI Evolution",
  domain: "zhangxiangbei.com",
  url: "https://zhangxiangbei.com",
  ogImage: "/og-default.svg",
  email: "contact@zhangxiangbei.com",
  tagline: "用公司研究和产业判断，帮助普通人看懂AI时代。",
  description:
    "张向北AI进化论，是一个面向普通人的AI认知研究品牌。持续观察全球重要AI公司、AI产品与AI产业趋势，提炼AI时代的关键判断，帮助普通人降低认知成本，提高决策质量。",
  founder: "张向北",
  founderEnglish: "Zhang Xiangbei / Alex Zhang"
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function absoluteUrl(path = "/") {
  if (path === "/") {
    return site.url;
  }

  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website"
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title === site.name ? title : `${title} | ${site.name}`;
  const imageUrl = absoluteUrl(site.ogImage);

  return {
    metadataBase: new URL(site.url),
    title: {
      absolute: fullTitle
    },
    description,
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": [
          { url: "/feed.xml", title: "张向北AI进化论 RSS" },
          { url: "/research/feed.xml", title: "张向北研究文章 RSS" },
          { url: "/notes/feed.xml", title: "AI观察笔记 RSS" }
        ]
      }
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "zh_CN",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${site.name} - ${site.tagline}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl]
    }
  };
}

export const coreNavItems = [
  { href: "/ai-evolution/12-judgments", label: "12个判断" },
  { href: "/ai-company-300", label: "AI公司300强" },
  { href: "/newsletter", label: "AI值得看" },
  { href: "/research", label: "研究文章" },
  { href: "/course", label: "课程" },
  { href: "/community", label: "AI进化岛" },
  { href: "/about", label: "关于" }
];
