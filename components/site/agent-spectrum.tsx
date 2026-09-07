import Image from "next/image";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function AgentSpectrum({ content, locale, compact = false }: { content: SiteContent; locale: Locale; compact?: boolean }) {
  const ar = locale === "ar";
  return (
    <section className={`agent-spectrum wrap${compact ? " agent-spectrum--compact" : ""}`} aria-label={ar ? "طيف الوكلاء" : "Agent Spectrum"}>
      <header className="spectrum-heading">
        <span>{ar ? "المسار إلى بناء الوكلاء" : "THE PATH TO BUILDING AGENTS"}</span>
        <h2>{ar ? "من المعرفة إلى الاستقلالية." : "From understanding to autonomy."}</h2>
        <p>{ar ? "المتطلبات المسبقة ليست جزءاً من التدريس. تحقّق منها أولاً؛ يبدأ التعلّم معنا من الأساسيات." : "Prerequisites are not taught. Check your readiness first; learning with us begins at Basics."}</p>
      </header>
      <div className="spectrum-rail">
        {content.tracks.cards.map((stage, index) => (
          <article className={`spectrum-stage spectrum-stage--${index}`} key={stage.id} id={stage.id}>
            <div className="spectrum-marker"><span>{stage.num}</span><span>{index === 0 ? (ar ? "قبل الانضمام" : "BEFORE JOINING") : (ar ? "مرحلة تعليمية" : "TAUGHT STAGE")}</span></div>
            <h3>{stage.title}</h3>
            <p>{stage.desc}</p>
            <ul className="spectrum-topics">
              {stage.modules.map((module, i) => <li key={module.title}><span>{String(i + 1).padStart(2, "0")}</span>{compact ? <span>{module.title}</span> : <details><summary>{module.title}</summary><p>{module.desc}</p></details>}</li>)}
            </ul>
            <div className="spectrum-proof"><h4>{index === 0 ? (ar ? "دليل الاستعداد" : "Readiness check") : (ar ? "المشروع العملي" : "Practical deliverable")}</h4><p>{stage.outcomes.join(ar ? "، " : " · ")}</p></div>
            <a className="btn" href={compact ? `/${locale}/spectrum#${stage.id}` : `/${locale}/tracks#${stage.id}`}>{ar ? "استكشف المرحلة" : "Explore stage"} <span aria-hidden="true">{ar ? "←" : "→"}</span></a>
          </article>
        ))}
      </div>
      {!compact && <div className="spectrum-finish"><Image unoptimized src="/assets/brand/icon.svg" width="64" height="64" alt="" /><div><h2>{ar ? "الهدف: خدمة مفيدة تتحسّن بالدليل." : "The goal: a useful service that improves with evidence."}</h2><p>{ar ? "وكيل واحد ← حلقات عمل ← خدمة متكاملة ← وكلاء منسّقة ← تحسين مقاس. أضف التعقيد عندما يحسّن النتيجة." : "One agent → loops → a complete service → coordinated agents → measured improvement. Add complexity when it improves the outcome."}</p></div></div>}
    </section>
  );
}
