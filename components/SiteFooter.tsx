import Link from "next/link";
import { getPlatform } from "@/data/platforms";
import { site } from "@/lib/site";

const emailPlatform = getPlatform("邮箱");

const footerLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于张向北" },
  { href: "/media-kit", label: "媒体资料包" },
  { href: "/links", label: "全平台入口" },
  { href: "/ai-evolution", label: "AI进化论" },
  { href: "/ai-company-300", label: "AI公司300强" },
  { href: "/ai-workflow", label: "AI工作流实践" },
  { href: "/operator", label: "经营者视角" },
  { href: "/course", label: "AI课程" },
  { href: "/community", label: "社群" },
  { href: "/notes", label: "AI观察笔记" },
  { href: "/newsletter", label: "AI值得看周刊" },
  { href: "/projects", label: "公开项目" },
  { href: "/resources", label: "开放资源" },
  { href: "/data", label: "开放数据" },
  { href: "/methodology", label: "研究方法" },
  { href: "/editorial-policy", label: "编辑规范" },
  { href: emailPlatform?.url || `mailto:${site.email}`, label: "邮箱" }
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">张向北 · {site.name}</p>
        <p>{site.tagline}</p>
      </div>
      <div className="footer-links" aria-label="页脚导航">
        {footerLinks.map((item) =>
          item.href.startsWith("/") ? (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ) : (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          )
        )}
        <a href="/llms.txt">llms.txt</a>
      </div>
      <p className="footer-meta">
        Official website: {site.domain} · Email: {site.email}
      </p>
    </footer>
  );
}
