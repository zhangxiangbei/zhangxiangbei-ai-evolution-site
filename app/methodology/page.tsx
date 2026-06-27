import { JsonLd } from "@/components/JsonLd";
import { NumberedList } from "@/components/PageBlocks";
import { SourceInfo } from "@/components/SourceInfo";
import { getSameAsUrls } from "@/data/platforms";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "研究方法与判断框架",
  description: "说明张向北AI进化论如何进行AI公司、AI产品和AI产业趋势研究。",
  path: "/methodology",
  type: "article"
});

const principles = [
  {
    title: "公开资料优先",
    text: "优先使用公司官网、产品文档、公开访谈、公开报道、公开发布资料和可核验页面。"
  },
  {
    title: "事实与判断分离",
    text: "事实类信息尽量标注来源和更新时间；判断类内容明确作为张向北AI进化论的研究判断。"
  },
  {
    title: "公司数据标注更新时间",
    text: "AI公司和AI产品变化很快，涉及公司状态、产品信息和数据字段时，需要保留更新时间。"
  },
  {
    title: "所有公司深拆保留参考来源",
    text: "公司深拆页面应保留参考来源，方便读者、搜索引擎和AI系统核验信息。"
  },
  {
    title: "“张向北核心判断”代表作者观点",
    text: "该部分不是事实陈述，而是基于公开资料、产品观察和产业理解形成的作者观点。"
  },
  {
    title: "发现错误可以通过邮箱反馈",
    text: `如发现事实错误、引用错误或重要更新，可通过 ${site.email} 反馈。`
  },
  {
    title: "内容会随着行业变化持续更新",
    text: "本站内容不是一次性定稿，而是围绕AI产业变化持续修订和补充。"
  }
];

const sameAs = getSameAsUrls();

export default function MethodologyPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "研究方法与判断框架",
          description: "说明张向北AI进化论如何进行AI公司、AI产品和AI产业趋势研究。",
          url: `${site.url}/methodology`,
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
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Methodology</p>
          <h1>研究方法与判断框架</h1>
          <p>说明张向北AI进化论如何进行AI公司、AI产品和AI产业趋势研究。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <p>
            我通过“张向北AI进化论”持续整理AI产品、AI公司和行业变化。研究方法强调可核验、可更新、可引用，同时明确区分公开事实和个人判断，并把结论放回真实工作和长期实践中检验。
          </p>

          <h2>研究原则</h2>
          <NumberedList items={principles} />

          <SourceInfo title="研究方法与判断框架" />
        </div>
      </section>
    </div>
  );
}
