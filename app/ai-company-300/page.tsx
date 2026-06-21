import { JsonLd } from "@/components/JsonLd";
import { NumberedList, SimpleList } from "@/components/PageBlocks";
import { SourceInfo } from "@/components/SourceInfo";
import { getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI公司300强",
  description: "AI公司300强，是张向北AI进化论长期推进的AI公司研究项目。",
  path: "/ai-company-300"
});

const dimensions = [
  { title: "公司定位", text: "公司在AI产业中的角色、目标用户与核心价值定位。" },
  { title: "核心产品", text: "公司主要产品、关键功能与用户使用场景。" },
  { title: "所属赛道", text: "公司所在的AI细分方向与产业位置。" },
  { title: "技术路径", text: "公司解决问题所采用的关键技术路线。" },
  { title: "商业模式", text: "公司创造收入、沉淀用户价值和形成增长的方式。" },
  { title: "用户价值", text: "产品对普通用户、行业用户或组织客户带来的实际价值。" },
  { title: "竞争格局", text: "公司与同类产品、平台和生态之间的关系。" },
  { title: "产业影响", text: "公司可能推动的行业变化、效率变化与结构变化。" },
  { title: "普通人启发", text: "公司变化对普通人的学习、工作、创作与机会的启发。" },
  { title: "张向北核心判断", text: "基于公司研究提炼的关键判断与长期观察结论。" }
];

const categories = [
  "基础模型公司",
  "AI应用公司",
  "AI搜索公司",
  "AI视频公司",
  "AI Agent 公司",
  "AI开发者工具公司",
  "AI办公协作公司",
  "AI创作工具公司",
  "AI硬件与机器人公司",
  "中国AI公司",
  "全球AI公司"
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

const sameAs = getSameAsUrls();

export default function AiCompany300Page() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: "AI公司300强",
          alternateName: "AI Company 300",
          description:
            "AI公司300强，是张向北AI进化论长期推进的AI公司研究项目。它不是简单的公司排行榜，而是一个结构化观察系统。",
          url: `${site.url}/ai-company-300`,
          inLanguage: "zh-CN",
          creator: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            sameAs
          },
          keywords: categories
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">AI Company 300</p>
          <h1>AI公司300强</h1>
          <p>AI公司300强，是张向北AI进化论长期推进的AI公司研究项目。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <p>
            它不是简单的公司排行榜，而是一个结构化观察系统：通过持续研究重要AI公司、AI产品和商业模式，把每天的公司新闻放回产业结构里理解。
          </p>

          <h2>为什么普通人也应该关注AI公司？</h2>
          <p>因为AI时代的变化，往往先体现在公司和产品上。</p>
          <p>
            一家公司发布了什么模型，推出了什么产品，选择了什么商业模式，获得了什么用户反馈，往往会预示未来几年普通人的工作、学习、创作和商业机会如何变化。
          </p>
          <p>普通人不一定要像投资人一样研究公司，但需要知道：</p>
          <SimpleList
            items={[
              "哪些AI公司真正重要",
              "哪些AI产品会改变工作方式",
              "哪些趋势只是短期热闹",
              "哪些变化会影响自己的职业和机会"
            ]}
          />

          <h2>观察维度</h2>
          <NumberedList items={dimensions} />

          <h2>公司分类</h2>
          <SimpleList items={categories} />

          <h2>第一批观察对象</h2>
          <ul className="company-list">
            {firstBatch.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>

          <SourceInfo title="AI公司300强" />
        </div>
      </section>
    </div>
  );
}
