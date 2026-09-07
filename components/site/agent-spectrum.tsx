"use client";

import { useState } from "react";
import Image from "next/image";
import { spectrumStages } from "@/lib/spectrum";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function AgentSpectrum({ content, locale }: { content: SiteContent; locale: Locale; compact?: boolean }) {
  const ar = locale === "ar";
  const stages = spectrumStages(content.tracks.cards, locale);
  const [selected, setSelected] = useState(0);
  const stage = stages[selected];
  return <section className="spectrum-experience wrap" aria-label={ar ? "طيف الوكلاء" : "Agent Spectrum"}>
    <header className="spectrum-intro"><span>{ar ? "مسار تطور قدراتك" : "YOUR CAPABILITY PROGRESSION"}</span><p>{ar ? "أربع محطات. قدرات حقيقية في كل خطوة." : "Four stages. Real capabilities at every step."}</p></header>
    <div className="spectrum-selector" role="tablist" aria-label={ar ? "المراحل" : "Stages"}>
      {stages.map((item, index) => <button key={item.key} id={`tab-${item.key}`} role="tab" aria-selected={selected === index} aria-controls="spectrum-panel" tabIndex={selected === index ? 0 : -1} className={`spectrum-stop tone-${index}`} onClick={() => setSelected(index)} onKeyDown={event => {
        const direction = ar ? -1 : 1;
        let target = index;
        if (event.key === "ArrowRight") target = (index + direction + 4) % 4;
        else if (event.key === "ArrowLeft") target = (index - direction + 4) % 4;
        else if (event.key === "Home") target = 0;
        else if (event.key === "End") target = 3;
        else return;
        event.preventDefault(); setSelected(target); document.getElementById(`tab-${stages[target].key}`)?.focus();
      }}><span className="spectrum-stop__number">{item.num}</span><strong>{item.title}</strong><span>{index === 0 ? (ar ? "قبل الانضمام" : "Before joining") : [ar ? "افهم واربط" : "Understand & connect", ar ? "ابنِ وانشر" : "Build & deploy", ar ? "شغّل وطوّر" : "Operate & evolve"][index - 1]}</span></button>)}
    </div>
    <div id="spectrum-panel" role="tabpanel" aria-labelledby={`tab-${stage.key}`} className={`spectrum-detail tone-${selected}`} tabIndex={0}>
      <div className="spectrum-detail__overview">
        <span className="spectrum-kicker">{stage.num} / {selected === 0 ? (ar ? "متطلبات، وليست دروساً" : "REQUIRED, NOT TAUGHT") : stage.sub}</span>
        <h2>{stage.title}</h2><p>{stage.desc}</p>
        <div className={`agent-map agent-map--${selected}`} aria-hidden="true">
          <div className="agent-map__center"><Image src={`/assets/brand/spectrum/stage-${selected}.svg`} alt="" width={140} height={140} unoptimized /></div>
          {Array.from({ length: selected + 1 }, (_, index) => <span className="agent-map__node" key={index}>{["01", "02", "03", "04"][index]}</span>)}
        </div>
        <p className="spectrum-note">{selected === 0 ? (ar ? "يبدأ التدريس من الأساسيات. تحقق من استعدادك قبل الانضمام." : "Teaching starts at Basics. Check your readiness before joining.") : (ar ? "التقدم يُثبت بالمشاريع والنتائج، وليس بعدد الأدوات." : "Progress is demonstrated through projects and outcomes, not tool counts.")}</p>
      </div>
      <div className="spectrum-detail__capabilities">
        <h3>{ar ? "ما الذي يمكنك فعله؟" : "What you can do"}</h3>
        <ul>{stage.capabilities.map((capability, index) => <li key={capability}><span>{String(index + 1).padStart(2, "0")}</span><p>{capability}</p></li>)}</ul>
        <div className="spectrum-deliverable"><span>{ar ? "أثبت قدرتك" : "PROVE IT"}</span><p>{stage.proof}</p></div>
        <details className="spectrum-depth"><summary>{selected === 0 ? (ar ? "معارف مطلوبة" : "Required knowledge") : (ar ? "المهارات التي تبنيها" : "Skills you develop")}</summary>{stage.modules.map(module => <div key={module.title}><h4>{module.title}</h4><p>{module.desc}</p></div>)}</details>
        <a className="btn primary" href={`/${locale}/${selected === 3 ? "consultation" : "join"}`}>{ar ? (selected === 3 ? "ناقش مشروعك" : "انضم للبنّائين") : (selected === 3 ? "Discuss your project" : "Join the builders")}</a>
      </div>
    </div>
  </section>;
}
