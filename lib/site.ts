import type { Metadata } from "next";

export const site = {
  name: "张向北AI进化论",
  englishName: "Zhang Xiangbei AI Evolution",
  domain: "www.zhangxiangbei.com",
  url: "https://www.zhangxiangbei.com",
  ogImage: "/og-default.svg",
  email: "contact@zhangxiangbei.com",
  identity:
    "张向北，AI产业研究者、企业AI应用训练者、连续创业经营者。持续研究AI公司、AI产品、AI工作流和企业AI化，把AI从热闹新闻变成可理解、可训练、可复用的真实能力。",
  tagline: "用公司研究、产业判断和真实工作流实践，把AI变成可训练、可复用、可落地的能力。",
  description:
    "张向北，AI产业研究者、企业AI应用训练者、连续创业经营者。通过张向北AI进化论持续整理AI公司研究、AI产品观察、AI工作流实践、AI训练体系和公开项目。",
  founder: "张向北",
  founderEnglish: "Zhang Xiangbei",
  roles: ["AI产业研究者", "企业AI应用训练者", "连续创业经营者"],
  rolesEnglish: ["AI Industry Researcher", "Enterprise AI Application Trainer", "Serial Entrepreneur and Operator"]
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
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
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
  { href: "/ai-workflow", label: "AI工作流" },
  { href: "/projects", label: "公开项目" },
  { href: "/about", label: "关于张向北" }
];
