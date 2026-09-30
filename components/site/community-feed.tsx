"use client";

import Link from "next/link";
import { CommunityPostDate } from "@/components/site/community-post-date";
import { tutorialSlugs, memberSlugs } from "@/lib/community-posts";
import { useEffect, useRef } from "react";
import { communityLearningCopy, communitySpaceCopy, communityAccessCopy } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type FeedItem = { type: "tutorial" | "member"; index: number; stage: number };
const items: FeedItem[] = [
  { type: "tutorial", index: 0, stage: 0 }, { type: "member", index: 0, stage: 0 },
  { type: "tutorial", index: 1, stage: 1 }, { type: "member", index: 1, stage: 2 },
  { type: "tutorial", index: 2, stage: 2 }, { type: "member", index: 2, stage: 3 },
  { type: "tutorial", index: 3, stage: 3 }
];

export function CommunityFeed({ locale, search, onInteract, stage, onStageChange }: { locale: Locale; search: string; onInteract: () => void; stage: number | null; onStageChange: (stage: number | null) => void }) {
  const c = communitySpaceCopy[locale];
  const learning = communityLearningCopy[locale];
  const access = communityAccessCopy[locale];
  const feed = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (stage !== null) feed.current?.scrollIntoView({ block: "start" });
  }, [stage]);
  function chooseStage(index: number) { onStageChange(index); }
  const visible = items.filter(item => {
    const content = item.type === "tutorial" ? `${learning.tutorials[item.index].title} ${learning.tutorials[item.index].intro} ${learning.author}` : `${c.posts[item.index].body} ${c.posts[item.index].name} ${c.posts[item.index].project}`;
    return (stage === null || item.stage === stage) && `${content} ${learning.stages[item.stage]}`.toLocaleLowerCase(locale).includes(search.toLocaleLowerCase(locale));
  });
  return <div ref={feed} className="community-tag-feed">
    {stage !== null && <><div className="community-tag-selection"><strong>#{learning.stages[stage]}</strong><button onClick={() => onStageChange(null)}>{learning.back} ×</button></div><section className="community-start-guide"><span>{learning.pinned}</span><h2>{learning.guide}</h2><ol>{learning.tutorials[stage].steps.map(step => <li key={step[0]}>{step[0]}</li>)}</ol><Link href={`/${locale}/community/${tutorialSlugs[stage]}`}>{learning.read} ↗</Link></section></>}
    <div className="community-updates">{visible.map(item => {
      const tutorial = item.type === "tutorial";
      const post = tutorial ? null : c.posts[item.index];
      const text = learning.tutorials[item.index];
      const slug = tutorial ? tutorialSlugs[item.index] : memberSlugs[item.index];
      const href = `/${locale}/community/${slug}`;
      return <article className={`community-update${tutorial ? " community-tutorial" : ""}`} key={`${item.type}-${item.index}`} data-stage={item.stage}>
        <div className={`community-avatar ${post?.color ?? "sage"}`} aria-hidden="true">{post?.initials ?? "✳"}</div>
        <div className="community-update-body"><div className="community-update-meta"><strong>{post?.name ?? learning.author}</strong><CommunityPostDate slug={slug} locale={locale} /><span>{tutorial ? <span className="community-tutorial-badge">{learning.official}</span> : c.example}</span></div>
          {post && <p className="community-project-tag">{post.project}</p>}
          {tutorial && <h2 className="community-tutorial-title"><Link href={href}>{text.title}</Link></h2>}
          <p className="community-update-text"><Link href={href}>{post?.body ?? text.intro}</Link></p>
          <button className="community-stage-tag" aria-pressed={stage === item.stage} onClick={() => chooseStage(item.stage)}>#{learning.stages[item.stage]}</button>
          <div className="community-update-actions"><button aria-label={c.like} aria-haspopup="dialog" onClick={onInteract}><span aria-hidden="true">♡</span></button><button aria-haspopup="dialog" onClick={onInteract}>{access.reply}</button><Link href={href}>{tutorial ? learning.read : c.detail} ↗</Link>{post && <span className="community-reply-count">{[2, 0, 4][item.index]} {c.replies}</span>}</div>
        </div>
      </article>;
    })}{!visible.length && <p className="community-empty" role="status">{c.empty}</p>}</div>
  </div>;
}
