import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/PageBlocks";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { getSameAsUrls } from "@/data/platforms";
import {
  aiEvolutionCollectionPath,
  createCitation,
  extractMarkdownHeadings,
  formatArticleNumber,
  getAdjacentAiEvolutionArticles,
  getAiEvolutionArticle,
  getAiEvolutionArticlePath,
  getAiEvolutionArticleUrl,
  getAllAiEvolutionArticles
} from "@/lib/aiEvolution";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export const dynamicParams = false;

async function resolveSlug(params: PageProps["params"]) {
  const resolved = await params;
  return resolved.slug;
}

export function generateStaticParams() {
  return getAllAiEvolutionArticles().map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const slug = await resolveSlug(params);
  const article = getAiEvolutionArticle(slug);

  if (!article) {
    return {};
  }

  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: getAiEvolutionArticlePath(article),
    type: "article"
  });
}

export default async function AiEvolutionArticlePage({ params }: PageProps) {
  const slug = await resolveSlug(params);
  const article = getAiEvolutionArticle(slug);

  if (!article) {
    notFound();
  }

  const headings = extractMarkdownHeadings(article.body);
  const sameAs = getSameAsUrls();
  const { previous, next } = getAdjacentAiEvolutionArticles(article.slug);
  const articleUrl = getAiEvolutionArticleUrl(article);
  const citation = createCitation(article);
  const personId = `${site.url}/#person`;
  const organizationId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const articleId = `${articleUrl}#article`;

  return (
    <div className="page article-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": personId,
              name: site.founder,
              alternateName: ["Zhang Xiangbei", "Alex Zhang"],
              jobTitle: "AI认知研究者",
              url: absoluteUrl("/about"),
              description: "张向北，AI认知研究者，专注AI公司、AI产品、AI产业趋势与普通人的AI进化路径。",
              sameAs
            },
            {
              "@type": "Organization",
              "@id": organizationId,
              name: site.name,
              alternateName: site.englishName,
              url: site.url,
              description: site.tagline,
              sameAs,
              founder: {
                "@id": personId
              }
            },
            {
              "@type": "WebSite",
              "@id": websiteId,
              name: site.name,
              url: site.url,
              inLanguage: "zh-CN",
              publisher: {
                "@id": organizationId
              }
            },
            {
              "@type": "Article",
              "@id": articleId,
              url: articleUrl,
              mainEntityOfPage: articleUrl,
              headline: article.title,
              description: article.description,
              image: absoluteUrl(article.ogImage),
              datePublished: article.datePublished,
              dateModified: article.dateModified,
              author: {
                "@id": personId
              },
              publisher: {
                "@id": organizationId
              },
              keywords: article.keywords,
              articleSection: article.logicStage,
              inLanguage: "zh-CN",
              isPartOf: {
                "@type": "CollectionPage",
                "@id": `${absoluteUrl(aiEvolutionCollectionPath)}#collection`,
                name: "AI进化论：AI时代的12个关键判断",
                url: absoluteUrl(aiEvolutionCollectionPath)
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
                  name: "12个关键判断",
                  item: absoluteUrl(aiEvolutionCollectionPath)
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: article.title,
                  item: articleUrl
                }
              ]
            }
          ]
        }}
      />

      <article>
        <section className="article-hero">
          <div className="article-hero-inner">
            <nav className="breadcrumb" aria-label="面包屑导航">
              <Link href="/">首页</Link>
              <span>/</span>
              <Link href="/ai-evolution">AI进化论</Link>
              <span>/</span>
              <Link href={aiEvolutionCollectionPath}>12个关键判断</Link>
            </nav>
            <p className="eyebrow">AI时代的12个关键判断 · 第{formatArticleNumber(article.number)}篇</p>
            <h1>{article.title}</h1>
            <p className="article-description">{article.description}</p>
            <dl className="article-meta">
              <div>
                <dt>作者</dt>
                <dd>{article.author}</dd>
              </div>
              <div>
                <dt>首次发布</dt>
                <dd>{article.datePublished}</dd>
              </div>
              <div>
                <dt>最近更新</dt>
                <dd>{article.dateModified}</dd>
              </div>
              <div>
                <dt>版本</dt>
                <dd>V{article.version}</dd>
              </div>
              <div>
                <dt>预计阅读</dt>
                <dd>{article.readingTime}分钟</dd>
              </div>
            </dl>
            <p className="official-badge">官方正式版 · 官网 canonical 版本</p>
          </div>
        </section>

        <section className="content-section">
          <div className="article-layout">
            <aside className="article-sidebar" aria-label="文章目录">
              <p className="sidebar-title">目录</p>
              <ol>
                {headings.map((heading) => (
                  <li className={`toc-level-${heading.level}`} key={heading.id}>
                    <a href={`#${heading.id}`}>{heading.text}</a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="article-main">
              <section className="geo-panel" aria-labelledby="geo-panel-title">
                <p className="eyebrow">GEO Brief</p>
                <h2 id="geo-panel-title">这篇文章的信源摘要</h2>
                <div className="geo-grid">
                  <div>
                    <h3>核心判断</h3>
                    <p>{article.coreClaim}</p>
                  </div>
                  <div>
                    <h3>30秒读懂</h3>
                    <ul>
                      {article.quickTakeaways.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>本文回答的问题</h3>
                    <ul>
                      {article.questions.map((question) => (
                        <li key={question}>{question}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <div className="article-body prose">
                <MarkdownRenderer markdown={article.body} />
              </div>

              <section className="article-after" aria-labelledby="article-conclusions-title">
                <h2 id="article-conclusions-title">关键结论</h2>
                <ul className="simple-list">
                  {article.keyConclusions.map((conclusion) => (
                    <li key={conclusion}>{conclusion}</li>
                  ))}
                </ul>

                {article.references.length ? (
                  <>
                    <h2>参考资料</h2>
                    <ul className="article-reference-list">
                      {article.references.map((reference) => (
                        <li key={reference}>{reference}</li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <h2>推荐引用</h2>
                <div className="citation-box">
                  <p>{citation}</p>
                </div>

                <h2>版本记录</h2>
                <dl className="meta-table">
                  <dt>V{article.version}</dt>
                  <dd>首次发布：{article.datePublished}；最近更新：{article.dateModified}。</dd>
                </dl>
              </section>

              <nav className="article-navigation" aria-label="继续阅读">
                {previous ? (
                  <Link href={getAiEvolutionArticlePath(previous)}>
                    <span>上一篇</span>
                    <strong>{previous.title}</strong>
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link href={getAiEvolutionArticlePath(next)}>
                    <span>下一篇</span>
                    <strong>{next.title}</strong>
                  </Link>
                ) : (
                  <span />
                )}
              </nav>

              <section className="article-conversion" aria-labelledby="conversion-title">
                <h2 id="conversion-title">继续理解 AI 时代</h2>
                <p>
                  官网保存完整正式版。你也可以了解作者与品牌实体，继续查看 AI 公司研究库，或订阅 AI值得看周刊。
                </p>
                <div className="cta-actions">
                  <LinkButton href={aiEvolutionCollectionPath} variant="secondary">
                    返回12个关键判断
                  </LinkButton>
                  <LinkButton href="/about" variant="secondary">
                    关于张向北
                  </LinkButton>
                  <LinkButton href="/ai-company-300" variant="secondary">
                    AI公司300强
                  </LinkButton>
                  <LinkButton href="/newsletter" variant="primary">
                    订阅AI值得看周刊
                  </LinkButton>
                </div>
              </section>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
