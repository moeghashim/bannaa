import { PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/site-shell";
import type { RoadmapStatus, SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type RoadmapPageProps = {
  content: SiteContent;
  locale: Locale;
};

const ltrStatusOrder: RoadmapStatus[] = ["done", "doing", "todo"];
const rtlStatusOrder: RoadmapStatus[] = ["todo", "doing", "done"];

export function RoadmapPage({ content, locale }: RoadmapPageProps) {
  const statusOrder = locale === "ar" ? rtlStatusOrder : ltrStatusOrder;

  return (
    <SiteShell content={content} locale={locale}>
      <PageHero copy={content.roadmap.hero} />
      <section className="roadmap wrap" aria-label={content.roadmap.hero.title}>
        <div className="roadmap__source">
          <a href={content.roadmap.sourceHref}>{content.roadmap.sourceLabel}</a>
        </div>
        <div className="roadmap__legend" aria-label={locale === "ar" ? "شرح الحالات" : "Status legend"}>
          {statusOrder.map((status) => (
            <span key={status} className={`roadmap-status roadmap-status--${status}`}>
              <span />
              {content.roadmap.legend[status]}
            </span>
          ))}
        </div>
        <div className="roadmap__tracks">
          {content.roadmap.tracks.map((roadmapTrack) => {
            const track = content.tracks.cards.find((candidate) => candidate.id === roadmapTrack.id);
            if (!track) return null;
            const columns = statusOrder
              .map((status) => roadmapTrack.columns.find((column) => column.status === status))
              .filter((column): column is NonNullable<typeof column> => Boolean(column));

            return (
              <section key={roadmapTrack.id} className="roadmap-track" id={`roadmap-${roadmapTrack.id}`}>
                <div className="roadmap-track__head">
                  <div className="roadmap-track__num mono">{track.num}</div>
                  <div className="roadmap-track__copy">
                    <span className="tag">
                      <span className="pip" />
                      {track.sub}
                    </span>
                    <h2>{track.title}</h2>
                    <p>{track.desc}</p>
                  </div>
                  <div className="roadmap-track__meta mono">
                    <span>{track.weeks}</span>
                    <span>{track.level}</span>
                  </div>
                </div>
                <div className="roadmap-board">
                  {columns.map((column) => (
                    <article key={column.status} className={`roadmap-column roadmap-column--${column.status}`}>
                      <header>
                        <span className="roadmap-column__status">
                          <span />
                          {column.label}
                        </span>
                        <p>{column.summary}</p>
                      </header>
                      <ul>
                        {column.items.map((item, index) => (
                          <li key={item.title}>
                            <span className="roadmap-column__item-num mono">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h3>{item.title}</h3>
                              {item.desc ? <p>{item.desc}</p> : null}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}
