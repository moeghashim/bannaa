import { HubVideoThumbnail } from "@/components/site/hub-video-thumbnail";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ContentPreviewProps = {
  content: Pick<SiteContent, "hub" | "tracks">;
  locale: Locale;
};

export function ContentPreview({ content, locale }: ContentPreviewProps) {
  return (
    <section className="wrap" id="hub">
      <header className="sec-head">
        <div>
          <div className="eyebrow">{content.hub.eyebrow}</div>
          <h2>
            {content.hub.title}
            <br />
            <span className="accent">{content.hub.titleAccent}</span>
          </h2>
        </div>
        <div className="right">
          <div>{content.hub.description}</div>
          <a className="ul" href={`/${locale}/hub`} style={{ marginTop: 12 }}>
            {locale === "ar" ? "افتح مركز المحتوى →" : "Open content hub →"}
          </a>
        </div>
      </header>
      <div className="hub-grid hub-grid--preview">
        {content.hub.items.slice(0, 3).map((item) => {
          const track = content.tracks.cards.find((card) => card.id === item.track);
          return (
            <article key={item.id} className="card hub-card">
              <span className="corner" />
              <HubVideoThumbnail item={item} />
              <div className="tpl-card__head">
                <span className="tag">
                  <span className="pip" />
                  {content.hub.typeLabels[item.type]}
                </span>
                <span className="tpl-card__uses">{item.duration}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="mono hub-card__track">{track?.sub ?? item.track}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
