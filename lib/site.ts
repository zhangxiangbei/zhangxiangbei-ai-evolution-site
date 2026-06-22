import type { Metadata } from "next";

export const site = {
  name: "张向北AI进化论",
  englishName: "Zhang Xiangbei AI Evolution",
  domain: "www.zhangxiangbei.com",
  url: "https://www.zhangxiangbei.com",
  ogImage: "/og-default.svg",
  email: "contact@zhangxiangbei.com",
  identity:
    "张向北，一个喜欢徒步和独处的终身学习实践者，AI产品经理，AI高级培训讲师。持续学习和研究AI产品、AI公司与AI行业变化，想把AI从热闹，变成你我都能用起来的门道。",
  tagline: "持续学习和研究AI，想把AI从热闹，变成你我都能用起来的门道。",
  description:
    "张向北，一个喜欢徒步和独处的终身学习实践者，AI产品经理，AI高级培训讲师。持续学习和研究AI产品、AI公司与AI行业变化，想把AI从热闹，变成你我都能用起来的门道。",
  founder: "张向北",
  founderEnglish: "Zhang Xiangbei",
  roles: ["终身学习实践者", "AI产品经理", "AI高级培训讲师"],
  rolesEnglish: ["Lifelong Learning Practitioner", "AI Product Manager", "Senior AI Trainer"]
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
  { href: "/research", label: "研究文章" },
  { href: "/course", label: "AI课程" },
  { href: "/community", label: "AI进化岛" },
  { href: "/about", label: "关于张向北" }
];
