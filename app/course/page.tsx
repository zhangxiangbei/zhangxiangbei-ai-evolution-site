import { JsonLd } from "@/components/JsonLd";
import { LinkButton, SimpleList } from "@/components/PageBlocks";
import { getSameAsUrls } from "@/data/platforms";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北AI训练体系",
  description: "张向北围绕AI时代判断、个人AI工作流和团队AI工作流搭建的AI课程与训练体系。",
  path: "/course"
});

const trainingTracks = [
  {
    index: "01",
    title: "AI时代判断课：看懂AI时代",
    problem: "解决每天看到很多AI新闻、工具和观点，却不知道哪些变化真正重要的问题。",
    audience: "适合想建立长期判断框架的普通人、职场人、创作者、创业者和管理者。",
    ability: "训练识别AI产业变化、判断公司和产品价值、理解组织与个人能力变化的能力。",
    deliverable: "最终留下《AI进化论：AI时代的12个关键判断》这套可反复回看的认知框架。",
    href: "/ai-evolution/12-judgments"
  },
  {
    index: "02",
    title: "个人AI工作流训练：把AI用进自己的真实工作",
    problem: "解决学了很多工具，但没有形成稳定工作流、没有真正提高交付质量的问题。",
    audience: "适合希望在研究、写作、内容、运营、学习和日常办公中用好AI的职场人和创作者。",
    ability: "训练任务拆解、提示词设计、资料筛选、内容加工、复盘迭代和个人知识库沉淀能力。",
    deliverable: "最终留下至少一套可重复运行的个人AI工作流，以及对应模板、提示词和复盘方法。",
    href: "/ai-workflow"
  },
  {
    index: "03",
    title: "团队AI工作流训练：让团队真的用起来",
    problem: "解决企业只做一次工具演示、员工各用各的、流程和知识没有被重新设计的问题。",
    audience: "适合正在思考企业AI化、团队提效、内容生产、销售运营和知识管理的业务负责人。",
    ability: "训练任务链拆解、团队知识库建设、权限与协作边界、质量检查和反馈机制设计能力。",
    deliverable: "最终留下一套团队AI工作流原型，包括任务清单、流程模板、角色分工和迭代机制。",
    href: "/operator"
  }
];

const trainingPrinciples = [
  "不以工具数量衡量学习成果。",
  "不脱离真实任务讲AI应用。",
  "不把演示效果当作工作结果。",
  "每一轮训练都要留下方法、模板、流程或可复用交付物。"
];

const sameAs = getSameAsUrls();

export default function CoursePage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${site.url}/course#collection`,
              name: "张向北AI训练体系",
              description: "围绕AI时代判断、个人AI工作流和团队AI工作流搭建的AI课程与训练体系。",
              url: `${site.url}/course`,
              inLanguage: "zh-CN",
              hasPart: trainingTracks.map((track) => ({
                "@type": "Course",
                name: track.title,
                description: track.problem,
                url: `${site.url}/course`
              }))
            },
            {
              "@type": "Course",
              "@id": `${site.url}/course#ai-evolution-course`,
              name: "AI进化论——AI时代普通人的12个关键判断",
              description: "从12个关键判断出发，建立理解AI时代变化的基础认知框架。",
              url: `${site.url}/course`,
              inLanguage: "zh-CN",
              provider: {
                "@type": "Person",
                name: site.founder,
                image: absoluteUrl(site.avatar.jpg),
                url: site.url,
                jobTitle: site.jobTitle,
                description: site.personDescription,
                sameAs
              },
              offers: {
                "@type": "Offer",
                price: "199",
                priceCurrency: "CNY",
                availability: "https://schema.org/PreOrder"
              }
            }
          ]
        }}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">AI Courses & Training</p>
          <h1>张向北AI训练体系</h1>
          <p>从看懂AI时代，到把AI用进个人真实工作，再到让团队形成可复用工作流。这里不是卖课清单，而是一套长期迭代的AI能力训练地图。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>训练体系</h2>
          <div className="article-list">
            {trainingTracks.map((track) => (
              <article className="article-card" key={track.title}>
                <span className="index">{track.index}</span>
                <h3>{track.title}</h3>
                <dl className="meta-table">
                  <dt>解决什么问题</dt>
                  <dd>{track.problem}</dd>
                  <dt>适合谁</dt>
                  <dd>{track.audience}</dd>
                  <dt>训练什么能力</dt>
                  <dd>{track.ability}</dd>
                  <dt>最终留下什么交付物</dt>
                  <dd>{track.deliverable}</dd>
                </dl>
                <LinkButton href={track.href}>查看相关内容</LinkButton>
              </article>
            ))}
          </div>

          <h2>训练原则</h2>
          <SimpleList items={trainingPrinciples} />

          <h2>当前状态</h2>
          <p>
            第一门判断课正在准备中；个人AI工作流训练和团队AI工作流训练正在根据真实工作场景持续打磨。正式开放时，会在官网、公众号和全平台入口同步更新。
          </p>
        </div>
      </section>
    </div>
  );
}
