import type { Platform } from "@/data/platforms";

type PlatformListProps = {
  platforms: Platform[];
  compact?: boolean;
};

export function PlatformCard({ platform, compact = false }: { platform: Platform; compact?: boolean }) {
  const hasUrl = Boolean(platform.url);
  const actionText = platform.url.startsWith("mailto:") ? "发送邮件" : "访问平台";
  const className = platform.qrImage && !compact ? "platform-card has-qr" : "platform-card";

  return (
    <article className={className} id={platform.platformName}>
      <div>
        <p className="platform-type">{platform.platformType}</p>
        <h3>{platform.platformName}</h3>
        <p className="platform-name">{platform.displayName}</p>
      </div>
      {!compact ? <p>{platform.description}</p> : null}
      {platform.qrImage && !compact ? (
        <figure className="platform-qr">
          <img src={platform.qrImage} alt={platform.qrAlt || platform.displayName} loading="lazy" />
          <figcaption>微信搜索：张向北AI进化论</figcaption>
        </figure>
      ) : null}
      <div className="platform-meta">
        {hasUrl ? (
          <a href={platform.url}>{actionText}</a>
        ) : (
          <span>{platform.accessText || "官方链接排期公开"}</span>
        )}
        <span className={`status ${platform.status}`}>
          {platform.status === "active" ? "已开通" : "排期公开"}
        </span>
      </div>
    </article>
  );
}

export function PlatformList({ platforms, compact = false }: PlatformListProps) {
  return (
    <div className={compact ? "platform-grid compact" : "platform-grid"}>
      {platforms.map((platform) => (
        <PlatformCard compact={compact} key={platform.platformName} platform={platform} />
      ))}
    </div>
  );
}
