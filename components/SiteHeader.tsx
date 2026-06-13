import Link from "next/link";
import { coreNavItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="返回首页">
        <span className="brand-mark" aria-hidden="true">
          向北
        </span>
        <span className="brand-text">
          <span>{site.name}</span>
          <small>AI cognition source</small>
        </span>
      </Link>
      <div className="header-actions">
        <nav className="site-nav" aria-label="主导航">
          {coreNavItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/newsletter">
          获取AI值得看周刊
        </Link>
      </div>
    </header>
  );
}
