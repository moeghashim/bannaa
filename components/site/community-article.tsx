"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { CommunityPostDate } from '@/components/site/community-post-date';
import { communityEntry, tutorialSlugs, memberSlugs } from '@/lib/community-posts';
import { communitySpaceCopy, communityLearningCopy, communityAccessCopy } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

export function CommunityArticle({ locale, slug }: { locale: Locale; slug: string }) {
  const entry = communityEntry(slug);
  const accessDialog = useRef<HTMLDialogElement>(null);
  if (!entry) return null;
  const c = communitySpaceCopy[locale];
  const learning = communityLearningCopy[locale];
  const access = communityAccessCopy[locale];
  const tutorial = entry.type === 'tutorial' ? learning.tutorials[entry.index] : null;
  const post = entry.type === 'member' ? c.posts[entry.index] : null;
  const postSlug = entry.type === 'tutorial' ? tutorialSlugs[entry.index] : memberSlugs[entry.index];
  const stageHref = `/${locale}/community?stage=${entry.stage}`;
  return <div className="community-space" lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
    <header className="community-header"><Link className="community-brand" href={`/${locale}`}><Image src="/assets/launch/logo.png" width={42} height={42} alt="" />{c.brand}</Link><nav className="community-menu" aria-label={c.title}><Link href={`/${locale}/community`}>{learning.back}</Link><Link href={`/${locale === 'ar' ? 'en' : 'ar'}/community/${slug}`} lang={locale === 'ar' ? 'en' : 'ar'}>{locale === 'ar' ? 'English' : 'العربية'}</Link></nav></header>
    <main className="community-reading"><Link className="community-reading-back" href={`/${locale}/community`}>{learning.back} ↗</Link><article>
      <div className="community-reading-meta"><span className="community-tutorial-badge">{tutorial ? learning.official : c.example}</span><Link className="community-stage-tag" href={stageHref}>#{learning.stages[entry.stage]}</Link></div>
      <h1>{tutorial?.title ?? post?.project}</h1><p className="community-reading-author">{tutorial ? learning.author : post?.name}<span aria-hidden="true"> · </span><CommunityPostDate slug={postSlug} locale={locale} /></p><p className="community-reading-lead">{tutorial?.intro ?? post?.body}</p>
      {tutorial ? <div className="community-reading-steps">{tutorial.steps.map((step, index) => <section key={step[0]} id={`step-${index + 1}`}><h2><span>{index + 1}.</span> {step[0]}</h2><p>{step[1]}</p></section>)}</div> : <p className="community-reading-body">{post?.detail}</p>}
      <div className="community-reading-actions"><button aria-label={c.like} aria-haspopup="dialog" onClick={() => accessDialog.current?.showModal()}>♡</button><button className="community-write-button" aria-haspopup="dialog" onClick={() => accessDialog.current?.showModal()}>{tutorial ? learning.practice : access.reply}</button></div>
      <p className="community-reply-note">{access.body}</p><Link className="community-reading-back" href={stageHref}>#{learning.stages[entry.stage]} ↗</Link>
    </article></main>
    <dialog className="community-dialog" ref={accessDialog} aria-labelledby="article-access-title"><button className="community-dialog-close" aria-label={c.close} onClick={() => accessDialog.current?.close()}>×</button><h2 id="article-access-title">{access.title}</h2><p>{access.body}</p><p className="community-reply-note">{access.pending}</p></dialog>
  </div>;
}
