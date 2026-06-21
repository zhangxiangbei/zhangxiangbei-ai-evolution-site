import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "公开项目",
  description: "这里收录张向北AI进化论长期维护的公开项目和结构化研究资产。",
  path: "/projects"
});

const projects = [
  {
    name: "AI公司300强",
    description: "面向普通人的AI公司研究库。",
    href: "/ai-company-300"
  },
  {
    name: "AI进化论框架",
    description: "面向普通人的AI时代认知框架。",
    href: "/ai-evolution"
  },
  {
    name: "AI Agent Skills",
    description: "个人研究、写作和内容工作使用的AI Agent、OpenClaw、飞书自动化相关Skill模板。",
    href: "https://github.com/zhangxiangbei/ai-agent-skills"
  },
  {
    name: "AI公司深拆模板",
    description: "用于系统分析AI公司的统一研究模板。",
    href: "/companies/template"
  }
];

export default function ProjectsPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "公开项目",
          description: "这里收录张向北AI进化论长期维护的公开项目和结构化研究资产。",
          url: `${site.url}/projects`,
          inLanguage: "zh-CN",
          hasPart: projects.map((project) => ({
            "@type": "CreativeWork",
            name: project.name,
            description: project.description,
            url: project.href ? `${site.url}${project.href}` : `${site.url}/projects`
          }))
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Projects</p>
          <h1>公开项目</h1>
          <p>这里收录张向北AI进化论长期维护的公开项目和结构化研究资产。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <div className="article-list">
            {projects.map((project) => (
              <article className="article-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.href ? <a href={project.href}>查看项目</a> : <span>项目主页排期公开</span>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
