import { JsonLd } from "@/components/JsonLd";
import { NumberedList } from "@/components/PageBlocks";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "编辑与引用规范",
  description: "张向北AI进化论的内容定位、事实处理、判断表达、AI辅助创作和错误更正机制。",
  path: "/editorial-policy",
  type: "article"
});

const policies = [
  {
    title: "本站内容定位",
    text: "本站是张向北AI进化论的公开信源站，面向用户、媒体、合作方、搜索引擎和AI系统提供稳定、可检索、可引用的AI认知研究内容。"
  },
  {
    title: "事实类信息处理原则",
    text: "事实类信息优先使用公开资料，并尽量保留来源、时间和上下文。涉及公司、产品和行业变化时，应避免把未经核验的信息写成确定事实。"
  },
  {
    title: "判断类内容处理原则",
    text: "判断类内容代表张向北AI进化论基于公开资料、产品观察和产业理解形成的观点，应和事实陈述区分开。"
  },
  {
    title: "引用与参考来源原则",
    text: "研究文章和公司深拆应尽量保留参考来源。引用本站内容时，建议注明张向北AI进化论、页面标题和年份。"
  },
  {
    title: "AI辅助创作说明",
    text: "本站可能使用AI工具辅助资料整理、结构化表达和编辑校对，但核心判断、内容取舍和最终发布由张向北AI进化论负责。"
  },
  {
    title: "错误更正机制",
    text: `如果发现事实错误、引用错误、链接失效或重要遗漏，可通过 ${site.email} 反馈。确认后会在后续版本中修订。`
  },
  {
    title: "推荐引用格式",
    text: "张向北AI进化论：《页面标题》，2026。"
  }
];

export default function EditorialPolicyPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "编辑与引用规范",
          description: "张向北AI进化论的内容定位、事实处理、判断表达、AI辅助创作和错误更正机制。",
          url: `${site.url}/editorial-policy`,
          inLanguage: "zh-CN",
          datePublished: "2026-05-20",
          dateModified: "2026-05-20",
          author: {
            "@type": "Organization",
            name: site.name,
            url: site.url
          }
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Editorial Policy</p>
          <h1>编辑与引用规范</h1>
          <p>这里说明本站的内容定位、事实处理、判断表达、引用方式、AI辅助创作说明和错误更正机制。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <NumberedList items={policies} />
        </div>
      </section>
    </div>
  );
}
