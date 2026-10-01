"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { SiteShell } from "@/components/site/site-shell";
import { jobsCopy } from "@/lib/content";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Role = { slug: string; title: string; category: string; line: string; body: string; points: readonly string[]; prompt: string };
type Props = { content: SiteContent; locale: Locale };
function CameraIcon() { return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="3" y="8" width="19" height="17" rx="5" stroke="currentColor" strokeWidth="1.6"/><path d="m22 13 7-4v15l-7-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>; }
function PreviewNotice({ locale }: { locale: Locale }) { const c = jobsCopy[locale]; return <div className="jobs-demo"><span className="jobs-dot" /><strong>{c.demo}</strong><span>{c.demoNote}</span></div>; }
export function JobsPage({ content, locale }: Props) {
  const c = jobsCopy[locale];
  return <SiteShell content={content} locale={locale}><div className="jobs wrap"><PreviewNotice locale={locale} />
    <section className="jobs-hero"><p className="jobs-eyebrow">{c.eyebrow}</p><h1>{c.title}<br /><span>{c.accent}</span></h1><p>{c.intro}</p><div className="jobs-process">{c.steps.map((step, i) => <span key={step}><b>0{i+1}</b>{step}</span>)}</div></section>
    <section className="jobs-list"><div className="jobs-section-head"><h2>{c.rolesTitle}</h2><p>{c.rolesIntro}</p></div><div className="jobs-role-grid">{c.roles.map((role, i) => <Link className={`jobs-role-card jobs-role-card--${i}`} href={`/${locale}/jobs/${role.slug}`} key={role.slug}><div className="jobs-card-meta"><span>{role.category}</span><span>{c.sample}</span></div><h3>{role.title}</h3><p>{role.line}</p><div className="jobs-card-bottom"><span>{c.remote}</span><strong>{c.explore}<span aria-hidden="true"> ↗</span></strong></div></Link>)}</div></section>
    <section className="jobs-bottom"><CameraIcon /><div><h2>{c.how}</h2><p>{c.note}</p></div></section>
  </div></SiteShell>;
}
export function JobRolePage({ content, locale, role }: Props & { role: Role }) {
  const c = jobsCopy[locale];
  const [introUrl, setIntroUrl] = useState("");
  useEffect(() => () => { if (introUrl) URL.revokeObjectURL(introUrl); }, [introUrl]);
  return <SiteShell content={content} locale={locale}><div className="jobs jobs-role wrap"><PreviewNotice locale={locale} /><Link className="jobs-back" href={`/${locale}/jobs`}>{locale === "ar" ? "→" : "←"} {c.back}</Link>
    <header className="jobs-role-heading"><div className="jobs-eyebrow">{role.category} / {c.remote}</div><h1>{role.title}</h1><p>{role.line}</p></header>
    <div className="jobs-application-grid"><div className="jobs-role-story"><p className="jobs-eyebrow">01 / {c.watch}</p><div className="jobs-intro-frame"><video key={introUrl || role.slug} controls playsInline preload="metadata" poster={introUrl ? undefined : `/assets/jobs/${locale}-${role.slug}.jpg`} src={introUrl || `/assets/jobs/${locale}-${role.slug}.mp4`} aria-label={c.watch}>{!introUrl && <track kind="captions" src={`/assets/jobs/${locale}-${role.slug}.vtt`} srcLang={locale} label={locale === "ar" ? "العربية" : "English"} />}</video></div>
      {!introUrl && <p className="jobs-small">{c.sampleVideoNote}</p>}
      <details className="jobs-intro-demo"><summary>{c.introPreview}</summary><p>{c.localIntro}</p><input type="file" accept="video/*" aria-label={c.introPreview} onChange={event => { const file = event.target.files?.[0]; if (file?.type.startsWith("video/")) setIntroUrl(URL.createObjectURL(file)); }} /></details>
      <section className="jobs-role-description"><h2>{c.about}</h2><p>{role.body}</p><h3>{c.details}</h3><ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul></section>
    </div><VideoReply key={role.slug} locale={locale} prompt={role.prompt} /></div>
  </div></SiteShell>;
}
function VideoReply({ locale, prompt }: { locale: Locale; prompt: string }) {
  const c = jobsCopy[locale];
  const [status, setStatus] = useState<"idle" | "starting" | "recording" | "recorded">("idle");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const recorder = useRef<MediaRecorder | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const alive = useRef(true);
  useEffect(() => { alive.current = true; return () => { alive.current = false; if (recorder.current) { recorder.current.onstop = null; recorder.current.ondataavailable = null; if (recorder.current.state !== "inactive") recorder.current.stop(); } stream.current?.getTracks().forEach(track => track.stop()); }; }, []);
  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);
  useEffect(() => { if (status !== "recording") return; const tick = window.setInterval(() => setElapsed(value => value + 1), 1000); const limit = window.setTimeout(() => { if (recorder.current?.state === "recording") recorder.current.stop(); }, 180000); return () => { window.clearInterval(tick); window.clearTimeout(limit); }; }, [status]);
  function releaseCamera() { stream.current?.getTracks().forEach(track => track.stop()); stream.current = null; if (video.current) video.current.srcObject = null; }
  async function record() {
    setError("");
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") { setError(c.unavailable); return; }
    setStatus("starting"); setUrl(""); setElapsed(0);
    try {
      const media = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 640 } }, audio: true });
      if (!alive.current) { media.getTracks().forEach(track => track.stop()); return; }
      stream.current = media;
      if (video.current) video.current.srcObject = media;
      const type = ["video/webm;codecs=vp8,opus", "video/webm", "video/mp4"].find(value => MediaRecorder.isTypeSupported(value));
      const capture = new MediaRecorder(media, type ? { mimeType: type } : undefined);
      recorder.current = capture;
      const chunks: Blob[] = [];
      capture.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      capture.onstop = () => { releaseCamera(); if (!alive.current) return; const blob = new Blob(chunks, { type: capture.mimeType }); if (!blob.size) { setError(c.empty); setStatus("idle"); return; } setUrl(URL.createObjectURL(blob)); setStatus("recorded"); };
      capture.onerror = () => { capture.onstop = null; if (capture.state !== "inactive") capture.stop(); releaseCamera(); if (alive.current) { setError(c.failed); setStatus("idle"); } };
      capture.start(); setStatus("recording");
    } catch { releaseCamera(); if (alive.current) { setError(c.denied); setStatus("idle"); } }
  }
  function reset() { setUrl(""); setStatus("idle"); setElapsed(0); setConfirmed(false); setError(""); }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (status === "recorded" && url) setConfirmed(true); }
  if (confirmed) return <section className="jobs-reply jobs-confirmation" aria-live="polite"><span className="jobs-check" aria-hidden="true">✓</span><h2>{c.confirmed}</h2><p>{c.confirmedBody}</p><button className="jobs-button" onClick={reset}>{c.reset}</button></section>;
  return <section className="jobs-reply"><p className="jobs-eyebrow">02 / {c.steps[1]}</p><h2>{c.replyTitle}</h2><p className="jobs-reply-intro">{c.replyIntro}</p><div className="jobs-prompt"><span>{c.promptLabel}</span><p>{prompt}</p></div>
    <div className={`jobs-camera-frame${status === "recording" ? " is-recording" : ""}`}>
      <video ref={video} autoPlay muted playsInline hidden={status !== "recording" && status !== "starting"} aria-label={c.replyLabel} />
      {url ? <video src={url} controls playsInline aria-label={c.replyLabel} /> : status === "idle" ? <div className="jobs-camera-placeholder"><CameraIcon /><p>{c.beforeRecord}</p></div> : null}
      {status === "recording" && <span className="jobs-recording"><i />{c.recording} · {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2,"0")}</span>}
    </div>
    <div className="jobs-record-actions">{status === "recording" ? <button className="jobs-button" onClick={() => recorder.current?.stop()}>{c.stop}</button> : <button className={`jobs-button${status === "recorded" ? " jobs-button--secondary" : ""}`} disabled={status === "starting"} onClick={record}>{status === "recorded" ? c.retry : c.record}</button>}<span>{c.limit}</span></div>
    {error && <p className="jobs-error" role="alert">{error}</p>}
    <p className="jobs-small">{status === "recorded" ? c.review : c.permission}</p>
    <form className="jobs-email-form" onSubmit={submit}><label htmlFor="application-email">03 / {c.email}</label><input id="application-email" name="email" type="email" autoComplete="email" dir="ltr" placeholder={c.emailPlaceholder} required disabled={status !== "recorded"} /><button className="jobs-button" type="submit" disabled={status !== "recorded"}>{c.send}<span aria-hidden="true"> {locale === "ar" ? "←" : "→"}</span></button><p className="jobs-small">{c.demoNote}</p></form>
  </section>;
}
