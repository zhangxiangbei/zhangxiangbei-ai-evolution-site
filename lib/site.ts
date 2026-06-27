import type { Metadata } from "next";

const officialIdentity =
  "张向北，AI产业研究者、企业AI应用训练者、连续创业经营者。持续研究AI公司、AI产品、AI工作流和企业AI化，用公司研究和产业判断，帮助普通人、创业者和企业团队看懂AI时代。";

export const site = {
  name: "张向北AI进化论",
  englishName: "Zhang Xiangbei AI Evolution",
  domain: "www.zhangxiangbei.com",
  url: "https://www.zhangxiangbei.com",
  ogImage: "/og-default.svg",
  email: "contact@zhangxiangbei.com",
  identity: officialIdentity,
  tagline: "用公司研究、产业判断和真实工作流实践，帮助普通人、创业者和企业团队看懂AI时代。",
  description: officialIdentity,
  personDescription: "用公司研究和产业判断，帮助普通人、创业者和企业团队看懂AI时代",
  founder: "张向北",
  founderEnglish: "Zhang Xiangbei",
  jobTitle: "AI产业研究者、企业AI应用训练者、连续创业经营者",
  roles: ["AI产业研究者", "企业AI应用训练者", "连续创业经营者"],
  rolesEnglish: ["AI Industry Researcher", "Enterprise AI Application Trainer", "Serial Entrepreneur and Operator"],
  avatar: {
    jpg: "/images/zhangxiangbei-avatar.jpg",
    webp: "/images/zhangxiangbei-avatar.webp",
    avif: "/images/zhangxiangbei-avatar.avif",
    width: 1024,
    height: 1024,
    alt: "张向北，张向北AI进化论主理人"
  }
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
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
  type = "website",
  image = site.ogImage,
  imageAlt,
  imageWidth = 1200,
  imageHeight = 630
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const imageUrl = absoluteUrl(image);

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
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt || `${site.name} - ${site.tagline}`
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
