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
      <dl className="meta-table">
        <dt>首次发布</dt>
        <dd>2026</dd>
        <dt>当前版本</dt>
        <dd>{version}</dd>
        <dt>最后更新</dt>
        <dd>{lastUpdated}</dd>
        <dt>作者</dt>
        <dd>{site.name}</dd>
        <dt>推荐引用</dt>
        <dd>{site.name}：《{title}》，2026。</dd>
        <dt>反馈邮箱</dt>
        <dd>{site.email}</dd>
      </dl>
    </section>
  );
}
