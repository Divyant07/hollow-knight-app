import { useState } from "react";

const CATEGORY_STYLES = {
  Grubs:   { color: "#5eead4", bg: "rgba(94,234,212,0.08)" },
  Charms:  { color: "#a78bfa", bg: "rgba(167,139,250,0.08)" },
  Bosses:  { color: "#f87171", bg: "rgba(248,113,113,0.08)" },
  Secrets: { color: "#fbbf24", bg: "rgba(251,191,36,0.08)" },
};

export default function ChecklistItem({ name, category, notes, icon: Icon }) {
  const [completed, setCompleted] = useState(false);
  const style = CATEGORY_STYLES[category] || { color: "#888", bg: "rgba(136,136,136,0.08)" };

  return (
    <div
      className={`hk-item ${completed ? "done" : ""}`}
      onClick={() => setCompleted((p) => !p)}
      style={{ "--accent": style.color, "--accent-bg": style.bg }}
    >
      <div className="hk-left">
        <div className="hk-icon">
          {Icon ? <Icon /> : <div className="hk-icon-placeholder" />}
        </div>
        <div className="hk-text">
          <span className="hk-name">{name}</span>
          {notes && <span className="hk-notes">{notes}</span>}
        </div>
      </div>
      <div className="hk-right">
        <span className="hk-badge">{category}</span>
        <div className="hk-check">
          {completed && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}