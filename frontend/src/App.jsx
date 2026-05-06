import { useState } from "react";
import "./App.css";
import ChecklistItem from "./components/ChecklistItem";

const ALL_ITEMS = [
  { id: 1, name: "Rescued Grub #1", category: "Grubs",   notes: "Forgotten Crossroads" },
  { id: 2, name: "Rescued Grub #2", category: "Grubs",   notes: "Greenpath" },
  { id: 3, name: "Shaman Stone",    category: "Charms",  notes: "Ancestral Mound" },
  { id: 4, name: "Wayward Compass", category: "Charms",  notes: "Iselda's shop" },
  { id: 5, name: "Hornet",          category: "Bosses",  notes: "Greenpath" },
  { id: 6, name: "False Knight",    category: "Bosses",  notes: "Forgotten Crossroads" },
  { id: 7, name: "Pale Ore #1",     category: "Secrets", notes: "Ancient Basin" },
];

const CATEGORIES = ["All", "Grubs", "Charms", "Bosses", "Secrets"];

const CAT_COLORS = {
  Grubs:   "#5eead4",
  Charms:  "#a78bfa",
  Bosses:  "#f87171",
  Secrets: "#fbbf24",
};

export default function App() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? ALL_ITEMS : ALL_ITEMS.filter(i => i.category === active);
  const total = ALL_ITEMS.length;

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1>Hollow Knight Tracker</h1>
          <p>{total} items total</p>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-label">Categories</div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`nav-item ${active === cat ? "active" : ""}`}
              style={{ "--dot-color": CAT_COLORS[cat] || "#3f3f46" }}
              onClick={() => setActive(cat)}
            >
              <span>{cat}</span>
              <span className="nav-dot" />
            </button>
          ))}
        </nav>
      </aside>

      <main className="main">
        <div className="topbar">
          <div>
            <div className="topbar-title">{active === "All" ? "All Items" : active}</div>
            <div className="topbar-sub">{filtered.length} items</div>
          </div>
          <div className="progress-pill">0 / {total} completed</div>
        </div>
        <div className="content">
          <div className="checklist">
            {filtered.map((item) => (
              <ChecklistItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}