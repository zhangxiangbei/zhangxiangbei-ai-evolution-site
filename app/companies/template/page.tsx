import { JsonLd } from "@/components/JsonLd";
import { NumberedList } from "@/components/PageBlocks";
import { SourceInfo } from "@/components/SourceInfo";
import { getSameAsUrls } from "@/data/platforms";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI公司深拆模板",
  description: "每一家AI公司深拆，都将按照统一结构进行分析，避免碎片化理解公司和产品。",
  path: "/companies/template",
  type: "article"
});

const template = [
  { title: "公司简介", text: "说明公司基本定位、成立背景、核心角色与当前公开识别信息。" },
  { title: "核心产品", text: "整理公司的主要AI产品、功能形态、用户场景和产品关系。" },
  { title: "所属赛道", text: "判断公司所在的AI产业细分赛道，以及与上下游生态的关系。" },
  { title: "关键时间线", text: "记录重要产品发布、融资、战略调整、商业化节点与行业事件。" },
  { title: "技术路线", text: "梳理公司采用的模型、Agent、搜索、多模态、工作流等关键技术路径。" },
  { title: "商业模式", text: "分析公司的收入方式、定价方式、客户结构和增长路径。" },
  { title: "竞争格局", text: "比较公司与同赛道产品、平台型公司和新进入者之间的关系。" },
  { title: "对普通人的意义", text: "解释这家公司和产品变化会如何影响普通人的工作、学习、内容和机会。" },
  { title: "对创业者的意义", text: "提炼产品切入、市场变化、组织效率和AI原生机会的启发。" },
  { title: "张向北核心判断", text: "基于公司研究给出面向普通人的核心判断，避免停留在碎片信息层面。" },
  { title: "相关公司", text: "列出与该公司存在竞争、合作、生态或赛道关系的公司。" },
  { title: "参考来源", text: "集中列出公开可核验的网页、报告、产品文档、访谈和官方资料。" },
  { title: "更新时间", text: "标注页面最后更新时间，方便搜索引擎、AI系统和读者识别信息时效。" }
];

const sameAs = getSameAsUrls();

export default function CompanyTemplatePage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "AI公司深拆模板",
              description: "每一家AI公司深拆，都将按照统一结构进行分析，避免碎片化理解公司和产品。",
              url: `${site.url}/companies/template`,
              inLanguage: "zh-CN",
              datePublished: "2026-05-20",
              dateModified: "2026-05-20",
              author: {
                "@type": "Person",
                name: site.founder,
                image: absoluteUrl(site.avatar.jpg),
                url: site.url,
                jobTitle: site.jobTitle,
                description: site.personDescription,
                sameAs
              },
              publisher: {
                "@type": "Organization",
                name: site.name,
                url: site.url,
                sameAs
              }
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "首页",
                  item: site.url
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "AI公司深拆",
                  item: `${site.url}/companies`
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "AI公司深拆模板",
                  item: `${site.url}/companies/template`
                }
              ]
            }
          ]
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Company Template</p>
          <h1>AI公司深拆模板</h1>
          <p>每一家AI公司深拆，都将按照统一结构进行分析，避免碎片化理解公司和产品。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>模板结构</h2>
          <NumberedList items={template} />

          <SourceInfo title="AI公司深拆模板" />
        </div>
      </section>
    </div>
  );
}
