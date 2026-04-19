"use client";

import { useEffect, useState } from "react";

import type { SiteContent } from "@/lib/content";

type PipelineTerminalProps = {
  content: SiteContent["hero"]["terminal"];
};

export function PipelineTerminal({ content }: PipelineTerminalProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setPhase((p) => (p + 1) % 4), 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="pipe" aria-live="polite">
      <div className="pipe__chrome">
        <span>{content.chromeTitle}</span>
        <span className="pipe__dots">
          <span style={{ background: "var(--warn)" }} />
          <span style={{ background: "#ffd166" }} />
          <span style={{ background: "var(--ok)" }} />
        </span>
      </div>

      <div className="pipe__labels">
        {content.stages.map((s, i) => (
          <div key={s.key} className={`pipe__label${phase === i ? " on" : ""}`}>
            {phase === i ? "▶ " : "  "}
            {s.key}
          </div>
        ))}
      </div>

      <div className="pipe__panels">
        <div className={`pipe__stage stage-plan${phase === 0 ? " on" : ""}`}>
          <div className="stage-plan__head">{content.planHead}</div>
          {content.planRows.map((row) => (
            <div className="stage-plan__row" key={row.k}>
              <span className="check">✓</span>
              <span className="k">{row.k}</span>
              <span className="v">{row.v}</span>
            </div>
          ))}
          <div className="stage-plan__tags">
            {content.planTags.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        </div>

        <div className={`pipe__stage stage-design${phase === 1 ? " on" : ""}`}>
          <DesignWireframe active={phase === 1} />
        </div>

        <div className={`pipe__stage stage-agent${phase === 2 ? " on" : ""}`}>
          <AgentCore active={phase === 2} />
        </div>

        <div className={`pipe__stage stage-site${phase === 3 ? " on" : ""}`}>
          <SitePreview active={phase === 3} preview={content.sitePreview} />
        </div>
      </div>

      <div className="pipe__status">
        <span>{content.stages[phase].status}</span>
        <span className="ok">{content.liveLabel}</span>
      </div>
    </div>
  );
}

function DesignWireframe({ active }: { active: boolean }) {
  const fadeAt = (delay: number) => (active ? { animation: `fadeIn 0.35s ${delay}s both` } : undefined);

  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet">
      <g fill="var(--line)">
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 14 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={20 + c * 26} cy={20 + r * 26} r={0.8} />
          ))
        )}
      </g>
      <g>
        <rect x="26" y="30" width="348" height="36" fill="var(--bg)" stroke="var(--line-2)" />
        <rect x="36" y="42" width="60" height="12" fill="var(--fg-dim)" style={fadeAt(0.05)} />
        <rect x="280" y="42" width="80" height="12" fill="var(--accent)" style={fadeAt(0.15)} />

        <rect x="26" y="78" width="218" height="100" fill="var(--bg)" stroke="var(--line-2)" style={fadeAt(0.2)} />
        <rect x="36" y="90" width="180" height="28" fill="var(--fg-dim)" opacity="0.7" style={fadeAt(0.3)} />
        <rect x="36" y="126" width="140" height="8" fill="var(--line-2)" style={fadeAt(0.4)} />
        <rect x="36" y="140" width="100" height="8" fill="var(--line-2)" style={fadeAt(0.45)} />
        <rect x="36" y="158" width="50" height="14" fill="var(--accent)" style={fadeAt(0.55)} />

        <rect
          x="256"
          y="78"
          width="118"
          height="100"
          fill="var(--term-bg)"
          stroke="var(--accent)"
          strokeDasharray="2 3"
          style={fadeAt(0.3)}
        />
        <rect x="266" y="90" width="28" height="8" fill="var(--accent)" opacity="0.8" style={fadeAt(0.5)} />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x="266"
            y={106 + i * 14}
            width={60 + (i % 2) * 20}
            height="8"
            fill="var(--line-2)"
            style={fadeAt(0.55 + i * 0.08)}
          />
        ))}

        {[0, 1, 2].map((i) => (
          <g key={i} style={fadeAt(0.6 + i * 0.1)}>
            <rect x={26 + i * 118} y="190" width="108" height="50" fill="var(--bg)" stroke="var(--line-2)" />
            <rect
              x={34 + i * 118}
              y="198"
              width="40"
              height="8"
              fill={i === 1 ? "var(--accent)" : "var(--line-2)"}
            />
            <rect x={34 + i * 118} y="212" width="80" height="6" fill="var(--line)" />
            <rect x={34 + i * 118} y="222" width="60" height="6" fill="var(--line)" />
          </g>
        ))}
      </g>
      <g stroke="var(--accent)" strokeWidth="0.8" opacity={active ? 0.9 : 0} style={{ transition: "opacity 0.4s" }}>
        <line x1="26" y1="72" x2="244" y2="72" />
        <line x1="26" y1="70" x2="26" y2="74" />
        <line x1="244" y1="70" x2="244" y2="74" />
      </g>
      <text
        x="135"
        y="70"
        textAnchor="middle"
        fontFamily="var(--f-mono)"
        fontSize="8"
        fill="var(--accent)"
        opacity={active ? 1 : 0}
        style={{ transition: "opacity 0.4s" }}
      >
        218 px
      </text>
    </svg>
  );
}

function AgentCore({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid meet">
      {[40, 70, 100].map((r, i) => (
        <circle
          key={r}
          cx={200}
          cy={130}
          r={r}
          fill="none"
          stroke={active ? "var(--accent)" : "var(--line-2)"}
          strokeOpacity={active ? 1 - i * 0.3 : 0.3}
          strokeWidth={1}
          strokeDasharray={i === 1 ? "4 4" : "0"}
          style={{
            transformOrigin: "200px 130px",
            animation: active ? `spin${i} ${6 + i * 2}s linear infinite` : undefined
          }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2;
        return (
          <g
            key={i}
            style={{
              transformOrigin: "200px 130px",
              animation: active ? "orbit 8s linear infinite" : undefined
            }}
          >
            <circle
              cx={200 + Math.cos(a) * 100}
              cy={130 + Math.sin(a) * 100}
              r={4}
              fill={i % 2 === 0 ? "var(--accent)" : "var(--fg)"}
            />
          </g>
        );
      })}
      <circle cx={200} cy={130} r={22} fill="var(--term-bg)" stroke="var(--accent)" strokeWidth={1.5} />
      <circle cx={200} cy={130} r={10} fill="var(--accent)" opacity={active ? 1 : 0.4}>
        {active && <animate attributeName="r" values="8;14;8" dur="1.6s" repeatCount="indefinite" />}
      </circle>
      <text
        x={200}
        y={134}
        textAnchor="middle"
        fontFamily="var(--f-mono)"
        fontSize={9}
        fill="var(--term-bg)"
        fontWeight={700}
      >
        AI
      </text>
      <g fontFamily="var(--f-mono)" fontSize={9} fill="var(--fg-mute)" letterSpacing={1}>
        <text x={20} y={30}>PLAN</text>
        <text x={20} y={250}>MEMORY</text>
        <text x={380} y={30} textAnchor="end">TOOLS</text>
        <text x={380} y={250} textAnchor="end">EVAL</text>
      </g>
    </svg>
  );
}

function SitePreview({
  active,
  preview
}: {
  active: boolean;
  preview: SiteContent["hero"]["terminal"]["sitePreview"];
}) {
  return (
    <div className="stage-site__frame">
      <div className="stage-site__chrome">
        <span className="d" style={{ background: "var(--warn)" }} />
        <span className="d" style={{ background: "#ffd166" }} />
        <span className="d" style={{ background: "var(--ok)" }} />
        <span className="stage-site__url">bannaa.ai</span>
      </div>
      <div className="stage-site__body">
        <div className="stage-site__head">
          {preview.head}{" "}
          <span className="accent" style={{ animation: active ? "fadeIn 0.4s 0.3s both" : undefined }}>
            {preview.accent}
          </span>
        </div>
        <div className="stage-site__lines">
          <span style={{ width: 40 }} />
          <span style={{ width: 28 }} />
          <span style={{ width: 52 }} />
        </div>
        <div className="stage-site__cards">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={i === 1 ? "hi" : ""}
              style={{ animation: active ? `fadeIn 0.4s ${0.5 + i * 0.15}s both` : undefined }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
