import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompletionTracker.css";

const DATA = {
  Bosses: {
    total: 47,
    items: [
      { id: "b1", name: "False Knight", location: "Forgotten Crossroads" },
      { id: "b2", name: "Hornet", location: "Greenpath" },
      { id: "b3", name: "Mantis Lords", location: "Fungal Wastes" },
      { id: "b4", name: "Soul Master", location: "City of Tears" },
      { id: "b5", name: "Watcher Knights", location: "Watcher's Spire" },
      { id: "b6", name: "Dung Defender", location: "Royal Waterways" },
      { id: "b7", name: "Broken Vessel", location: "Ancient Basin" },
      { id: "b8", name: "The Hollow Knight", location: "Temple of the Black Egg" },
      { id: "b9", name: "Radiance", location: "Dream Realm" },
    ],
  },
  Charms: {
    total: 45,
    items: [
      { id: "c1", name: "Wayward Compass", location: "Iselda's shop" },
      { id: "c2", name: "Gathering Swarm", location: "Iselda's shop" },
      { id: "c3", name: "Stalwart Shell", location: "Iselda's shop" },
      { id: "c4", name: "Soul Catcher", location: "Ancestral Mound" },
      { id: "c5", name: "Shaman Stone", location: "Ancestral Mound" },
      { id: "c6", name: "Quick Slash", location: "Soul Sanctum" },
      { id: "c7", name: "Mark of Pride", location: "Mantis Village" },
    ],
  },
  Grubs: {
    total: 46,
    viewAll: true,
    items: [
      { id: "g1", name: "Grub #1", location: "Forgotten Crossroads" },
      { id: "g2", name: "Grub #2", location: "Forgotten Crossroads" },
      { id: "g3", name: "Grub #3", location: "Greenpath" },
      { id: "g4", name: "Grub #4", location: "Fungal Wastes" },
      { id: "g5", name: "Grub #5", location: "City of Tears" },
    ],
  },
  Equipment: {
    total: 12,
    items: [
      { id: "e1", name: "Mothwing Cloak", location: "Greenpath" },
      { id: "e2", name: "Mantis Claw", location: "Mantis Village" },
      { id: "e3", name: "Crystal Heart", location: "Crystal Peak" },
      { id: "e4", name: "Monarch Wings", location: "Ancient Basin" },
      { id: "e5", name: "Shade Cloak", location: "The Abyss" },
    ],
  },
};

export default function CompletionTracker() {
  const navigate = useNavigate();
  const [open, setOpen] = useState({});
  const [checked, setChecked] = useState({});

  function toggleSection(cat) {
    setOpen((prev) => ({ ...prev, [cat]: !prev[cat] }));
  }

  function toggleItem(id) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function getDone(items) {
    return items.filter((it) => checked[it.id]).length;
  }

  return (
    <div className="ct-layout">
      <div className="ct-topbar">
        <button className="ct-back" onClick={() => navigate("/")}>← Home</button>
        <span className="ct-title">Completion tracker</span>
      </div>

      <div className="ct-body">
        {Object.entries(DATA).map(([cat, data]) => {
          const done = getDone(data.items);
          const pct = Math.round((done / data.total) * 100);
          const isOpen = open[cat];

          return (
            <div key={cat} className="ct-section">
              <div className="ct-header" onClick={() => toggleSection(cat)}>
                <div className="ct-header-left">
                  <span className="ct-cat-name">{cat}</span>
                  <span className="ct-cat-count">{done} / {data.total}</span>
                </div>
                <div className="ct-progress-wrap">
                  <div className="ct-progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="ct-pct">{pct}%</span>
                <span className={`ct-chevron ${isOpen ? "open" : ""}`}>›</span>
              </div>

              {isOpen && (
                <div className="ct-items">
                  {data.items.map((item) => (
                    <div
                      key={item.id}
                      className={`ct-item ${checked[item.id] ? "done" : ""}`}
                      onClick={() => toggleItem(item.id)}
                    >
                      <div className="ct-item-info">
                        <span className="ct-item-name">{item.name}</span>
                        <span className="ct-item-loc">{item.location}</span>
                      </div>
                      <div className={`ct-check ${checked[item.id] ? "done" : ""}`}>
                        {checked[item.id] && (
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M1 4.5L3.5 7L8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}

                  {data.total > data.items.length && (
                    <div className="ct-more">
                      + {data.total - data.items.length} more items
                    </div>
                  )}

                  {data.viewAll && (
                    <div className="ct-view-all" onClick={() => navigate("/grubs")}>
                      View all grubs →
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}