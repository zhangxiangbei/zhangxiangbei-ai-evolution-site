import Link from "next/link";
import Image from "next/image";

import { JsonLd } from "@/components/JsonLd";
import { OfficialAvatar } from "@/components/OfficialAvatar";
import { LinkButton, SectionHeading } from "@/components/PageBlocks";
import { getSameAsUrls } from "@/data/platforms";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北AI进化论｜张向北",
  description: site.description,
  path: "/"
});

const attentionReasons = [
  {
    title: "从公司和产品看AI",
    text: "我更关心一家AI公司解决了什么问题、卡住了哪层基础设施、改变了哪类任务，而不只追一条新闻。"
  },
  {
    title: "从真实工作流验证AI",
    text: "工具演示很容易，难的是把AI放进真实任务、团队流程和可复用交付里，反复跑、反复改。"
  },
  {
    title: "把事实、判断和版本分开",
    text: "事实尽量标清来源，判断明确说清边界，内容随着行业变化持续更新，避免把临时看法包装成确定答案。"
  },
  {
    title: "把研究结果沉淀为资产",
    text: "文章、周刊、数据、模板、GitHub项目和课程训练，最终都要能被追踪、被复用、被继续迭代。"
  }
];

const audienceGroups = [
  {
    title: "普通人",
    text: "看懂AI时代职业、学习、能力和机会变化，不被每天的新工具和新说法带着跑。"
  },
  {
    title: "创业者",
    text: "理解AI如何改变产品、获客、组织、成本结构和商业模式，把机会放回具体业务里判断。"
  },
  {
    title: "企业团队",
    text: "把AI从一次性演示变成可训练、可复用、可管理的团队工作流，真正进入日常生产。"
  }
];

const assets = [
  {
    title: "AI时代普通人的12个关键判断",
    text: "从智能供给、软件形态到组织和文明叙事，整理一套理解AI时代底层变化的判断框架。",
    href: "/ai-evolution/12-judgments"
  },
  {
    title: "AI公司300强",
    text: "持续整理重要AI公司、核心产品和产业位置，把公司变化放回真实产业结构和权力迁移里看。",
    href: "/ai-company-300"
  },
  {
    title: "AI值得看周刊",
    text: "每周少看一点噪音，多留下一些真正值得看、值得想、值得放进工作里的AI变化。",
    href: "/newsletter"
  },
  {
    title: "AI课程与训练体系",
    text: "从判断课、个人AI工作流训练到团队AI工作流训练，把AI能力落到真实任务和可复用交付物上。",
    href: "/course"
  },
  {
    title: "张向北研究文章",
    text: "记录我对AI公司、AI产品、行业变化、经营视角、工作流和学习方法的长期研究与阶段性判断。",
    href: "/research"
  }
];

const principles = [
  "不把AI讲成万能药，先问它改变了什么真实任务。",
  "不把工具清单当能力，能放进工作流里才算真的会用。",
  "事实尽量查清，判断明确标注，版本持续更新。",
  "长期积累比一次爆款更重要，可复用资产比临时技巧更值钱。"
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
    title: "AI工作流实践",
    text: "记录我如何把AI放进信息筛选、内容生产、公司研究、知识库和企业训练里反复验证。",
    href: "/ai-workflow"
  },
  {
    title: "公开项目",
    text: "查看AI进化论框架、AI公司300强、AI Agent Skills和公司深拆模板等公开研究资产。",
    href: "/projects"
  },
  {
    title: "经营者视角",
    text: "从产品、组织、培训和现金流角度理解AI，关注企业AI化如何真实落地。",
    href: "/operator"
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
              image: absoluteUrl(site.avatar.jpg),
              jobTitle: site.jobTitle,
              description: site.personDescription,
              url: site.url,
              sameAs,
              knowsAbout: ["AI产业研究", "AI公司", "AI产品", "企业AI应用训练", "AI工作流", "创业经营"]
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
        <div className="hero-inner hero-with-host">
          <div className="hero-content">
            <p className="eyebrow">{site.name}</p>
            <h1>张向北</h1>
            <p className="hero-subtitle">
              张向北，AI产业研究者、企业AI应用训练者、连续创业经营者。
            </p>
            <p className="hero-context">
              持续研究AI公司、AI产品、AI工作流和企业AI化，用公司研究和产业判断，帮助普通人、创业者和企业团队看懂AI时代。
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
          <aside className="host-card" aria-label="张向北主理人介绍">
            <OfficialAvatar
              className="host-card-avatar"
              loading="eager"
              sizes="(max-width: 920px) 180px, 220px"
            />
            <div className="host-card-body">
              <p className="host-card-name">张向北</p>
              <p className="host-card-role">AI产业研究者｜企业AI应用训练者｜连续创业经营者</p>
              <p>
                用公司研究、产业判断和真实工作流实践，帮助普通人、创业者和企业团队看懂AI时代。
              </p>
            </div>
          </aside>
        </div>
        <div className="signal-strip" aria-label="张向北AI进化论核心识别">
          <div className="signal-item">
            <span>Research</span>
            <strong>AI产业研究</strong>
          </div>
          <div className="signal-item">
            <span>Training</span>
            <strong>企业AI应用训练</strong>
          </div>
          <div className="signal-item">
            <span>Operator</span>
            <strong>连续创业经营</strong>
          </div>
          <div className="signal-item">
            <span>Practice</span>
            <strong>真实工作流实践</strong>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <SectionHeading eyebrow="Why Follow" title="为什么这里值得长期关注？">
            <p>这里不是每天搬运AI新闻的地方。我更在意哪些变化能穿过热闹，进入真实工作、组织能力和长期资产。</p>
          </SectionHeading>
          <div className="card-grid two">
            {attentionReasons.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionHeading eyebrow="Audience" title="我主要为三类人写作和研究">
            <p>同一个AI变化，对不同人意味着不同问题：有人要理解方向，有人要判断机会，有人要把它落到团队流程里。</p>
          </SectionHeading>
          <div className="card-grid three">
            {audienceGroups.map((group) => (
              <article className="info-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </article>
            ))}
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
              <div className="whitepaper-qr-media">
                <Image
                  src="/images/personal-wechat-qr.jpg"
                  alt="张向北个人微信二维码"
                  width={888}
                  height={1131}
                  sizes="(max-width: 620px) calc(100vw - 66px), 273px"
                />
              </div>
              <p>用微信扫码添加我，备注“白皮书”，领取《2026 AI产业白皮书》。</p>
            </aside>
          </div>
          <p className="whitepaper-note">资料会持续更新，内容以AI公司、AI产品、产业变化和真实应用场景为主。</p>
        </div>
      </section>
    </div>
  );
}
