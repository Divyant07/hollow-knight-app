import { useState } from "react";

const CATEGORY_STYLES = {
  Grubs:   { color: "#7ecfb3" },
  Charms:  { color: "#c9a0f5" },
  Bosses:  { color: "#f5756a" },
  Secrets: { color: "#f5c842" },
};

export default function ChecklistItem({ name, category, notes, icon: Icon }) {
  const [completed, setCompleted] = useState(false);
  const style = CATEGORY_STYLES[category] || { color: "#888" };

  return (
    <div
      className={`hk-item ${completed ? "done" : ""}`}
      onClick={() => setCompleted((p) => !p)}
      style={{ "--accent": style.color }}
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
        <div className="hk-check">{completed && "✓"}</div>
      </div>

      <style>{`
        .hk-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: #111114;
          border: 1px solid #222226;
          border-radius: 6px;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s;
          user-select: none;
        }

        .hk-item:hover {
          border-color: var(--accent);
          background: #141418;
        }

        .hk-item.done {
          opacity: 0.4;
        }

        .hk-item.done .hk-name {
          text-decoration: line-through;
        }

        .hk-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hk-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hk-icon-placeholder {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #222226;
        }

        .hk-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hk-name {
          font-size: 14px;
          color: #ccc;
          letter-spacing: 0.02em;
        }

        .hk-notes {
          font-size: 12px;
          color: #555;
        }

        .hk-right {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        .hk-badge {
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          opacity: 0.8;
        }

        .hk-check {
          width: 18px;
          height: 18px;
          border: 1px solid #333;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: var(--accent);
          transition: border-color 0.15s;
        }

        .hk-item:hover .hk-check {
          border-color: var(--accent);
        }
      `}</style>
    </div>
  );
}