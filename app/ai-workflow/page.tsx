import { JsonLd } from "@/components/JsonLd";
import { LinkButton, SimpleList } from "@/components/PageBlocks";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "AI工作流实践",
  description: "张向北围绕个人信源工程、AI日报、内容生产、公司研究模板、飞书知识库和企业AI培训沉淀的AI工作流实践。",
  path: "/ai-workflow"
});

const practiceDirections = [
  "个人信源工程",
  "AI日报与信息筛选",
  "日志转公众号文章",
  "AI公司研究模板",
  "飞书知识库沉淀",
  "OpenClaw / Agent Skills",
  "内容生产工作流",
  "企业AI培训工作流"
];

const audience = [
  "想用AI提高工作质量的人",
  "想搭建内容生产系统的人",
  "想给团队做AI培训的人",
  "想理解企业AI化落地的人"
];

export default function AIWorkflowPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "AI工作流实践",
          description: "把AI从一次性工具演示，变成个人和团队可以重复运行的工作系统。",
          url: `${site.url}/ai-workflow`,
          inLanguage: "zh-CN",
          isPartOf: {
            "@type": "WebSite",
            name: site.name,
            url: site.url
          },
          author: {
            "@type": "Person",
            name: site.founder,
            url: `${site.url}/about`
          }
        }}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">AI Workflow Practice</p>
          <h1>AI工作流实践</h1>
          <p>把AI从一次性工具演示，变成个人和团队可以重复运行的工作系统。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>我关注的不是工具，而是任务链</h2>
          <p>
            一个AI工具好不好，不只看它演示时有多惊艳，而要看它能不能进入真实任务链：输入从哪里来，判断在哪里发生，谁来检查质量，结果如何交付，下一轮如何复用。
          </p>
          <p>
            所以我更关心AI如何和知识库、文档、流程、角色、权限、复盘机制连接起来。只有进入任务链，AI才不只是一次性试用，而会变成个人和团队可以长期运行的工作系统。
          </p>

          <h2>当前实践方向</h2>
          <SimpleList items={practiceDirections} />

          <h2>公开项目入口</h2>
          <div className="card-grid three">
            <article className="info-card">
              <h3>GitHub公开资产</h3>
              <p>查看AI进化论框架、AI公司300强和AI Agent Skills等公开仓库。</p>
              <LinkButton href="https://github.com/zhangxiangbei">进入 GitHub</LinkButton>
            </article>
            <article className="info-card">
              <h3>公开项目</h3>
              <p>查看长期维护的结构化研究资产，以及每个项目的目的、状态和适用人群。</p>
              <LinkButton href="/projects">查看公开项目</LinkButton>
            </article>
            <article className="info-card">
              <h3>开放资源</h3>
              <p>整理AI公司研究模板、内容生产SOP、Agent Skill模板和提示词库等资源方向。</p>
              <LinkButton href="/resources">查看开放资源</LinkButton>
            </article>
          </div>

          <h2>适合谁看</h2>
          <SimpleList items={audience} />
        </div>
      </section>
    </div>
  );
}
