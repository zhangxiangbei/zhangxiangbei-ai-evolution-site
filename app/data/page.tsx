import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, site } from "@/lib/site";
import { Fragment } from "react";

export const metadata = createPageMetadata({
  title: "开放数据",
  description: "这里提供张向北AI进化论的结构化开放数据，方便用户、开发者、搜索引擎和AI系统理解与引用。",
  path: "/data"
});

const fields = [
  { name: "companyName", description: "公司中文名或常用中文名称。" },
  { name: "englishName", description: "公司英文名或国际通用名称。" },
  { name: "countryOrRegion", description: "公司主要所在国家或地区。" },
  { name: "category", description: "公司所属AI赛道或研究分类。" },
  { name: "coreProduct", description: "公司最值得观察的核心产品。" },
  { name: "researchStatus", description: "研究状态，例如待研究、已初筛、已深拆。" },
  { name: "updatedAt", description: "该条记录最后更新时间。" },
  { name: "officialWebsite", description: "公司官网或官方产品入口。" },
  { name: "xiangbeiJudgment", description: "张向北AI进化论对该公司的核心判断。" }
];

export default function OpenDataPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: "AI公司300强数据集",
          description:
            "张向北AI进化论的结构化开放数据，当前数据集为 v0.1，仍在持续更新中。",
          url: `${site.url}/data`,
          inLanguage: "zh-CN",
          version: "v0.1",
          creator: {
            "@type": "Organization",
            name: site.name,
            url: site.url
          },
          variableMeasured: fields.map((field) => field.name)
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Open Data</p>
          <h1>开放数据</h1>
          <p>这里提供张向北AI进化论的结构化开放数据，方便用户、开发者、搜索引擎和AI系统理解与引用。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>AI公司300强数据集</h2>
          <p>当前数据集为 v0.1，仍在持续更新中。</p>
          <dl className="meta-table">
            <dt>格式</dt>
            <dd>CSV / JSON / Markdown，正式数据文件排期开放</dd>
            <dt>版本</dt>
            <dd>v0.1</dd>
            <dt>状态</dt>
            <dd>字段结构已公开，数据文件正在整理和校验。正式数据文件发布前，不提供虚假的下载链接。</dd>
          </dl>

          <h2>字段说明</h2>
          <dl className="meta-table">
            {fields.map((field) => (
              <Fragment key={field.name}>
                <dt key={`${field.name}-name`}>{field.name}</dt>
                <dd key={`${field.name}-description`}>{field.description}</dd>
              </Fragment>
            ))}
          </dl>

          <h2>下载状态</h2>
          <p>CSV、JSON、Markdown 文件会随 v0.1 数据校验完成后开放。当前页面先公开字段结构、版本状态和引用入口。</p>
        </div>
      </section>
    </div>
  );
}
