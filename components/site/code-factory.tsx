"use client";

import { useEffect, useState } from "react";
import { codeFactoryContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function CodeFactory({ locale }: { locale: Locale }) {
  const copy = codeFactoryContent[locale];
  const [project, setProject] = useState<"restaurant" | "fleet">("restaurant");
  const [phase, setPhase] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update(); query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => setPhase(value => (value + 1) % 4), 3200);
    return () => window.clearInterval(timer);
  }, [paused, reduced, project]);
  const step = reduced ? 3 : phase;
  return <section className={`code-factory factory--phase-${step}${paused || reduced ? " factory--paused" : ""}`} aria-label={copy.title}>
    <header className="code-factory__head"><span>{copy.eyebrow}</span><span className="code-factory__spark" aria-hidden="true">✳</span></header>
    <h2>{copy.title}</h2>
    <div className="code-factory__projects" aria-label={copy.business}>
      {(["restaurant", "fleet"] as const).map(kind => <button key={kind} type="button" aria-pressed={project === kind} onClick={() => { setProject(kind); setPhase(0); }}>{copy[kind]}</button>)}
    </div>
    <svg className="factory-scene" viewBox="0 0 560 380" fill="none" aria-hidden="true">
      <ellipse cx="286" cy="313" rx="250" ry="52" fill="#ede2d3" opacity=".45" />
      <path d="M20 268 271 213 541 268 285 347Z" fill="#f6efe5" stroke="#d8ccbc" />
      <path d="M20 268v18l265 79v-18ZM285 347l256-79v18l-256 79Z" fill="#e7dccd" stroke="#d8ccbc" />
      <path d="m57 267 197-37 211 41-181 48Z" stroke="#fff" strokeWidth="3" strokeDasharray="7 8" />
      <g className="factory-input">
        <path d="m33 222 46-14 43 16-45 14Z" fill="#fff" stroke="#d8ccbc" />
        <path d="m33 222 44 16v37l-44-16Z" fill="#ede2d3" /><path d="m77 238 45-14v37l-45 14Z" fill="#dce6de" />
        <g className="factory-bulb"><path d="M75 144c-20 0-29 23-16 37 5 5 7 10 7 14h19c0-5 2-9 7-14 13-15 2-37-17-37Z" fill="#efcfcb" stroke="#a43562" strokeWidth="2" /><path d="M66 201h20m-17 6h14m-8-66v-11m-31 24-9-5m69 5 9-5" stroke="#a43562" strokeWidth="3" strokeLinecap="round" /></g>
      </g>
      <g className="factory-conveyor"><path d="m109 253 114-27 24 14-115 29Z" fill="#596274" /><path d="m132 269 115-29v9l-115 30Z" fill="#343e4d" />{[0,1,2,3,4,5].map(i=><path key={i} d={`m${120+i*18} ${253-i*4} 15 8`} stroke="#acb4c1" strokeWidth="3" />)}<g className="factory-parcel"><path d="m126 237 17-5 16 7-17 5Z" fill="#8fb0ff" /><path d="m126 237 16 7v18l-16-7Z" fill="#2563eb" /><path d="m142 244 17-5v18l-17 5Z" fill="#1747ba" /></g></g>
      <g className="factory-machine">
        <path d="m172 132 80-26 73 34-81 26Z" fill="#fff" stroke="#d8ccbc" />
        <path d="m172 132 72 34v105l-72-33Z" fill="#e6ddd0" stroke="#d8ccbc" />
        <path d="m244 166 81-26v104l-81 27Z" fill="#f9f6f0" stroke="#d8ccbc" />
        <path d="m257 184 54-17v60l-54 18Z" fill="#2563eb" />
        <path className="factory-scan" d="m261 213 46-14" stroke="#b9d2ff" strokeWidth="5" />
        <path d="m187 177 40 19v47l-40-19Z" fill="#596274" />
        <g className="factory-gears"><circle cx="207" cy="211" r="13" stroke="#dce6de" strokeWidth="4" strokeDasharray="5 4" /><circle cx="207" cy="211" r="4" fill="#dce6de" /></g>
        <path d="m216 121 0-40 23-8v38m30 8V62l21 9v58" stroke="#d8ccbc" strokeWidth="11" />
        <circle className="factory-light" cx="283" cy="148" r="5" fill="#087c65" />
        <g className="factory-arm"><path d="m265 104 26-37 35 15" stroke="#2563eb" strokeWidth="12" strokeLinecap="round" /><circle cx="291" cy="67" r="9" fill="#1747ba" /><path d="m326 82 12 10-5 13m-7-23-9 12 6 12" stroke="#1747ba" strokeWidth="5" strokeLinecap="round" /></g>
      </g>
      <path className="factory-link" d="M318 248c20 4 17 33 47 32h30" stroke="#2563eb" strokeWidth="4" strokeDasharray="5 8" />
      <g className="factory-business" key={project}>
        {project === "restaurant" ? <>
          <path d="m358 165 69-23 91 38-73 24Z" fill="#ede2d3" stroke="#d8ccbc" />
          <path d="m358 165 87 39v85l-87-36Z" fill="#fffaf2" stroke="#d8ccbc" /><path d="m445 204 73-24v85l-73 24Z" fill="#e9dece" />
          <path d="m352 170 93 39v21l-93-39Z" fill="#e8a48b" />{[0,1,2,3,4].map(i=><path key={i} d={`m${361+i*18} ${174+i*7.6} 9 4v21l-9-4Z`} fill="#fff8ef" />)}
          <path d="m445 209 79-26v20l-79 27Z" fill="#cc826d" />
          <path d="m373 218 25 10v30l-25-10Z" fill="#8aafbd" /><path d="m410 233 21 9v41l-21-9Z" fill="#596274" />
          <ellipse cx="408" cy="167" rx="23" ry="9" fill="#fff" stroke="#d8ccbc" /><path d="M390 167a18 18 0 0 1 36 0Z" fill="#087c65" />
          <g className="factory-steam" stroke="#8a94a6" strokeWidth="2" strokeLinecap="round"><path d="M402 147q-7-9 0-17t0-15m12 32q-7-9 0-17" /></g>
          <g className="factory-delivery"><ellipse cx="462" cy="312" rx="22" ry="7" fill="#d8ccbc" /><circle cx="449" cy="302" r="9" fill="#343e4d" /><circle cx="478" cy="302" r="9" fill="#343e4d" /><path d="m447 294 20-3 8-17h9m-10 20h-18" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" /><rect x="442" y="275" width="21" height="18" rx="3" fill="#e8a48b" /></g>
        </> : <>
          <path d="m354 164 72-26 91 39-73 27Z" fill="#dce6de" stroke="#bdcbbf" /><path d="m354 164 90 40v81l-90-38Z" fill="#f8faf6" stroke="#d8ccbc" /><path d="m444 204 73-27v83l-73 25Z" fill="#c5d6c9" />
          <path d="m368 198 58 25v52l-58-25Z" fill="#596274" /><path d="m370 206 54 23m-54-14 54 23m-54-14 54 23" stroke="#8a94a6" strokeWidth="3" />
          <path d="m462 209 38-12v30l-38 13Z" fill="#edf3ff" />
          <path d="m370 151 13-20 14 6-12 21" stroke="#087c65" strokeWidth="7" strokeLinecap="round" />
          <g className="factory-van"><ellipse cx="410" cy="306" rx="43" ry="10" fill="#d8ccbc" /><path d="m368 265 54 20 31-11-54-20Z" fill="#8fb0ff" /><path d="m368 265 54 20v30l-54-21Z" fill="#2563eb" /><path d="m422 285 31-11 13 17v13l-44 11Z" fill="#1747ba" /><path d="m432 284 17-6 9 12-26 7Z" fill="#dceafa" /><ellipse cx="383" cy="296" rx="7" ry="10" fill="#343e4d" /><ellipse cx="439" cy="310" rx="7" ry="10" fill="#343e4d" /><path d="m379 276 29 11" stroke="#fff" strokeWidth="3" /></g>
          <g className="factory-route"><circle cx="489" cy="122" r="14" fill="#087c65" /><path d="m483 122 4 4 8-9" stroke="#fff" strokeWidth="3" /><path d="M489 136v20" stroke="#087c65" strokeWidth="2" strokeDasharray="3 4" /></g>
        </>}
      </g>
      <g className="factory-orbit" fill="#2563eb"><rect x="133" y="114" width="9" height="9" rx="2" transform="rotate(20 133 114)" /><rect x="336" y="123" width="7" height="7" rx="2" /><circle cx="315" cy="45" r="4" /></g>
    </svg>
    <div className="code-factory__labels"><span>{copy.idea}</span><span>{copy.factory}</span><span>{copy.business}</span></div>
    <ol className="code-factory__stages">{copy.stages.map((label,index)=><li key={label}><button type="button" aria-current={step===index ? "step" : undefined} onClick={()=>{setPhase(index);setPaused(true);}} disabled={reduced}><span>{index+1}</span>{label}</button></li>)}</ol>
    <p className="code-factory__detail">{(project === "restaurant" ? copy.restaurantDetails : copy.fleetDetails)[step]}</p>
    <footer><span>{copy.illustration}</span>{!reduced && <button type="button" aria-pressed={paused} onClick={()=>setPaused(value=>!value)}>{paused ? copy.play : copy.pause}</button>}</footer>
  </section>;
}
