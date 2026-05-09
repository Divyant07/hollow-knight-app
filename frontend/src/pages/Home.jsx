import { useNavigate } from "react-router-dom";
import "./Home.css";

const TILES = [
  {
    path: "/boss-build",
    icon: "⚔",
    title: "Boss build",
    sub: "Recommended loadouts per boss",
  },
  {
    path: "/completion",
    icon: "✓",
    title: "Completion tracker",
    sub: "Bosses, charms, grubs & equipment",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-layout">
      <div className="home-header">
        <h1>Hollow Knight tracker</h1>
        <p>Select a section to get started</p>
      </div>
      <div className="home-tiles">
        {TILES.map((tile) => (
          <div
            key={tile.path}
            className="home-tile"
            onClick={() => navigate(tile.path)}
          >
            <span className="tile-icon">{tile.icon}</span>
            <span className="tile-title">{tile.title}</span>
            <span className="tile-sub">{tile.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}