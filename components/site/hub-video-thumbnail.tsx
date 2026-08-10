import type { HubItem } from "@/lib/content";

type HubVideoThumbnailProps = {
  item: HubItem;
};

export function HubVideoThumbnail({ item }: HubVideoThumbnailProps) {
  if (item.type !== "video" || !item.thumbnail) return null;

  return (
    <div className={`hub-video-thumb hub-video-thumb--${item.track}`} aria-label={item.title}>
      <div className="hub-video-thumb__grid" aria-hidden="true" />
      <div className="hub-video-thumb__play" aria-hidden="true">
        <span />
      </div>
      <div className="hub-video-thumb__copy">
        <span className="mono">{item.thumbnail.meta}</span>
        <strong>{item.thumbnail.label}</strong>
      </div>
    </div>
  );
}
