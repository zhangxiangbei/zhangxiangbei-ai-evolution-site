import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SimpleList } from "@/components/PageBlocks";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI公司深拆",
  description: "AI公司深拆列表页，按统一结构持续拆解全球重要AI公司、产品与商业模式。",
  path: "/companies"
});

const templateSections = [
  "公司简介",
  "核心产品",
  "所属赛道",
  "关键时间线",
  "技术路线",
  "商业模式",
  "竞争格局",
  "对普通人的意义",
  "对创业者的意义",
  "张向北核心判断",
  "相关公司",
  "参考来源",
  "更新时间"
];

const firstBatch = [
  "OpenAI",
  "DeepSeek",
  "Anthropic",
  "Perplexity",
  "Anysphere / Cursor",
  "Midjourney",
  "Runway",
  "MiniMax",
  "月之暗面",
  "智谱AI",
  "字节跳动AI相关产品",
  "阿里通义",
  "百度文心",
  "腾讯混元",
  "快手可灵",
  "生数科技 / Vidu"
];

export default function CompaniesPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "AI公司深拆",
          description: "AI公司深拆列表页，按统一结构持续拆解全球重要AI公司、产品与商业模式。",
          url: `${site.url}/companies`,
          inLanguage: "zh-CN",
          isPartOf: {
            "@type": "WebSite",
            name: site.name,
            url: site.url
          }
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Company Research</p>
          <h1>AI公司深拆</h1>
          <p>每一家AI公司深拆，都将按照统一结构进行分析，避免碎片化理解公司和产品。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>统一分析模板</h2>
          <p>
            第一版先建立公司研究的公开结构。后续每家公司将基于可引用资料、产品观察和产业判断补充独立页面。
          </p>
          <SimpleList items={templateSections} />
          <p>
            <Link href="/companies/template">查看 AI公司深拆模板页</Link>
          </p>

          <h2>第一批深拆对象</h2>
          <ul className="company-list">
            {firstBatch.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
