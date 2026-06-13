import { JsonLd } from "@/components/JsonLd";
import { NumberedList, SimpleList } from "@/components/PageBlocks";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI值得看周刊",
  description:
    "张向北AI进化论旗下的 AI 判断型周刊。每周严选真正值得普通人关注的 AI 公司、产品与产业变化。",
  path: "/newsletter"
});

const positioningItems = [
  {
    title: "持续更新的长期栏目",
    text: "AI值得看周刊会围绕AI公司、AI产品和产业变化持续出版，让读者稳定跟上真正重要的变化。"
  },
  {
    title: "创始订阅筹备中的订阅产品",
    text: "它不是一次性的介绍页，而是面向长期读者的订阅产品。正式订阅入口开放后，将在官网、公众号和全平台入口同步更新。"
  },
  {
    title: "判断型周刊，不是普通资讯合集",
    text: "它不追求覆盖所有新闻，而是筛出更少、更准、更有用的信号，并转化成普通人能理解、能行动、能用于决策的判断。"
  }
];

const weeklyItems = [
  {
    title: "本周值得看的 AI 公司",
    text: "从AI公司变化中筛出真正值得普通人理解的产业信号。"
  },
  {
    title: "本周值得看的 AI 产品",
    text: "观察产品形态、使用场景和工作方式变化，而不是堆叠工具清单。"
  },
  {
    title: "本周值得看的产业变化",
    text: "把行业动态放回公司、产品、商业模式和普通人机会的结构里理解。"
  },
  {
    title: "张向北核心判断",
    text: "把一周变化提炼为更少、更准、更有用的判断。"
  },
  {
    title: "普通人的行动启发",
    text: "把变化翻译成普通人可以理解、可以行动、可以复用的学习和决策线索。"
  },
  {
    title: "AI公司300强 / 资料库更新",
    text: "同步AI公司300强和相关公开资料库的新增、修订与研究状态。"
  }
];

const suitable = [
  "希望持续跟上AI变化的普通人",
  "想看懂AI公司和AI产品变化的职场人",
  "需要稳定输入AI产业判断的创作者",
  "正在建立个人AI工作流的学习者",
  "关注AI机会但不想被信息淹没的创业者和小老板"
];

const issues = [
  {
    title: "AI值得看周刊 #001",
    topic: "为什么普通人需要关注 AI 公司？"
  },
  {
    title: "AI值得看周刊 #002",
    topic: "AI工具越多，判断力越重要"
  },
  {
    title: "AI值得看周刊 #003",
    topic: "公司会越来越小，个体会越来越强"
  }
];

const productRelations = [
  "AI值得看周刊：持续跟上变化",
  "12个关键判断课程：系统建立判断框架",
  "AI进化岛：长期讨论和关系承接",
  "AI公司300强：公司研究数据库"
];

export default function NewsletterPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "AI值得看周刊",
              alternateName: "张向北AI进化论 · AI值得看周刊",
              description:
                "张向北AI进化论旗下的 AI 判断型周刊。每周严选真正值得普通人关注的 AI 公司、产品与产业变化。",
              url: `${site.url}/newsletter`,
              inLanguage: "zh-CN",
              publisher: {
                "@type": "Organization",
                name: site.name,
                url: site.url
              }
            },
            {
              "@type": "CreativeWorkSeries",
              name: "张向北AI进化论 · AI值得看周刊",
              description: "面向普通人的 AI 判断型周刊。",
              url: `${site.url}/newsletter`,
              inLanguage: "zh-CN",
              publisher: {
                "@type": "Organization",
                name: site.name,
                url: site.url
              }
            }
          ]
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">AI Judgment Weekly</p>
          <h1>AI值得看周刊</h1>
          <p>张向北AI进化论旗下的 AI 判断型周刊。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>它是什么</h2>
          <p>完整品牌名：张向北AI进化论 · AI值得看周刊。</p>
          <p>产品定位：面向普通人的 AI 判断型周刊。</p>
          <NumberedList items={positioningItems} />

          <h2>核心口号</h2>
          <div className="definition-box">
            <p>不是更多 AI 新闻，而是更少、更准、更有用的 AI 判断。</p>
          </div>

          <h2>每周看什么</h2>
          <p>
            每周从 AI 公司、AI 产品、AI产业变化中，筛出真正值得普通人关注的信号，并提炼成可理解、可行动、可复用的判断。
          </p>
          <p>每周严选真正值得普通人关注的 AI 公司、产品与产业变化。</p>

          <h2>每期固定栏目</h2>
          <NumberedList items={weeklyItems} />

          <h2>适合谁</h2>
          <SimpleList items={suitable} />

          <h2>订阅价格</h2>
          <div className="definition-box">
            <p>
              <strong>创始订阅价：99元/年。</strong>
            </p>
            <p>
              当前为创始订阅筹备阶段。正式订阅入口开放后，将在官网、公众号和全平台入口同步更新。
            </p>
          </div>

          <h2>订阅入口</h2>
          <div className="definition-box">
            <p>订阅入口处于创始筹备阶段。后续可接入邮箱订阅系统，并同步接入公众号、飞书表单或其他订阅工具。</p>
          </div>

          <h2 id="sample">样刊</h2>
          <article className="article-card">
            <h3>AI值得看周刊 #001：为什么普通人需要关注 AI 公司？</h3>
            <p>状态：即将发布。</p>
          </article>

          <h2>历史期数</h2>
          <p>以下为第一批往期预览，用于展示这个栏目会持续更新，而不是一次性的订阅说明页。</p>
          <div className="article-list">
            {issues.map((issue) => (
              <article className="article-card" key={issue.title}>
                <h3>{issue.title}</h3>
                <p>{issue.topic}</p>
                <p>状态：即将发布。</p>
              </article>
            ))}
          </div>

          <h2>与其他产品的关系</h2>
          <SimpleList items={productRelations} />

          <h2>后续接入说明</h2>
          <p>未来接入邮箱订阅系统后，本页会展示订阅表单、历史周刊归档和 RSS/Feed 入口。</p>
        </div>
      </section>
    </div>
  );
}
