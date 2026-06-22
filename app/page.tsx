import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { LinkButton, SectionHeading } from "@/components/PageBlocks";
import { getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北AI进化论｜张向北",
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
    title: "关于张向北",
    text: "关于我的学习方式、AI工作、课程训练，以及为什么长期记录这些内容。",
    href: "/about"
  },
  {
    title: "AI进化论",
    text: "从12个关键判断开始，理解AI正在如何改变产品、公司、组织和个人。",
    href: "/ai-evolution"
  },
  {
    title: "AI公司300强",
    text: "持续整理重要AI公司、核心产品、所在赛道和研究进度。",
    href: "/ai-company-300"
  },
  {
    title: "AI值得看周刊",
    text: "每周筛选值得看的AI公司、产品和行业变化，留下少而有用的判断。",
    href: "/newsletter"
  },
  {
    title: "开放数据与资源",
    text: "整理可以直接查看和使用的数据、研究模板、提示词、Skill和工作流。",
    href: "/data"
  },
  {
    title: "全平台与媒体资料",
    text: "找到我的其他平台账号，以及可用于合作、采访和引用的标准资料。",
    href: "/links"
  }
];

const whitepaperAudience = [
  "想系统了解AI产业的人",
  "正在学习AI工具的职场人",
  "关注AI产品和创业机会的人",
  "希望把AI用进真实工作的团队"
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
            <p className="eyebrow">{site.name}</p>
            <h1>张向北</h1>
            <p className="hero-subtitle">
              张向北，一个喜欢徒步和独处的终身学习实践者，AI产品经理，AI高级培训讲师。持续学习和研究AI产品、AI公司与AI行业变化，想把AI从热闹，变成你我都能用起来的门道。
            </p>
            <p className="hero-context">
              我会把持续学习和研究AI的过程，整理成文章、课程、周刊和资料。不追每天的热闹，只留下真正值得看、值得想、值得用起来的东西。
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
            <p>内容不是为了追热闹，而是为了把AI变成可理解、可使用、可训练的门道，也方便以后随时回来查找。</p>
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
                每周严选真正值得关注的AI公司、产品与行业变化，整理成能理解、能行动、能放进真实工作的关键判断。
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
          <SectionHeading eyebrow="Explore" title="继续往下看">
            <p>
              你可以从一个判断、一家公司或一篇周刊开始，也可以继续了解我的学习方法、课程和公开资料。
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
              <p>如果你想把文章里的判断带进自己的学习和工作，也欢迎来AI进化岛继续讨论真实问题、交换实践反馈。</p>
            </SectionHeading>
            <LinkButton href="/community">进入AI进化岛</LinkButton>
          </div>
        </div>
      </section>

      <section className="cta-band whitepaper-cta">
        <div className="section-inner">
          <div className="whitepaper-cta-grid">
            <div className="whitepaper-copy">
              <p className="eyebrow">2026 AI Industry White Paper</p>
              <h2>想系统了解AI产业变化，可以先从这份资料开始。</h2>
              <p>
                我整理了一份《2026 AI产业白皮书》，会持续记录重要AI公司、AI产品、产业变化和普通人真正值得关注的机会。
              </p>
              <p>
                如果你也在关注AI产品、AI培训、AI工具应用、个人效率或企业AI化，可以添加我的微信，领取这份资料，也可以顺便告诉我你正在关注的问题。
              </p>
              <h3>适合</h3>
              <ul className="whitepaper-audience">
                {whitepaperAudience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="cta-actions">
                <a className="button button-primary" href="#wechat-qr">
                  添加微信，领取《2026 AI产业白皮书》
                </a>
              </div>
            </div>
            <aside className="whitepaper-qr-card" id="wechat-qr" aria-label="个人微信二维码区域">
              <div className="whitepaper-qr-placeholder" role="img" aria-label="微信二维码待上传">
                <span>WECHAT</span>
                <strong>微信二维码待上传</strong>
              </div>
              <p>个人微信二维码上传后，可在这里扫码领取资料。</p>
            </aside>
          </div>
          <p className="whitepaper-note">资料会持续更新，内容以AI公司、AI产品、产业变化和真实应用场景为主。</p>
        </div>
      </section>
    </div>
  );
}
