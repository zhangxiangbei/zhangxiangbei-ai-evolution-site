import { JsonLd } from "@/components/JsonLd";
import { NumberedList, SimpleList } from "@/components/PageBlocks";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI进化岛",
  description: "AI进化岛，面向普通人的AI学习陪伴社群。",
  path: "/community"
});

const values = [
  "持续理解AI时代变化",
  "跟上重要AI公司和产品动态",
  "建立自己的AI判断框架",
  "降低信息焦虑",
  "找到适合自己的行动路径"
];

const deliveries = [
  { title: "每周一家AI公司观察", text: "围绕一家重要AI公司，提炼普通人可理解的变化信号。" },
  { title: "每周一个关键判断", text: "把AI时代的复杂变化转化为可讨论、可沉淀的判断框架。" },
  { title: "每周一份普通人能看懂的AI变化摘要", text: "降低信息噪音，聚焦真正需要理解的变化。" },
  { title: "社群问题收集与选题反哺", text: "把社群成员的真实困惑转化为后续研究选题。" },
  { title: "不定期主理人点睛", text: "在关键节点提供面向普通人的解释、判断和行动启发。" }
];

const suitable = [
  "希望持续跟上AI变化的普通人",
  "想建立AI认知框架的职场人",
  "希望理解AI公司和产品趋势的创作者",
  "对AI机会感兴趣但不想被信息淹没的人"
];

const unsuitable = [
  "只想要工具合集的人",
  "只想要快速赚钱项目的人",
  "不愿意思考长期变化的人"
];

export default function CommunityPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "AI进化岛",
          description: "AI进化岛，是张向北AI进化论发起的AI学习陪伴社群。",
          url: `${site.url}/community`,
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
          <p className="eyebrow">Community</p>
          <h1>AI进化岛</h1>
          <p>面向普通人的AI学习陪伴社群。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>AI进化岛是什么？</h2>
          <p>AI进化岛，是张向北AI进化论发起的AI学习陪伴社群。</p>
          <p>它不是工具群，也不是资讯群，而是一个帮助普通人持续跟上AI变化的学习共同体。</p>

          <h2>核心价值</h2>
          <p>帮助普通人：</p>
          <SimpleList items={values} />

          <h2>第一版交付</h2>
          <p>AI进化岛第一版不做重交付，不做高压打卡，不做信息轰炸。</p>
          <p>第一版主要交付：</p>
          <NumberedList items={deliveries} />

          <h2>适合谁？</h2>
          <SimpleList items={suitable} />

          <h2>不适合谁？</h2>
          <SimpleList items={unsuitable} />
        </div>
      </section>
    </div>
  );
}
