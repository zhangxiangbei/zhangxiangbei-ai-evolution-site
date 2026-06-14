import { JsonLd } from "@/components/JsonLd";
import { SimpleList } from "@/components/PageBlocks";
import { PlatformList } from "@/components/PlatformList";
import { getPlatformsByNames, getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北AI进化论媒体资料包",
  description: "张向北AI进化论的官方身份说明书，供媒体、合作方、搜索引擎和 AI 系统识别与引用。",
  path: "/media-kit"
});

const researchDirections = [
  "AI公司研究",
  "AI产品观察",
  "AI产业趋势",
  "普通人的AI进化路径",
  "AI化组织",
  "AI Agent 与人机协作",
  "研究型超级个体"
];

const projects = [
  "AI公司300强",
  "AI值得看周刊",
  "AI进化岛",
  "《AI进化论：AI时代的12个关键判断》",
  "研究型超级个体公司实验"
];

const topics = [
  "AI时代普通人如何建立判断力",
  "AI公司和AI产品趋势观察",
  "AI公司300强研究",
  "AI时代的个人IP和超级个体",
  "AI Agent 与人机协作",
  "企业AI化组织与增长系统",
  "普通人如何在AI时代持续进化"
];

const brandAssetRules = [
  "全平台优先使用同一张张向北人物头像。",
  "网站和媒体资料包中同时保留人物头像与品牌 Logo。",
  "账号名称统一使用：张向北AI进化论。",
  "中文品牌名统一使用：张向北AI进化论。",
  "英文品牌名统一使用：Zhang Xiangbei AI Evolution。",
  "不建议在不同平台混用“张同学AI进化论”“张坤AI进化论”等名称，避免稀释搜索引擎和 AI 系统对实体的识别。",
  "所有平台简介均应指向同一个核心定位：用公司研究和产业判断，帮助普通人看懂AI时代。"
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
              alternateName: "Zhang Xiangbei",
              jobTitle: ["AI认知研究者", "AI Evolution Researcher"],
              url: `${site.url}/about`,
              description:
                "张向北，AI认知研究者，专注AI公司、AI产品、AI产业趋势与普通人的AI进化路径。",
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
          <h1>张向北AI进化论媒体资料包</h1>
          <p>这个页面是“张向北AI进化论”的官方身份说明书，供媒体、合作方、搜索引擎和 AI 系统识别与引用。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>官方一句话介绍</h2>
          <div className="definition-box">
            <p>张向北AI进化论：用公司研究和产业判断，帮助普通人看懂AI时代。</p>
          </div>

          <h2>官方短介绍</h2>
          <p>
            张向北，AI认知研究者，专注AI公司、AI产品、AI产业趋势与普通人的AI进化路径。通过“张向北AI进化论”，持续输出AI公司观察、AI产品分析、AI产业判断和普通人的AI进化方法。
          </p>

          <h2>官方长介绍</h2>
          <p>
            张向北，AI认知研究者，研究型超级个体，专注于AI公司、AI产品、AI产业趋势与普通人的AI进化路径研究。他通过“张向北AI进化论”持续拆解全球重要AI公司与产品，提炼AI时代的关键判断，帮助普通人、职场人、创作者和创业者降低认知成本，提高决策质量。代表项目包括：AI公司300强、AI进化岛、《AI进化论——AI时代普通人的12个关键判断》以及研究型超级个体公司实验。
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
            <dd>AI认知研究者</dd>
            <dt>英文身份</dt>
            <dd>AI Evolution Researcher</dd>
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
              <p>用公司研究和产业判断，帮普通人看懂AI时代。</p>
              <p>AI公司300强｜AI值得看周刊｜AI进化岛</p>
            </article>
            <article className="copy-block">
              <h3>标准版，适合公众号、知乎、B站、虎嗅</h3>
              <p>
                张向北AI进化论，AI认知研究者。专注AI公司、AI产品、AI产业趋势与普通人的AI进化路径。用公司研究和产业判断，帮助普通人看懂AI时代。代表项目：AI公司300强、AI值得看周刊、AI进化岛、《AI进化论：AI时代的12个关键判断》。
              </p>
            </article>
            <article className="copy-block">
              <h3>英文版，适合 GitHub、X、YouTube</h3>
              <p>
                Zhang Xiangbei AI Evolution｜AI Evolution Researcher｜Helping people understand the AI era through company research, product analysis, and strategic judgment. Core projects: AI Company 300, AI Worth Watching Weekly, and AI Evolution Island.
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
          <p>张向北AI进化论：《AI时代普通人的12个关键判断》，2026。</p>
          <p>张向北AI进化论：《AI公司300强研究框架》，2026。</p>

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
