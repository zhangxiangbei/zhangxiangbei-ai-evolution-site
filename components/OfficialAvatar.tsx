import { site } from "@/lib/site";

type OfficialAvatarProps = {
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  sizes?: string;
};

export function OfficialAvatar({
  className,
  imgClassName,
  width = site.avatar.width,
  height = site.avatar.height,
  loading = "lazy",
  sizes
}: OfficialAvatarProps) {
  return (
    <picture className={className}>
      <source sizes={sizes} srcSet={site.avatar.avif} type="image/avif" />
      <source sizes={sizes} srcSet={site.avatar.webp} type="image/webp" />
      <img
        alt={site.avatar.alt}
        className={imgClassName}
        decoding="async"
        height={height}
        loading={loading}
        sizes={sizes}
        src={site.avatar.jpg}
        width={width}
      />
    </picture>
  );
}
