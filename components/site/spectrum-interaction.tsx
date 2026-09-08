"use client";

import { useState } from "react";
import { spectrumInteractionContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function SpectrumInteraction({ locale, stageIndex }: { locale: Locale; stageIndex: number }) {
  const content = spectrumInteractionContent(locale);
  const stage = content.stages[stageIndex];
  const [active, setActive] = useState(0);
  const step = stage.steps[active];
  return (
    <section className="interaction" aria-labelledby="interaction-title">
      <header className="interaction__header">
        <div>
          <span className="spectrum-kicker">{content.eyebrow}</span>
          <h3 id="interaction-title">{stage.title}</h3>
          <p>{content.example}</p>
        </div>
        <span className="interaction__mode">{stage.mode}</span>
      </header>
      <ol className="interaction__flow" aria-label={content.hint}>
        {stage.steps.map((item, index) => (
          <li key={item.label}>
            <button type="button" className={index === active ? "is-current" : index < active ? "is-complete" : ""} aria-pressed={active === index} onClick={() => setActive(index)}>
              <span className="interaction__number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label}</strong>
            </button>
          </li>
        ))}
      </ol>
      {stage.loop && <div className="interaction__loop"><span aria-hidden="true">↻</span><p>{stage.loop}</p></div>}
      <div className="interaction__scene" aria-live="polite" aria-atomic="true">
        <div className="interaction__explanation"><span className="spectrum-kicker">{active + 1} / {stage.steps.length}</span><h4>{step.label}</h4><p>{step.detail}</p></div>
        <div className={`interaction__output interaction__output--${stageIndex}`}><span>{content.result}</span><p key={active}>{step.output}</p></div>
      </div>
      <footer className="interaction__footer">
        <p>{stage.role}</p>
        <button type="button" className="btn" onClick={() => setActive((active + 1) % stage.steps.length)}>{active === stage.steps.length - 1 ? content.replay : content.next}<span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span></button>
      </footer>
      <div className="interaction__outcome"><span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span>{stage.outcome}</div>
    </section>
  );
}
