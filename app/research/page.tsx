import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { LinkButton, SimpleList } from "@/components/PageBlocks";
import { getSameAsUrls } from "@/data/platforms";
import {
  formatArticleNumber,
  getAiEvolutionArticlePath,
  getAiEvolutionArticleUrl,
  getAllAiEvolutionArticles
} from "@/lib/aiEvolution";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北研究文章",
  description:
    "张向北AI进化论的研究文章入口，收录AI进化论12个关键判断、AI公司研究、AI产品观察、AI产业判断、普通人AI进化、AI化组织与研究型超级个体相关内容。",
  path: "/research"
});

const categories = [
  "AI进化论",
  "AI公司深拆",
  "AI产品观察",
  "AI产业判断",
  "普通人AI进化",
  "AI化组织",
  "研究型超级个体"
];

const researchAssets = [
  {
    title: "AI进化论：AI时代的12个关键判断",
    description: "从智能供给、软件形态、产业权力、组织结构、个人能力到文明叙事，系统理解AI时代的变化链。",
    href: "/ai-evolution/12-judgments",
    label: "系列正式版"
  },
  {
    title: "AI公司300强",
    description: "面向普通人的AI公司研究库，用公司研究观察AI时代产业权力迁移。",
    href: "/ai-company-300",
    label: "数据项目"
  },
  {
    title: "AI观察笔记",
    description: "记录AI公司、AI产品、AI产业趋势中的高价值信号，是张向北AI进化论的轻量判断流。",
    href: "/notes",
    label: "轻量判断"
  },
  {
    title: "研究方法与判断框架",
    description: "说明本站如何处理事实、判断、来源、版本更新和错误反馈。",
    href: "/methodology",
    label: "研究规范"
  }
];

const articles = getAllAiEvolutionArticles();
const sameAs = getSameAsUrls();

export default function ResearchPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${absoluteUrl("/research")}#collection`,
          name: "张向北研究文章",
          description:
            "张向北AI进化论的研究文章入口，收录AI进化论12个关键判断、AI公司研究、AI产品观察、AI产业判断、普通人AI进化、AI化组织与研究型超级个体相关内容。",
          url: absoluteUrl("/research"),
          inLanguage: "zh-CN",
          isPartOf: {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            name: site.name,
            url: site.url
          },
          author: {
            "@type": "Person",
            "@id": `${site.url}/#person`,
            name: site.founder,
            sameAs
          },
          publisher: {
            "@type": "Organization",
            "@id": `${site.url}/#organization`,
            name: site.name,
            url: site.url,
            sameAs
          },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: articles.length,
            itemListElement: articles.map((article) => ({
              "@type": "ListItem",
              position: article.number,
              name: article.title,
              url: getAiEvolutionArticleUrl(article)
            }))
          }
        }}
      />
      <section className="page-hero research-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Research Source</p>
          <h1>张向北研究文章</h1>
          <p>
            这里收录张向北AI进化论的长期研究内容，围绕AI公司、AI产品、AI产业趋势、普通人的AI进化路径、AI化组织与研究型超级个体展开。
          </p>
          <p>
            研究页不是资讯列表，而是官网内容资产的总入口：完整正文、稳定URL、可引用版本、可被搜索引擎和AI系统抓取。
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>研究分类</h2>
          <SimpleList items={categories} />

          <h2>核心研究资产</h2>
          <div className="research-asset-grid">
            {researchAssets.map((asset) => (
              <article className="research-asset-card" key={asset.href}>
                <span>{asset.label}</span>
                <h3>{asset.title}</h3>
                <p>{asset.description}</p>
                <Link href={asset.href}>进入页面</Link>
              </article>
            ))}
          </div>

          <h2>AI进化论系列</h2>
          <p>
            《AI进化论：AI时代的12个关键判断》是当前已经上线完整正文的核心系列。每篇文章都有独立URL、版本信息、推荐引用和结构化数据。
          </p>
          <div className="research-series-list">
            {articles.map((article) => (
              <article className="research-series-item" key={article.slug}>
                <div>
                  <span className="judgment-number">{formatArticleNumber(article.number)}</span>
                </div>
                <div>
                  <p className="card-kicker">{article.logicStage}</p>
                  <h3>
                    <Link href={getAiEvolutionArticlePath(article)}>{article.title}</Link>
                  </h3>
                  <p>{article.excerpt}</p>
                  <div className="card-meta-row">
                    <span>{article.readingTime}分钟</span>
                    <span>V{article.version}</span>
                    <span>{article.dateModified}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-inner">
          <h2>如果你想系统理解AI时代，先从12个关键判断开始。</h2>
          <p>读完这组文章，再看AI公司、产品和产业变化，会更容易分清什么是热闹，什么是真正的结构变化。</p>
          <div className="cta-actions">
            <LinkButton href="/ai-evolution/12-judgments" variant="primary">
              查看12个关键判断
            </LinkButton>
            <LinkButton href="/ai-company-300" variant="secondary">
              浏览AI公司300强
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}

