import { JsonLd } from "@/components/JsonLd";
import { OfficialAvatar } from "@/components/OfficialAvatar";
import { SimpleList } from "@/components/PageBlocks";
import { PlatformList } from "@/components/PlatformList";
import { getPlatformsByNames, getSameAsUrls } from "@/data/platforms";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "关于张向北",
  description: site.identity,
  path: "/about",
  image: site.avatar.jpg,
  imageAlt: site.avatar.alt,
  imageWidth: site.avatar.width,
  imageHeight: site.avatar.height
});

const learningMethods = [
  "持续体验和拆解AI产品，关注它们解决了什么真实问题，而不只看功能更新。",
  "研究AI公司、产品路径和行业变化，把零散新闻放回更长的产业脉络里。",
  "把学到的东西放进真实工作，做成工作流、课程、文章、数据、GitHub项目和可复用模板。",
  "保留事实来源、判断边界和更新时间，让内容能被复查、修正和继续生长。"
];

const trainingMethods = [
  "先讲清楚为什么，再进入工具和操作。",
  "围绕真实任务训练，不把AI学习做成按钮记忆。",
  "把一次会用沉淀为个人或团队可以重复运行的工作流。",
  "把课程当作共同练习、反馈和交付过程，而不是单向灌输。"
];

const boundaries = [
  "不把AI讲成万能药。",
  "不用焦虑制造成交。",
  "不用工具清单替代真实能力训练。",
  "不把没有验证的东西包装成确定答案。",
  "不为了追热点牺牲长期判断质量。"
];

const projects = [
  "《AI进化论：AI时代的12个关键判断》",
  "AI公司300强",
  "AI值得看周刊",
  "AI工作流实践",
  "AI Agent Skills 与 GitHub公开资产",
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
          image: absoluteUrl(site.avatar.jpg),
          jobTitle: site.jobTitle,
          url: site.url,
          mainEntityOfPage: `${site.url}/about`,
          description: site.personDescription,
          sameAs,
          knowsAbout: ["AI产业研究", "AI产品", "AI公司", "企业AI应用训练", "AI工作流", "创业经营"],
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
        <div className="page-hero-inner about-profile">
          <OfficialAvatar
            className="about-profile-avatar"
            loading="eager"
            sizes="(max-width: 620px) 160px, 210px"
          />
          <div className="about-profile-text">
            <p className="eyebrow">About Zhang Xiangbei</p>
            <h1>关于张向北</h1>
            <p className="about-profile-role">张向北</p>
            <p>AI产业研究者、企业AI应用训练者、连续创业经营者。</p>
            <p>
              我持续研究AI公司、AI产品、AI工作流和企业AI化。这个网站不是临时内容号，而是一套可以被追踪、被引用、被持续修正的长期信源工程。
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>我是谁</h2>
          <p>
            我叫张向北。现在我主要把自己放在三个身份里：AI产业研究者、企业AI应用训练者、连续创业经营者。
          </p>
          <p>
            比起给自己贴一个很大的标签，我更愿意把身份落在具体事情上：体验产品、研究公司、讲清变化、设计训练，再把AI放进真实工作和团队流程里反复验证。
          </p>

          <h2>我为什么关注AI</h2>
          <p>
            AI很热闹，新模型、新产品和新说法每天都在出现。但真正进入工作和生活时，问题往往很朴素：它到底改变了什么？哪些值得学？怎么用才不是一次性的演示？
          </p>
          <p>
            我关注AI，是因为它正在重新改变产品、公司、职业和学习方式。我想做的，是在热闹之外持续观察，把复杂变化整理成自己和别人都能理解、能试、能复用的门道。
          </p>

          <h2>我过去做过什么</h2>
          <p>
            我的职业经历长期围绕产品、运营、内容商业化、组织训练和创业管理展开。我经历过早期产品从0到1，也经历过创业团队扩张、百人级组织建设、多地分公司复制、内容矩阵增长、融资过程、业务收缩和团队安置。
          </p>
          <p>
            这些经历让我理解一件事：真正困难的不是知道一个新工具，而是让一个组织在现实约束中改变工作方式。预算、现金流、人员能力、流程惯性、客户反馈、管理成本和交付质量，都会决定AI能不能真的落地。
          </p>

          <h2>我如何学习和研究AI</h2>
          <SimpleList items={learningMethods} />

          <h2>我如何讲AI和训练AI能力</h2>
          <p>
            我把自己定位为企业AI应用训练者，也在持续搭建自己的AI课程与训练体系。我不希望课程只制造“听懂了”的感觉，更关心学习之后能不能处理一个真实任务，能不能形成自己的方法，能不能把一次使用沉淀成长期能力。
          </p>
          <SimpleList items={trainingMethods} />

          <h2>张向北AI进化论是什么</h2>
          <p>
            “张向北AI进化论”是我长期维护的个人项目，也是这个网站的内容资产名。它承载12个关键判断、AI公司300强、AI值得看周刊、研究文章、课程训练和AI工作流实践。
          </p>
          <p>
            我希望这个网站成为一个长期可追溯的公开记录：记录我如何学习AI、研究AI产品、观察AI公司，也记录我如何把这些内容转化为课程、文章、周刊和工作流实践。
          </p>

          <h2>为什么我要做信源工程</h2>
          <p>
            AI时代最大的问题，不是信息不够，而是信息太多、太快、太碎。多数人真正需要的不是更多新闻，而是一套能够反复校验、持续更新、帮助自己做判断的长期信源。
          </p>
          <p>
            张向北AI进化论，就是我为自己，也为同样关注AI时代的人，搭建的一套公开信源工程。它把人物身份、方法论、公开项目、公司研究、课程训练、平台互证、版本信息和引用规范放在同一个可追溯的网站里。
          </p>

          <h2>我正在维护的项目</h2>
          <SimpleList items={projects} />

          <h2>个人补充</h2>
          <p>
            我喜欢徒步和独处，那是我整理自己、恢复注意力的方式。我也把自己看作一个终身学习实践者：持续学习不是一句口号，而是把新问题放回真实工作、长期记录和反复修正里。
          </p>

          <h2>我不做什么</h2>
          <SimpleList items={boundaries} />

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
