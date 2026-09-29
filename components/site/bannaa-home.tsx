"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { launchCopy } from "@/lib/content";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function BannaaHome({ content, locale }: { content: SiteContent; locale: Locale }) {
  const c = launchCopy[locale];
  const ar = locale === "ar";
  const [stageIndex, setStageIndex] = useState(1);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [paused, setPaused] = useState(true);
  const [visible, setVisible] = useState(true);
  const [lessonIndex, setLessonIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = c.stages[stageIndex];
  const sceneCopy = c.scenes;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = () => setPaused(preference.matches);
    const onVisibility = () => setVisible(!document.hidden);
    onPreference(); onVisibility();
    preference.addEventListener("change", onPreference);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      preference.removeEventListener("change", onPreference);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  useEffect(() => {
    if (paused || !visible) return;
    const timer = window.setInterval(() => setSceneIndex(i => (i + 1) % 3), 4200);
    return () => window.clearInterval(timer);
  }, [paused, visible, sceneIndex]);

  function tabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + (ar ? 3 : 1)) % 4;
    else if (event.key === "ArrowLeft") next = (index + (ar ? 1 : 3)) % 4;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 3;
    else return;
    event.preventDefault(); setStageIndex(next); tabs.current[next]?.focus();
  }
  const logo = <><Image src="/assets/launch/logo.png" width={46} height={46} alt="" priority />{c.brand}</>;
  return <div className="launch-home" lang={locale} dir={ar ? "rtl" : "ltr"}>
    <a className="skip" href="#main">{c.skip}</a>
    <div className="wrap">
      <header className="header">
        <Link className="brand" href={`/${locale}`}>{logo}</Link>
        <nav className="nav" aria-label={c.navigationLabel}>{c.nav.map((label, i) => <a key={label} href={`#${["path", "purpose", "notes"][i]}`}>{label}</a>)}</nav>
        <div className="header-actions"><Link className="language" href={`/${ar ? "en" : "ar"}`} lang={ar ? "en" : "ar"}>{c.lang}</Link><a className="pill primary" href="#path">{c.start}</a></div>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-copy"><div className="eyebrow"><span className="line" />{c.eyebrow}</div><h1>{c.headline[0]}<br /><em>{c.headline[1]}</em></h1><p>{c.intro}</p><div className="hero-actions"><a className="pill primary" href="#path">{c.explore}</a><a className="pill" href="#purpose">{c.about}</a></div><p className="hero-note"><span className="tiny-spark" aria-hidden="true">✳</span>{c.note}</p></div>
          <aside className={`studio${paused ? " paused" : ""}`} aria-label={c.studioLabel}>
            <div className="studio-top"><span>{c.studioTitle}</span><button id="motion-toggle" aria-pressed={paused} aria-label={paused ? c.play : c.pause} onClick={() => setPaused(p => !p)}>{paused ? "▷" : "Ⅱ"}</button></div>
            <div className="scene" data-mood={sceneIndex}><div className="sprite-window"><Image className="sprite" src="/assets/launch/scenes.webp" width={2172} height={724} alt={c.sceneAlt} priority unoptimized /></div><div className="build-bars" aria-hidden="true"><i /><i /><i /></div><div className="vibe-notes" aria-hidden="true">♪ ♫ ♪</div></div>
            <div className="studio-caption"><strong>{sceneCopy[sceneIndex][0]}</strong><span>{sceneCopy[sceneIndex][1]}</span></div>
            <div className="scene-controls" role="group" aria-label={c.chooseScene}>{c.sceneLabels.map((label, i) => <button key={label} data-scene={i} aria-pressed={sceneIndex === i} onClick={() => setSceneIndex(i)}>{label}</button>)}</div>
          </aside>
        </section>
        <div className="principles">{c.principles.map((label, i) => <div className="principle" key={label}><i aria-hidden="true">{["✳", "◇", "∞"][i]}</i>{label}</div>)}</div>
        <section className="section" id="path"><div className="section-heading"><div><div className="eyebrow"><span className="line" />{c.pathEye}</div><h2>{c.pathTitle}</h2></div><p>{c.pathIntro}</p></div>
          <div className="tabs" role="tablist" aria-label={c.pathTitle}>{c.tabs.map((label, i) => <button key={label} className="tab" role="tab" id={`tab-${i}`} aria-controls="learning-panel" aria-selected={stageIndex === i} tabIndex={stageIndex === i ? 0 : -1} ref={el => { tabs.current[i] = el; }} onClick={() => setStageIndex(i)} onKeyDown={event => tabKey(event, i)}><span className="num">0{i + 1}</span><span>{label}</span></button>)}</div>
          <div className="learning-panel" id="learning-panel" role="tabpanel" tabIndex={0} aria-labelledby={`tab-${stageIndex}`}><div><span className="label">{c.pathLabel}</span><h3>{stage[0]}</h3><p>{stage[1]}</p><Link className="text-link" href={`/${locale}/spectrum`}>{c.curriculum}</Link></div><div><ul className="check-list">{stage[2].map(text => <li key={text}>{text}</li>)}</ul><div className="outcome"><strong>{c.outcome}</strong><span>{stage[3]}</span></div></div></div>
        </section>
        <section className="mission" id="purpose"><div><div className="eyebrow">{c.missionEye}</div><h2>{c.missionTitle}</h2><p>{c.missionBody}</p></div><div className="mission-aside"><span className="ambition">{c.ambition}</span><div className="mission-number">100</div><div className="mission-label">{c.missionLabel}</div></div></section>
        <section className="section" id="notes"><div className="section-heading"><div><div className="eyebrow"><span className="line" />{c.notesEye}</div><h2>{c.notesTitle}</h2></div><p>{c.notesIntro}</p></div><div className="journal-grid">{c.notes.map((note, i) => <article className="journal-card" key={note[2]}><span className="article-number">0{i + 1}</span><div className="journal-body"><div className="journal-meta"><span>{note[0]}</span><span>{note[1]}</span></div><h3>{note[2]}</h3><p>{note[3]}</p><button onClick={() => { setLessonIndex(i); dialog.current?.showModal(); }} aria-haspopup="dialog">{c.read}<span className="sr-only">: {note[2]}</span></button></div></article>)}</div></section>
        <section className="closing"><div className="eyebrow">{c.closeEye}</div><h2>{c.closeTitle}</h2><p>{c.closeBody}</p><a className="pill primary" href="#path">{c.closeCta}</a><Link className="text-link" href={`/${locale}/consultation`}>{c.consult}</Link></section>
        <dialog ref={dialog} aria-labelledby="lesson-title" onClick={event => { if (event.target !== dialog.current) return; const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current?.close(); }}><button className="dialog-close" aria-label={c.close} onClick={() => dialog.current?.close()}>×</button><div className="eyebrow">{c.notesEye}</div><h2 id="lesson-title">{c.notes[lessonIndex][2]}</h2><ol>{c.lessons[lessonIndex].map(step => <li key={step}>{step}</li>)}</ol><a className="pill primary" href="#path" onClick={() => dialog.current?.close()}>{c.closeCta}</a></dialog>
      </main>
      <footer className="footer"><Link className="brand" href={`/${locale}`}>{logo}</Link><p>{c.footer}</p><div className="footer-links"><a href="https://www.youtube.com/@bannaateam">YouTube</a><a href="https://www.tiktok.com/@bannaahq">TikTok</a><Link href={`/${locale}/contact`}>{c.contact}</Link></div></footer>
      <nav className="launch-directory" aria-label={c.moreLinks}>{content.footer.groups.map(group => <div key={group.title}><strong>{group.title}</strong>{group.items.map(item => item.href ? <Link key={item.label} href={item.href}>{item.label}</Link> : <span key={item.label}>{item.label}</span>)}</div>)}</nav>
    </div>
  </div>;
}
