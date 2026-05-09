import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BossBuild.css";

const BOSSES = [
  {
    id: 1,
    name: "False Knight",
    area: "Forgotten Crossroads",
    charms: ["Quick Slash", "Fragile Strength", "Stalwart Shell"],
    nail: { level: 1, art: "Cyclone Slash" },
  },
  {
    id: 2,
    name: "Hornet",
    area: "Greenpath",
    charms: ["Quick Slash", "Mark of Pride", "Long Nail"],
    nail: { level: 1, art: "Dash Slash" },
  },
  {
    id: 3,
    name: "Mantis Lords",
    area: "Fungal Wastes",
    charms: ["Quick Slash", "Mark of Pride", "Long Nail", "Stalwart Shell"],
    nail: { level: 2, art: "Dash Slash" },
  },
  {
    id: 4,
    name: "Soul Master",
    area: "City of Tears",
    charms: ["Shaman Stone", "Spell Twister", "Quick Focus"],
    nail: { level: 2, art: "Great Slash" },
  },
  {
    id: 5,
    name: "Watcher Knights",
    area: "Watcher's Spire",
    charms: ["Quick Slash", "Mark of Pride", "Stalwart Shell"],
    nail: { level: 3, art: "Cyclone Slash" },
  },
  {
    id: 6,
    name: "Dung Defender",
    area: "Royal Waterways",
    charms: ["Quick Slash", "Fragile Strength"],
    nail: { level: 2, art: "Great Slash" },
  },
  {
    id: 7,
    name: "Nosk",
    area: "Deepnest",
    charms: ["Quick Slash", "Fragile Strength", "Quick Focus"],
    nail: { level: 3, art: "Dash Slash" },
  },
  {
    id: 8,
    name: "Broken Vessel",
    area: "Ancient Basin",
    charms: ["Quick Slash", "Fragile Strength", "Stalwart Shell"],
    nail: { level: 3, art: "Cyclone Slash" },
  },
  {
    id: 9,
    name: "The Hollow Knight",
    area: "Temple of the Black Egg",
    charms: ["Quick Slash", "Fragile Strength", "Quick Focus"],
    nail: { level: 4, art: "Great Slash" },
  },
  {
    id: 10,
    name: "Radiance",
    area: "Dream Realm",
    charms: ["Shaman Stone", "Fragile Strength", "Quick Focus", "Grubsong"],
    nail: { level: 4, art: "Great Slash" },
  },
];

export default function BossBuild() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bb-layout">
      {/* Topbar */}
      <div className="bb-topbar">
        <button className="bb-back" onClick={() => navigate("/")}>
          ← Home
        </button>
        <span className="bb-title">Boss build</span>
      </div>

      <div className="bb-body">
        {/* Boss list */}
        <aside className="bb-list">
          {BOSSES.map((boss) => (
            <div
              key={boss.id}
              className={`bb-entry ${selected?.id === boss.id ? "sel" : ""}`}
              onClick={() => setSelected(boss)}
            >
              <span className="bb-entry-name">{boss.name}</span>
              <span className="bb-entry-area">{boss.area}</span>
            </div>
          ))}
        </aside>

        {/* Panels */}
        <div className="bb-panels">
          {selected ? (
            <>
              {/* Charms panel */}
              <div className="bb-panel bb-panel-top">
                <div className="bb-panel-label">Recommended charms</div>
                <div className="bb-charms">
                  {selected.charms.map((charm) => (
                    <span key={charm} className="bb-charm-pill">
                      {charm}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nail panel */}
              <div className="bb-panel bb-panel-bot">
                <div className="bb-panel-label">Nail & nail art</div>
                <div className="bb-nail-row">
                  <span className="bb-nail-key">Nail level</span>
                  <div className="bb-nail-bars">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className={`bb-bar ${n <= selected.nail.level ? "filled" : ""}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="bb-nail-row">
                  <span className="bb-nail-key">Nail art</span>
                  <span className="bb-tag">{selected.nail.art}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="bb-empty">Select a boss to see the recommended build</div>
          )}
        </div>
      </div>
    </div>
  );
}