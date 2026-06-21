import { JsonLd } from "@/components/JsonLd";
import { SimpleList } from "@/components/PageBlocks";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "开放资源",
  description: "这里整理张向北AI进化论公开的提示词、Skill、研究模板和内容生产工作流。",
  path: "/resources"
});

const futureResources = [
  "AI公司研究模板",
  "张向北化选题加工模板",
  "AI内容生产SOP",
  "AI Agent Skill模板",
  "飞书/知识库/自动化工作流",
  "AI进化论提示词库"
];

const plannedResources = [
  "可复制的AI公司深拆页面模板",
  "面向普通人的AI产品观察清单",
  "AI值得看周刊选题、资料整理与发布工作流",
  "适合个人长期研究的知识库结构"
];

export default function ResourcesPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "开放资源",
          description: "这里整理张向北AI进化论公开的提示词、Skill、研究模板和内容生产工作流。",
          url: `${site.url}/resources`,
          inLanguage: "zh-CN"
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Resources</p>
          <h1>开放资源</h1>
          <p>这里整理张向北AI进化论公开的提示词、Skill、研究模板和内容生产工作流。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>已开放资源</h2>
          <div className="definition-box">
            <p>第一版以页面化资料和公开仓库说明为主。本站不会编造不存在的下载链接；具备公开文件版本后，会补充文件地址、版本号、适用场景和更新时间。</p>
          </div>

          <h2>排期资源</h2>
          <SimpleList items={futureResources} />

          <h2>后续计划资源</h2>
          <SimpleList items={plannedResources} />

          <h2>发布原则</h2>
          <p>
            开放资源会优先保证可复用、可追踪、可更新。每一个资源正式发布时，都应尽量包含用途说明、适用边界、版本信息和反馈入口。
          </p>
        </div>
      </section>
    </div>
  );
}
