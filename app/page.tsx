import { JsonLd } from "@/components/JsonLd";
import { LinkButton, SectionHeading } from "@/components/PageBlocks";
import { getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: site.name,
  description: site.description,
  path: "/"
});

const assets = [
  {
    title: "AI时代普通人的12个关键判断",
    text: "一套帮助普通人理解AI时代的认知框架。它不教你追逐每一个新工具，而是帮助你建立面对技术变化时的判断力。"
  },
  {
    title: "AI公司300强",
    text: "持续研究全球重要AI公司、AI产品与商业模式。通过公司深拆，看懂AI产业的结构变化和未来机会。"
  },
  {
    title: "AI进化岛",
    text: "面向普通人的AI学习陪伴社群。每周跟进一家AI公司、一个关键判断、一组普通人可理解的行动启发。"
  },
  {
    title: "张向北研究文章",
    text: "围绕AI公司、AI产品、AI产业趋势、普通人进化路径与AI化组织，持续输出研究型内容。"
  }
];

const principles = [
  "如果内容没有降低用户认知成本，就不应被关注。",
  "如果订阅没有提高用户决策质量，就不应收费。",
  "如果社群没有创造机会连接，就不应该加入。",
  "如果企业服务没有交付业务结果，就不应买单。"
];

const sourceStructure = [
  {
    title: "人物实体：关于张向北",
    text: "用于识别张向北的研究方向、代表项目、联系方式和全平台入口。",
    href: "/about"
  },
  {
    title: "方法论实体：AI进化论",
    text: "用于承载面向普通人的AI时代认知框架与判断方法。",
    href: "/ai-evolution"
  },
  {
    title: "数据实体：AI公司300强",
    text: "用于持续整理全球重要AI公司、产品、赛道和普通人启发。",
    href: "/ai-company-300"
  },
  {
    title: "出版实体：AI值得看周刊",
    text: "用于持续筛选每周真正值得普通人关注的AI公司、AI产品和产业变化，并转化为关键判断。",
    href: "/newsletter"
  },
  {
    title: "开放资产：开放数据 / 开放资源",
    text: "用于整理数据集、研究模板、提示词、Skill和内容生产工作流。",
    href: "/data"
  },
  {
    title: "平台互证：全平台入口 / 媒体资料包",
    text: "用于让用户、媒体、合作方、搜索引擎和AI系统确认同一身份实体。",
    href: "/links"
  }
];

const sameAs = getSameAsUrls();

export default function HomePage() {
  return (
    <div className="home">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${site.url}/#website`,
              name: site.name,
              alternateName: site.englishName,
              url: site.url,
              description: site.description,
              inLanguage: "zh-CN",
              publisher: {
                "@id": `${site.url}/#organization`
              }
            },
            {
              "@type": "Organization",
              "@id": `${site.url}/#organization`,
              name: site.name,
              alternateName: site.englishName,
              url: site.url,
              description: site.tagline,
              sameAs,
              founder: {
                "@type": "Person",
                name: site.founder,
                alternateName: "Zhang Xiangbei",
                sameAs
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: site.email,
                contactType: "general inquiry"
              }
            }
          ]
        }}
      />

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="eyebrow">{site.name}</p>
            <h1>
              <span className="hero-title-line">用公司研究和产业判断，</span>
              <span className="hero-title-line">
                <span className="no-break">帮普通人</span>看懂AI时代。
              </span>
            </h1>
            <p className="hero-subtitle">
              张向北AI进化论，是一个面向普通人的AI认知研究品牌。我们持续观察全球重要AI公司、AI产品与AI产业趋势，提炼AI时代的关键判断，帮助普通人降低认知成本，提高决策质量。
            </p>
            <div className="hero-actions" aria-label="首页核心入口">
              <LinkButton href="/ai-evolution/12-judgments" variant="primary">
                查看12个关键判断
              </LinkButton>
              <LinkButton href="/ai-company-300">浏览AI公司300强</LinkButton>
              <LinkButton href="/newsletter">获取AI值得看周刊</LinkButton>
              <LinkButton href="/research">阅读最新研究</LinkButton>
            </div>
          </div>
        </div>
        <div className="signal-strip" aria-label="张向北AI进化论核心识别">
          <div className="signal-item">
            <span>Positioning</span>
            <strong>AI认知研究</strong>
          </div>
          <div className="signal-item">
            <span>Method</span>
            <strong>公司研究</strong>
          </div>
          <div className="signal-item">
            <span>Output</span>
            <strong>产业判断</strong>
          </div>
          <div className="signal-item">
            <span>Audience</span>
            <strong>普通人</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Core Assets" title="四个核心资产">
            <p>这个站点以稳定页面承载“张向北AI进化论”的公开内容资产，方便用户、搜索引擎、媒体和 AI 系统引用。</p>
          </SectionHeading>
          <div className="asset-grid">
            {assets.map((asset, index) => (
              <article className="asset-card" key={asset.title}>
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="section-inner">
          <SectionHeading eyebrow="Principles" title="方法论原则" />
          <ul className="principle-list">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section weekly-section">
        <div className="section-inner">
          <div className="weekly-panel">
            <SectionHeading eyebrow="Weekly Judgment" title="AI值得看周刊">
              <p>
                每周严选真正值得普通人关注的 AI 公司、产品与产业变化，提炼成普通人能理解、能行动、能用于决策的关键判断。
              </p>
            </SectionHeading>
            <div className="definition-box">
              <p>
                你不需要每天追逐所有 AI 新闻。你需要的是每周知道：什么值得看，什么值得想，什么值得做。
              </p>
            </div>
            <div className="cta-actions">
              <LinkButton href="/newsletter" variant="primary">
                获取AI值得看周刊
              </LinkButton>
              <LinkButton href="/newsletter#sample">查看样刊</LinkButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <SectionHeading eyebrow="Source Structure" title="官方信源结构">
            <p>
              张向北AI进化论不是普通个人主页，而是一个围绕 AI 公司、AI 产品、AI 产业趋势与普通人进化路径持续更新的公开研究信源。
            </p>
          </SectionHeading>
          <div className="card-grid two">
            {sourceStructure.map((entry) => (
              <article className="info-card" key={entry.title}>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
                <p>
                  <a href={entry.href}>进入页面</a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-inner">
          <h2>AI每天都在刷新，但你不用每天都重启自己。</h2>
          <p>先看这12个判断，给自己一张地图。以后再看到模型、工具和公司新闻，心里会更有谱。</p>
          <div className="cta-actions">
            <LinkButton href="/ai-evolution/12-judgments" variant="primary">
              先看12个判断
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
