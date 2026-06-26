import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, site, absoluteUrl } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "公开项目",
  description: "张向北AI进化论长期维护的公开研究资产，包括AI公司300强、AI进化论框架、AI Agent Skills和公司深拆模板。",
  path: "/projects"
});

const projects = [
  {
    name: "AI公司300强",
    purpose: "建立一套面向普通人、创业者和企业团队的AI公司研究库，用公司变化理解AI产业结构和机会迁移。",
    status: "v0.1 持续更新中，首批公司数据与字段结构已公开。",
    audience: "适合关注AI公司、AI产品、产业趋势、创业机会和企业AI化方向的人。",
    links: [
      { label: "官网页面", href: "/ai-company-300" },
      { label: "开放数据", href: "/data" },
      { label: "GitHub", href: "https://github.com/zhangxiangbei/ai-company-300" }
    ]
  },
  {
    name: "AI进化论框架",
    purpose: "围绕《AI进化论：AI时代的12个关键判断》，沉淀理解AI时代的长期判断框架。",
    status: "12个关键判断 V1.0 已发布，独立文章持续补全和校准。",
    audience: "适合希望系统理解AI如何改变公司、组织、个人能力和文明叙事的人。",
    links: [
      { label: "总纲页面", href: "/ai-evolution" },
      { label: "12个判断", href: "/ai-evolution/12-judgments" },
      { label: "GitHub", href: "https://github.com/zhangxiangbei/ai-evolution-framework" }
    ]
  },
  {
    name: "AI Agent Skills",
    purpose: "公开一组用于研究、写作、内容加工和信源工程的AI Agent Skill模板，记录个人工作流如何被结构化。",
    status: "v0.1 公开版已建立，后续根据真实使用继续拆分和补充。",
    audience: "适合想搭建AI工作流、内容生产系统、知识库协作和Agent Skill的人。",
    links: [
      { label: "GitHub", href: "https://github.com/zhangxiangbei/ai-agent-skills" },
      { label: "开放资源", href: "/resources" },
      { label: "AI工作流实践", href: "/ai-workflow" }
    ]
  },
  {
    name: "AI公司深拆模板",
    purpose: "为每一家AI公司深拆提供统一结构，避免只凭热点和碎片信息理解公司。",
    status: "模板结构已公开，后续将随AI公司300强研究迭代。",
    audience: "适合做公司研究、产品观察、产业判断和内容选题的人。",
    links: [
      { label: "模板页面", href: "/companies/template" },
      { label: "公司深拆列表", href: "/companies" }
    ]
  }
];

function toUrl(href: string) {
  return href.startsWith("http") ? href : absoluteUrl(href);
}

export default function ProjectsPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "公开项目",
          description: "张向北AI进化论长期维护的公开研究资产，包括AI公司300强、AI进化论框架、AI Agent Skills和公司深拆模板。",
          url: `${site.url}/projects`,
          inLanguage: "zh-CN",
          hasPart: projects.map((project) => ({
            "@type": "CreativeWork",
            name: project.name,
            description: project.purpose,
            url: toUrl(project.links[0].href)
          }))
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Public Research Assets</p>
          <h1>公开项目</h1>
          <p>这里收录张向北AI进化论长期维护的公开研究资产。它们不是一次性的展示页，而是会随着研究、课程训练和真实工作流继续迭代的结构化资产。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <div className="article-list">
            {projects.map((project) => (
              <article className="article-card" key={project.name}>
                <h3>{project.name}</h3>
                <dl className="meta-table">
                  <dt>项目目的</dt>
                  <dd>{project.purpose}</dd>
                  <dt>当前状态</dt>
                  <dd>{project.status}</dd>
                  <dt>适合谁</dt>
                  <dd>{project.audience}</dd>
                </dl>
                <div className="cta-actions">
                  {project.links.map((link) => (
                    <a className="button button-secondary" href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <h2>为什么把部分项目放到 GitHub？</h2>
          <p>
            因为AI时代的研究不应该只停留在文章里。公司数据、研究模板、Prompt、Agent Skill、工作流和结构化方法，都应该尽可能以可追踪、可复用、可迭代的方式沉淀下来。
          </p>
          <p>
            GitHub不是为了证明我是一名传统程序员，而是为了公开记录我如何把AI研究、内容生产和工作流实践变成可持续迭代的资产。
          </p>
        </div>
      </section>
    </div>
  );
}
