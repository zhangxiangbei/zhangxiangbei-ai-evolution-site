import { JsonLd } from "@/components/JsonLd";
import { LinkButton, SimpleList } from "@/components/PageBlocks";
import { getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北AI课程与训练体系",
  description: "张向北围绕AI认知框架、真实工作应用和团队AI工作流持续搭建的课程与训练体系。",
  path: "/course"
});

const learningPath = [
  "先建立判断框架：知道AI正在改变什么，也知道什么不值得追。",
  "再进入真实工作：围绕具体任务选择工具、拆解流程并完成交付。",
  "最后形成工作流：把一次会用沉淀为个人或团队可以重复运行的系统。"
];

const coursePrinciples = [
  "不以工具数量衡量学习成果。",
  "不脱离真实任务讲AI应用。",
  "不把演示效果当作工作结果。",
  "每一轮训练都要留下方法、模板或工作流。"
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
              name: "张向北AI课程与训练体系",
              description: "围绕AI认知框架、真实工作应用和团队AI工作流持续搭建的课程与训练体系。",
              url: `${site.url}/course`,
              inLanguage: "zh-CN",
              mainEntity: {
                "@id": `${site.url}/course#ai-evolution-course`
              }
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
                url: `${site.url}/about`,
                jobTitle: site.roles,
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
          <h1>张向北AI课程与训练体系</h1>
          <p>从认知框架到真实工作，再到团队AI工作流，逐步把“知道AI”变成“能把AI用起来”。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>这不是一张卖课清单</h2>
          <p>
            我更愿意把这里做成一份长期课程地图。每门课都从真实问题出发：先理解变化，再完成任务，最后把方法沉淀成可以继续使用的工作流。
          </p>

          <h2>课程体系</h2>
          <div className="card-grid two">
            <article className="info-card">
              <span className="index">01 · 认知基础课</span>
              <h3>AI进化论——AI时代普通人的12个关键判断</h3>
              <p>从智能供给、软件形态、公司组织、个人能力到文明叙事，建立理解AI时代变化的基础框架。</p>
              <p>共12节短课。第一版筹备中，定价199元。</p>
              <LinkButton href="/ai-evolution/12-judgments">先看12个判断</LinkButton>
            </article>

            <article className="info-card">
              <span className="index">02 · 规划方向</span>
              <h3>把AI用进真实工作</h3>
              <p>面向职场人的AI应用课。围绕真实任务练习信息整理、研究分析、内容表达、方案协作和个人工作流，而不是堆积工具清单。</p>
            </article>

            <article className="info-card">
              <span className="index">03 · 规划方向</span>
              <h3>业务团队AI工作流入门</h3>
              <p>面向团队和企业的AI训练课。从业务任务、流程拆解、知识沉淀和协作边界开始，建立第一套能跑起来的团队AI工作流。</p>
            </article>
          </div>

          <h2>学习路径</h2>
          <SimpleList items={learningPath} />

          <h2>训练原则</h2>
          <SimpleList items={coursePrinciples} />

          <h2>当前状态</h2>
          <p>
            第一门认知课正在准备中；另外两个方向仍处于课程研究和训练方案设计阶段。正式开放时，会在官网、公众号和全平台入口同步更新，不提前制造不存在的报名入口。
          </p>
        </div>
      </section>
    </div>
  );
}
