"use client";

import { useMemo, useState } from "react";

import type { SiteContent, TrackId } from "@/lib/content";

type ContentHubProps = {
  content: Pick<SiteContent, "hub" | "tracks">;
};

type Filter = TrackId | "all";

export function ContentHub({ content }: ContentHubProps) {
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
    </section>
  );
}
