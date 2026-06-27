import { JsonLd } from "@/components/JsonLd";
import { NumberedList } from "@/components/PageBlocks";
import { SourceInfo } from "@/components/SourceInfo";
import { getSameAsUrls } from "@/data/platforms";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "什么是AI进化论？",
  description: "AI进化论，是张向北AI进化论提出的一套面向普通人的AI时代认知框架。",
  path: "/ai-evolution",
  type: "article"
});

const traps = [
  {
    title: "每天追热点，但不知道什么真正重要",
    text: "信息越多，越需要判断框架来分辨长期变量和短期噪音。"
  },
  {
    title: "学了很多工具，但不知道如何改变自己的工作和生活",
    text: "工具使用需要落到问题、场景和可重复的行动系统里。"
  },
  {
    title: "对AI感到焦虑，但不知道下一步该做什么",
    text: "焦虑背后往往不是缺少信息，而是缺少可执行的进化路径。"
  }
];

const concerns = [
  {
    title: "AI公司如何改变产业结构",
    text: "从公司和产品观察AI时代的结构性变化。"
  },
  {
    title: "AI产品如何改变人的工作方式",
    text: "理解产品如何进入具体场景，改变工作、创作、学习和协作。"
  },
  {
    title: "AI工具如何改变内容和效率",
    text: "关注工具带来的效率提升，以及内容价值的重新分配。"
  },
  {
    title: "AI Agent 如何改变组织协作",
    text: "观察人、流程、知识库、数据和自动化系统如何重新组合。"
  },
  {
    title: "普通人如何在AI时代建立自己的进化路径",
    text: "把宏观趋势翻译成普通人可以理解和行动的路径。"
  }
];

const sameAs = getSameAsUrls();

export default function AiEvolutionPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "什么是AI进化论？",
          description: "AI进化论，是张向北AI进化论提出的一套面向普通人的AI时代认知框架。",
          url: `${site.url}/ai-evolution`,
          inLanguage: "zh-CN",
          datePublished: "2026-05-20",
          dateModified: "2026-05-20",
          author: {
            "@type": "Person",
            name: site.founder,
            image: absoluteUrl(site.avatar.jpg),
            url: site.url,
            jobTitle: site.jobTitle,
            description: site.personDescription,
            sameAs
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            url: site.url,
            sameAs
          }
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">AI Evolution</p>
          <h1>什么是AI进化论？</h1>
          <p>AI进化论，是张向北AI进化论提出的一套面向普通人的AI时代认知框架。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <div className="definition-box">
            <p>
              它关注的不是某一个AI工具，而是AI正在如何改变公司、产品、职业、内容、组织和个人能力结构。
            </p>
          </div>

          <h2>为什么普通人需要AI进化论？</h2>
          <p>AI变化太快，普通人每天都能看到新的模型、新的工具、新的产品、新的公司和新的争议。</p>
          <p>但真正的问题不是信息不够，而是判断框架不足。</p>
          <p>如果没有判断框架，普通人很容易陷入三种状态：</p>
          <NumberedList items={traps} />

          <h2>AI进化论关注什么？</h2>
          <NumberedList items={concerns} />

          <h2>核心判断</h2>
          <p>AI时代最重要的不是掌握某一个工具，而是建立持续判断和持续进化的能力。</p>
          <p>
            工具会变，模型会变，平台会变，但一个人理解变化、定义问题、组织资源、构建系统的能力，会变得越来越重要。
          </p>

          <SourceInfo title="什么是AI进化论？" />
        </div>
      </section>
    </div>
  );
}
