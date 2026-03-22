import { cx } from "@/lib/utils";

type TerminalBlockProps = {
  className?: string;
  label: string;
  lines: string[];
};

export function TerminalBlock({ className, label, lines }: TerminalBlockProps) {
  return (
    <div className={cx("terminal-shell", className)}>
      <div className="terminal-shell__frame">
        <div className="terminal-shell__bar">
          <div className="terminal-shell__lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="terminal-shell__label">{label}</span>
        </div>
        <div className="terminal-shell__body" dir="ltr">
          {lines.map((line) => (
            <p
              className={line.startsWith(">>") ? "terminal-shell__line terminal-shell__line-command" : "terminal-shell__line"}
              key={line}
            >
              {line}
            </p>
          ))}
          <div className="terminal-shell__progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
