"use client";

import Image from "next/image";
import { ParentBrandCredit } from "@/components/site/parent-brand-credit";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { memberSlugs } from "@/lib/community-posts";
import { CommunityFeed } from "@/components/site/community-feed";
import { CommunityMedia } from "@/components/site/community-media";
import { communityDraftStorage, youtubeVideoId } from "@/lib/community-media";
import type { CommunityImage, CommunityDraft } from "@/lib/community-media";
import { communityLearningCopy, communityAccessCopy, communityMediaCopy, communitySpaceCopy } from "@/lib/content";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function CommunityPage({ locale }: { content: SiteContent; locale: Locale }) {
  const c = communitySpaceCopy[locale];
  const learning = communityLearningCopy[locale];
  const [stage, setStage] = useState<number | null>(null);
  useEffect(() => {
    const sync = () => { const value = new URLSearchParams(window.location.search).get("stage"); setStage(value !== null && /^[0-3]$/.test(value) ? Number(value) : null); };
    sync(); window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  function chooseStage(value: number | null) {
    setStage(value);
    const url = new URL(window.location.href);
    if (value === null) url.searchParams.delete("stage"); else url.searchParams.set("stage", String(value));
    window.history.replaceState(window.history.state, "", url);
  }
  const access = communityAccessCopy[locale];
  const accessDialog = useRef<HTMLDialogElement>(null);
  const mediaCopy = communityMediaCopy[locale];
  const [images, setImages] = useState<CommunityImage[]>([]);
  const [youtube, setYoutube] = useState("");
  const [mediaError, setMediaError] = useState("");
  const [busy, setBusy] = useState(true);
  const [composerOpen, setComposerOpen] = useState(false);
  const [localPost, setLocalPost] = useState<CommunityDraft | null>(null);
  const files = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);
  const composerDialog = useRef<HTMLDialogElement>(null);
  const storageKey = `bannaa.community.draft.${locale}`;
  useEffect(() => {
    let active = true;
    communityDraftStorage(locale).then(value => {
      if (!active) return;
      if (value) { setDraft(value.body); setImages(value.images); setYoutube(value.youtube); }
      else { try { setDraft(localStorage.getItem(storageKey) ?? ""); } catch { /* The composer remains usable without storage. */ } }
    }).catch(() => { if (active) setMediaError(mediaCopy.storageError); }).finally(() => { if (active) setBusy(false); });
    return () => { active = false; };
  }, [locale, storageKey, mediaCopy.storageError]);
  async function saveDraft() {
    setBusy(true); setMediaError("");
    try { await communityDraftStorage(locale, { body: draft, images, youtube }); setSaved(true); }
    catch { setMediaError(mediaCopy.storageError); setSaved(false); }
    finally { setBusy(false); }
  }
  async function clearDraft() {
    setBusy(true); setMediaError("");
    try {
      await communityDraftStorage(locale, null);
      localStorage.removeItem(storageKey);
      setDraft(""); setImages([]); setYoutube(""); setSaved(false);
    } catch { setMediaError(mediaCopy.storageError); }
    finally { setBusy(false); }
  }
  async function addImages(selectedFiles: FileList | null) {
    if (!selectedFiles?.length) return;
    const chosen = Array.from(selectedFiles);
    setMediaError(""); setSaved(false);
    if (chosen.length + images.length > 4 || chosen.some(file => !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type) || file.size > 5 * 1024 * 1024)) {
      setMediaError(mediaCopy.invalidImages); return;
    }
    setBusy(true);
    try {
      const additions = await Promise.all(chosen.map(async file => {
        const bitmap = await createImageBitmap(file); bitmap.close();
        const src = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = () => reject(reader.error); reader.readAsDataURL(file);
        });
        return { id: crypto.randomUUID(), name: file.name, src, alt: "" };
      }));
      setImages(current => [...current, ...additions]);
    } catch { setMediaError(mediaCopy.invalidImages); }
    finally { setBusy(false); }
  }
  const invalidYoutube = !!youtube.trim() && !youtubeVideoId(youtube.trim());
  const hasContent = !!draft.trim() || !!images.length || !!youtube.trim();
  return <div className="community-space" dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
    <header className="community-header"><Link className="community-brand" href={`/${locale}`}><Image src="/assets/launch/logo.png" width={42} height={42} alt="" />{c.brand}</Link><nav className="community-menu" aria-label={c.title}><label className="community-search"><span aria-hidden="true">⌕</span><input type="search" aria-label={c.search} placeholder={c.search} value={search} onChange={event => setSearch(event.target.value)} /></label><button className="community-write-button" aria-haspopup="dialog" onClick={() => accessDialog.current?.showModal()}>{c.write}<span aria-hidden="true"> ＋</span></button><Link href={`/${locale === "ar" ? "en" : "ar"}/community`} lang={locale === "ar" ? "en" : "ar"}>{locale === "ar" ? "English" : "العربية"}</Link><Link href={`/${locale}`}>{c.home}<span aria-hidden="true"> ↗</span></Link></nav></header>
    <main className="community-main" aria-label={c.title}>
      <div className="community-columns"><div className="community-feed">
        {localPost && <article className="community-local-post"><strong>{mediaCopy.local}</strong><p className="community-small">{mediaCopy.localNote}</p><p className="community-update-text">{localPost.body}</p><CommunityMedia images={localPost.images} youtube={localPost.youtube} locale={locale} /></article>}
        <CommunityFeed locale={locale} search={search} stage={stage} onStageChange={chooseStage} onInteract={() => accessDialog.current?.showModal()} />
      </div><aside className="community-sidebar"><section className="community-sidebar-tags"><h2>{learning.tags}</h2><div>{learning.stages.map((label, index) => <button className="community-stage-tag" key={label} aria-pressed={stage === index} onClick={() => chooseStage(index)}>#{label}</button>)}</div>{stage !== null && <button className="community-tags-reset" onClick={() => chooseStage(null)}>{learning.back} ×</button>}</section><section className="community-welcome"><span className="community-orbit" aria-hidden="true">✳</span><h2>{c.join}</h2><p>{c.joinBody}</p><span className="community-coming">{c.joinAction}</span></section><section className="community-introductions"><h2>{c.introductions}</h2><div><span className="community-avatar oat" aria-hidden="true">{c.posts[2].initials}</span><div><strong>{c.posts[2].name}</strong><p>{c.memberNote}</p></div></div><small>{c.example}</small></section><section className="community-projects"><h2>{c.projects}</h2><p className="community-small">{c.sample}</p>{c.posts.map((post, index) => <Link key={post.project} href={`/${locale}/community/${memberSlugs[index]}`}><span className={`community-project-icon ${post.color}`} aria-hidden="true">{["↗", "◇", "≋"][index]}</span><span><strong>{post.project}</strong><small>{post.name}</small></span><span aria-hidden="true">↗</span></Link>)}</section><section className="community-streaks"><h2>{c.streaks}</h2><p>{c.streakNote}</p>{c.posts.map((post, index) => <div key={post.name}><span className={`community-avatar ${post.color}`} aria-hidden="true">{post.initials}</span><strong>{post.name}</strong><span className="community-streak-count">{[12, 8, 5][index]} {c.days}</span></div>)}</section><section className="community-challenge"><span aria-hidden="true">◇</span><h2>{c.challenge}</h2><p>{c.challengeBody}</p></section><p className="community-principle">{c.principle}</p></aside></div>
      <dialog className="community-dialog" ref={accessDialog} aria-labelledby="community-access-title"><button className="community-dialog-close" aria-label={c.close} onClick={() => accessDialog.current?.close()}>×</button><h2 id="community-access-title">{access.title}</h2><p>{access.body}</p><p className="community-reply-note">{access.pending}</p><button className="community-write-button" onClick={() => { accessDialog.current?.close(); setComposerOpen(true); composerDialog.current?.showModal(); }}>{access.preview}</button><p className="community-reply-note">{access.previewNote}</p></dialog>
      <dialog className="community-dialog community-composer-dialog" ref={composerDialog} onClose={() => setComposerOpen(false)} aria-labelledby="draft-title"><button className="community-dialog-close" aria-label={c.close} onClick={() => composerDialog.current?.close()}>×</button><section className="community-composer" aria-labelledby="draft-title"><label id="draft-title" htmlFor="community-draft">{c.composer}</label><p>{mediaCopy.draftNote}</p><textarea id="community-draft" value={draft} maxLength={1000} onChange={event => { setDraft(event.target.value); setSaved(false); }} placeholder={c.draft} disabled={busy} />
        <section className="community-attachments">
          <input ref={files} type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple hidden onChange={event => { void addImages(event.target.files); event.target.value = ""; }} />
          <button type="button" className="community-attach-button" disabled={busy || images.length >= 4} onClick={() => files.current?.click()}>{mediaCopy.addImages} ＋</button><p>{mediaCopy.imageHint}</p>
          {images.map(img => <div className="community-attachment" key={img.id}><Image src={img.src} width={70} height={60} alt={img.alt || img.name} unoptimized /><input aria-label={`${mediaCopy.description}: ${img.name}`} placeholder={mediaCopy.description} value={img.alt} maxLength={240} disabled={busy} onChange={event => { setImages(current => current.map(item => item.id === img.id ? { ...item, alt: event.target.value } : item)); setSaved(false); }} /><button type="button" disabled={busy} aria-label={`${mediaCopy.remove}: ${img.name}`} onClick={() => { setImages(current => current.filter(item => item.id !== img.id)); setSaved(false); }}>×</button></div>)}
          <label htmlFor="community-youtube">{mediaCopy.youtube}</label><div className="community-youtube-input"><input id="community-youtube" type="url" dir="ltr" placeholder={mediaCopy.youtubePlaceholder} value={youtube} disabled={busy} aria-invalid={invalidYoutube} aria-describedby={invalidYoutube ? "community-youtube-error" : undefined} onChange={event => { setYoutube(event.target.value); setSaved(false); }} />{youtube && <button type="button" disabled={busy} aria-label={mediaCopy.removeVideo} onClick={() => { setYoutube(""); setSaved(false); }}>×</button>}</div>
          {invalidYoutube && <p role="alert" id="community-youtube-error">{mediaCopy.invalidYoutube}</p>}
          {mediaError && <p role="alert">{mediaError}</p>}
          {composerOpen && <CommunityMedia images={[]} youtube={youtube.trim()} locale={locale} />}
        </section>
        <div><span role="status">{busy ? mediaCopy.loading : saved ? c.saved : `${draft.length} / 1000`}</span><button onClick={clearDraft} disabled={busy || !hasContent}>{c.clear}</button><button className="community-primary" onClick={saveDraft} disabled={busy || !hasContent || invalidYoutube}>{c.save}</button><button className="community-primary" disabled={busy || !hasContent || invalidYoutube} onClick={() => { setLocalPost({ body: draft, images: images.map(img => ({ ...img })), youtube: youtube.trim() }); composerDialog.current?.close(); }}>{mediaCopy.preview}</button></div></section></dialog>
    </main><footer className="community-footer"><span>{c.principle}<ParentBrandCredit locale={locale} /></span><Link href={`/${locale}`}>{c.home}</Link></footer>
  </div>;
}
