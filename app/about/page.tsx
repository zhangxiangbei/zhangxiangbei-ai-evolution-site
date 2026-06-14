import { JsonLd } from "@/components/JsonLd";
import { NumberedList, SimpleList } from "@/components/PageBlocks";
import { PlatformList } from "@/components/PlatformList";
import { getPlatformsByNames, getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "关于张向北",
  description:
    "张向北，AI认知研究者，专注AI公司、AI产品、AI产业趋势与普通人的AI进化路径。",
  path: "/about"
});

const focusAreas = [
  {
    title: "AI公司研究",
    text: "观察全球重要AI公司的产品、技术、商业模式与竞争格局。"
  },
  {
    title: "AI产品观察",
    text: "拆解AI产品如何改变内容、办公、学习、创作、商业和组织效率。"
  },
  {
    title: "AI产业趋势",
    text: "关注AI基础模型、Agent、AI搜索、AI视频、AI办公、AI组织等关键方向。"
  },
  {
    title: "普通人的AI进化路径",
    text: "帮助普通人、职场人、创作者和创业者理解AI时代的机会、风险与行动路径。"
  },
  {
    title: "AI化组织与超级个体",
    text: "探索AI Agent、自动化工作流、知识库与人机协作如何重构个人和组织效率。"
  }
];

const projects = [
  "张向北AI进化论",
  "AI公司300强",
  "AI进化岛",
  "《AI进化论——AI时代普通人的12个关键判断》"
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
          name: site.founder,
          alternateName: "Zhang Xiangbei",
          jobTitle: "AI认知研究者",
          url: `${site.url}/about`,
          mainEntityOfPage: `${site.url}/about`,
          description:
            "张向北，AI认知研究者，专注AI公司、AI产品、AI产业趋势与普通人的AI进化路径。",
          sameAs,
          knowsAbout: focusAreas.map((area) => area.title),
          email: site.email,
          worksFor: {
            "@type": "Organization",
            name: site.name,
            alternateName: site.englishName,
            description: site.tagline,
            url: site.url,
            sameAs
          }
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">About</p>
          <h1>关于张向北</h1>
          <p>张向北，AI认知研究者，专注AI公司、AI产品、AI产业趋势与普通人的AI进化路径。</p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <p>
            通过“张向北AI进化论”，我希望用公司研究和产业判断，帮助普通人看懂AI时代：不是追逐每一个新工具，而是建立面对变化的判断框架。
          </p>

          <h2>我关注五个方向</h2>
          <NumberedList items={focusAreas} />

          <h2>代表项目</h2>
          <SimpleList items={projects} />

          <h2>联系方式</h2>
          <dl className="meta-table">
            <dt>邮箱</dt>
            <dd>{site.email}</dd>
            <dt>官网</dt>
            <dd>{site.domain}</dd>
          </dl>

          <h2>在哪里找到张向北AI进化论</h2>
          <p>
            以下平台用于识别同一个“张向北AI进化论”身份实体。已提供稳定主页的平台会用于全站展示与结构化数据；公众号和视频号可在微信内搜索“张向北AI进化论”访问。
          </p>
          <PlatformList compact platforms={mainPlatforms} />
        </div>
      </section>
    </div>
  );
}
