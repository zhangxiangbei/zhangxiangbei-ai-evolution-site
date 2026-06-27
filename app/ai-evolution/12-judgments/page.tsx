import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/PageBlocks";
import { SourceInfo } from "@/components/SourceInfo";
import { getSameAsUrls } from "@/data/platforms";
import {
  formatArticleNumber,
  getAiEvolutionArticlePath,
  getAiEvolutionArticleUrl,
  getAllAiEvolutionArticles,
  logicChain
} from "@/lib/aiEvolution";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI进化论：AI时代的12个关键判断",
  description:
    "《AI进化论：AI时代的12个关键判断》是一组面向普通人的AI时代认知框架，从智能供给、软件形态、产业权力、商业逻辑、组织结构、个人能力到文明叙事，理解AI时代的系统性重排。",
  path: "/ai-evolution/12-judgments",
  type: "article"
});

const articles = getAllAiEvolutionArticles();
const sameAs = getSameAsUrls();
const lastUpdated = articles
  .map((article) => article.dateModified)
  .sort()
  .at(-1);

export default function TwelveJudgmentsPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${absoluteUrl("/ai-evolution/12-judgments")}#collection`,
              name: "AI进化论：AI时代的12个关键判断",
              description:
                "一套围绕AI时代系统性变化展开的判断框架，用于理解智能、软件、公司、组织、个体与文明叙事如何被重排。",
              url: absoluteUrl("/ai-evolution/12-judgments"),
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
                image: absoluteUrl(site.avatar.jpg),
                url: site.url,
                jobTitle: site.jobTitle,
                description: site.personDescription,
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
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "首页",
                  item: site.url
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "AI进化论",
                  item: absoluteUrl("/ai-evolution")
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "AI时代的12个关键判断",
                  item: absoluteUrl("/ai-evolution/12-judgments")
                }
              ]
            }
          ]
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">12 Judgments · Official Series</p>
          <h1>AI进化论：AI时代的12个关键判断</h1>
          <p>
            AI时代不是一次工具升级，而是一次从智能供给、软件形态、产业权力、组织结构、个人能力到文明叙事的系统性重排。
          </p>
          <p>
            这12个判断试图回答一个核心问题：当基础智力不再稀缺，世界会如何重新分配公司、组织、个人与文明的价值？
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <div className="definition-box">
            <p>
              这不是12个并列选题，而是一条连续变化链：智能变了，软件变了，财富分配变了，基础设施变了，商业逻辑变了，产业周期变了，公司组织变了，管理范式变了，个体能力变了，协作接口变了，社会分化变了，最后文明叙事也会变。
            </p>
          </div>

          <h2>12阶段逻辑链</h2>
          <ol className="logic-chain" aria-label="AI时代12阶段逻辑链">
            {logicChain.map((stage, index) => (
              <li key={stage}>
                <span>{formatArticleNumber(index + 1)}</span>
                <strong>{stage}</strong>
              </li>
            ))}
          </ol>

          <h2>12篇正式文章</h2>
          <div className="judgment-grid detailed" aria-label="AI时代的12个关键判断文章目录">
            {articles.map((article) => (
              <article className="judgment-card" key={article.slug}>
                <span className="judgment-number">{formatArticleNumber(article.number)}</span>
                <p className="card-kicker">{article.logicStage}</p>
                <h2>{article.title}</h2>
                <p>
                  <strong>核心判断：</strong>
                  {article.coreClaim}
                </p>
                <p>{article.excerpt}</p>
                <div className="card-meta-row">
                  <span>{article.readingTime}分钟</span>
                  <span>V{article.version}</span>
                  <span>{article.dateModified}</span>
                </div>
                <Link href={getAiEvolutionArticlePath(article)}>阅读正式版</Link>
              </article>
            ))}
          </div>

          <h2>阅读路径</h2>
          <div className="card-grid two">
            <article className="info-card">
              <span className="index">PATH 01</span>
              <h3>从第1篇开始</h3>
              <p>适合第一次系统阅读。先理解“智能变了”，再进入软件、公司、组织、个体和文明叙事。</p>
              <LinkButton href={getAiEvolutionArticlePath(articles[0])} variant="primary">
                从第1篇开始
              </LinkButton>
            </article>
            <article className="info-card">
              <span className="index">PATH 02</span>
              <h3>按主题选择</h3>
              <p>如果你正在关注组织、管理、个体能力或AI产业，也可以从对应阶段直接进入。</p>
              <LinkButton href="/research" variant="secondary">
                查看研究文章
              </LinkButton>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner prose">
          <SourceInfo
            title="AI进化论：AI时代的12个关键判断"
            version="v1.0"
            lastUpdated={lastUpdated || "2026-06-13"}
          />
        </div>
      </section>
    </div>
  );
}
