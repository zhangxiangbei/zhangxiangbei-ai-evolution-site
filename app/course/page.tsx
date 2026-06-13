import { JsonLd } from "@/components/JsonLd";
import { SimpleList } from "@/components/PageBlocks";
import { getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI进化论——AI时代普通人的12个关键判断",
  description: "一门帮助普通人建立AI时代判断框架的认知入门课。",
  path: "/course"
});

const problems = [
  "哪些变化真正重要？",
  "普通人到底应该学什么？",
  "AI会不会淘汰我的工作？",
  "未来十年机会在哪里？",
  "我应该如何建立自己的AI能力？"
];

const suitable = [
  "想看懂AI时代变化的普通人",
  "对AI感到焦虑但不知道如何行动的职场人",
  "希望用AI提升效率的创作者",
  "正在思考AI机会的创业者和小老板",
  "想建立长期认知框架的学习者"
];

const unsuitable = [
  "只想学习某个具体工具按钮操作的人",
  "只追求短期暴富项目的人",
  "不愿意思考，只想要标准答案的人"
];

const sameAs = getSameAsUrls();

export default function CoursePage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "AI进化论——AI时代普通人的12个关键判断",
          description: "一门帮助普通人建立AI时代判断框架的认知入门课。",
          url: `${site.url}/course`,
          inLanguage: "zh-CN",
          provider: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            sameAs
          },
          offers: {
            "@type": "Offer",
            price: "199",
            priceCurrency: "CNY",
            availability: "https://schema.org/PreOrder"
          }
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Course</p>
          <h1>AI进化论——AI时代普通人的12个关键判断</h1>
          <p>一门帮助普通人建立AI时代判断框架的认知入门课。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>这门课解决什么问题？</h2>
          <p>你可能每天都看到AI新闻、AI工具、AI课程和AI焦虑，但真正的问题是：</p>
          <SimpleList items={problems} />
          <p>
            这门课不是教你追逐每一个新工具，而是帮助你建立一套理解AI时代的判断框架。
          </p>

          <h2>适合谁？</h2>
          <SimpleList items={suitable} />

          <h2>不适合谁？</h2>
          <SimpleList items={unsuitable} />

          <h2>课程结构</h2>
          <p>共12节短课，对应AI时代普通人的12个关键判断。</p>

          <h2>价格</h2>
          <p>199元。</p>

          <h2>课程状态</h2>
          <p>课程创始版处于筹备阶段。可先关注张向北AI进化论，或加入AI进化岛获取后续通知。</p>
        </div>
      </section>
    </div>
  );
}
