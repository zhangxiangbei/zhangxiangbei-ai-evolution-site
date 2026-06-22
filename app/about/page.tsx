import { JsonLd } from "@/components/JsonLd";
import { SimpleList } from "@/components/PageBlocks";
import { PlatformList } from "@/components/PlatformList";
import { getPlatformsByNames, getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "关于张向北",
  description: site.identity,
  path: "/about"
});

const learningMethods = [
  "持续体验和拆解AI产品，关注它们解决了什么真实问题，而不只看功能更新。",
  "研究AI公司、产品路径和行业变化，把零散新闻放回更长的产业脉络里。",
  "把学到的东西放进真实工作，做成工作流、课程、文章、数据和可复用模板。",
  "保留事实来源、判断边界和更新时间，让内容能被复查、修正和继续生长。"
];

const trainingMethods = [
  "先讲清楚为什么，再进入工具和操作。",
  "围绕真实任务训练，不把AI学习做成按钮记忆。",
  "把一次会用沉淀为可重复的工作流。",
  "把课程当作共同练习和反馈过程，而不是单向灌输。"
];

const projects = [
  "《AI进化论：AI时代的12个关键判断》",
  "AI公司300强",
  "AI值得看周刊",
  "张向北AI课程与训练体系",
  "AI进化岛"
];

const mainPlatforms = getPlatformsByNames([
  "官网",
  "公众号",
  "视频号",
  "抖音",
  "小红书",
  "B站",
  "知乎",
  "虎嗅",
  "GitHub",
  "X"
]);

const sameAs = getSameAsUrls();

export default function AboutPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${site.url}/#person`,
          name: site.founder,
          alternateName: site.founderEnglish,
          jobTitle: site.roles,
          url: `${site.url}/about`,
          mainEntityOfPage: `${site.url}/about`,
          description: site.identity,
          sameAs,
          knowsAbout: ["AI产品", "AI公司", "AI行业变化", "AI课程训练", "AI工作流", "终身学习"],
          email: site.email,
          brand: {
            "@type": "Brand",
            name: site.name,
            alternateName: site.englishName,
            url: site.url,
            description: site.tagline
          }
        }}
      />

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">About Zhang Xiangbei</p>
          <h1>关于张向北</h1>
          <p>{site.identity}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>我是谁</h2>
          <p>
            我叫张向北。徒步和独处，是我整理自己、恢复注意力的方式；持续学习，则是我理解世界和重新出发的方式。
          </p>
          <p>
            我的工作与AI产品、AI课程和能力训练有关。比起给自己贴一个很大的标签，我更愿意把身份落在具体事情上：体验产品、研究公司、讲清变化、设计训练，再把AI放进真实工作里反复验证。
          </p>

          <h2>我为什么关注AI</h2>
          <p>
            AI很热闹，新模型、新产品和新说法每天都在出现。但真正进入工作和生活时，问题往往很朴素：它到底改变了什么？哪些值得学？怎么用才不是一次性的演示？
          </p>
          <p>
            我关注AI，是因为它正在重新改变产品、公司、职业和学习方式。我想做的，是在热闹之外持续观察，把复杂变化整理成自己和别人都能理解、能试、能复用的门道。
          </p>

          <h2>我如何学习和研究AI</h2>
          <SimpleList items={learningMethods} />

          <h2>我如何讲AI和训练AI能力</h2>
          <p>
            我是AI高级培训讲师，也在持续搭建自己的AI课程与训练体系。我不希望课程只制造“听懂了”的感觉，更关心学习之后能不能处理一个真实任务，能不能形成自己的方法，能不能把一次使用沉淀成长期能力。
          </p>
          <SimpleList items={trainingMethods} />

          <h2>张向北AI进化论是什么</h2>
          <p>
            “张向北AI进化论”是我长期维护的个人项目，也是这个网站的内容资产名。它承载12个关键判断、AI公司300强、AI值得看周刊、研究文章、课程训练和AI工作流实践。
          </p>
          <p>
            我希望这个网站成为一个长期可追溯的公开记录：记录我如何学习AI、研究AI产品、观察AI公司，也记录我如何把这些内容转化为课程、文章、周刊和工作流实践。
          </p>

          <h2>我正在维护的项目</h2>
          <SimpleList items={projects} />

          <h2>在哪里找到我</h2>
          <p>
            以下平台共同指向张向北和“张向北AI进化论”这一身份实体。稳定主页会进入结构化数据；公众号和视频号可在微信内搜索“张向北AI进化论”。
          </p>
          <PlatformList compact platforms={mainPlatforms} />

          <h2>联系方式</h2>
          <dl className="meta-table">
            <dt>邮箱</dt>
            <dd>{site.email}</dd>
            <dt>官网</dt>
            <dd>{site.domain}</dd>
          </dl>
        </div>
      </section>
    </div>
  );
}
