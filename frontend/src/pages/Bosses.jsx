import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bosses.css";

const BOSSES = [
  { id: 1, name: "False Knight", area: "Forgotten Crossroads", difficulty: "Easy", dreamBoss: true, notes: "First major boss, good for learning the game." },
  { id: 2, name: "Hornet", area: "Greenpath", difficulty: "Medium", dreamBoss: false, notes: "Fast and aggressive. Learn her attack patterns." },
  { id: 3, name: "Mantis Lords", area: "Fungal Wastes", difficulty: "Medium", dreamBoss: false, notes: "Three phases. Respect their range." },
  { id: 4, name: "Soul Master", area: "City of Tears", difficulty: "Medium", dreamBoss: true, notes: "Spell-heavy fight. Stay aggressive." },
  { id: 5, name: "Watcher Knights", area: "Watcher's Spire", difficulty: "Hard", dreamBoss: false, notes: "Multiple enemies. Prioritise one at a time." },
  { id: 6, name: "Dung Defender", area: "Royal Waterways", difficulty: "Easy", dreamBoss: true, notes: "Slow and predictable. Great for farming." },
  { id: 7, name: "Nosk", area: "Deepnest", difficulty: "Medium", dreamBoss: false, notes: "Shape-shifter. Don't get overwhelmed." },
  { id: 8, name: "Broken Vessel", area: "Ancient Basin", difficulty: "Medium", dreamBoss: true, notes: "Watch for the infected balloon explosions." },
  { id: 9, name: "Uumuu", area: "Teacher's Archives", difficulty: "Easy", dreamBoss: false, notes: "Requires Quirrel's help. Focus the tendrils." },
  { id: 10, name: "Hornet Sentinel", area: "Kingdom's Edge", difficulty: "Hard", dreamBoss: false, notes: "Faster than the first encounter." },
  { id: 11, name: "The Hollow Knight", area: "Temple of the Black Egg", difficulty: "Hard", dreamBoss: false, notes: "Multi-phase. Save soul for heals." },
  { id: 12, name: "Radiance", area: "Dream Realm", difficulty: "Very Hard", dreamBoss: false, notes: "True final boss. Patience is key." },
];

const DIFFICULTY_STYLE = {
  "Easy": "#5eead4",
  "Medium": "#fbbf24",
  "Hard": "#f87171",
  "Very Hard": "#c084fc",
};

export default function Bosses() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="bs-layout">
      <div className="bs-topbar">
        <button className="bs-back" onClick={() => selected ? setSelected(null) : navigate("/completion")}>
          ← {selected ? "Bosses" : "Completion tracker"}
        </button>
        <span className="bs-title">{selected ? selected.name : "Bosses"}</span>
      </div>

      <div className="bs-body">
        <div className={`bs-grid ${selected ? "hidden" : ""}`}>
          {BOSSES.map((boss) => (
            <div key={boss.id} className="bs-card" onClick={() => setSelected(boss)}>
              <div className="bs-art">
                <span className="bs-art-placeholder">⚔</span>
              </div>
              <span className="bs-name">{boss.name}</span>
              <span className="bs-area">{boss.area}</span>
              <span className="bs-diff" style={{ color: DIFFICULTY_STYLE[boss.difficulty] }}>
                {boss.difficulty}
              </span>
            </div>
          ))}
        </div>

        {selected && (
          <div className="bs-expand">
            <div className="bs-map-placeholder">
              <span>Map :3</span>
            </div>
            <div className="bs-expand-fields">
              <div className="bs-field">
                <label>Area</label>
                <span>{selected.area}</span>
              </div>
              <div className="bs-field">
                <label>Difficulty</label>
                <span style={{ color: DIFFICULTY_STYLE[selected.difficulty] }}>{selected.difficulty}</span>
              </div>
              <div className="bs-field">
                <label>Dream boss</label>
                <span>{selected.dreamBoss ? "Yes" : "No"}</span>
              </div>
              <div className="bs-field bs-field-full">
                <label>Notes</label>
                <span>{selected.notes}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}