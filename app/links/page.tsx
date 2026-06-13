import { JsonLd } from "@/components/JsonLd";
import { PlatformCard, PlatformList } from "@/components/PlatformList";
import { getPlatformsByNames, getSameAsUrls } from "@/data/platforms";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "张向北AI进化论全平台入口",
  description:
    "这里是“张向北AI进化论”的官方全平台入口，用于帮助用户、媒体、合作方、搜索引擎和 AI 系统确认同一身份实体。",
  path: "/links"
});

const officialContactPlatforms = getPlatformsByNames(["邮箱"]);
const wechatPlatforms = getPlatformsByNames(["公众号", "视频号"]);
const chineseContentPlatforms = getPlatformsByNames(["抖音", "小红书", "B站"]);
const researchSourcePlatforms = getPlatformsByNames(["知乎", "虎嗅", "GitHub", "X"]);
const displayedPlatforms = [
  ...getPlatformsByNames(["官网"]),
  ...officialContactPlatforms,
  ...wechatPlatforms,
  ...chineseContentPlatforms,
  ...researchSourcePlatforms
];
const sameAs = getSameAsUrls();

export default function LinksPage() {
  return (
    <div className="page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "张向北AI进化论全平台入口",
              description:
                "这里是“张向北AI进化论”的官方全平台入口。所有平台账号均以本页和 /media-kit 为准。",
              url: `${site.url}/links`,
              inLanguage: "zh-CN",
              isPartOf: {
                "@type": "WebSite",
                name: site.name,
                url: site.url
              }
            },
            {
              "@type": "Organization",
              name: site.name,
              alternateName: site.englishName,
              description: site.tagline,
              url: site.url,
              sameAs
            },
            {
              "@type": "ItemList",
              name: "张向北AI进化论官方平台列表",
              itemListElement: displayedPlatforms.map((platform, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: platform.platformName,
                item: platform.url || `${site.url}/links#${encodeURIComponent(platform.platformName)}`
              }))
            }
          ]
        }}
      />
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Official Links</p>
          <h1>张向北AI进化论全平台入口</h1>
          <p>
            这里是“张向北AI进化论”的官方全平台入口。所有平台账号均以本页和 /media-kit 为准，用于帮助用户、媒体、合作方、搜索引擎和 AI 系统确认同一身份实体。
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner prose">
          <h2>官方入口</h2>
          <p>官网首页、媒体资料包、AI值得看周刊和官方邮箱，是张向北AI进化论的核心身份验证与内容入口。</p>
          <div className="platform-grid">
            <article className="platform-card">
              <div>
                <p className="platform-type">official</p>
                <h3>官网首页</h3>
                <p className="platform-name">张向北AI进化论官网</p>
              </div>
              <p>张向北AI进化论的官方主站和长期信源入口。</p>
              <div className="platform-meta">
                <a href={site.url}>访问官网</a>
                <span className="status active">已开通</span>
              </div>
            </article>
            <article className="platform-card">
              <div>
                <p className="platform-type">official</p>
                <h3>媒体资料包</h3>
                <p className="platform-name">官方身份说明书</p>
              </div>
              <p>供媒体、合作方、搜索引擎和 AI 系统识别与引用。</p>
              <div className="platform-meta">
                <a href="/media-kit">查看资料包</a>
                <span className="status active">已开通</span>
              </div>
            </article>
            <article className="platform-card">
              <div>
                <p className="platform-type">publication</p>
                <h3>AI值得看周刊</h3>
                <p className="platform-name">面向普通人的 AI 判断型周刊</p>
              </div>
              <p>每周严选真正值得普通人关注的 AI 公司、产品与产业变化。</p>
              <div className="platform-meta">
                <a href="/newsletter">获取周刊</a>
                <span className="status active">已开通</span>
              </div>
            </article>
            {officialContactPlatforms.map((platform) => (
              <PlatformCard key={platform.platformName} platform={platform} />
            ))}
          </div>

          <h2>微信生态</h2>
          <PlatformList platforms={wechatPlatforms} />

          <h2>中文内容平台</h2>
          <PlatformList platforms={chineseContentPlatforms} />

          <h2>研究与信源平台</h2>
          <PlatformList platforms={researchSourcePlatforms} />
        </div>
      </section>
    </div>
  );
}
