import { JsonLd } from "@/components/JsonLd";
import { SimpleList } from "@/components/PageBlocks";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "经营者视角",
  description: "张向北从产品、组织、培训和现金流角度理解AI，关注企业AI化如何进入真实业务和团队工作流。",
  path: "/operator"
});

const aiAdoptionViews = [
  "企业AI化不是买工具。",
  "不是搞一次培训热闹。",
  "不是让员工自学。",
  "而是重新设计任务、流程、知识、权限和反馈。"
];

const operatorContributions = [
  "产品视角：AI最终要回到用户任务、交付体验和真实价值。",
  "组织视角：AI能否落地，取决于流程、角色、协作和管理方式是否跟着改变。",
  "培训视角：一次课程不能替代持续训练，员工需要把AI放进自己的任务链。",
  "现金流视角：企业AI化必须回答成本、效率、质量、收入和风险之间的真实关系。"
];

export default function OperatorPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "经营者视角",
          description: "我如何从产品、组织、培训和现金流角度理解AI。",
          url: `${site.url}/operator`,
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
          <p className="eyebrow">Operator View</p>
          <h1>经营者视角</h1>
          <p>我如何从产品、组织、培训和现金流角度理解AI。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>为什么AI不能只从技术看？</h2>
          <p>
            AI当然有技术门槛，但企业真正面对的不是一场技术发布会，而是一组现实问题：谁来用、用在哪个任务、如何检查结果、如何进入流程、如何衡量收益、如何避免新的管理混乱。
          </p>
          <p>
            只从技术看AI，很容易高估演示效果，也容易低估组织改变的难度。真正落地时，AI必须穿过产品、运营、销售、内容、培训、管理和现金流。
          </p>

          <h2>我的经营经历给AI研究带来了什么？</h2>
          <p>
            我经历过产品从0到1、创业团队扩张、百人级组织建设、多地分公司复制、内容矩阵增长、融资过程、业务收缩和团队安置。这些经历让我在看AI时，会自然追问：它改变的是哪条任务链，能不能复制，成本和收益如何，团队是否真的愿意用。
          </p>
          <SimpleList items={operatorContributions} />

          <h2>我现在如何看企业AI化？</h2>
          <div className="definition-box">
            <p>企业AI化不是把AI工具塞进公司，而是重新设计任务、流程、知识、权限和反馈，让团队拥有更高质量、更高复用率的工作系统。</p>
          </div>
          <SimpleList items={aiAdoptionViews} />
        </div>
      </section>
    </div>
  );
}
