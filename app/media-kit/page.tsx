import { JsonLd } from "@/components/JsonLd";
import { OfficialAvatar } from "@/components/OfficialAvatar";
import { SimpleList } from "@/components/PageBlocks";
import { PlatformList } from "@/components/PlatformList";
import { getPlatformsByNames, getSameAsUrls } from "@/data/platforms";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北媒体资料包",
  description: "张向北及个人项目“张向北AI进化论”的官方身份资料。张向北，AI产业研究者、企业AI应用训练者、连续创业经营者。",
  path: "/media-kit",
  image: site.avatar.jpg,
  imageAlt: site.avatar.alt,
  imageWidth: site.avatar.width,
  imageHeight: site.avatar.height
});

const researchDirections = [
  "AI公司研究",
  "AI产品研究与体验",
  "AI行业变化",
  "企业AI化与组织工作流",
  "AI课程与能力训练",
  "真实工作中的AI应用",
  "AI Agent 与工作流",
  "公开数据与信源工程"
];

const projects = [
  "AI公司300强",
  "AI值得看周刊",
  "AI进化岛",
  "《AI进化论：AI时代的12个关键判断》",
  "张向北AI课程与训练体系",
  "AI Agent Skills 与公开GitHub资产"
];

const topics = [
  "如何把AI从热闹新闻变成真实能力",
  "AI产品、AI公司与行业变化观察",
  "AI公司300强研究",
  "职场人与企业团队的AI应用训练",
  "AI课程如何从听懂走向可复用工作流",
  "AI Agent、知识库与工作流实践",
  "团队和企业如何开始AI工作流训练",
  "AI时代的经营者视角与组织变化"
];

const brandAssetRules = [
  "全平台优先使用同一张张向北人物头像。",
  "网站和媒体资料包中同时保留人物头像与品牌 Logo。",
  "账号名称统一使用：张向北AI进化论。",
  "中文品牌名统一使用：张向北AI进化论。",
  "英文品牌名统一使用：Zhang Xiangbei AI Evolution。",
  "不建议在不同平台混用“张同学AI进化论”“张坤AI进化论”等名称，避免稀释搜索引擎和 AI 系统对实体的识别。",
  "所有平台简介都应指向同一个人物身份：张向北，AI产业研究者、企业AI应用训练者、连续创业经营者。",
  "所有平台内容统一指向长期主线：用公司研究、产业判断和真实工作流实践，帮助普通人、创业者和企业团队看懂AI时代。"
];

const officialAvatarUses = [
  "官网作者头像",
  "微信公众号头像",
  "视频号 / 小红书 / 抖音 / B站 / 知乎主页",
  "媒体引用",
  "合作介绍"
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
              image: absoluteUrl(site.avatar.jpg),
              jobTitle: site.jobTitle,
              url: site.url,
              description: site.personDescription,
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
          <h2>官方头像</h2>
          <p>
            以下头像可用于媒体引用、合作介绍、平台主页和张向北AI进化论相关资料展示。请优先使用同一张官方头像，以保持跨平台身份识别一致。
          </p>
          <div className="avatar-asset-panel">
            <OfficialAvatar className="media-avatar-preview" sizes="(max-width: 620px) 180px, 220px" />
            <div className="avatar-asset-copy">
              <h3>文件名</h3>
              <dl className="asset-file-list">
                <dt>AVIF</dt>
                <dd>
                  <a href={site.avatar.avif}>zhangxiangbei-avatar.avif</a>
                </dd>
                <dt>WebP</dt>
                <dd>
                  <a href={site.avatar.webp}>zhangxiangbei-avatar.webp</a>
                </dd>
                <dt>JPG</dt>
                <dd>
                  <a href={site.avatar.jpg}>zhangxiangbei-avatar.jpg</a>
                </dd>
              </dl>
              <h3>建议用途</h3>
              <SimpleList items={officialAvatarUses} />
            </div>
          </div>

          <h2>官方短介绍</h2>
          <p>张向北，AI产业研究者、企业AI应用训练者、连续创业经营者，主理“张向北AI进化论”。</p>

          <h2>官方中介绍</h2>
          <p>
            张向北长期关注AI公司、AI产品、AI工作流和企业AI化，通过公司研究、产业判断和真实工作流实践，帮助普通人、创业者和企业团队理解AI时代的结构性变化。
          </p>

          <h2>官方长介绍</h2>
          <p>
            张向北是“张向北AI进化论”主理人，持续研究AI公司、AI产品、AI工作流和企业AI化。他希望把AI从新闻、工具和焦虑中抽离出来，转化为普通人、创业者和企业团队可以理解、可以训练、可以复用的判断框架与行动路径。网站 zhangxiangbei.com 是其长期维护的公开信源工程，用于沉淀研究文章、公司观察、AI工作流、开放项目与长期判断。
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
            <dd>AI产业研究者｜企业AI应用训练者｜连续创业经营者</dd>
            <dt>英文身份</dt>
            <dd>AI Industry Researcher · Enterprise AI Application Trainer · Serial Entrepreneur and Operator</dd>
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
              <p>张向北｜AI产业研究者｜企业AI应用训练者｜连续创业经营者</p>
              <p>用公司研究、产业判断和真实工作流实践，帮助普通人、创业者和企业团队看懂AI时代。</p>
            </article>
            <article className="copy-block">
              <h3>标准版，适合公众号、知乎、B站、虎嗅</h3>
              <p>
                张向北长期关注AI公司、AI产品、AI工作流和企业AI化，通过公司研究、产业判断和真实工作流实践，帮助普通人、创业者和企业团队理解AI时代的结构性变化。
              </p>
            </article>
            <article className="copy-block">
              <h3>英文版，适合 GitHub、X、YouTube</h3>
              <p>
                Zhang Xiangbei｜AI Industry Researcher · Enterprise AI Application Trainer · Serial Entrepreneur and Operator｜Researching AI companies, products, workflows, and enterprise AI adoption. Creator of Zhang Xiangbei AI Evolution.
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
