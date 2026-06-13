import { JsonLd } from "@/components/JsonLd";
import { SimpleList } from "@/components/PageBlocks";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI观察笔记",
  description: "记录AI公司、AI产品、AI产业趋势中的高价值信号。这是张向北AI进化论的轻量判断流。",
  path: "/notes"
});

const notes = [
  "为什么普通人需要关注AI公司？",
  "AI产品变化背后，往往是工作方式变化。",
  "AI工具越多，判断力越重要。",
  "不要追逐每个工具，要建立自己的AI工作流。",
  "AI公司深拆，是理解AI时代的一种入口。"
];

export default function NotesPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "AI观察笔记",
          description: "记录AI公司、AI产品、AI产业趋势中的高价值信号。",
          url: `${site.url}/notes`,
          inLanguage: "zh-CN",
          isPartOf: {
            "@type": "WebSite",
            name: site.name,
            url: site.url
          },
          hasPart: notes.map((headline) => ({
            "@type": "CreativeWork",
            headline,
            author: {
              "@type": "Organization",
              name: site.name
            }
          }))
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Notes</p>
          <h1>AI观察笔记</h1>
          <p>记录AI公司、AI产品、AI产业趋势中的高价值信号。这里不是普通资讯搬运，而是张向北AI进化论的轻量判断流。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>什么是 AI观察笔记</h2>
          <p>
            AI观察笔记用于记录AI公司、AI产品、AI产业趋势中的高价值信号。它关注变化背后的结构，而不是简单搬运新闻标题。
          </p>

          <h2>它和深度研究文章的区别</h2>
          <p>
            深度研究文章更强调完整结构、背景资料、引用来源和系统判断；AI观察笔记更轻，更适合记录早期信号、阶段性判断和后续研究线索。
          </p>

          <h2>第一批观察选题</h2>
          <SimpleList items={notes} />
        </div>
      </section>
    </div>
  );
}
