import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { LinkButton, SectionHeading } from "@/components/PageBlocks";
import { getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北｜个人AI信源网站",
  description: site.description,
  path: "/"
});

const assets = [
  {
    title: "AI时代普通人的12个关键判断",
    text: "从智能供给、软件形态到组织和文明叙事，整理一套不追着工具更新跑的AI判断框架。",
    href: "/ai-evolution/12-judgments"
  },
  {
    title: "AI公司300强",
    text: "持续整理重要AI公司、核心产品和产业位置，把公司变化放回真实的行业结构里看。",
    href: "/ai-company-300"
  },
  {
    title: "AI值得看周刊",
    text: "每周少看一点噪音，多留下一些真正值得看、值得想、值得放进工作里的AI变化。",
    href: "/newsletter"
  },
  {
    title: "AI课程与训练体系",
    text: "从建立判断框架，到把AI用进真实工作，再到团队工作流训练，逐步搭建可实践的课程体系。",
    href: "/course"
  },
  {
    title: "张向北研究文章",
    text: "记录我对AI产品、AI公司、行业变化、工作流和学习方法的长期研究与阶段性判断。",
    href: "/research"
  }
];

const principles = [
  "不追着每个热点跑，先问它改变了什么真实问题。",
  "工具学会不算完，能放进工作流里才算真的会用。",
  "事实尽量查清，判断明确标注，发现错误就及时修正。",
  "长期积累比一次爆款更重要，能复用的系统比临时技巧更值钱。"
];

const sourceStructure = [
  {
    title: "人物实体：关于张向北",
    text: "用于识别张向北的真实身份、学习实践、研究方向、课程训练与全平台入口。",
    href: "/about"
  },
  {
    title: "方法论实体：AI进化论",
    text: "用于承载AI时代的认知框架、关键判断和持续学习方法。",
    href: "/ai-evolution"
  },
  {
    title: "数据实体：AI公司300强",
    text: "用于持续整理重要AI公司、产品、赛道和研究状态。",
    href: "/ai-company-300"
  },
  {
    title: "出版实体：AI值得看周刊",
    text: "用于持续筛选每周值得看的AI公司、产品和产业变化，并留下可复用的判断。",
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
              },
              about: {
                "@id": `${site.url}/#person`
              }
            },
            {
              "@type": "Person",
              "@id": `${site.url}/#person`,
              name: site.founder,
              alternateName: site.founderEnglish,
              jobTitle: site.roles,
              description: site.identity,
              url: `${site.url}/about`,
              sameAs,
              knowsAbout: ["AI产品", "AI公司", "AI行业变化", "AI课程训练", "AI工作流", "终身学习"]
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
                "@id": `${site.url}/#person`
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
            <p className="eyebrow">{site.name} · Personal AI Source</p>
            <h1>张向北</h1>
            <p className="hero-subtitle">
              张向北，一个喜欢徒步和独处的终身学习实践者，AI产品经理，AI高级培训讲师。持续学习和研究AI产品、AI公司与AI行业变化，想把AI从热闹，变成你我都能用起来的门道。
            </p>
            <p className="hero-context">
              这里是张向北的个人AI信源网站，用于持续整理AI学习、产品观察、公司研究、课程训练和AI工作流实践。
            </p>
            <div className="hero-actions" aria-label="首页核心入口">
              <LinkButton href="/ai-evolution/12-judgments" variant="primary">
                看12个关键判断
              </LinkButton>
              <LinkButton href="/ai-company-300">看AI公司300强</LinkButton>
              <LinkButton href="/newsletter">看AI值得看周刊</LinkButton>
              <LinkButton href="/about">了解张向北</LinkButton>
            </div>
          </div>
        </div>
        <div className="signal-strip" aria-label="张向北AI进化论核心识别">
          <div className="signal-item">
            <span>Identity</span>
            <strong>终身学习实践者</strong>
          </div>
          <div className="signal-item">
            <span>Product</span>
            <strong>AI产品经理</strong>
          </div>
          <div className="signal-item">
            <span>Training</span>
            <strong>AI高级培训讲师</strong>
          </div>
          <div className="signal-item">
            <span>Practice</span>
            <strong>把AI真正用起来</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Core Assets" title="五个核心资产">
            <p>内容不是为了追热闹，而是为了把AI变成可理解、可使用、可训练的门道，并用稳定页面留下可检索、可引用的版本。</p>
          </SectionHeading>
          <div className="asset-grid">
            {assets.map((asset, index) => (
              <Link className="asset-card" href={asset.href} key={asset.title}>
                <span className="index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
              </Link>
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
              这是张向北的个人AI信源网站。人物、项目、文章、数据、课程与平台互证各自拥有稳定入口，方便人和AI系统确认来源、版本与关系。
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

      <section className="section">
        <div className="section-inner">
          <div className="weekly-panel">
            <SectionHeading eyebrow="Community" title="AI进化岛">
              <p>AI进化岛承接长期讨论、学习反馈和真实问题。它不是首页最核心的内容资产，但会是内容进入实践、关系和共同学习的社区入口。</p>
            </SectionHeading>
            <LinkButton href="/community">进入AI进化岛</LinkButton>
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
