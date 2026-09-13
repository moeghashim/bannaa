"use client";

import { useMemo, useState } from "react";
import { blobatar } from "blobatar";
import { happy, idle, love, mad, sad, scared, shy, sick, sleepy, smug, surprised, thinking, unsure, wink } from "blobatar/expression";
import { brandPalette, brandSeed, brandTraits } from "@/lib/brand";
import { brandPlaygroundCopy } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const expressions = { idle, happy, wink, thinking, love, surprised, sleepy, smug, unsure, sad, mad, scared, shy, sick };
type Mood = keyof typeof expressions;
type Hat = keyof typeof brandPlaygroundCopy.en.hats;
type Scene = keyof typeof brandPlaygroundCopy.en.scenes;
const swatches = ["#050607", "#2563EB", "#2F855A", "#BE5B7B", "#E8A48B", "#7C3AED"];
const hats: Hat[] = ["none", "cap", "beanie", "crown", "party"];
const scenes: Scene[] = ["portrait", "laptop", "thinking"];
const moods = Object.keys(expressions) as Mood[];

function artwork(body: string, eyes: string, accent: string, background: string, transparent: boolean, mood: Mood, hat: Hat, scene: Scene) {
  const face = blobatar(brandSeed, { background: false, palette: { head: body, eye: eyes }, traits: brandTraits, expression: expressions[mood] })
    .replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
  const headwear: Record<Hat, string> = {
    none: "",
    cap: `<path d="M24 23Q24 5 48 5Q70 5 73 23Z" fill="${accent}"/><path d="M21 23Q50 17 80 24Q86 30 76 30L24 28Z" fill="${accent}" stroke="#111111" stroke-width="1.2"/><path d="M48 6V20" stroke="white" opacity=".45" stroke-width="1.4"/>`,
    beanie: `<path d="M24 23Q22 0 49 0Q75 0 73 23Z" fill="${accent}"/><circle cx="49" cy="0" r="5" fill="${accent}"/><rect x="22" y="17" width="53" height="12" rx="5" fill="${accent}" stroke="#111111" stroke-width="1"/><path d="M30 20V26M38 20V26M46 20V26M54 20V26M62 20V26M70 20V26" stroke="white" opacity=".5"/>`,
    crown: `<path d="M26 23L22 3L37 12L49 -2L60 12L77 3L72 23Z" fill="${accent}" stroke="#111111" stroke-width="1.2" stroke-linejoin="round"/><path d="M28 27H71" stroke="${accent}" stroke-width="5"/><circle cx="49" cy="15" r="2.6" fill="white"/>`,
    party: `<path d="M29 22L48 -17L70 22Z" fill="${accent}"/><path d="M39 2L57 0M34 12L63 10" stroke="white" stroke-width="3"/><circle cx="48" cy="-17" r="4" fill="${accent}"/><path d="M27 24Q49 19 73 24" fill="none" stroke="#111111" stroke-width="2"/>`,
  };
  const laptop = `<g><path d="M75 403H425" stroke="#111111" stroke-width="5" stroke-linecap="round"/><rect x="121" y="298" width="258" height="101" rx="12" fill="${accent}" stroke="#111111" stroke-width="4"/><path d="M110 398H390L404 412H97Z" fill="#F5F6F8" stroke="#111111" stroke-width="4" stroke-linejoin="round"/><circle cx="250" cy="350" r="17" fill="white" opacity=".94"/><path d="M245 346V354M255 346V354" stroke="${accent}" stroke-width="4" stroke-linecap="round"/><rect x="88" y="329" width="26" height="46" rx="13" fill="${body}" transform="rotate(-16 101 352)"/><rect x="387" y="329" width="26" height="46" rx="13" fill="${body}" transform="rotate(16 400 352)"/><path d="M415 292V277M406 283H424" stroke="${accent}" stroke-width="3" stroke-linecap="round"/></g>`;
  const thought = `<g fill="white" stroke="${accent}" stroke-width="3"><circle cx="353" cy="203" r="5"/><circle cx="371" cy="182" r="9"/><path d="M366 128Q348 105 369 89Q373 64 400 72Q423 51 444 74Q471 76 465 103Q480 124 458 140H389Q370 144 366 128Z"/></g><g stroke="${accent}" stroke-width="4" fill="none" stroke-linecap="round"><path d="M406 113C383 88 429 78 427 103L420 113V120H406Z"/><path d="M409 128H417M416 64V56M447 83L454 79M383 78L377 72"/></g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 500 500"><title>Bannaa character</title>${transparent ? "" : `<rect width="500" height="500" rx="28" fill="${background}"/>`}<g class="lab-character" transform="translate(100 125)"><g class="lab-float"><g transform="scale(3)">${face}${headwear[hat]}</g></g></g>${scene === "laptop" ? laptop : scene === "thinking" ? thought : ""}</svg>`;
}

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function BrandPlayground({ locale }: { locale: Locale }) {
  const t = brandPlaygroundCopy[locale];
  const [body, setBody] = useState(brandPalette.head);
  const [eyes, setEyes] = useState(brandPalette.eye);
  const [accent, setAccent] = useState("#2563EB");
  const [background, setBackground] = useState("#F6EFE5");
  const [mood, setMood] = useState<Mood>("idle");
  const [hat, setHat] = useState<Hat>("none");
  const [scene, setScene] = useState<Scene>("laptop");
  const [transparent, setTransparent] = useState(false);
  const [motion, setMotion] = useState(true);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const svg = useMemo(() => artwork(body, eyes, accent, background, transparent, mood, hat, scene), [body, eyes, accent, background, transparent, mood, hat, scene]);

  function reset() {
    setBody(brandPalette.head); setEyes(brandPalette.eye); setAccent("#2563EB"); setBackground("#F6EFE5");
    setMood("idle"); setHat("none"); setScene("laptop"); setTransparent(false); setMotion(true); setStatus("");
  }

  async function exportImage(format: "svg" | "png") {
    setStatus("");
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const filename = `bannaa-${scene}-${mood}-${hat}.${format}`;
    if (format === "svg") { download(blob, filename); setStatus(t.exported); return; }
    setBusy(true);
    const url = URL.createObjectURL(blob);
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      const canvas = document.createElement("canvas");
      canvas.width = 1000; canvas.height = 1000;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas unavailable");
      ctx.drawImage(image, 0, 0, 1000, 1000);
      const png = await new Promise<Blob>((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error("PNG export failed")), "image/png"));
      download(png, filename); setStatus(t.exported);
    } catch { setStatus(t.error); }
    finally { URL.revokeObjectURL(url); setBusy(false); }
  }

  return <section className="brand-lab" aria-labelledby="brand-lab-title">
    <header className="brand-lab__intro"><p className="mono">{t.eyebrow}</p><h2 id="brand-lab-title">{t.title}</h2><p>{t.intro}</p></header>
    <div className="brand-lab__workspace">
      <div className="brand-lab__canvas-column">
        <div className={`brand-lab__canvas${motion ? " is-animated" : ""}${transparent ? " is-transparent" : ""}`} role="img" aria-label={`${t.preview}: ${t.moods[mood]}, ${t.hats[hat]}, ${t.scenes[scene]}`} dangerouslySetInnerHTML={{ __html: svg }} />
        <div className="brand-lab__toggles"><label><input type="checkbox" checked={motion} onChange={e => setMotion(e.target.checked)} />{t.motion}</label><label><input type="checkbox" checked={transparent} onChange={e => setTransparent(e.target.checked)} />{t.transparent}</label></div>
        <div className="brand-lab__exports"><button className="btn primary" disabled={busy} onClick={() => exportImage("png")}>{busy ? t.exporting : t.png}</button><button className="btn" onClick={() => exportImage("svg")}>{t.svg} ↗</button></div>
        <p className="brand-lab__note">{t.note}</p><p role="status" className="brand-lab__status">{status}</p>
      </div>
      <div className="brand-lab__controls">
        <div className="brand-lab__actions"><button className="btn" onClick={() => { setBody(swatches[Math.floor(Math.random() * swatches.length)]); setAccent(swatches[1 + Math.floor(Math.random() * (swatches.length - 1))]); setMood(moods[Math.floor(Math.random() * moods.length)]); setHat(hats[Math.floor(Math.random() * hats.length)]); setScene(scenes[Math.floor(Math.random() * scenes.length)]); }}>{t.surprise} ✦</button><button className="brand-lab__reset" onClick={reset}>{t.reset}</button></div>
        <fieldset><legend>{t.colors}</legend><div className="brand-lab__swatches">{swatches.map(color => <button key={color} style={{ backgroundColor: color }} aria-label={`${t.body} ${color}`} aria-pressed={body === color} onClick={() => setBody(color)} />)}</div><div className="brand-lab__colors">{[{ label: t.body, value: body, setter: setBody }, { label: t.eyes, value: eyes, setter: setEyes }, { label: t.accent, value: accent, setter: setAccent }, { label: t.background, value: background, setter: setBackground }].map(item => <label key={item.label}><input type="color" value={item.value} onChange={e => item.setter(e.target.value)} />{item.label}</label>)}</div></fieldset>
        <fieldset><legend>{t.mood}</legend><div className="brand-lab__choices">{moods.map(value => <button key={value} aria-pressed={mood === value} onClick={() => setMood(value)}>{t.moods[value]}</button>)}</div></fieldset>
        <fieldset><legend>{t.hat}</legend><div className="brand-lab__choices">{hats.map(value => <button key={value} aria-pressed={hat === value} onClick={() => setHat(value)}>{t.hats[value]}</button>)}</div></fieldset>
        <fieldset><legend>{t.scene}</legend><div className="brand-lab__choices">{scenes.map(value => <button key={value} aria-pressed={scene === value} onClick={() => { setScene(value); if (value === "thinking") setMood("thinking"); }}>{t.scenes[value]}</button>)}</div></fieldset>
        <p className="brand-lab__note">{t.distinction}</p>
      </div>
    </div>
  </section>;
}
