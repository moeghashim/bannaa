"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useEffect } from "react";

import { HubVideoThumbnail } from "@/components/site/hub-video-thumbnail";
import type { ExternalVideo, SiteContent, TrackId } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ContentHubProps = {
  content: Pick<SiteContent, "hub" | "tracks">;
  latestVideos: ExternalVideo[];
  locale: Locale;
};

type Filter = TrackId | "all";

export function ContentHub({ content, latestVideos, locale }: ContentHubProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const filters = useMemo(
    () => [
      { id: "all" as const, label: content.hub.filterAll },
      ...content.tracks.cards.map((track) => ({ id: track.id, label: track.title }))
    ],
    [content.hub.filterAll, content.tracks.cards]
  );
  const items = filter === "all" ? content.hub.items : content.hub.items.filter((item) => item.track === filter);

  return (
    <section className="hub-panel wrap">
      <div className="filter-row" role="tablist" aria-label={content.hub.title}>
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            className={filter === item.id ? "is-active" : ""}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="hub-grid">
        {items.map((item) => {
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
              <div className="hub-card__foot">
                <span className="mono">{track?.sub ?? item.track}</span>
                <a className="ul" href={item.href}>
                  ↗
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <section className="video-channels" aria-labelledby="video-channels-title">
        <header className="video-channels__head">
          <div>
            <p className="video-channels__eyebrow mono">{content.hub.videoChannels.eyebrow}</p>
            <h2 id="video-channels-title">
              {content.hub.videoChannels.title}
              <br />
              <span className="accent">{content.hub.videoChannels.titleAccent}</span>
            </h2>
          </div>
          <p>{content.hub.videoChannels.description}</p>
        </header>
        <div className="video-channel-grid">
          {content.hub.videoChannels.channels.map((channel) => (
            <article key={channel.platform} className="video-channel-card">
              <div className="video-channel-card__top">
                <span className="video-channel-card__platform">{channel.platform}</span>
                <span className="mono">{channel.handle}</span>
              </div>
              <h3>{channel.title}</h3>
              <p>{channel.desc}</p>
              <div className="video-channel-card__formats">
                {channel.formats.map((format) => (
                  <span key={format}>{format}</span>
                ))}
              </div>
              <a href={channel.href} target="_blank" rel="noopener noreferrer">
                {channel.cta} ↗
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="latest-video-section" aria-labelledby="latest-video-title">
        <header className="latest-video-section__head">
          <div>
            <p className="video-channels__eyebrow mono">
              {locale === "ar" ? "/ آخر الفيديوهات" : "/ latest videos"}
            </p>
            <h2 id="latest-video-title">
              {locale === "ar" ? "فيديوهات فعلية" : "Actual videos"}
              <br />
              <span className="accent">
                {locale === "ar" ? "من القنوات." : "from the channels."}
              </span>
            </h2>
          </div>
          <p>
            {locale === "ar"
              ? "هذه البطاقات تُحمّل آخر فيديوهات YouTube مباشرة، وتعرض TikTok عبر الودجت الرسمي للحساب."
              : "These cards load the latest YouTube videos directly and show TikTok through the official account widget."}
          </p>
        </header>
        <div className="latest-video-layout">
          <div className="youtube-video-grid">
            {latestVideos.length > 0 ? (
              latestVideos.map((video) => (
                <a key={video.id} className="youtube-video-card" href={video.href} target="_blank" rel="noopener noreferrer">
                  <span className="youtube-video-card__thumb">
                    <Image src={video.thumbnail} alt="" fill sizes="(max-width: 980px) 100vw, 33vw" unoptimized />
                    <span className="youtube-video-card__play" aria-hidden="true" />
                  </span>
                  <span className="youtube-video-card__body">
                    <span className="youtube-video-card__meta mono">
                      YouTube · {formatVideoDate(video.published, locale)}
                    </span>
                    <strong>{video.title}</strong>
                    <span className="youtube-video-card__stats">
                      {video.views
                        ? locale === "ar"
                          ? `${Number(video.views).toLocaleString("ar")} مشاهدة`
                          : `${Number(video.views).toLocaleString("en")} views`
                        : video.channelTitle}
                    </span>
                  </span>
                </a>
              ))
            ) : (
              <div className="video-load-fallback">
                {locale === "ar"
                  ? "تعذّر تحميل فيديوهات YouTube الآن. استخدم رابط القناة أعلاه."
                  : "Could not load YouTube videos right now. Use the channel link above."}
              </div>
            )}
          </div>
          <TikTokProfilePanel locale={locale} />
        </div>
      </section>
    </section>
  );
}

function TikTokProfilePanel({ locale }: { locale: Locale }) {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://www.tiktok.com/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <aside className="tiktok-panel">
      <div className="tiktok-panel__head">
        <span className="video-channel-card__platform">TikTok</span>
        <span className="mono">@bannaahq</span>
      </div>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@bannaahq"
        data-unique-id="bannaahq"
        data-embed-from="embed_page"
        data-embed-type="creator"
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@bannaahq">
            {locale === "ar" ? "تحميل فيديوهات TikTok من @bannaahq" : "Loading TikTok videos from @bannaahq"}
          </a>
        </section>
      </blockquote>
    </aside>
  );
}

function formatVideoDate(value: string, locale: Locale): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return locale === "ar" ? "تاريخ غير متاح" : "No date";
  return new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
    year: "numeric"
  }).format(date);
}
