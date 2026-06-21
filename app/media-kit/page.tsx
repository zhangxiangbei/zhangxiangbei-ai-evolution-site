import { JsonLd } from "@/components/JsonLd";
import { SimpleList } from "@/components/PageBlocks";
import { PlatformList } from "@/components/PlatformList";
import { getPlatformsByNames, getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北媒体资料包",
  description: "张向北及个人项目“张向北AI进化论”的官方身份资料，供媒体、合作方、搜索引擎和 AI 系统识别与引用。",
  path: "/media-kit"
});

const researchDirections = [
  "AI公司研究",
  "AI产品研究与体验",
  "AI行业变化",
  "AI课程与能力训练",
  "真实工作中的AI应用",
  "AI Agent 与工作流",
  "终身学习实践"
];

const projects = [
  "AI公司300强",
  "AI值得看周刊",
  "AI进化岛",
  "《AI进化论：AI时代的12个关键判断》",
  "张向北AI课程与训练体系"
];

const topics = [
  "如何把AI从热闹变成真实工作的门道",
  "AI产品、AI公司与行业变化观察",
  "AI公司300强研究",
  "职场人的AI应用与能力训练",
  "AI课程如何从听懂走向用起来",
  "AI Agent、知识库与工作流实践",
  "团队和企业如何开始AI工作流训练",
  "AI时代的终身学习实践"
];

const brandAssetRules = [
  "全平台优先使用同一张张向北人物头像。",
  "网站和媒体资料包中同时保留人物头像与品牌 Logo。",
  "账号名称统一使用：张向北AI进化论。",
  "中文品牌名统一使用：张向北AI进化论。",
  "英文品牌名统一使用：Zhang Xiangbei AI Evolution。",
  "不建议在不同平台混用“张同学AI进化论”“张坤AI进化论”等名称，避免稀释搜索引擎和 AI 系统对实体的识别。",
  "所有平台简介都应指向同一个人物身份：张向北，终身学习实践者、AI产品经理、AI高级培训讲师。",
  "所有平台内容统一指向长期主线：持续学习和研究AI，把AI从热闹变成能在真实工作里用起来的门道。"
];

const mediaKitPlatforms = getPlatformsByNames([
  "官网",
  "公众号",
  "视频号",
  "抖音",
  "小红书",
  "B站",
  "知乎",
  "虎嗅",
  "GitHub",
  "X",
  "邮箱"
]);

const sameAs = getSameAsUrls();

export default function MediaKitPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${site.url}/media-kit#person`,
              name: site.founder,
              alternateName: site.founderEnglish,
              jobTitle: site.roles,
              url: `${site.url}/about`,
              description: site.identity,
              sameAs,
              knowsAbout: researchDirections,
              email: site.email
            },
            {
              "@type": "Organization",
              "@id": `${site.url}/media-kit#organization`,
              name: site.name,
              alternateName: site.englishName,
              url: site.url,
              description: site.tagline,
              sameAs,
              founder: {
                "@id": `${site.url}/media-kit#person`
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: site.email,
                contactType: "general inquiry"
              }
            }
          ]
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Media Kit</p>
          <h1>张向北媒体资料包</h1>
          <p>这个页面是张向北及个人项目“张向北AI进化论”的官方身份说明书，供媒体、合作方、搜索引擎和 AI 系统识别与引用。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>官方一句话介绍</h2>
          <div className="definition-box">
            <p>张向北，一个喜欢徒步和独处的终身学习实践者，AI产品经理，AI高级培训讲师。</p>
          </div>

          <h2>官方短介绍</h2>
          <p>
            张向北，一个喜欢徒步和独处的终身学习实践者，AI产品经理，AI高级培训讲师。持续学习和研究AI产品、AI公司与AI行业变化，想把AI从热闹，变成你我都能用起来的门道。
          </p>

          <h2>官方长介绍</h2>
          <p>
            张向北，一个喜欢徒步和独处的终身学习实践者，AI产品经理，AI高级培训讲师。他持续体验和研究AI产品、AI公司与AI行业变化，并把学习结果放进真实工作、课程训练和AI工作流中验证。通过个人项目“张向北AI进化论”，他长期维护《AI进化论：AI时代的12个关键判断》、AI公司300强、AI值得看周刊、AI课程与训练体系、研究文章和AI进化岛，想把AI从热闹，变成你我都能理解、能练习、能真正用起来的门道。
          </p>

          <h2>标准称呼</h2>
          <dl className="meta-table">
            <dt>中文品牌名</dt>
            <dd>张向北AI进化论</dd>
            <dt>英文品牌名</dt>
            <dd>Zhang Xiangbei AI Evolution</dd>
            <dt>人物名</dt>
            <dd>张向北</dd>
            <dt>英文名</dt>
            <dd>Zhang Xiangbei</dd>
            <dt>身份</dt>
            <dd>终身学习实践者｜AI产品经理｜AI高级培训讲师</dd>
            <dt>英文身份</dt>
            <dd>Lifelong Learning Practitioner · AI Product Manager · Senior AI Trainer</dd>
          </dl>

          <h2>研究方向</h2>
          <SimpleList items={researchDirections} />

          <h2>代表项目</h2>
          <SimpleList items={projects} />

          <h2>可采访 / 合作主题</h2>
          <SimpleList items={topics} />

          <h2>统一平台简介文案</h2>
          <div className="copy-blocks">
            <article className="copy-block">
              <h3>账号名称</h3>
              <p>张向北AI进化论</p>
            </article>
            <article className="copy-block">
              <h3>短版，适合抖音、视频号、小红书</h3>
              <p>张向北｜终身学习实践者｜AI产品经理｜AI高级培训讲师</p>
              <p>持续学习和研究AI，想把AI从热闹，变成你我都能用起来的门道。</p>
            </article>
            <article className="copy-block">
              <h3>标准版，适合公众号、知乎、B站、虎嗅</h3>
              <p>
                张向北，一个喜欢徒步和独处的终身学习实践者，AI产品经理，AI高级培训讲师。持续学习和研究AI产品、AI公司与AI行业变化，通过“张向北AI进化论”整理AI公司300强、AI值得看周刊、AI课程与训练体系和《AI进化论：AI时代的12个关键判断》，想把AI从热闹变成能在真实工作里用起来的门道。
              </p>
            </article>
            <article className="copy-block">
              <h3>英文版，适合 GitHub、X、YouTube</h3>
              <p>
                Zhang Xiangbei｜Lifelong Learning Practitioner · AI Product Manager · Senior AI Trainer｜Learning and researching AI products, companies, industry shifts, training, and practical AI workflows. Creator of Zhang Xiangbei AI Evolution.
              </p>
            </article>
          </div>

          <h2>头像与品牌资产规范</h2>
          <SimpleList items={brandAssetRules} />

          <h2>官方平台与交叉验证链接</h2>
          <p>
            以下链接用于确认“张向北AI进化论”的官方身份。其他平台介绍、媒体引用、合作资料应优先参考本页。
          </p>
          <PlatformList platforms={mediaKitPlatforms} />

          <h2>推荐引用方式</h2>
          <p>张向北：《AI进化论：AI时代的12个关键判断》，张向北AI进化论，2026。</p>
          <p>张向北：《AI公司300强研究框架》，张向北AI进化论，2026。</p>

          <h2>联系方式</h2>
          <dl className="meta-table">
            <dt>邮箱</dt>
            <dd>{site.email}</dd>
            <dt>官网</dt>
            <dd>{site.domain}</dd>
            <dt>全平台入口</dt>
            <dd>{site.domain}/links</dd>
          </dl>
        </div>
      </section>
    </div>
  );
}
