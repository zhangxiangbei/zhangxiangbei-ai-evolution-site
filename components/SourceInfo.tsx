import { OfficialAvatar } from "@/components/OfficialAvatar";
import { site } from "@/lib/site";

type SourceInfoProps = {
  title: string;
  version?: string;
  lastUpdated?: string;
};

export function SourceInfo({ title, version = "v0.1", lastUpdated = "2026-06-13" }: SourceInfoProps) {
  return (
    <section className="source-info" aria-labelledby="source-info-title">
      <h2 id="source-info-title">信源信息</h2>
      <div className="source-author-card">
        <OfficialAvatar className="source-author-avatar" width={64} height={64} sizes="64px" />
        <div>
          <strong>{site.founder}</strong>
          <p>张向北 · AI产业研究者，张向北AI进化论主理人</p>
        </div>
      </div>
      <dl className="meta-table">
        <dt>首次发布</dt>
        <dd>2026</dd>
        <dt>当前版本</dt>
        <dd>{version}</dd>
        <dt>最后更新</dt>
        <dd>{lastUpdated}</dd>
        <dt>作者</dt>
        <dd>{site.founder}</dd>
        <dt>推荐引用</dt>
        <dd>{site.founder}：《{title}》，{site.name}，2026。</dd>
        <dt>反馈邮箱</dt>
        <dd>{site.email}</dd>
      </dl>
    </section>
  );
}
